export const SET_EMAIL = 'SET_EMAIL';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_ID_CARD = 'SET_ID_CARD';
export const SET_SSN = 'SET_SSN';
export const TOGGLE_SSN_VISIBILITY = 'TOGGLE_SSN_VISIBILITY';

// Define action creators for setting user information
export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setPhoneNumber = (phoneNumber) => ({
  type: SET_PHONE_NUMBER,
  payload: phoneNumber,
});

export const setIdCard = (idCard) => ({
  type: SET_ID_CARD,
  payload: idCard,
});

export const setSsn = (ssn) => ({
  type: SET_SSN,
  payload: ssn,
});

// Define an action creator for toggling SSN visibility
export const toggleSsnVisibility = () => ({
  type: TOGGLE_SSN_VISIBILITY,
});
