import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './apiSlice/Authentication/loginSlice';
import forgotPasswordSlice from './apiSlice/Authentication/forgotPasswordSlice';
import otpVerifySlice from './apiSlice/Authentication/otpVerifySlice';
import resetPasswordSlice from './apiSlice/Authentication/resetPasswordSlice';
import changePasswordSlice from './apiSlice/Authentication/changePasswordSlice';
import editProfileSlice from './apiSlice/Authentication/editProfileSlice';
import getProfileSlice from './apiSlice/Authentication/getProfileSlice';
import getAboutSlice from './apiSlice/AboutUs/getAboutSlice';
import updateAboutSlice from './apiSlice/AboutUs/updateAboutSlice';
import getPrivacyPolicySlice from './apiSlice/PrivacyPolicy/getPrivacyPolicySlice';
import updatePrivacyPolicySlice from './apiSlice/PrivacyPolicy/updatePrivacyPolicySlice';
import getCategoryListSlice from './apiSlice/Category/getCategoryListSlice';
import getAdminListSlice from './apiSlice/Admin/getAdminListSlice';
import makeAdminSlice from './apiSlice/Admin/makeAdminSlice';
import deleteCategorySlice from './apiSlice/Category/deleteCategorySlice';
import getSellerListSlice from './apiSlice/Home/getSellerListSlice';
import topSellerSlice from './apiSlice/Home/topSellerSlice';
import blockSellerSlice from './apiSlice/Home/blockSellerSlice';
import getSummarySlice from './apiSlice/Home/getSummarySlice';
import getSellerChartSlice from './apiSlice/Home/gerSellerChartSlice';
import createCategorySlice from './apiSlice/Category/createCategorySlice';
import getContactSlice from './apiSlice/Contact/getContactSlice';
import sendContactSlice from './apiSlice/Contact/sendContactSlice';
import getNotificationSlice from './apiSlice/Notification/getNotificationSlice';
import getSingleSellerSlice from './apiSlice/Home/getSingleSellerSlice';
import getSingleCategorySlice from './apiSlice/Category/getSingleCategorySlice';
import makeBannerProductsSlice from './apiSlice/Product/makeBannerProductsSlice';
import makeFeaturedProductsSlice from './apiSlice/Product/makeFeaturedProductsSlice';

export const store = configureStore({
  reducer: {
    // authentication 
    login: loginSlice,
    forgotPassword: forgotPasswordSlice,
    otpVerify: otpVerifySlice,
    resetPassword: resetPasswordSlice,
    changePassword: changePasswordSlice,
    editProfile : editProfileSlice,
    profile: getProfileSlice,
    getAdmins: getAdminListSlice,
    makeAdmin: makeAdminSlice,

    // about us
    aboutUs: getAboutSlice,
    updateAboutUs : updateAboutSlice,

    // privacy and policy
    getPrivacy : getPrivacyPolicySlice,
    updatePrivacy : updatePrivacyPolicySlice,

    // categories
    getCategory: getCategoryListSlice,
    deleteCategory: deleteCategorySlice,
    createCategory: createCategorySlice,
    getSingleCategory: getSingleCategorySlice,

    // seller list
    getSellerList : getSellerListSlice,
    getTopSeller: topSellerSlice,
    blockSeller: blockSellerSlice,
    getSummaryData: getSummarySlice,
    getSellerChart: getSellerChartSlice,
    getSingleSeller: getSingleSellerSlice,

    // contacts
    getContacts: getContactSlice,
    sendContact: sendContactSlice,

    // notifications
    getNotifications: getNotificationSlice,

    // products
    makeBanner: makeBannerProductsSlice,
    makeFeature: makeFeaturedProductsSlice,

    
  },
})