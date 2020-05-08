import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../store/actions/user/userAction";

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: "",
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let user = {};
    user.wallet =
      parseInt(this.state.wallet) + parseInt(this.props.userInfo.wallet);
    // console.log(this.state.wallet, { user });
    this.props.dispatch(updateUserInfo(this.props, user));
    this.setState({ wallet: "" });
  };
  render() {
    return (
      <>
        {" "}
        {this.props.userInfo.wallet ? (
          <> your balance is {this.props.userInfo.wallet}</>
        ) : (
          <>no balence</>
        )}
        <form className="form-inline m-3">
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="wallet" className="sr-only">
              Amount
            </label>
            <input
              name="wallet"
              onChange={(e) => this.handleInput(e)}
              value={this.state.wallet}
              type="number"
              className="form-control"
              id="wallet"
              placeholder="Amount"
            />
          </div>
          <button
            onClick={(e) => this.handleSubmit(e)}
            type="submit"
            className="btn btn-primary mb-2 btn-sm"
          >
            Add Money
          </button>
        </form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.User.UserInfo,
  };
}
export default connect(mapStateToProps)(Wallet);
