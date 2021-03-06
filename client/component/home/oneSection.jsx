import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const OneSection = (props) => {
  // console.log(props.categoreis, "one section");
  return (
    <div className="mt-5 text-dark">
      {props.categories && props.allProduct
        ? props.categories.map((category) => {
            return (
              <div key={uuid()}>
                <div className="oneSection_title_show">
                  <h4 className="font-weight-bold">{category.name}</h4>
                  <Link to={`/${category.name}`}>
                    <h6 className="ml-auto font-weight-bold ">Show All</h6>
                  </Link>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                  {filterByCategory(props.allProduct, category).map(
                    (product) => {
                      return (
                        <div className="col mb-4" key={uuid()}>
                          <div
                            className="card mb-3"
                            style={{ maxWidth: "540px" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-4">
                                <img
                                  src={product.image}
                                  className="card-img"
                                  alt="..."
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body font-weight-bold">
                                  <p class="card-link ">
                                    <Link to={`/product/${product._id}`}>
                                      <span className="text-dark">
                                        {product.name}
                                      </span>
                                    </Link>
                                    <br />
                                    <small>
                                      price : <i class="fas fa-rupee-sign"></i>{" "}
                                      {product.price}
                                    </small>{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

function filterByCategory(products, filterkey = "") {
  if (products) {
    return products
      .filter((product) => product.category === filterkey.name.toLowerCase())
      .splice(0, 3);
  } else return false;
}
function mapStateToProps(state) {
  // console.log(state.AllProduct.allProduct);
  return {
    allProduct: state.AllProduct.allProduct,
  };
}
export default connect(mapStateToProps)(OneSection);
