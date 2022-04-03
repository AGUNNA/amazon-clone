// setup a data layer
// we need this to track the cart
import React, { createContext, useContext, useReducer } from "react";

// This is the data Layer
export const StateContext = createContext();

// Builds a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// This is how we use the StateProvider inside of  a component
export const useStateValue = () => useContext(StateContext)