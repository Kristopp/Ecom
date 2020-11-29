import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

//Wrap app do create global state for all components
export const StateProvider = ({ reducer, initalState, children }) => ( 
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
)
//use this to get data from gloabl state
export const useStateValue = () => useContext(StateContext);