import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleInput = (field, value) => {
    if (field === "email") {
      this.setState({ email: value });
    } else if (field === "password") {
      this.setState({ password: value });
    }
  };
  userLogin = (e) => {
    console.log(this.state.email, this.state.password);
    // const data = { email: this.state.email, password: this.state.password };
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/admin/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.props.dispatch({ type: "LOGIN", payload: res });
        console.log(this.props.user, res, "---------------");
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };
  render() {
    // console.log(this.state.email, this.state.password);
    return (
      <section className="bg_login">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign In</h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input
                        onChange={(e) =>
                          this.handleInput("email", e.target.value)
                        }
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
                        onChange={(e) =>
                          this.handleInput("password", e.target.value)
                        }
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
                    {/* <button
                      className="btn btn-lg btn-google btn-block text-uppercase"
                      type="submit"
                    >
                      <i className="fab fa-google mr-2"></i> Sign in with Google
                    </button> */}
                    <button
                      className="btn btn-lg btn-dark btn-block text-uppercase"
                      type="submit"
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
  };
}

// mapStateToProps();
export default connect(mapStateToProps)(Login);
