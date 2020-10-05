import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import userService from "../../utils/userService";
import tokenService from "../../utils/tokenService";
import Navbar from "./../../components/Navbar/Navbar";
import Loginpage from "./../Loginpage/Loginpage";
import SignupPage from "./../SignupPage/Signuppage";
import HomePage from "./../HomePage/HomePage";
import MainPage from "./../MainPage/MainPage";
import IncidentPage from "./../IncidentPage/IncidentPage";
import BlogPage from "./../Blog/BlogPage";
import ContactUsPage from "./../ContactUs/ContactUsPage";
import AboutPage from "./../About/AboutPage";
import DestinationPage from "./../Destination/DestinationPage";
class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  async componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar user={this.state.user} handleLogout={this.handleLogout} />

        {/* <header className="header-footer">
          CRISS CROSS &nbsp;&nbsp;&nbsp; BLOG
        </header> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            )}
          />

          <Route
            exact
            path="/blog"
            render={({ history }) => (
              <BlogPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={({ history }) => (
              <ContactUsPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/about"
            render={({ history }) => (
              <AboutPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/destination"
            render={({ history }) => (
              <DestinationPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <Loginpage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />

          <Route
            exact
            path="/main"
            render={({ history }) => <MainPage history={history} />}
          />

          <Route
            exact
            path="/incidence"
            render={({ history }) => (
              <IncidentPage user={this.state.user} history={history} />
            )}
          />
        </Switch>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
