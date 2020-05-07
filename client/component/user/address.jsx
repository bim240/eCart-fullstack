import React from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

import {
  addAddress,
  getAllAddress,
  deleteAddress,
} from "../../store/actions/user/addressAction";

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeKey: false,
      name: "",
      sonOf: "",
      mobNumber: "",
      address1: "",
      address2: "",
      area: "",
      district: "",
      state: "",
      pinCode: "",
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let address = this.state;
    console.log({ address });
    this.props.dispatch(addAddress(this.props, address));
    this.setState({ changeKey: false });
  };
  handleDeleteAddress = (id) => {
    console.log(id, "delete item id");
    this.props.dispatch(deleteAddress(id));
  };
  componentDidMount() {
    this.props.dispatch(getAllAddress());
  }

  render() {
    return (
      <>
        <div className="container mx-1 my-3 p2">
          <h4 className="font-weight-bold"> Address</h4>
          {this.state.changeKey ? (
            <form className="my-3">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={(e) => this.handleInput(e)}
                    className="form-control"
                    id="name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="sonof">S/O, C/O</label>
                  <input
                    type="text"
                    name="sonOf"
                    value={this.state.sonOf}
                    onChange={(e) => this.handleInput(e)}
                    className="form-control"
                    id="sonof"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="number"
                    name="mobNumber"
                    value={this.state.mobNumber}
                    onChange={(e) => this.handleInput(e)}
                    className="form-control"
                    id="mobile"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  name="address1"
                  value={this.state.address1}
                  onChange={(e) => this.handleInput(e)}
                  placeholder="1234 Main St"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input
                  type="text"
                  className="form-control"
                  name="address2"
                  value={this.state.address2}
                  onChange={(e) => this.handleInput(e)}
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input
                    type="text"
                    name="district"
                    value={this.state.district}
                    onChange={(e) => this.handleInput(e)}
                    className="form-control"
                    id="inputCity"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">State</label>
                  <select
                    id="inputState"
                    name="state"
                    value={this.state.state}
                    onChange={(e) => this.handleInput(e)}
                    className="form-control"
                  >
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputZip">Zip</label>
                  <input
                    type="text"
                    name="pinCode"
                    value={this.state.pinCode}
                    onChange={(e) => this.handleInput(e)}
                    className="form-control"
                    id="inputZip"
                  />
                </div>
              </div>

              <button
                onClick={(e) => this.handleSubmit(e)}
                type="primary"
                className="btn btn-primary"
              >
                Submit
              </button>
              <button
                onClick={(e) => this.setState({ changeKey: false })}
                type="primary"
                className="btn btn-danger m-2"
              >
                Close
              </button>
            </form>
          ) : (
            <div className="row row-cols-1 row-cols-md-3">
              {this.props.addresses
                ? this.props.addresses.map((address) => {
                    return (
                      <div className="col mb-4" key={uuid()}>
                        <div className="card" style={{ width: "13rem" }}>
                          <div className="card-body">
                            <h5 className="card-title">
                              {address.address.name}
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                              {address.address.sonOf}
                            </h6>
                            <h6>{address.address.mobNumber}</h6>
                            <h6>{address.address.district}</h6>
                            <h6>{address.address.state}</h6>
                            <h6>{address.address.pinCode}</h6>
                            <a href="#" className="card-link ">
                              <small>Edit</small>
                            </a>
                            <a
                              href="#"
                              onClick={() =>
                                this.handleDeleteAddress(address._id)
                              }
                              className="card-link"
                            >
                              <small>Delete</small>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          )}
          {this.state.changeKey ? (
            ""
          ) : (
            <button
              onClick={() => {
                this.setState({ changeKey: true });
              }}
              className="btn btn-primary m-2"
            >
              {" "}
              Add another address
            </button>
          )}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.Addresses.addresses, "under map state to props");
  return {
    addresses: state.Addresses.addresses,
  };
}
export default connect(mapStateToProps)(Address);
