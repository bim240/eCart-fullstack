// get all the address
export function getAllAddress() {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/user/address", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["login-token"]}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.address);
        dispatch({ type: "ALL_ADDRESS", payload: res.address });
      });
  };
}

// add address
export function addAddress(props, address) {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/user/address", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["login-token"]}`,
      },
      body: JSON.stringify({
        address: {
          address,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.address[0]);
        dispatch({ type: "ADD_ADDRESS", payload: res.address[0] });
        props.history.push("/user/profile");
      });
  };
}

// delete the address
export function deleteAddress(addressId) {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/user/address", {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["login-token"]}`,
      },
      body: JSON.stringify({
        address: {
          id: addressId,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.address);
        dispatch({ type: "DELETE_ADDRESS", payload: res.address });
      });
  };
}
