import React from 'react'
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  //Load the options data from the local Storage.
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => {
          return {
            options: options
          }
        });
      }

    } catch (e) {
      //Do nothing at all.
    }

  }


  ///Save the options data to the localStorage.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options); // convert the options object into a string
      localStorage.setItem('options', json); // store it to the local storage using setItem with key options.
    }
  }

  //handleClosing the modal
  handleClosingModal = () => {
    this.setState(() => {
      return {
        selectedOption: undefined
      }
    })
  }

  //handle the delete all options.
  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick = () => {
    let random = this.state.options[Math.floor(Math.random() * this.state.options.length)];
    this.setState(() => {
      return {
        selectedOption: random
      };
    });
  }

  handleAddOption = (option) => {

    if (!option) {
      return 'Enter valid value to add option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This Option already Exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }

  render() {
    const title = "Indecision App";
    const subTitle = "Put your life in the hands of React"


    return (
      <div>
        <Header title={title} subtitle={subTitle} />
        <div className = "container">
          <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
          <div className = "widget">
          <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
          <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal selectedOption={this.state.selectedOption}
          handleClosingModal={this.handleClosingModal}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}




