import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./IncidentPage.css";
import Comment from "./../../components/Comment/Comment";

class IncidentPage extends Component {
  state = {};

  render() {
    return (
      <div className="IncidentPage">
        <h1>THE INCIDENTS</h1>
        <hr></hr>
        <h2>I often refer to myself as the luckiest traveler in the world</h2>
        <p>
          I often refer to myself as the luckiest traveler in the world
          becauseOver the past couple years, I’ve avoided being scammed,
          robbed,attacked by monkeys and been caught up in a tsunami. But I’m
          still traveling. I want to show you that travel isn’t always rainbows
          and sunsets and beaches and wonderful experiences. It can be
          challenging and stressful and bad things can happen. These are some of
          my biggest and best incidents:
        </p>
        <h3>The Rio De Janeiro Robbery Attempt, April 2010</h3>
        <p>
        I was walking along Copacabana beach on the main boardwalk around 8PM.There were a lot of people on the main boardwalk, and it was well-lit. I felt quite safe there. There were a good number of  people on the beach. Anyway, a guy came up to me with a knife. He said something in Portuguese,I put my hands up and just said "OK, OK". Then his two friends ran toward me from across the beach from behind me and grabbed me, at that point they started searching me, going thru my pockets and duffel bag. At that magic moment, a police patrol car just happened to be cruising by and the officers in the car noticed that something was off with the three of us, at that point they stopped to check on the situation. Upon seeing the officers alight from their car, my would-be robbers scampered and ran into the neighborhood. That was my saving grace from getting robbed in Rio and i encouraged everybody against walking alone after dark in the city of Rio to avoid getting robbed.
        </p>
        <Comment user={this.props.user} />
      </div>
    );
  }
}

export default IncidentPage;
