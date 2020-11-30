import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();
//prepares data layer

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);


export const useStateValue = () => useContext(StateContext)
//Hook which allows us to pull info from the data layer