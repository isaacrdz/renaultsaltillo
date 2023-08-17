import React, { createContext, useReducer } from 'react';
import { Actions } from 'Constants';

export const StoreContext = createContext();

const initialState = {
  ready: false
};

const reducers = {
  [Actions.SET_CONFIG]: (state, config) => {
    return {...state,...config,ready:true}
  }
};

//EJECUTAMOS LOS REDUCERS
const storeReducer = (state, action) => {
  return reducers[action.type](state, action.data);
};

const GlobalData = ({ children }) => {
  const [state, dispatchState] = useReducer(storeReducer, initialState);

  const setGlobalState = (action, data) => {
    dispatchState({ type: action, data: data });
  };

  return (
      <StoreContext.Provider value={{ state, setGlobalState }}>
        {children}
      </StoreContext.Provider>);
};

export default GlobalData;
