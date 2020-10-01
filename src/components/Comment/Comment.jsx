import React, { Component } from "react";
import { Link } from "react-router-dom";
//import userService from "../../utils/userService";
import { postComment, getComments } from "../../utils/apiService";
import CommentCard from "./CommentCard";
import "./comment.css";

class Comment extends Component {
  state = {
    comment: "",
    commentData: [],
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
    try {
      //await userService.signup(this.state);
      //this.props.handleSignupOrLogin();

      const post = { user: this.props.user._id, text: this.state.comment };
      await postComment(post);
      this.props.history.push("/");
    } catch (err) {
      //this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !this.state.comment;
  }

  render() {
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
                Post comment
              </button>
            </div>
          </div>
        </form>
      </div>
    ) : (
      <h4>Login to leave a comment</h4>
    );

    const comments = [];
    this.state.commentData.forEach((item) =>
      comments.push(<CommentCard data={item} />)
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
