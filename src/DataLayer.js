import React, { createContext, useContext, useReducer } from "react";

// data layer
export const StateContext = createContext();

export const DataLayer = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// COMPONENTS USABLE HOOK
export const useDataLayerValue = () => useContext(StateContext);
