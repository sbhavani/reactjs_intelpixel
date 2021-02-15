import axios from "axios";
import { mainUrl1 } from "./constant";
export function getaxiosInstanceOn() {
  var axiosInstanceOn;
  if(localStorage.getItem("user") && localStorage.getItem("user") !== undefined){

    axiosInstanceOn = axios.create({
      baseURL: mainUrl1,
  
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });
}
else
{
  axiosInstanceOn = axios.create({
    baseURL: mainUrl1,

    headers: {
      "Content-Type": "application/json",
    },
  });
}
  
  axiosInstanceOn.interceptors.response.use(
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

  return axiosInstanceOn;
}
