import { combineReducers } from "redux";

const initState={
    cart:[],
}

const cartReducer= (state=initState.cart, action)=>{
    switch (action.type) {
        case 'ADD':
            return [...state,action.payload]
            
        case 'Remove':
            return state.filter(i=>i.id !== action.payload)
    
        default:
            return state;
    }
}

let appReducer=combineReducers({
    cartReducer
})
export default appReducer;