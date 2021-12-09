import config from "react-native-config";
const backendServer = config.BACKEND_SERVER;
var axios = require("axios");
const routeBase = "v1/auth";
export const socialMediaAuth = ({
  socialMediaId,
  socialMediaType,
  socialMediaToken,
  email,
  profilePicture,
  name
}) =>
  new Promise((resolve, reject) => {
    const url = `${backendServer}/${routeBase}/social-media-auth`;
    const headers = { "Content-Type": "application/json" };
    var body = JSON.stringify({
      socialMediaId,
      socialMediaType,
      socialMediaToken,
      email,
      profilePicture,
      name
    });
    console.log("BODY: ", body)
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
export const extractFbData = (accessToken) =>
  new Promise((resolve, reject) => {
    var config = {
      method: "get",
      url: `https://graph.facebook.com/v2.5/me?fields=email,name,picture&access_token=${accessToken}`,
    };
    axios(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
