import React, { Component } from 'react';

    <div>
    <form action="">
        <label className="visuallyhidden" htmlFor="strainType">Select your type:</label>
        <select onChange={this.handleChange} name="race" value={this.state.race}>
            <option value="">Select a type</option>
            <option value="indica">Indica</option>
            <option value="sativa">Sativa</option>
            <option value="hybrid">Hybrid</option>
        </select>
    </form>

    <form action="">
        <label htmlFor="effectType" className="visuallyhidden">What effect are you looking for:</label>
        <select onChange={this.handleChange} name="effect" value={this.state.effect}>
            <option value="">Select an effect</option>
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

    export default Form;