import { ActionTypes } from "../constants/action-types";

const initialState = {
    products:[],
};

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        //set state with data from api fetch
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload }  
        default:
            return state
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        //set state with selcected product
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload }  
        //removes previously selectproduct from the state soit doesn't show before the new state updates
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}  
        default:
            return state
    }
}