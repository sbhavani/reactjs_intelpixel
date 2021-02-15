import {getaxiosInstanceAuth} from "../axiosInstanceAuth";
export const RegistrationApi = async (params) => {
  return await getaxiosInstanceAuth().post(`/registration/verifyToken`,params);
};
export const RegistrationMemberApi = async (params) => {
  return await getaxiosInstanceAuth(`Bearer ${localStorage.getItem('verifyOtp')}`).post(`/registration/memberdata`,{...params,jwtToken:localStorage.getItem('verifyToken')});
};
export const CheckUsernameApi = async (params) => {
  return await getaxiosInstanceAuth(`Bearer ${localStorage.getItem('verifyOtp')}`).get(`/registration/checkusername?name=${params}`);
};
export const LoginApi = async (params) => {
  return await getaxiosInstanceAuth().post(`/authenticate`,params);
};
export const ChangePasswordApi = async (params) => {
  return await getaxiosInstanceAuth(`Bearer ${localStorage.getItem('user')}`).post(`/changePassword`,params);
};
export const ForgotApi = async (params) => {
  return await getaxiosInstanceAuth().post(`/member/forgotPassword`,params);
};
export const PasswordResetApi = async (params) => {
  return await getaxiosInstanceAuth().post(`/member/passwordReset`,params);
};
export const RequestOtpApi = async (url) => {
  return await getaxiosInstanceAuth(`Bearer ${localStorage.getItem('verifyToken')}`).post(`${url}/requestOTP`,{jwtToken:localStorage.getItem('verifyToken')});
};
export const VerifyOtpApi = async (url,token,params) => {
  return await getaxiosInstanceAuth(token).post(`${url}/verifyOTP`,params);
};