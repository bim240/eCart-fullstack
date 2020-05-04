export function getAllProduct() {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/items", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("inside actions");
        dispatch({ type: "ALL_PRODUCT", payload: res.products });
      });
  };
}
