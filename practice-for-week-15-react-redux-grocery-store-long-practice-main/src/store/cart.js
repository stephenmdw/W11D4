


const POPULATE = "cart/POPULATE"
const ADD_CART="ADD_CART"

export function cartReducer(state={}, action){
    switch (action.type){
        case ADD_CART:
            // console.log(action);
            const newState = {...state}
            newState[action.id] = { id: action.id ,count:1}
            return newState;

        default:
            return state;
}}

export function addtoCart(id){
    return{
        type:ADD_CART,
        id: id
    }
}

// export function populateCart(){
//     return {
//         type: POPULATE
//     }
// }