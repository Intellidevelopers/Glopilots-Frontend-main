const BUSINESS_PROFILE_DATA = [
  {
    fieldName: 'email',
    fieldValue: '',
  },
  {
    fieldName: 'payment',
    fieldValue: '',
  },
  {
    fieldName: 'receipt',
    fieldValue: '',
  },
];
 
const CHATS = [
  {
    messageId: 'aaaa',
    sender: 'passenger',
    message: 'Where are you now bro?',
    dateSent: '2023-05-11',
    timeStamp: '11:03 PM',
  },
  {
    messageId: 'bbbbb',
    sender: 'driver',
    message: 'I"m already on the way. Will be there shortly',
    dateSent: '2023-05-11',
    timeStamp: '11:05 PM',
  },
  {
    messageId: 'ccccc',
    sender: 'passenger',
    message: 'Please huryy up sir, am already running late',
    dateSent: '2023-05-11',
    timeStamp: '11:09 PM',
  },
  {
    messageId: 'ddddd',
    sender: 'driver',
    message: 'Okay. Will be there soon enough',
    dateSent: '2023-05-11',
    timeStamp: '11:11 PM',
  },
  {
    messageId: 'eeeee',
    sender: 'driver',
    message: 'Am here sir with a green avelon, where are you?',
    dateSent: '2023-05-11',
    timeStamp: '11:20 PM',
  },
  {
    messageId: 'fffff',
    sender: 'passenger',
    message: 'Ok I have seen you',
    dateSent: '2023-05-11',
    timeStamp: '11:24 PM',
  },
];

const USERDATA = {
  userName: 'Justine Cruiz',
  userNumber: '+44681178453',
  userCountry: 'UK',
  userFlag: require('../assets/uk.png'),
  userEmail: 'justinecruiz12@gmail.com',
  userEmergency: 'Frank',
};

const TRAVELLER_INFO = {
  baseFare:980,
  discount:50,
  adudlt:1,
  passengers:1,
  flight:[
    {
    departureAmout: 720,
    flightNumber: 2365,
    flightClass: 'L',
    flightSide: 'Departure',
    flightDate:"Wed, Jan 18",
    originShort: 'LHR',
    originLong: 'London',
    originAirport: 'Heathrow',
    destinationShort: 'LOS',
    destinationLong: 'Lagos',
    destinationAirport: 'Mutala Mohammed Internation Airport',
    takeOffTime: '20:25',
    onDuration: '23h 40m',
    arrivalTime: '21:05',
    flightDuration: 'Jan 19, 2023',
    flightCompany: 'KLM Royal Dutch Airlines',
    flightGrade: 'Economy',
    flightCompanyLogo: require('../assets/secured.png'),
    layover: [
      {
        layoverLocation: 'KLM Royal Dutch Airlines',
        layoverStart: '22:19',
        layoverEnd: '23:44',
        layoverDate: 'Tue, Jan 12',
        layoverGrade: 'Economy',
        layoverDuration: '1h 20m',
        layoverNumber: 8842,
        layoverClass: 'L',
        layoverFromShort: 'LHR',
        layoverFromLong: 'London',
        layoverFromAirport: 'Heathrow',

        layoverToShort: 'LOS',
        layoverToLong: 'Lagos',
        layoverToAirport: 'Mutala Mohammed Internation Airport',

        layoverLogo: require('../assets/secured.png'),
      },
      {
        layoverLocation: 'KLM Royal Dutch Airlines',
        layoverStart: '24:11',
        layoverEnd: '27:35',
        layoverDate: 'Mon, Jan 21',
        layoverGrade: 'Economy',
        layoverDuration: '3h 48m',
        layoverNumber: 3912,
        layoverClass: 'N',
        layoverFromShort: 'LHR',
        layoverFromLong: 'London',
        layoverFromAirport: 'Heathrow',

        layoverToShort: 'LOS',
        layoverToLong: 'Lagos',
        layoverToAirport: 'Mutala Mohammed Internation Airport',

        layoverLogo: require('../assets/secured.png'),
      },
    ],
    flightLogages: [
      {
        logage:"Bag",
        color:'blue'
        
      },
      {
        logage:"Bucked",
        color:'yellow'
        
      },
      {
        logage:"Laptop",
        color:'black'
        
      },
    ],
  },
  {
    returnAmount: 920,
    flightSide: 'Return',
    flightDate:"Fri, Jan 20",
    originShort: 'LOS',
    originLong: 'Lagos', 
    originAirport: 'Mutala Mohammed Internation Airport',
    destinationShort: 'LHR',
    destinationLong: 'London',
    destinationAirport: 'Heathrow',
    takeOffTime: '22:45',
    onDuration: '9h 55m',
    arrivalTime: '21:05',
    flightDuration: 'Jan 28, 2023',
    flightCompany: 'KLM Royal Dutch Airlines',
    flightGrade: 'Economy',
    flightNumber: 7398,
    flightClass: 'L',
    flightCompanyLogo: require('../assets/secured.png'),
    layover: [
      {
        layoverLocation: 'KLM Royal Dutch Airlines',
        layoverStart: '20:25',
        layoverEnd: '22:35',
        layoverDate: 'Fri, Jan 28',
        layoverDuration: '2h 5m',
        layoverGrade: 'Economy',
        flightNumber: 9032,
        flightClass: 'L',
        layoverFromShort: 'LOS',
        layoverFromLong: 'Lagos',
        layoverFromAirport: 'Mutala Mohammed Internation Airport',

        layoverToShort: 'LHR',
        layoverToLong: 'London',
        layoverToAirport: 'Heathrow',

        layoverLogo: require('../assets/secured.png'),
      },
    ],
    flightLogages: [
      {
        logage:"Bag",
        color:'blue'
        
      },
      {
        logage:"Bucked",
        color:'yellow'
        
      },
    ],
  },
  ]
};

const GENDERS = [
  {
    gender: 'Male',
  },
  {
    gender: 'Female',
  },
];

export {
  BUSINESS_PROFILE_DATA,
  CHATS,
  USERDATA,
  TRAVELLER_INFO,
  GENDERS,
};
