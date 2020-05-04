import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./header";
import Login from "./login";
import Signup from "./signup";
import Home from "./home";
import AdminHome from "./admin/adminHome";
import SingleProductDetails from "./singleProductDetails";
import "../scss/main.scss";
import oneCategory from "./oneCategory";

function Auth(authProps) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={SingleProductDetails} />
      <Route exact path="/product/:category" component={oneCategory} />
      {authProps.user.isAdmin ? (
        <>
          <Route exact path="/admin" component={AdminHome} />
        </>
      ) : (
        ""
      )}
      <Route path="*" render={() => <h1>404 Page</h1>} />
    </Switch>
  );
}
function NoAuth() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/product/:id" component={SingleProductDetails} />
      <Route exact path="/:category" component={oneCategory} />
      <Route path="*" render={() => <h1>404 Page</h1>} />
    </Switch>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // console.log(localStorage["login-token"], "toekn view");
    if (localStorage["login-token"]) {
      fetch("http://localhost:3000/api/v1/user", {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          authorization: `${localStorage["login-token"]}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res.user.token);
          this.props.dispatch({ type: "LOGIN", payload: res.user });
          // console.log(this.props.user, res, "---------------");
          this.props.history.push("/");
        })
        .catch((err) => console.log(err));
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.user ? <Auth user={this.props.user} /> : <NoAuth />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.User.UserInfo,
  };
}

export default connect(mapStateToProps)(App);
