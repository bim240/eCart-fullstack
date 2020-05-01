export let getAllUsers = async () => {
  return await fetch("http://localhost:3000/api/v1/admin/allUsers", {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
      authorization: `${localStorage["login-token"]}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res);
};
// const getAllUsers = () => {
//   return (  );
// }

// export default getAllusers;
