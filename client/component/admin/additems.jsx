import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../../store/actions/admin/adminCRUDonProducts";

class Additems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      subCatogery: "",
      name: "",
      image: "",
      price: "",
      brand: "",
      stars: "",
      seller: "",
      quantity: "",
      gender: "male",
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    var formatedData = [
      {
        category: this.state.category,
        subCatogery: this.state.subCatogery,
        name: this.state.name,
        image: [this.state.image],
        price: this.state.price,
        brand: this.state.brand,
        stars: this.state.stars,
        seller: this.state.seller,
        quantity: this.state.quantity,
        varient: {
          gender: "male",
        },
      },
    ];
    this.props.dispatch(addProduct(formatedData));
    this.setState("");
    // console.log(this.state);
  };
  render() {
    return (
      <>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="name"
                className="form-control"
                id="name"
                value={this.state.name}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="category">Category</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="category"
                className="form-control"
                id="category"
                value={this.state.category}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="subcategory">Sub Category</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="subCatogery"
                className="form-control"
                id="subcategory"
                value={this.state.subCatogery}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="brand">Brand</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="brand"
                className="form-control"
                id="brand"
                value={this.state.brand}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="seller">Seller</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="seller"
                className="form-control"
                id="seller"
                value={this.state.seller}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="price">Price</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="number"
                name="price"
                className="form-control"
                id="price"
                value={this.state.price}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="quantity">Quantity</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="number"
                name="quantity"
                className="form-control"
                id="quantity"
                value={this.state.quantity}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="imageurl">Image URL</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="image"
                className="form-control"
                id="imageurl"
                value={this.state.image}
                required
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="genrder">Gender</label>
              <select
                onChange={(e) => this.handleInput(e)}
                id="genrder"
                name="gender"
                className="form-control"
                value={this.state.gender}
                required
              >
                <option selected>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="stars">Stars</label>
              <input
                onChange={(e) => this.handleInput(e)}
                type="text"
                name="stars"
                className="form-control"
                id="stars"
                value={this.state.stars}
                required
              />
            </div>
          </div>
          <div className="form-group"></div>
          <button
            onClick={(e) => this.handleSubmit(e)}
            type="primary"
            className="btn btn-primary"
          >
            Add the Product
          </button>
        </form>
      </>
    );
  }
}

export default connect()(Additems);
