import config from "react-native-config";
const backendServer = config.BACKEND_SERVER;
const routeBase = "v1/auth";
export const refreshToken = (refreshToken) =>
  new Promise((resolve, reject) => {
    const url = `${backendServer}/${routeBase}/refresh-tokens`;
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
