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
        console.log(res.allUsers, "inside action");
      });
  };
}
