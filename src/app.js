class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision App";
    const subTitle = "put your life in the hands of react";
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];


    return (
      <div>
        <Header title={title} subtitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component { //React enforces the component should have capital letter in the name
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('HandlePick')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick} >What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);//fixing the binding issue of the removeAll method.
  }

  removeAll() {
    alert('Remove All');
  }

  render() {
    return (
      <div>

        <button onClick={this.removeAll}>Remove All</button>
        {
          this.props.options.map((option) =>
            <Option key={option} optionText={option} />
          )

        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.optionText}</p>
      </div>
    )
  }
}


class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));