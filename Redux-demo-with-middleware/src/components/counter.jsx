import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Data} from "../index"

function mapStateToProps(initialState) {
    return {
        counter: initialState.counter,
        input: initialState.input
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch({ type: "INCREMENT" }),
        decrement: () => dispatch({ type: "DECREMENT" }),
        dataSubmit: (data) => dispatch(Data(data))

    }
}


class Counter extends Component {
    constructor() {
        super()
        this.state = {
            input: ""
        }
    }

    changeHandler = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    submit = () => {
        let data = this.state.input
        this.props.dataSubmit(data)
    }

    render() {
        console.log(this.props)
        return (
            <div> {this.props.counter ? this.props.counter : null}
                {this.props.input.length ? this.props.input.map((val, i) => {
                    return <p key={i}>{val}</p>
                }) : null}
                <br />
                <button onClick={this.props.increment}>Increment Me</button>
                <button onClick={this.props.decrement}>Decrement Me</button>
                <input type="text" name="input" onChange={this.changeHandler} value={this.state.value} />
                <button onClick={this.submit}>submit</button>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);