export function getAllUserInfo() {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/admin/allUsers", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["login-token"]}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "ALL_USER", payload: res.allUsers });
        // console.log(res.allUsers, "inside action");
      });
  };
}

export function blockUnblockUser(user) {
  return function (dispatch) {
    if (user.isBlocked) {
      fetch("http://localhost:3000/api/v1/admin/allUsers/unBlock", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          authorization: `${localStorage["login-token"]}`,
        },
        body: JSON.stringify({
          user: {
            id: user.id,
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: "UPDATE_BLOCK", payload: res.updatedUser });
        });
    } else {
      fetch("http://localhost:3000/api/v1/admin/allUsers/block", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          authorization: `${localStorage["login-token"]}`,
        },
        body: JSON.stringify({
          user: {
            id: user.id,
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: "UPDATE_BLOCK", payload: res.updatedUser });
        });
    }
    console.log(user.id);
  };
}
