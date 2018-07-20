import React from 'react'
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';


export default class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: props.options
      };
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
  
    //handle the delete all options.
    handleDeleteOptions() {
      this.setState(() => {
        return {
          options: []
        };
      });
    }
  
    handlePick() {
      let random = this.state.options[Math.floor(Math.random() * this.state.options.length)];
      alert(random);
    }
  
    handleAddOption(option) {
  
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
  
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
          return optionToRemove !== option;
        })
      }));
    }
  
    render() {
      const title = "Indecision App";
      const subTitle = "put your life in the hands of react";
  
  
      return (
        <div>
          <Header title={title} subtitle={subTitle} />
          <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
          <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
      )
    }
  }
  
  IndecisionApp.defaultProps = {
    options: []
  }
  
  
 
  
  