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
import { getUserInfo } from "../store/actions/user/userAction";
import UserProfile from "./user/userProfile";
import Cart from "./user/cart";
import { getAllCartItem } from "../store/actions/user/cartActions";
import ChooseAddress from "./user/chooseAddress";

function Auth(authProps) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={SingleProductDetails} />
      <Route exact path="/:category" component={oneCategory} />
      <Route exact path="/user/profile" component={UserProfile} />
      <Route exact path="/user/cart" component={Cart} />
      <Route exact path="/user/order/address" component={ChooseAddress} />
      {authProps.user.isAdmin ? (
        <>
          <Route exact path="/user/admin" component={AdminHome} />
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
      this.props.dispatch(getUserInfo(this.props));
    }
    this.props.dispatch(getAllCartItem());
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
