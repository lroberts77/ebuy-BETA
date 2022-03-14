const initialState = {
    products:[{
        id: 1,
        title: 'Liam',
        category: 'programmer'
    }],
};

export const productReducer = (state, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PTODEUCTS:
            return state   
        default:
            return state
    }
}