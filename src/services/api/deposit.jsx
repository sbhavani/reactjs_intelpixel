import {getaxiosInstanceOn} from "../axiosInstanceOn";
import {getaxiosInstanceOff} from "../axiosInstanceOff";

export const getDepositByDepositNo = async (dNo) => {
  return await getaxiosInstanceOn().get(`/deposit?accountNo=${dNo}`);
};
export const getDepositByName = async (searchTerm) => {
  return await getaxiosInstanceOff().get(`/deposits?name=${searchTerm}`);
};
export const getRecurringDepositByName = async (searchTerm) => {
  return await getaxiosInstanceOff().get(`/recurringdeposits?name=${searchTerm}&status=open`);
};
export const getAllDeposit = async () => {
  return await getaxiosInstanceOff().get(`/deposits`);
};
export const addDeposit = async (params,type) => {
  return await getaxiosInstanceOn().post(`/open${type}`,params);
};
export const releaseDeposit = async (params,type) => {
  return await getaxiosInstanceOn().post(`/release${type}`,params);
};
export const recurringDeposit = async (params) => {
  return await getaxiosInstanceOn().post(`/recPayment`,params);
};
export const getDepositTransactionDetailByDepositNo = async (dno) => {
  return await getaxiosInstanceOff().get(`/accountDetails?${dno}`);
};