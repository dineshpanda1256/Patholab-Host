import axios from "axios";

// export const API = "http://localhost:8000/api/";
export const API = "http://54.167.118.226:8000/api/";

export const apicaller = (uri, data = null, method, Token) => {
  console.log("Api Caller Data Is", data);
  return new Promise((resolve, reject) => {
    var config = {
      method: method,
      url: `http://54.167.118.226:8000/api/${uri}`,
      headers: {
        Authorization: Token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("api caller", JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log("api caller", error.message);
        reject(error);
      });
  });
};
