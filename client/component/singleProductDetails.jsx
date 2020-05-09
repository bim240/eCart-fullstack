import React from "react";
import { connect } from "react-redux";
import { getAllProduct } from "../store/actions/allProductAction";
import { AddItemToCart } from "../store/actions/user/cartActions";

const SingleProductDetails = (props) => {
  if (!props.allProduct) {
    // console.log("inside fetch");
    props.dispatch(getAllProduct());
  }
  const handleAddItem = (id) => {
    props.dispatch(AddItemToCart(id));
    alert("Added to cart");
  };
  let product = findProductById(props.match.params.id, props);
  // console.log(product);
  return (
    <>
      {product ? (
        <div className="container mt-4">
          <div className="card">
            <div className="row">
              <aside className="col-sm-5 border-right">
                <article className="gallery-wrap">
                  <div className="img-big-wrap">
                    <div>
                      {" "}
                      <a href="#">
                        <img className="img_responsive" src={product.image} />
                      </a>
                    </div>
                  </div>
                  <div className="img-small-wrap">
                    <div className="item-gallery">
                      {" "}
                      <img src="https://s9.postimg.org/tupxkvfj3/image.jpg" />{" "}
                    </div>
                    <div className="item-gallery">
                      {" "}
                      <img src="https://s9.postimg.org/tupxkvfj3/image.jpg" />{" "}
                    </div>
                    <div className="item-gallery">
                      {" "}
                      <img src="https://s9.postimg.org/tupxkvfj3/image.jpg" />{" "}
                    </div>
                    <div className="item-gallery">
                      {" "}
                      <img src="https://s9.postimg.org/tupxkvfj3/image.jpg" />{" "}
                    </div>
                  </div>
                </article>
              </aside>
              <aside className="col-sm-7">
                <article className="card-body p-5">
                  <h3 className="title mb-3">{product.name}</h3>

                  <p className="price-detail-wrap">
                    <span className="price h3 ">
                      <span className="currency">
                        IND: <i class="fas fa-rupee-sign"> </i>
                      </span>
                      <span className="num font-weight-bold">{` ${product.price}`}</span>
                    </span>
                  </p>
                  <dl className="item-property">
                    <dt>Description</dt>
                    <dd>
                      <p>
                        A product description is the marketing copy that
                        explains what a product is and why it's worth
                        purchasing. The purpose of a product description is to
                        supply customers with important information about the
                        features and benefits of the product so they're
                        compelled to buy.
                      </p>
                    </dd>
                  </dl>
                  <dl className="param param-feature">
                    <dt>Model#</dt>
                    <dd>12345611</dd>
                  </dl>
                  <dl className="param param-feature">
                    <dt>Color</dt>
                    <dd>Black and white</dd>
                  </dl>
                  <dl className="param param-feature">
                    <dt>Delivery</dt>
                    <dd>India</dd>
                  </dl>

                  <hr />
                  <div className="row">
                    <div className="col-sm-5">
                      <dl className="param param-inline">
                        <dt>Quantity: </dt>
                        <dd>
                          <select
                            className="form-control form-control-sm"
                            style={{ width: "70px" }}
                          >
                            <option> 1 </option>
                            <option> 2 </option>
                            <option> 3 </option>
                          </select>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-sm-7">
                      <dl className="param param-inline">
                        <dt>Size: </dt>
                        <dd>
                          <label className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="option2"
                            />
                            <span className="form-check-label">SM</span>
                          </label>
                          <label className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="option2"
                            />
                            <span className="form-check-label">MD</span>
                          </label>
                          <label className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="option2"
                            />
                            <span className="form-check-label">XXL</span>
                          </label>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <hr />
                  <a
                    href="#"
                    className="btn btn-lg btn-primary text-uppercase m-3"
                  >
                    {" "}
                    Buy now{" "}
                  </a>
                  <a
                    onClick={() => handleAddItem(product._id)}
                    className="btn btn-lg btn-outline-primary text-uppercase"
                  >
                    {" "}
                    <i className="fas fa-shopping-cart"></i> Add to cart{" "}
                  </a>
                </article>
              </aside>
            </div>
          </div>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
};

function findProductById(id, props) {
  // console.log(id, props, "inside filter");
  if (props.allProduct) {
    return props.allProduct.filter((product) => product._id === id)[0];
  }
}
function mapStateToProps(state) {
  // console.log(props);
  return {
    allProduct: state.AllProduct ? state.AllProduct.allProduct : "",
  };
}
export default connect(mapStateToProps)(SingleProductDetails);
