import axios from "axios";
import { mainUrl2 } from "./constant";
export function getaxiosInstanceOff() {
  var axiosInstanceOff;
  if(localStorage.getItem("user") && localStorage.getItem("user") !== undefined){

   axiosInstanceOff = axios.create({
    baseURL: mainUrl2,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    },
  });
}
else
{
  axiosInstanceOff = axios.create({
    baseURL: mainUrl2,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
  axiosInstanceOff.interceptors.response.use(
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

  return axiosInstanceOff;
}
