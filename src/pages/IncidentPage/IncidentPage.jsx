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
        <p>
          I often refer to myself as the unluckiest traveler in the world. Over
          the past four years, I’ve been scammed, robbed and sexually assaulted,
          attacked by monkeys and been caught up in a tsunami. I’ve had my
          brakes fail as I rode down a mountain on a scooter, sat next to a dead
          woman, and fell in a rice paddy. I had a boat start to sink with me on
          board and experienced a very unhappy ending in Thailand. But I’m still
          travelling. I want to show you that travel isn’t always rainbows and
          sunsets and beaches and wonderful experiences. It can be challenging
          and stressful and bad things can happen. These are some of my biggest
          and best incidents:
        </p>

        <Comment user={this.props.user} />
      </div>
    );
  }
}

export default IncidentPage;
