import React, { Component } from 'react';

class Recommendation extends Component {
    render(){
        return(
            <div className="recommendations-container">
                {this.props.display.map((result) => {
                    return <p className="recommendations" key={result.name}>{result.name}</p>
                })}
            </div>
        )
    }
}

export default Recommendation;