const initialState = {
    count: '0',
    message: 'Hello, Redux!',
    username: 'Noble Elbon',
    email: 'noble@glopilots.com',
    phonenumber: '08148267096',
    auth_token: 'urgpioqbgolnhqiownhgqonhntqpio',
    usertype: 'rider',
    pronoun: 'He',
    logged: '0',
    pic_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ12seFJhxPY1fuHI07hnqEUF9ITm9YN5_3MlHU00&s',
    id_card: '935762893568982',
    ssn: '334577846578689',
    wallet: '345,000,000',
    home_address: '',
    logitude: '5.3',
    latitude: '5.3',
    home_address: '',
    work_address: '',


  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: String(Number(state.count) + 1)
        };
      case 'DECREMENT':
        return {
          ...state,
          count: String(Number(state.count) - 1)
        };
      case 'UPDATE_MESSAGE':
        return {
          ...state,
          message: action.payload
        };

        case 'UPDATE_TOKEN':
        return {
          ...state,
          auth_token: action.payload
        };

        case 'UPDATE_EMAIL':
            return {
              ...state,
              email: action.payload
            };
            case 'UPDATE_LOGI':
              return {
                ...state,
                logitude: action.payload
              };


              case 'UPDATE_LATI':
                return {
                  ...state,
                  latitude: action.payload
                };

            // case 'UPDATE_CORDINATES':
            //   return {
            //     ...state,
            //     logitude: action.payload,
            //     latitude: action.payload
            //   };


      default:
        return state;
    }
  };
  
  export default counterReducer;
  