import React, { createContext, useContext, useReducer } from 'react';

// Create a context with initial values
const LocationContext = createContext({
  coordinates: { latitude: null, longitude: null },
  setCoordinates: () => {},
});

// Create a reducer to update the state
const locationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_COORDINATES':
      return { ...state, coordinates: action.payload };
    default:
      return state;
  }
};

// Create a provider component that will wrap your app
export const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, {
    coordinates: { latitude: null, longitude: null },
  });

  const setCoordinates = (latitude, longitude) => {
    dispatch({ type: 'SET_COORDINATES', payload: { latitude, longitude } });
  };

  return (
    <LocationContext.Provider value={{ coordinates: state.coordinates, setCoordinates }}>
      {children}
    </LocationContext.Provider>
  );
};

// Create a custom hook to access the context values
export const useLocation = () => {
  return useContext(LocationContext);
};
