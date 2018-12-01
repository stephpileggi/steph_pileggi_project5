import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; 
import Counter from './Counter';
import Recommendation from './Recommendation';

class App extends Component {
  constructor(){
    super();
    this.state = {
      hybridStrains:[],
      indicaStrains:[],
      sativaStrains:[],
      race:'',
      effect:'',
      recommendation: ''
    }  
  }

  getStrains = ( name, value ) => {
    const apiKey = 'KqF55UA';

    axios({
      method: "GET",
      url: `https://strainapi.evanbusse.com/${apiKey}/strains/search/${name}/${value}/`,
      dataResponse: "json",
      params: {
        apiKey: apiKey,
        format: "json"
      }
    }).then(response => {
      response = response.data;
      console.log(response);
      //set state with this response information 
      //create new key on state to store 
      ////create new key on state to store  the new info
      //filter through and look for matching names or ids
    });
  }

//get the name and value of the input to put in the getStrains function
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)

  this.setState({
      [name]:value
    }, this.getStrains(name, value))    
    
  }


  render() {
    return (<div className="App">

      <Counter />
        {/* <img src="../images/cannabis.png" alt="marijuana leaf" /> */}
        <h1>Strain Selector</h1>
        <form action="">
          <label className="visuallyhidden" htmlFor="strainType">Select your type:</label>
          <select onChange={this.handleChange} name="race" value={this.state.race}>
            <option value="">Select a type:</option>
            <option value="indica">Indica</option>
            <option value="sativa">Sativa</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </form>

        <form action="">
          <label htmlFor="effectType" className="visuallyhidden">What effect are you looking for:</label>
          <select onChange={this.handleChange} name="effect" value={this.state.effect}>
            <option value="">Select an effect:</option>
            <option value="happy">Happy</option>
            <option value="relaxed">Relaxed</option>
            <option value="creative">Creative</option>
            <option value="euphoric">Euphoric</option>
            <option value="energetic">Energetic</option>
            <option value="talkative">Talkative</option>
            <option value="uplifted">Uplifted</option>
            <option value="focused">Focused</option>
            <option value="hungry">Hungry</option>
          </select>
        </form>
        <Recommendation />
    </div>);
  }

}


export default App;

