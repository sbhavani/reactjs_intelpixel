import {getaxiosInstanceAuth} from "../axiosInstanceAuth";
import {getaxiosInstanceOff} from "../axiosInstanceOff";
import axios from "axios";
export const getMemberByMemberId = async (mId) => {
  return await getaxiosInstanceOff().get(`/member?uuid=${mId}`);
};
export const getMemberByName = async (searchTerm) => {
  return await getaxiosInstanceOff().get(`/members?name=${searchTerm}`);
};
export const getAllMember = async () => {
   return await getaxiosInstanceOff().get(`/members`);
};
export const generateToken = async (accountNo) => {
  return await getaxiosInstanceAuth(`Bearer ${localStorage.getItem("user")}`).get(`/generateToken?accountNo=${accountNo}`);
};
export const unlock = async (accountNo) => {
  return await getaxiosInstanceAuth(`Bearer ${localStorage.getItem("user")}`).put(`/unlockAccount`,{'accountNo':accountNo});
};
export const addUpdateMember = async (action, params,id) => {
  if(action === 'updateMember'){
  return await getaxiosInstanceOff().put(`/${action}/${id}`, params);
  }
  else
  {
    return await getaxiosInstanceOff().post(`/${action}`, params);

  }
};
