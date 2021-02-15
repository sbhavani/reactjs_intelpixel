import {getaxiosInstanceOn} from "../axiosInstanceOn";
import {getaxiosInstanceOff} from "../axiosInstanceOff";
export const getPayment = async () => {
  return await getaxiosInstanceOff().get(`/payments`);
};
export const addLoanPayment = async (params) => {
  return await getaxiosInstanceOn().post(`/loanPayment`,params);
};
export const addRecurringDeposit = async (params) => {
  return await getaxiosInstanceOn().post(`/recPayment`,params);
};