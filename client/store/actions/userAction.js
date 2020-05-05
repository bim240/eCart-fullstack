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
        props.history.push("/login");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
}

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
          console.log("wrong request");
          props.history.push("/");
        }
      })
      .catch((err) => console.log(err));
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
      .catch((err) => console.log(err));
  };
}
