import config from "react-native-config";
const backendServer = config.BACKEND_SERVER;
const routeBase = "v1/auth";
export const signUp = ({ name, email, password, phoneNumber }) =>
  new Promise((resolve, reject) => {
    const url = `${backendServer}/${routeBase}/register`;
    const headers = { "Content-Type": "application/json" };
    var body = JSON.stringify({ name, email, password, phoneNumber });
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      body,
      headers,
    };
    fetch(url, requestOptions)
      .then((response) => {
        response.json().then((res) => {
          if (response.status == 201) {
            resolve(res);
          } else {
            reject(res);
          }
        });
      })
      .catch((error) => reject(error));
  });
