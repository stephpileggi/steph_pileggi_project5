import React, { Component } from 'react';
import Display from './Display';


class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            counterLabel: 'Times Clicked',
            isSomething: false,
        }
    }

    handleChangeAdd = () => {
        this.setState({
                counter: this.state.counter + 1
            });
    }

    handleChangeSubtract = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render(){
        return <div>
                <Display counter={this.state.counter} label={'dfjnsaifnsu'}/>
              <button onClick={this.handleChangeAdd}>Add</button>
              <button onClick={this.handleChangeSubtract}>Subtract</button>
          </div>;
    }

}



export default Counter;