import { createContext, useReducer } from "react";
import AuthReducer from "./authReducer";

const ININAL_STATE = {
    isLoading: false,
    isError: false,
    user: null
};

const AuthContext = createContext(ININAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, AuthContext, ININAL_STATE)
    return (<AuthContext.Provider value={{
        isError: state.isError,
        user: state.user,
        isLoading: state.isLoading,
        dispatch,
    }}>
        {children}
    </AuthContext.Provider >);
}