import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        counter: state.counter,
        abc : state.input
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch({ type: "INCREMENT", }),
        decrement: () => dispatch({ type: "DECREMENT" }),
        action: (data) => dispatch({ type: "ACTION", payload: data })
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            input: "",
        }
    }


    ChangeHandler = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    submit = () => {
        let data = this.state.input
        this.props.action(data)
    }

    render() {
        console.log(this.props.abc)
        return (
            <div> {this.props.counter} <br />
            {this.props.abc ? this.props.abc.map((val, index)=>{
                return (
                    <div key={index}>{val}</div>
                )
            })
            : null
        }
                <button onClick={this.props.increment}>Increment Me</button>
                <button onClick={this.props.decrement}>Decrement Me</button>
                <input type="text" onChange={this.ChangeHandler} value={this.state.input} name="input" />
                <button onClick={this.submit}> submit </button>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);