import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteComment } from "../../utils/apiService";
import signup from "../../utils/userService";

class CommentCard extends Component {
  render() {
    const { name, date, _id, text } = this.props.data;
    const { handleEdit } = this.props;

    return (
      <div>
        <h4 style={{ margin: 0, padding: 0 }}>{name}</h4>
        <span style={{ fontSize: 12, margin: 0, padding: 0 }}>{date}</span>
        <div className="comment-wrap">
          <p style={{ margin: 0, padding: 0 }}>{text}</p>
          {this.props.user && this.props.user.name === name && (
            <div className="btn-wrap">
              <button onClick={() => handleEdit(text, _id)}>Edit</button>
              <button
                onClick={() => {
                  deleteComment(_id);
                  window.location.reload();
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default CommentCard;
