import React, { createContext, useContext, useReducer } from 'react';

// Prepares the data Layer
export const StateContext = createContext();

// Wrap our app and provide the data layer with data
export const StateProvider = ({ reducer, initialState, children }) => {
  // Don't forget to return the JSX
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
