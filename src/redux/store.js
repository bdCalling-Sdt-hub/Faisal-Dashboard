import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './apiSlice/Authentication/loginSlice';
import forgotPasswordSlice from './apiSlice/Authentication/forgotPasswordSlice';
import otpVerifySlice from './apiSlice/Authentication/otpVerifySlice';
import resetPasswordSlice from './apiSlice/Authentication/resetPasswordSlice';
import changePasswordSlice from './apiSlice/Authentication/changePasswordSlice';
import editProfileSlice from './apiSlice/Authentication/editProfileSlice';
import getProfileSlice from './apiSlice/Authentication/getProfileSlice';

export const store = configureStore({
  reducer: {
    // authentication 
    login: loginSlice,
    forgotPassword: forgotPasswordSlice,
    otpVerify: otpVerifySlice,
    resetPassword: resetPasswordSlice,
    changePassword: changePasswordSlice,
    editProfile : editProfileSlice,
    profile: getProfileSlice
  },
})