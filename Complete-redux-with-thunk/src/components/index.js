import React, { Component } from 'react';
import { connect } from "react-redux";
import { authed } from "./../Store/action"

class NewFile extends Component {
  constructor() {
    super()
    this.state = {
      input: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  submit = () => {
    let data = this.state.input
    this.props.authed(data)
  }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submit}>Submit</button>
        <p>{this.props.data}</p>
      </div>
    );
  }
}


function mapstateToProp(state) {
  // console.log(state.authed)
  return ({
    data: state.authed
  })
}

function mapDispatchtoProp(dispatch) {
  return ({
    authed: (data) => { dispatch(authed(data)) }
  })
}


export default connect(mapstateToProp, mapDispatchtoProp)(NewFile);
