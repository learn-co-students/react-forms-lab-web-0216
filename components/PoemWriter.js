const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ''
    };

    this.poemChange = this.poemChange.bind(this);
    this.poemValidationError = this.poemValidationError.bind(this);
  }

  poemChange(event){
    this.setState({
      poem: event.target.value
    })
  }

  poemValidationError(){
    const poem = this.state.poem;
    const lines = poem.split(/\n/).map(line => { return line.trim(); });

    if(lines.length != 3 || lines[0].split(" ").length != 5 || lines[1].split(" ").length != 3 || lines[2].split(" ").length != 5){
      return <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.peom} onChange={this.poemChange}/>
        {this.poemValidationError()}
      </div>
    );
  }
}

module.exports = PoemWriter;
