export const BASE_URL = "http://localhost:5041/api/";

// endpoint API
export const LOGIN = BASE_URL + "User/login";
export const REGISTER = BASE_URL + "User/create";
export const GETPROFILEDATA = BASE_URL + "User/get-user-by-id/{id}";
export const DELETE_ITEM = BASE_URL + "Cart/delete/{id}";
export const DELETE_ALL_ITEM = BASE_URL + "Cart/delete-all/{customerId}";
export const GET_ALL_CART_DATA = BASE_URL + "Cart/get-all";
export const GET_CART_WITH_PAGE = BASE_URL + "Cart/get-all-with-page";
export const GET_ALL_PRODUCT = BASE_URL + "Product/get-all";
export const GET_ALL_ORDER = BASE_URL + "Order/get-all";
export const GET_ORDER_WITH_PAGE = BASE_URL + "Order/get-all-with-page";
export const CREATE_ORDER = BASE_URL + "Order/create";
export const CREATE_CART = BASE_URL + "Cart/create";
export const GET_PRODUCT_WITH_PAGE = BASE_URL + "Product/get-all-with-page";
export const CHANGE_PASSWORD = BASE_URL + "User/update";
export const UPDATE_USER = BASE_URL + "User/update-user";
export const DELETE_USER = BASE_URL + "User/deleted-user/(id)";
export const GET_ALL_USER = BASE_URL + "User/get-all";

export default {
  LOGIN,
  BASE_URL,
  REGISTER,
  GETPROFILEDATA,
  DELETE_ITEM,
  DELETE_ALL_ITEM,
  GET_ALL_CART_DATA,
  GET_CART_WITH_PAGE,
  GET_ALL_PRODUCT,
  CREATE_ORDER,
  CREATE_CART,
  GET_PRODUCT_WITH_PAGE,
  GET_ALL_ORDER,
  GET_ORDER_WITH_PAGE,
  CHANGE_PASSWORD,
  UPDATE_USER
};