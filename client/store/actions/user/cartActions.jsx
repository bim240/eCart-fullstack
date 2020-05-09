export function getAllCartItem() {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/user/cart", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["login-token"]}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.cart) {
          dispatch({ type: "ALL_CART_ITEM", payload: res.cart.product });
          // console.log(this.props.user, res, "---------------");
        } else {
          dispatch({ type: "ADD_ERROR", error: err.msg });
        }
      })
      .catch((err) => {
        console.log(err);
        // dispatch({ type: "ADD_ERROR", error: err.body });
      });
  };
}

export function AddItemToCart(id) {
  // console.log(id, "inside action of add");
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/user/cart", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["login-token"]}`,
      },
      body: JSON.stringify({
        product: {
          id,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.cart) {
          dispatch({ type: "ADD_CART_ITEM", payload: res.cart.product });
          // console.log(this.props.user, res, "---------------");
        } else {
          dispatch({ type: "ADD_ERROR", error: err.msg });
        }
      })
      .catch((err) => {
        console.log(err);
        // dispatch({ type: "ADD_ERROR", error: err.body });
      });
  };
}

export function deleteItemFromCart(id) {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/user/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["login-token"]}`,
      },
      body: JSON.stringify({
        product: {
          id,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === "product removed") {
          dispatch({ type: "DELETE_CART_ITEM", payload: id });
          // console.log(this.props.user, res, "---------------");
        } else {
          dispatch({ type: "ADD_ERROR", error: res.msg });
        }
      })
      .catch((err) => {
        console.log(err);
        // dispatch({ type: "ADD_ERROR", error: err.body });
      });
  };
}

// place order
export function placeYourOrder(orders) {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/user/order", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["login-token"]}`,
      },
      body: JSON.stringify({
        orders,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch({ type: "PLACE_ORDER" });
        alert("Order placed", "invoice sent");
      })
      .catch((err) => {
        console.log(err);
        // dispatch({ type: "ADD_ERROR", error: err.body });
      });
  };
}
