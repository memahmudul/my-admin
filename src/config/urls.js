export const API_BASE_URL = "https://voip-app-dwn1.onrender.com";


//https://voip-app-dwn1.onrender.com
//http://192.168.248.1:8080
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint


export const LOGIN = getApiUrl('/admin/login')
export const SIGNUP = getApiUrl('/admin/register');
export const GET_BALANCE_REQUEST_LIST = getApiUrl('/admin/get-balance-request-list');
export const CANCEL_BALANCE_REQUEST = getApiUrl('/admin/cancel-balance-request');
export const CONFIRM_BALANCE_REQUEST = getApiUrl('/admin/confirm-balance-request');
export const EDIT_BALANCE = getApiUrl('/admin/edit-balance');


export const EDIT_FIRST_PAYMENT = getApiUrl('/admin/edit-first-payment-method');
export const EDIT_SECOND_PAYMENT = getApiUrl('/admin/edit-second-payment-method');
export const EDIT_THIRD_PAYMENT = getApiUrl('/admin/edit-third-payment-method');


export const GET_COMMISSION_LIST = getApiUrl('/admin/get-commission');
export const EDIT_COMMISSION = getApiUrl('/admin/edit-commission');


export const EDIT_SLIDER = getApiUrl('/admin/edit-slider-images');



export const GET_ALL_USERS = getApiUrl('/admin/get-all-users');
export const GET_SINGLE_USER = getApiUrl('/admin/get-single-user');

export const DELETE_USER = getApiUrl('/admin/delete-user');




export const FETCH_MOBILE_BANKING_TRANSACTION = getApiUrl('/admin/get-all-mobile-banking-order');
export const FETCH_BANKING_TRANSACTION = getApiUrl('/admin/get-all-banking-order');
export const FETCH_BILL_PAY_TRANSACTION = getApiUrl('/admin/get-all-bill-pay-order');
export const FETCH_RECHARGE_TRANSACTION = getApiUrl('/admin/get-all-recharge-order');
export const FETCH_OFFER_PACKAGE_TRANSACTION = getApiUrl('/admin/get-all-offer-order');



export const PERFORM_TRANSACTION = getApiUrl('/order/edit-transaction-order');


export const ADD_NEW_OFFER = getApiUrl('/offer/add-new-offer');



export const GET_ALL_OFFER = getApiUrl('/admin/get-all-offers');


export const DELETE_AN_OFFER = getApiUrl('/admin/delete-an-offers');



export const ADD_NEW_NOTIFICATION = getApiUrl('/admin/add-notification');
export const GET_ALL_NOTIFICATION = getApiUrl('/admin/get-all-notification');
export const DELETE_NOTIFICATION = getApiUrl('/admin/delete-notification');




