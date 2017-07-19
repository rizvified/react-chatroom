import React, { Component } from 'react';

class Form extends Component {
  state = {
    text: ''
  }
  render() {
    return(
      <div className='form'>
        <form>
          <input
            value={this.state.text}
            placeholder="enter message"
          />
        </form>
      </div>
    );
  }
}

export default Form;
