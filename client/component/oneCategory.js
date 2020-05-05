import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { getAllProduct } from "../store/actions/allProductAction";

const OneCategory = (props) => {
  if (!props.allProduct) {
    // console.log("inside fetch");
    props.dispatch(getAllProduct());
  }
  let products = findProductByCategory(props.match.params.category, props);
  console.log(products);
  return (
    <>
      {products ? (
        <div className="container mt-5">
          <div class="row row-cols-1  row-cols-sm-2  row-cols-md-4 row-cols-lg-4">
            {products.map((product) => {
              return (
                <div class="col mb-4" key={uuid()}>
                  <div class="card h-100">
                    <img
                      src={product.image}
                      class="card-img-top"
                      alt="product image"
                    />
                    <div class="card-body">
                      <div>
                        <Link to={`/product/${product._id}`}>
                          <span className="text-dark font-weight-bold">
                            {product.name}
                          </span>
                        </Link>
                        <small className="font-weight-bold">
                          <div>Sub Category: {product.subCatogery}</div>
                          <div>Brand: {product.brand}</div>
                          price : <i class="fas fa-rupee-sign"></i>{" "}
                          {product.price}
                        </small>{" "}
                      </div>
                    </div>
                    <button className="btn btn-primary font-weight-bold">
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
};

function findProductByCategory(category, props) {
  // console.log(category, props, "inside filter");
  // await props.dispatch(getAllProduct());
  if (props.allProduct) {
    return props.allProduct.filter(
      (product) => product.category === category.toLowerCase()
    );
  }
}
function mapStateToProps(state) {
  return {
    allProduct: state.AllProduct ? state.AllProduct.allProduct : "",
  };
}
export default connect(mapStateToProps)(OneCategory);
