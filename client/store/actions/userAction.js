export function handleUserSignup(state, props) {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        user: {
          username: state.username,
          email: state.email,
          password: state.password,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.user) {
          props.history.push("/login");
          // console.log(res);
        } else {
          dispatch({ type: "ADD_ERROR", error: res.err.body });
          // console.log(res.err.body);
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ADD_ERROR", error: res.err.body });
      });
  };
}
// login
export function handleUserLogin(state, props) {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        user: {
          email: state.email,
          password: state.password,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.user) {
          localStorage.setItem("login-token", res.user.token);
          dispatch({ type: "LOGIN", payload: res.user });

          props.history.push("/");
        } else {
          dispatch({ type: "ADD_ERROR", error: res.err });
          // console.log("wrong request");
        }
      })
      .catch((err) => {
        // console.log(err);
        dispatch({ type: "ADD_ERROR", error: res.err });
      });
  };
}

export function getUserInfo(props) {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/user", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["login-token"]}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.user.token);
        dispatch({ type: "LOGIN", payload: res.user });
        // console.log(this.props.user, res, "---------------");
        props.history.push("/");
      })
      .catch((err) => {
        // console.log(err);
        dispatch({ type: "ADD_ERROR", error: err.error });
      });
  };
}
