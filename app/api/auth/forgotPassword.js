import config from "react-native-config";
const backendServer = config.BACKEND_SERVER;
const routeBase = "v1/auth";

export const forgotPassword = (email) =>
  new Promise((resolve, reject) => {
    const url = `${backendServer}/${routeBase}/forgot-password`;
    const headers = { "Content-Type": "application/json" };
    var body = JSON.stringify({ email });
    var requestOptions = {
      method: "POST",
      body,
      headers,
    };
    fetch(url, requestOptions)
      .then((response) => {
        if (response.status == 204) {
          return resolve(response.status);
        } else {
          return reject(response);
        }
      })
      .catch((error) => reject(error));
  });
export const _forgotPassword = async (email) => {
  const url = `${backendServer}/${routeBase}/forgot-password`;
  const headers = { "Content-Type": "application/json" };
  var body = JSON.stringify({ email });
  var requestOptions = {
    method: "POST",
    body,
    headers,
  };
  try {
    const result = await fetch(url, requestOptions);
    const resultJson = await result.body();
    console.log("json", resultJson);
    return await result.json();
  } catch (error) {
    return error;
  }
};
