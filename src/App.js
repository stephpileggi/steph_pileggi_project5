import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; 
import Recommendation from './Recommendation';

class App extends Component {
  constructor(){
    super();
    this.state = {
      race:'',
      effect:'',
      strainsByRace: [],
      strainsByEffect: []
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

      if (name === 'effect') {
        this.setState({
          strainsByEffect: response
        })
      }
      if (name === 'race') {
        this.setState({
          strainsByRace: response
        })
      }
    });
  }

//get the name and value of the input to put in the getStrains function
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)

    this.setState({
      [name]: value,
    })
    this.getStrains(name, value);     
  }

  render() {

    let recommendations = [];
    if (this.state.strainsByRace.length > 0 && this.state.strainsByEffect.length > 0) {
      // declare these to keep the names short
      const strainsByRace = this.state.strainsByRace;
      const strainsByEffect = this.state.strainsByEffect;

      const idsOfStrainsByEffect = strainsByEffect.map(strain => { return strain.id });

      strainsByRace.forEach((strain, i) => {
        if(recommendations.length >= 6) {
          return
        }
        if (idsOfStrainsByEffect.indexOf(strain.id) !== -1 ) {
          recommendations.push(strain);
        }
      });
    }
    
    return (<div className="App">
              <div className="wrapper app-container">
                <h1 className="cannabis">Cannabis</h1>
                <h1 className="strain">Strain selector</h1>
                <img className="header-img" src={require("../src/images/joints.png")} alt="marijuana cigarettes."/>
                <div className="form-section">
                  <form action="">
                    <label className="visuallyhidden" htmlFor="strainType">Select your type:</label>
                    <select onChange={this.handleChange} name="race" value={this.state.race}>
                      <option value="">Select type</option>
                      <option value="indica">Indica</option>
                      <option value="sativa">Sativa</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </form>

                  <form action="">
                    <label htmlFor="effectType" className="visuallyhidden">What effect are you looking for:</label>
                    <select onChange={this.handleChange} name="effect" value={this.state.effect}>
                      <option value="">Select effect</option>
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
                </div>
                <Recommendation display={recommendations} />
              </div>
          </div>)
  }
}

export default App;

