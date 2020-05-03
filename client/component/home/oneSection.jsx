import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const OneSection = (props) => {
  // console.log(props.categoreis, "one section");
  return (
    <div className="mt-5">
      {props.categories && props.allProduct
        ? props.categories.map((category) => {
            return (
              <div>
                <div className="oneSection_title_show">
                  <h4 className="font-weight-bold">{category.name}</h4>
                  <Link>
                    <h6 className="ml-auto font-weight-bold">Show All</h6>
                  </Link>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                  {filterByCategory(props.allProduct, category).map(
                    (product) => {
                      return (
                        <div className="col mb-4">
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
                                  <p class="card-link">
                                    {product.name}
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
  console.log(filterkey, "filterkey");
  // return [0, 1, 2];
  if (products) {
    // console.log(
    //   products.filter(
    //     (product) => product.category === filterkey.toString().toLowerCase()
    //   ),
    //   "inside filter"
    // );
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
