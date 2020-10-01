import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import signup from "../../utils/userService";


class CommentCard extends Component {
  render() {
    return (
      <div>
        <h4 style={{ margin: 0, padding: 0 }}>{this.props.data.user.name}</h4>
        <span style={{ fontSize: 12, margin: 0, padding: 0 }}>
          {this.props.data.date}
        </span>
        <p style={{ margin: 0, padding: 0 }}>{this.props.data.text}</p>
        <hr></hr>
      </div>
    );
  }
}

export default CommentCard;
