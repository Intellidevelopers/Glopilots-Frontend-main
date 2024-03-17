// userReducer.js
// Import the necessary action types
import { SET_EMAIL, SET_PHONE_NUMBER, SET_ID_CARD, SET_SSN, TOGGLE_SSN_VISIBILITY } from './userActions';

// Define the initial state for the user
const initialState = {
  email: '',
  phoneNumber: '',
  idCard: '',
  ssn: '',
  ssnHidden: true, // State to manage password visibility
};

// Define the userReducer function
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case SET_ID_CARD:
      return {
        ...state,
        idCard: action.payload,
      };
    case SET_SSN:
      return {
        ...state,
        ssn: action.payload,
      };
    case TOGGLE_SSN_VISIBILITY:
      return {
        ...state,
        ssnHidden: !state.ssnHidden,
      };
    default:
      return state;
  }
};

export default userReducer;
