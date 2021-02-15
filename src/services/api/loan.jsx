import {getaxiosInstanceOn} from "../axiosInstanceOn";
import {getaxiosInstanceOff} from "../axiosInstanceOff";
export const getLoanByLoanNo = async (lNo) => {
  return await getaxiosInstanceOn().get(`/loan?accountNo=${lNo}`);
};
export const addLoanPayment = async (params) => {
  return await getaxiosInstanceOn().post(`/loanPayment`,params);
};
export const getLoanMemberByName = async (searchTerm) => {
  return await getaxiosInstanceOff().get(`/loans?name=${searchTerm}`);
};
export const getAllLoan = async () => {
  return await getaxiosInstanceOff().get(`/loans`);
};
export const getLoanTransactionDetailByLoanNo = async (lno) => {
  return await getaxiosInstanceOff().get(`/accountDetails?loanNo=${lno}`);
};
export const addNewLoan = async (params) => {
  return await getaxiosInstanceOn().post(`/issueLoan`,params);
};