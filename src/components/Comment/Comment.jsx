import React, { Component } from "react";
import { Link } from "react-router-dom";
//import userService from "../../utils/userService";
import { postComment, getComments, editComment } from "../../utils/apiService";
import CommentCard from "./CommentCard";
import "./comment.css";

class Comment extends Component {
  state = {
    comment: "",
    commentData: [],
    btnValue: "Post comment",
    editId: ""
  };

  //   commentData = [
  //     { user: { name: "Joshua" }, text: "The travel blog", date: "2020-10-1" },
  //     { user: { name: "Joshua" }, text: "The travel blog", date: "2020-10-1" },
  //     { user: { name: "Joshua" }, text: "The travel blog", date: "2020-10-1" },
  //   ];

  componentDidMount() {
    getComments().then((json) => {
      this.setState({ commentData: json });
    });
  }

  handleChange = (e) => {
    //this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { btnValue } = this.state;
    const {comment, editId} = this.state;

    if (btnValue == "Post comment") {
      const { _id, name } = this.props.user;
      const post = { userId: _id, name, text: comment };
      await postComment(post);
      window.location.reload();
    } else {
      editComment(editId, comment);
      window.location.reload();
    }
  };

  isFormInvalid() {
    return !this.state.comment;
  }

  handleEdit = (text, id) => {
    this.setState({ btnValue: "Edit comment", comment: text, editId: id });
  };

  render() {
    console.log(this.state.commentData, "<===data");
    const commentBox = this.props.user ? (
      <div>
        <header className="header-footer">Comment here</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={this.state.comment}
                name="comment"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button
                className="btn btn-default"
                disabled={this.isFormInvalid()}
              >
                {this.state.btnValue}
              </button>
            </div>
          </div>
        </form>
      </div>
    ) : (
      <h4>Login to leave a comment</h4>
    );

    const comments = [];
    this.state.commentData.forEach((item, i) =>
      comments.push(
        <CommentCard
          data={item}
          handleEdit={this.handleEdit}
          user={this.props.user}
          key={i}
        />
      )
    );

    return (
      <div className="card">
        {commentBox}

        {comments}
      </div>
    );
  }
}

export default Comment;
