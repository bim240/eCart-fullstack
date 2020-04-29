import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleUserSignup = (e) => {
    // e.preventDefault();
    fetch("http://localhost:3000/api/v1/admin/user/login", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        user: {
          email: " bimlendu.240@gmail.com",
          password: "bim240",
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.props.dispatch({ type: "LOGIN", payload: res });
        console.log(this.props.user);
      });
  };
  render() {
    return (
      <section className="bg_signup">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Register</h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="inputUsername"
                        className="form-control "
                        placeholder="User Name"
                        required
                        autoFocus
                      />
                      <label htmlFor="inputUsername">User Name</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required
                      />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control "
                        placeholder="Password"
                        required
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>

                    <button
                      onClick={(e) => this.handleUserSignup(e)}
                      className="btn btn-lg btn-primary btn-block text-uppercase my-4"
                      // type="button"
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

export default Signup;
