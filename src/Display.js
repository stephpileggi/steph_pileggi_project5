import React, { Component } from 'react';

class Display extends Component {
    render() {


        return(

            <div className = "display" >
                <p>{this.props.label}</p>
                <p>{this.props.counter}</p>
            </div>
        )
    }
}

export default Display;