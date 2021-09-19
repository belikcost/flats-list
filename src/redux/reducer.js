import { ADD_FAVORITE_FLAT, GET_FLATS_SUCCESS } from "../constants";


const initialState = {
    favorites: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FLATS_SUCCESS:
            return {...state, flats: action.payload};
        case ADD_FAVORITE_FLAT:
            return {...state, favorites: [...state.favorites, action.payload]};
        default:
            return state;
    }
}