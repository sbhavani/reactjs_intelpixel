import axios from "axios";
import { mainUrl3 } from "./constant";
export function getaxiosInstanceAuth(token) {
  var axiosInstanceAuth;
  console.log(token);
  if(token && token !== 'Bearer undefined'){
    console.log('in');

    axiosInstanceAuth = axios.create({
      baseURL: mainUrl3,
  
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
}
else
{
  console.log('out');

  axiosInstanceAuth = axios.create({
    baseURL: mainUrl3,

    headers: {
      "Content-Type": "application/json",
    },
  });
}

  axiosInstanceAuth.interceptors.response.use(
    function (response) {
      // some unnecessary defensive programming
      if (response !== undefined) {
        if (response.data) return response.data;
        return response;
      } else return {};
    },
    function (error) {
      console.log(error.data);
      return Promise.reject(error.response);
    }
  );

  return axiosInstanceAuth;
}
