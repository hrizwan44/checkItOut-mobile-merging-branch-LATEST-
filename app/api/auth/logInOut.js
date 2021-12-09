import config from "react-native-config";
const backendServer = config.BACKEND_SERVER;
const routeBase = "v1/auth";

export const signIn = ({ email, password }) =>
  new Promise((resolve, reject) => {
    const url = `${backendServer}/${routeBase}/login`;
    const headers = { "Content-Type": "application/json" };
    var body = JSON.stringify({ email, password });
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      body,
      headers,
    };
    fetch(url, requestOptions)
      .then((response) => {
        response.json().then((res) => {
          if (response.status == 200) {
            resolve(res);
          } else {
            reject(res);
          }
        });
      })
      .catch((error) => reject(error));
  });

export const logout = (refreshToken) =>
  new Promise((resolve, reject) => {
    const url = `${backendServer}/${routeBase}/logout`;
    const headers = { "Content-Type": "application/json" };
    var body = JSON.stringify({ refreshToken });
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      body,
      headers,
    };
    fetch(url, requestOptions)
      .then((response) => {
        if (response.status == 204) {
          resolve(response.status);
        } else {
          response.json().then((res) => reject(res));
        }
      })
      .catch((error) => reject(error));
  });
