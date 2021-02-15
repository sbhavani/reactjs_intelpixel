import axios from "axios";
export const getCityByPostcode = async (postcode) => {
  return await axios.get(`https://api.postalpincode.in/pincode/${postcode}`);
};