import {
    createContext
} from "react";

export const Store = createContext();

const initialState = {
    userInfo: localStorage.getItem("userInfo") ?
        JSON.parse(localStorage.getItem("userInfo")) :
        null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return {
                ...state, userInfo: payload
            };
        case "SIGN_OUT":
            return {
                ...state, userInfo: null
            };
        default:
            return state;
    }

   
}
export const StoreProvider=(props)=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    const value = {state,dispatch};
return <Store.Provider value = {value}>{props.children}</Store.Provider>
}