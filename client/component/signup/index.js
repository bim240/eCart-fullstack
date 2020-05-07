import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";
import { handleUserSignup } from "../../store/actions/user/userAction";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(handleUserSignup(this.state, this.props));
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.error !== this.props.error) {
      this.props.error ? this.props.dispatch({ type: "REMOVE_ERROR" }) : "";
    }
  }

  render() {
    return (
      <section className="bg_signup">
        <div className="container">
          {this.props.error ? alert(this.props.error) : ""}
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Register</h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input
                        type="text"
                        name="username"
                        id="inputUsername"
                        className="form-control "
                        placeholder="User Name"
                        value={this.state.username}
                        onChange={(e) => this.handleInput(e)}
                        required
                        autoFocus
                      />
                      <label htmlFor="inputUsername">User Name</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="email"
                        name="email"
                        id="inputEmail"
                        className="form-control"
                        value={this.state.email}
                        placeholder="Email address"
                        onChange={(e) => this.handleInput(e)}
                        required
                      />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        name="password"
                        id="inputPassword"
                        className="form-control "
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(e) => this.handleInput(e)}
                        required
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>

                    <button
                      onClick={(e) => this.handleSubmit(e)}
                      className="btn btn-lg btn-primary btn-block text-uppercase my-4"
                      type="submit"
                    >
                      Signup
                    </button>
                  </form>
                  <div className="my-2">
                    {" "}
                    Already has an account. <Link to="/login"> Login</Link>
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
    error: state.Error,
  };
}

export default connect(mapStateToProps)(Signup);
