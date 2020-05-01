export function getAllProducts() {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/admin/all", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["login-token"]}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.products, "inside action");
        dispatch({ type: "ADD_PRODUCTS", payload: res.products });
      });
  };
}

export function addProduct(productDetails) {
  console.log(productDetails, "inside action of oroduct");
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/admin/add", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["login-token"]}`,
      },
      body: JSON.stringify({
        items: productDetails,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch({ type: "ADD", payload: res.items[0] });
      });
  };
}

export function deleteProduct(product) {
  // console.log(product._id);
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/admin/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["login-token"]}`,
      },
      body: JSON.stringify({
        item: {
          id: product._id,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch({ type: "DELETE", payload: res.product });
      });
  };
}
