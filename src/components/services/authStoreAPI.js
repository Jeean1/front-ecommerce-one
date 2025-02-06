import axios from "axios";

export const loginAPI = async (user, password) => {
  const url = `https://ola2if92w9.execute-api.us-east-1.amazonaws.com/prod/auth/login`;
  let result;

  await axios
    .post(
      url,
      {
        username: "jhon_wick_jhon",
        password: "fw6R5q3W",
      },
      {
        withCredentials: true, // Permitir el envío y almacenamiento de cookies
      }
    )
    .then(function (response) {
      // console.log(response);
      // console.log("::: cookies");
      console.log(response); // Accede al encabezado Set-Cookie

      result = response;
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.response.data.message);
      alert(error.response.data.message);
    });

  return result;
};
