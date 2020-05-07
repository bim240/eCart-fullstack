import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";
import { handleUserLogin } from "../../store/actions/user/userAction";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleInput = (e) => {
    // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleGitHubLogin = (e) => {
    e.preventDefault();
  };
  userLogin = (e) => {
    e.preventDefault();
    this.props.dispatch(handleUserLogin(this.state, this.props));
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.error !== this.props.error) {
      this.props.error ? this.props.dispatch({ type: "REMOVE_ERROR" }) : "";
    }
  }
  render() {
    return (
      <section className="bg_login">
        <div className="container">
          {this.props.error ? alert(this.props.error) : ""}

          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign In</h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input
                        onChange={(e) => this.handleInput(e)}
                        name="email"
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        value={this.state.email}
                        required
                        autoFocus
                      />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        onChange={(e) => this.handleInput(e)}
                        name="password"
                        type="password"
                        id="inputPassword"
                        className="form-control "
                        placeholder="Password"
                        value={this.state.password}
                        required
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember password
                      </label>
                    </div>
                    <button
                      onClick={(e) => this.userLogin(e)}
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="primary"
                    >
                      Sign in
                    </button>
                    <hr className="my-4" />

                    <button
                      onClick={(e) => this.handleGitHubLogin(e)}
                      className="btn btn-lg btn-dark btn-block text-uppercase"
                      type="primary"
                    >
                      <i className="fab fa-github mr-2"></i> Sign in with GitHub
                    </button>
                  </form>
                  <div className="my-2">
                    {" "}
                    Does't have an account. <Link to="/register"> Signup</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.User.UserInfo,
    error: state.Error,
  };
}

// mapStateToProps();
export default connect(mapStateToProps)(Login);
