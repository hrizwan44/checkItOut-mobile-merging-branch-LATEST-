import API from "../index";
// import { retrieveData } from "../../util/helpers";
import EncryptedStorage from "react-native-encrypted-storage";

export async function updateProduct(apiData, productId) {
  console.log(API);
  console.log("createProduct API CALLED", apiData);
  let data = await EncryptedStorage.getItem("userData");
  data = JSON.parse(data);
  const accessToken = data.tokens.access.token;
  var config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  console.log(apiData);
  return API.patch(`/product/${productId}`, JSON.stringify(apiData), config);
}

export async function createProduct(apiData) {
  console.log(API);
  console.log("createProduct API CALLED");
  let data = await EncryptedStorage.getItem("userData");
  data = JSON.parse(data);
  const accessToken = data.tokens.access.token;
  var config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  apiData["videoUrl"] = (apiData.videoUrl?.data) ? apiData.videoUrl.data : apiData.videoUrl
  // debugger

  console.log('uploaing', apiData);
  return API.post("/product", JSON.stringify(apiData), config);
}

export async function getAllProducts() {
  console.log(API);
  console.log("API CALLED: getAllProducts");
  let data = await EncryptedStorage.getItem("userData");
  data = JSON.parse(data);
  const accessToken = data.tokens.access.token;
  var config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  console.log(config);
  return API.get("/product?limit=10&page=1&sortBy=createdAt%3Adesc", config);
}

export async function getCategoricalProduct(categoryId) {
  console.log("API CALLED: getAllProducts");
  // let data = await EncryptedStorage.getItem("userData");
  // data = JSON.parse(data);
  // const accessToken = data.tokens.access.token;
  var config = {
    headers: {
      // Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  console.log(config);
  return API.get(`/product?limit=10&page=1&category=${categoryId}`, config);
}
export async function getUserProduct() {
  console.log("API CALLED: getAllProducts");
  let data = await EncryptedStorage.getItem("userData");
  data = JSON.parse(data);
  console.log(data);
  const accessToken = data.tokens.access.token;
  const userId = data.user.id;
  var config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  console.log(config);
  return API.get(`/product?limit=10&page=1&user=${userId}`, config);
}
export async function productFilter(filters) {
  console.log("API CALLED: getAllProducts");
  let data = await EncryptedStorage.getItem("userData");
  data = JSON.parse(data);
  const accessToken = data.tokens.access.token;
  var config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  let url = `/product?`;
  console.log(config);
  Object.keys(filters).map((key, index) => {
    url += `&${key}=${filters[key]}`;
  });
  return API.get(url, config);
}

export async function likeProduct(productId) {
  console.log("API CALLED: likeProduct");
  let data = await EncryptedStorage.getItem("userData");
  data = JSON.parse(data);
  const accessToken = data.tokens.access.token;
  var config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  console.log(config);
  console.log(productId);
  return API.post(`/product/${productId}/like`, {}, config);
}

export async function saveProduct(folderId, productId) {
  console.log("API CALLED: saveProduct");
  let data = await EncryptedStorage.getItem("userData");
  data = JSON.parse(data);
  const accessToken = data.tokens.access.token;
  var config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  // console.log(config);
  console.log("PRODUCT ID ", productId);
  return API.post(`/product/${productId}/save`, JSON.stringify(folderId), config);
}

export async function getProductById(productId) {
  console.log("API CALLED: getProductById");
  let data = await EncryptedStorage.getItem("userData");
  data = JSON.parse(data);
  const accessToken = data.tokens.access.token;
  var config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  let url = `/product/${productId}`;
  console.log(url);
  return API.get(url, config);
}

export async function uploadVideo(name, uri) {
  console.log("API ::: ", API);
  console.log("API CALLED: uploadVideo");
  console.log("Ssssss::::::", name, uri);
  try {

    let data = await EncryptedStorage.getItem("userData");
    data = JSON.parse(data);
    const accessToken = data.tokens.access.token;
    var config = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    };
    var formData = new FormData();
    const videoName = new Date().getTime().toString() + ".mp4";
    console.log("NAME VIDEO", videoName);

    formData.append("product", {
      uri,
      name: videoName,
      type: "video/mp4",
    });
    console.log("FORM DATA", formData);
    console.log("FORM DATA", API.post(`/product/upload-image`, formData, config));
    return API.post(`/product/upload-image`, formData, config);

  } catch (error) {
    console.log("ERROR", error)
  }
}


export async function getSaveUserProducts(page) {
  console.log(API);
  console.log("API CALLED: getSaveUserProducts");
  let data = await EncryptedStorage.getItem("userData");
  data = JSON.parse(data);
  const accessToken = data.tokens.access.token;
  var config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  console.log(config);
  return API.get(`/user-folders?limit=10&page=${page}`, config);
}

export async function createFolder(folderName) {
  console.log(API);
  console.log("createFolder API CALLED");
  let data = await EncryptedStorage.getItem("userData");
  data = JSON.parse(data);
  const accessToken = data.tokens.access.token;
  var config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  console.log('createFolder API CALLED', folderName);
  return API.post("/user-folders", JSON.stringify(folderName), config);
}


// savedImagesApi
export async function savedImagesApi(id, page) {
  console.log("API CALLED: savedImagesApi");
  let data = await EncryptedStorage.getItem("userData");
  data = JSON.parse(data);
  const accessToken = data.tokens.access.token;
  var config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  return API.get(`user-folders/${id}/saved-products?limit=10&page=${page}`, config);
}