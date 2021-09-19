import { ADD_FAVORITE_FLAT, GET_FLATS_REQUEST, GET_FLATS_SUCCESS } from "../constants";


export const getFlatsRequest = () => ({type: GET_FLATS_REQUEST});
export const getFlatsSuccess = (data) => ({type: GET_FLATS_SUCCESS, payload: data});

export const addFavoriteFlat = (data) => ({type: ADD_FAVORITE_FLAT, payload: data});