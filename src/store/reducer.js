import { CAROUSEL_DATA } from "./actionTypes";

const defaultState = {
    carousel: [1,2,3,4]
}

export default (state=defaultState, action)=>{
    if (action.type === CAROUSEL_DATA) {
         const newState = JSON.parse(JSON.stringify(state)); // deep copy
    }
    return state;
}