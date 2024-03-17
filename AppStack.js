import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from "@expo/vector-icons"; // Make sure to import the correct icon library

import Blanks from './src/screens/Landing/Blanks';
import UserProfilePage from './UserProfilePage';
import MyInformation from './UserProfile/MyInformation';
import Payment from './UserProfile/Payment';
import CreditCardPayment from './UserProfile/CreditCardPayment';
import Address from './UserProfile/Address';
import Pass from './UserProfile/Pass';
import AddCash from './UserProfile/AddCash';
import Cash from './UserProfile/Cash';
import PharmacyAround from './src/screens/Home/PharmacyAround';
import History from './UserProfile/History';
import HomeScreen from "./src/screens/HomeScreen";
import Calendar from "./src/screens/Calendar";
import Scooter from "./src/screens/Scooter";
import LocationScreen from "./src/screens/LocationScreen";
import Cars from "./src/screens/Cars";
import Rewards from "./UserProfile/Rewards";
import CarDetails from "./src/screens/CarDetails";
import Reservations from "./src/screens/Reservations";
import Hourly from "./src/screens/Hourly";
import SelectTime from "./src/screens/SelectTime";
import ChoiceMap from "./src/screens/ChoiceMap";
//import Explore from "./src/screens/Explore";
import RidesDrop from "./src/screens/RidesDrop";
import MapScreen from "./src/screens/MapScreen";
import Boat from './Travel/Screens/Boat';
import AccountScreen from "./src/screens/Account";
import TravelStartup from "./Travel/Screens/TravelStartup";
import TravelSearch from "./Travel/Screens/TravelSearch";
import VerifyOTP from "./Travel/Screens/VerifyOTP";
import TravelAndExplore from "./Travel/Screens/TravelAndExplore";
import MapChoose from "./src/screens/MapChoose";
import ShortStay from "./src/screens/ShortStay";
import PackageDelivery from "./src/screens/PackageDelivery";
import PickupHere from "./src/screens/PickupHere";
import TwoWheel from "./src/screens/TwoWheel";
import Charter from "./src/screens/Charter";
import TriCycle from "./src/screens/TriCycle";
import Haulage from "./src/screens/Haulage";
import AddPayment from './UserProfile/AddPayment';
import Wallet from './UserProfile/Wallet';
import Edit from './UserProfile/Edit';
import Family from './UserProfile/Family';
import Checkout from './UserProfile/Checkout';
import Frequency from './UserProfile/Frequency';
import Refill from './UserProfile/Refill';
import Trusted from './UserProfile/Trusted';
import Method from './UserProfile/Method';
import Paypal from './UserProfile/Paypal';
import HomeAddress from './UserProfile/HomeAddress';
import WorkAddress from './UserProfile/WorkAddress';
import Bank from './UserProfile/Bank';
import SelectedBank from './UserProfile/SelectedBank';
import PaymentCard from './UserProfile/PaymentCard';
import RideCheck from './UserProfile/RideCheck';
import Settings from './UserProfile/Settings';
import Help from './UserProfile/Help';
import Security from './UserProfile/Security';
import Legal from './UserProfile/Legal';
import Terms from './UserProfile/Terms';
import Privacy from './UserProfile/Privacy';
import Licenses from './UserProfile/Licenses';
import Count from './UserProfile/Count';
import Safety from './UserProfile/Safety';
import Login from './src/screens/Auth/Login';
import SignUp from './src/screens/Auth/SignUp';
import Onboarding from './src/screens/Landing/Onboarding';
import Auth from './src/screens/Auth/Auth';
import Reserve from './UserProfile/Reserve';
import RentByHour from './UserProfile/RentByHour';
import Travel from './UserProfile/Travel';
import VerifyRides from './UserProfile/VerifyRides';
import Drive from './Drive';
//import LoginVerify from './Auth/LoginVerify';
import GiftCard from './UserProfile/GiftCard';
import Communication from './UserProfile/Communication';
import Pin from './UserProfile/Pin';
//import Notification from './UserProfile/Notification';
import Donate from './UserProfile/Donate';
import DriverApp from './UserProfile/DriverApp';
import Music from './UserProfile/Music';
import FillYourProfile from './src/screens/Auth/FillYourProfile';
import SModal from './src/screens/Auth/SModal';
import WhyDriver from './UserProfile/WhyDriver';
import ShareLocation from './UserProfile/ShareLocation';
import CheckIn from './UserProfile/CheckIn';
import WelcomeBack from './src/screens/Auth/WelcomeBack';
import ForgotPass from './src/screens/Auth/ForgotPass';
import EnterEmail from './src/screens/Auth/EnterEmail';
//import MapUser from './Auth/MapUser';
import MapUser from './src/screens/MapUser';
import EmailVerify from './src/screens/Auth/EmailVerify';
import SideBar from './src/screens/Auth/SideBar';
import CarSelector from './UserProfile/CarSelector';
import GPP from './UserProfile/GPP';
import GloPilotPink from './UserProfile/GloPilotPink';
import PhoneNumber from './src/screens/Auth/PhoneNumber';
import VerifyLostOtp from './src/screens/Auth/VerifyLostOtp';
import NewPass from './src/screens/Auth/NewPass';
import LoginVerify from './src/screens/Auth/LoginVerify';
import Main from './src/screens/Home/Main';
import Home from './src/screens/Home/Home';
import LimeScreen from './New/LimeScreen';
//import Activity from './ActivityScreen';
//import TripDetails from './TripDetails';
//import TravelStartup from "./assets/Screens/TravelStartup";
//import TravelSearch from "./assets/Screens/TravelSearch";
//import VerifyOTP from "./assets/Screens/VerifyOTP";
//import TravelAndExplore from "./assets/Screens/TravelAndExplore";
import Explore from './src/screens/Home/Explore';
import Trips from './New/Trips';
import RideHistory from './New/AllRideHistoryTab';
import BusinessRideHistoryTab from './New/BusinessRideHistoryTab';
import HelpScreen from './New/HelpScreen';
import RideForSomeOne from './New/RideForSomeOne';
import ConfirmPickup from './New/ConfirmPickup';
import Activity from './Two/ActivityScreen';
import TripDetails from './Two/TripDetails';
//import HelpScreen from './HelpScreen';

import AddBusinessProfile from './Two/AddBusinessProfile';
import CreateBusinessProfile from './Two/CreateBusinessProfile';
import SafetySetting from './Two/SafetySetting';
import ChatDriver from './Two/ChatDriver';
import TravellerInfo from './Two/TravellerInfo';
import TripSummary from './Two/TripSummary';
import LocationSelector from './src/screens/LocationSelector';
import PharmacyComponent from './src/screens/Home/Pharmacy';


//Ali
import HomeDrawer from "./Food/HomeDrawer";
import FoodDetails from "./Food/FoodDetails";
import PickLocation from "./Food/PickLocation";
import Schedule from "./Food/Schedule";
import SearchFoodHome from "./Food/SearchHomeFood";
import SearchFoodHome2 from "./Food/SearchHomeFood2";
//import App from './uber/src/Apps';
import ManageTrustedContacts from './Tscreens/screens/ManageTrustedContacts';
import MapSelect from './src/screens/MapSelect';


import Reward from "./Tscreens/screens/Reward";
import Notification from "./Tscreens/screens/Notification";

import SetDefaultTip from "./Tscreens/screens/SetDefaultTip";
import ManageTrustedContacts1 from "./Tscreens/screens/ManageTrustedContacts1";

import SetDefaultTip2 from "./Tscreens/screens/SetDefaultTip2";
import ManageTrustedContacts2 from "./Tscreens/screens/ManageTrustedContacts2"; 
import DriveWithGlopilot3 from "./Tscreens/screens/DriveWithGlopilot3";

import DriveWithGlopilot4 from "./Tscreens/screens/DriveWithGlopilot4";
import DriveWithGlopilot5 from "./Tscreens/screens/DriveWithGlopilot5";
import DriveWithGlopilot6 from "./Tscreens/screens/DriveWithGlopilot6";
import DriveWithGlopilot7 from "./Tscreens/screens/DriveWithGlopilot7";
import CarPool from './src/screens/CarPool';

import HotelDetails from "./Tscreens/screens/HotelDetails";
import RentaCar7 from "./Tscreens/screens/RentaCar7";
import SchedulePickupNowFood from "./Tscreens/screens/SchedulePickupNowFood";
import RideHome from "./Tscreens/screens/RideHome";

import AccessibilityFeature from "./Tscreens/screens/AccessibilityFeature";
import ScotterHome from "./src/screens/ScooterHome";



import ReserveDetails from "./Tscreens/screens/ReserveDetails";
import PaymentForHotel from "./Tscreens/screens/PaymentForHotel";
import ViewCart2 from "./Tscreens/screens/ViewCart2";
import Tab from "./Tscreens/components/Tab";
import PreInterCountry from './src/screens/PreInterCountry';


const Stack = createStackNavigator();

import { NavigationContainer } from '@react-navigation/native';
import { LoginButton } from 'react-native-fbsdk';
import MapSelector from './src/screens/MapSelector';
import ScooterHome from './src/screens/ScooterHome';
import InterState from './src/screens/InterState';
import InterCountry from './src/screens/InterCountry';
import SendPackage from './src/screens/SendPackage';
import RecievePackage from './src/screens/RecievePackage';
import Screen_21 from './Food/glopilot-food/screens/21';
import Screen_203 from './Food/glopilot-food/screens/203';
import Screen_207 from './Food/glopilot-food/screens/207';
import Screen_215 from './Food/glopilot-food/screens/215';
//import MapUser from './Auth/MapUser';
import RideEasy from './src/screens/Auth/RideEasy';
import MultipleMap from './src/screens/MultipleMap';
import LocationSelectors from './src/screens/LocationSelectors';
import Counter from './Counter';
import PackageChoose from './src/screens/PackageChoose';




const AppStack = () => (
  <NavigationContainer screenOptions={{ headerShown: false }}>
  <GestureHandlerRootView style={{ flex: 1 }}>
  <Stack.Navigator> 

  <Stack.Screen name="Main" component={Main}  options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} /> 

<Stack.Screen name="PackageChoose" component={PackageChoose}  options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} /> 




<Stack.Screen name="Counter" component={Counter}  options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} /> 


  <Stack.Screen name="Blanks" component={Blanks} options={{ headerShown: false,  animation: 'slide_from_right' }} />

 
  <Stack.Screen name="RideEasy" component={RideEasy}  options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} />

  <Stack.Screen name="MultipleMap" component={MultipleMap}  options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} /> 


  <Stack.Screen name="LocationSelectors" component={LocationSelectors}  options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} /> 
<Stack.Screen name="MapSelect" component={MapSelect}  options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} /> 
  
 




  <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />

  <Stack.Screen name="CarPool" component={CarPool} options={{headerShown: false}} />

 
  
  <Stack.Screen name="WelcomeBack" component={WelcomeBack} options={{headerShown: false}} />
   
      

  


        <Stack.Screen
          name="Screen_21"
          component={Screen_21}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Screen_203"
          component={Screen_203}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Screen_207"
          component={Screen_207}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Screen_215"
          component={Screen_215}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
 

 
 

             <Stack.Screen name="InterState" component={InterState}  options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} /> 

<Stack.Screen name="RecievePackage" component={RecievePackage}  options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} /> 

<Stack.Screen name="SendPackage" component={SendPackage}  options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} /> 

<Stack.Screen name="InterCountry" component={InterCountry}  options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} /> 


          
             <Stack.Screen name="PreInterCountry" component={PreInterCountry}  options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} /> 
  <Stack.Screen name="LimeScreen" component={LimeScreen}  options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} /> 

            <Stack.Screen name="PharmacyAround" component={PharmacyAround}  options={{
            headerShown: false,
            animation: 'slide_from_right',
          }} /> 
   <Stack.Screen name="PharmacyComponent" component={PharmacyComponent} options={{headerShown: false}} /> 
   <Stack.Screen name="FoodDetails" component={FoodDetails} options={{headerShown: false}} /> 
   <Stack.Screen name="ScooterHome" component={ScooterHome} options={{headerShown: false}} /> 
  

 
       <Stack.Screen
          name="AddBusinessProfile"
          component={AddBusinessProfile}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
         <Stack.Screen
          name="Homes"
          component={Home}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
         <Stack.Screen
          name="TravellerInfo"
          component={TravellerInfo}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />

<Stack.Screen
          name="Boat"
          component={Boat}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
<Stack.Screen
          name="LocationSelector"
          component={LocationSelector}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="TripSummary"
          component={TripSummary}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="createBusProfile"
          component={CreateBusinessProfile}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="SafetySetting"
          component={SafetySetting}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
         <Stack.Screen
          name="ChatDriver"
          component={ChatDriver}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        
     
        <Stack.Screen
          name="HelpScreen"
          component={HelpScreen}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
         <Stack.Screen
          name="MapSelector"
          component={MapSelector}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
       
 
  <Stack.Screen name="MyInformation" component={MyInformation} options={{headerShown: false}} /> 



  <Stack.Screen
            name="RideHistory"
            component={RideHistory}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="RideForSomeOne"
            component={RideForSomeOne}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="ConfirmPickup"
            component={ConfirmPickup}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
       
       
          <Stack.Screen
            name="Trips"
            component={Trips}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
 
       <Stack.Screen
            name="Explore"
            component={Explore}
            options={{ headerShown: false }}
          />

<Stack.Screen
            name="TriCycle"
            component={TriCycle}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Haulage"
            component={Haulage}
            options={{ headerShown: false }}
          />
           




<Stack.Screen
            name="Charter"
            component={Charter}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="TwoWheel"
            component={TwoWheel}
            options={{ headerShown: false }}
          />

          
        <Stack.Screen
            name="PickupHere"
            component={PickupHere}
            options={{ headerShown: false }}
          />

        

          <Stack.Screen
            name="PackageDelivery"
            component={PackageDelivery}
            options={{ headerShown: false }}
          />

        <Stack.Screen
            name="ShortStay"
            component={ShortStay}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Package"
            component={PackageDelivery}
            options={{ headerShown: false }}
          />
          


        <Stack.Screen
            name="Account"
            component={AccountScreen}
            options={{ headerShown: false }}
          />


      <Stack.Screen name="Verify OTP" component={VerifyOTP} />
        <Stack.Screen name="TravelExplore" component={TravelAndExplore} />
        <Stack.Screen name="GTravel" component={TravelStartup} />
        <Stack.Screen name="MapChoose" component={MapChoose} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen
            name="Rider"
            component={RidesDrop}
            options={{ headerShown: false, animation: 'slide_from_right' }}
          />
             <Stack.Screen
            name="Scooter"
            component={Scooter}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          
          <Stack.Screen
            name="Calendar"
            component={Calendar}
            options={({ navigation, route }) => ({
              // header: (props) => <Header {...props} />,
              headerTitle: "",
              headerStyle: { backgroundColor: "#ffffff" },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Entypo name="chevron-small-left" size={35} color="black" />
                </TouchableOpacity>
              ),
            })}
          />

          <Stack.Screen
            name="Location"
            component={LocationScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Cars"
            component={Cars}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="CarDetails"
            component={CarDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Reservations"
            component={Reservations}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Hourly"
            component={Hourly}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SelectTime"
            component={SelectTime}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ChoiceMap"
            component={ChoiceMap}
            options={{ headerShown: false }}
          />
 
  <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}} />
  <Stack.Screen name="SModal" component={SModal} options={{headerShown: false}} />
  <Stack.Screen name="LoginVerify" component={LoginVerify} options={{headerShown: false}} />
  <Stack.Screen name="VerifyLostOtp" component={VerifyLostOtp} options={{ headerShown: false }} />
  <Stack.Screen name="NewPass" component={NewPass} options={{ headerShown: false }} />
  <Stack.Screen name="UserProfilePage" component={UserProfilePage} options={{ headerShown: false }} />    
  <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
  <Stack.Screen name="FillYourProfile" component={FillYourProfile} options={{headerShown: false}} />
    <Stack.Screen name="SideBar" component={SideBar} options={{ headerShown: false }} />
    <Stack.Screen name="CarSelector" component={CarSelector} options={{ headerShown: false }} />
    <Stack.Screen name="GPP" component={GPP} options={{ headerShown: false }} />
    <Stack.Screen name="GlopilotPink" component={GloPilotPink} options={{ headerShown: false }} />
     <Stack.Screen name="ForgotPass" component={ForgotPass} options={{headerShown: false}} />
    <Stack.Screen name="MapUser" component={MapUser} options={{headerShown: false}} />
    <Stack.Screen name="EmailVerify" component={EmailVerify} options={{headerShown: false}} />
    <Stack.Screen name="EnterEmail" component={EnterEmail} options={{headerShown: false}} />
    <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}} /> 
    <Stack.Screen name="CheckIn" component={CheckIn} options={{headerShown: false}} />  
    <Stack.Screen name="ShareLocation" component={ShareLocation} options={{headerShown: false}} />  
    <Stack.Screen name="WhyDriver" component={WhyDriver} options={{headerShown: false}} />  
     <Stack.Screen name="DriverApp" component={DriverApp} options={{headerShown: false}} /> 
    <Stack.Screen name="Payment" component={Payment}  options={{ headerShown: false }} /> 
    <Stack.Screen name="CreditCardPayment" component={CreditCardPayment}  options={{ headerShown: false }} /> 
    <Stack.Screen name="Address" component={Address} options={{ headerShown: false }} /> 
    <Stack.Screen name="Pass" component={Pass} options={{ headerShown: false }} /> 
    <Stack.Screen name="AddCash" component={AddCash} options={{ headerShown: false}} /> 
    <Stack.Screen name="Cash" component={Cash} options={{ headerShown: false}} /> 
    <Stack.Screen name="History" component={History} options={{ headerShown: false}} />
    <Stack.Screen name="AddPayment" component={AddPayment} options={{ headerShown: false}} />
    <Stack.Screen name="Wallet" component={Wallet} options={{ headerShown: false}} />
    <Stack.Screen name="Edit" component={Edit} options={{ headerShown: false}} /> 
    <Stack.Screen name="Checkout" component={Checkout} options={{headerShown: false}} />
    <Stack.Screen name="Frequency" component={Frequency} options={{headerShown: false}} />
    <Stack.Screen name="Refill" component={Refill} options={{headerShown: false}} />
    <Stack.Screen name="Method" component={Method} options={{headerShown: false}} />
    <Stack.Screen name="HomeAddress" component={HomeAddress} options={{headerShown: false}} />
    <Stack.Screen name="WorkAddress" component={WorkAddress} options={{headerShown: false}} />
    <Stack.Screen name="Paypal" component={Paypal} options={{headerShown: false}} />
    <Stack.Screen name="Bank" component={Bank} options={{headerShown: false}} />
    <Stack.Screen name="SelectedBank" component={SelectedBank} options={{headerShown: false}} />
    <Stack.Screen name="Security" component={Security} options={{headerShown: false}} />
    <Stack.Screen name="PaymentCard" component={PaymentCard} options={{headerShown: false}} />
    <Stack.Screen name="RideCheck" component={RideCheck} options={{headerShown: false}} />
    <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}} />
    <Stack.Screen name="Help" component={Help} options={{headerShown: false}} />
    <Stack.Screen name="Legal" component={Legal} options={{headerShown: false}} />
    <Stack.Screen name="Terms" component={Terms} options={{headerShown: false}} />
    <Stack.Screen name="Privacy" component={Privacy} options={{headerShown: false}} />
    <Stack.Screen name="Licenses" component={Licenses} options={{headerShown: false}} />
    <Stack.Screen name="Count" component={Count} options={{headerShown: false}} />
   
    <Stack.Screen name="Communication" component={Communication} options={{headerShown: false}} />
    <Stack.Screen name="Reserve" component={Reserve} options={{headerShown: false}} />
    <Stack.Screen name="RentByHour" component={RentByHour} options={{headerShown: false}} />
    <Stack.Screen name="VerifyRides" component={VerifyRides} options={{headerShown: false}} />
    <Stack.Screen name="Travel" component={Travel} options={{headerShown: false}} />
    <Stack.Screen name="GiftCard" component={GiftCard} options={{headerShown: false}} />
    <Stack.Screen name="Drive" component={Drive} options={{headerShown: false}} />
    <Stack.Screen name="Pin" component={Pin} options={{headerShown: false}} />
    <Stack.Screen name="GCard" component={GiftCard} options={{headerShown: false}} />
    <Stack.Screen name="Music" component={Music} options={{headerShown: false}} />
    <Stack.Screen name="Donate" component={Donate} options={{headerShown: false}} />
    <Stack.Screen name="Safety" component={Safety} options={{headerShown: false}} />
    <Stack.Screen name="TravelSearch" component={TravelSearch} />
    <Stack.Screen name="GloPilotTravel" component={TravelStartup} />  
    <Stack.Screen name="Activity" component={Activity} />  
    <Stack.Screen name="TripDetails" component={TripDetails} />  
    <Stack.Screen name="Trusted" component={Trusted} options={{headerShown: false}} /> 
    <Stack.Screen name="Rewards" component={Rewards} options={{headerShown: false}} /> 
    <Stack.Screen name="Tab" component={Tab} /> 
          <Stack.Screen name="SetDefaultTip" component={SetDefaultTip} options={{headerShown: false}}/>  
           <Stack.Screen name="ViewCart2" component={ViewCart2} />  
          <Stack.Screen name="PaymentForHotel" component={PaymentForHotel} />           
          <Stack.Screen name="ReserveDetails" component={ReserveDetails} />    
          <Stack.Screen name="AccessibilityFeature" component={AccessibilityFeature} />      
          <Stack.Screen name="RideHome" component={RideHome} />  
          <Stack.Screen name="SchedulePickupNowFood" component={SchedulePickupNowFood} /> 
            
          <Stack.Screen name="HotelDetails" component={HotelDetails} />  
          <Stack.Screen name="RentaCar7" component={RentaCar7} />    
          <Stack.Screen name="DriveWithGlopilot3" component={DriveWithGlopilot3} options={{headerShown: false}}/> 
          <Stack.Screen name="SetDefaultTip2" component={SetDefaultTip2} options={{headerShown: false}}/>
          <Stack.Screen name="Notification" component={Notification} options={{headerShown: false}}/>
          <Stack.Screen name="ManageTrustedContacts2" component={ManageTrustedContacts2} options={{headerShown: false}}/>     
          <Stack.Screen name="Reward" component={Reward} options={{headerShown: false}}/>
          <Stack.Screen name="DriveWithGlopilot4" component={DriveWithGlopilot4} options={{headerShown: false}}/>
          
      <Stack.Screen name="DriveWithGlopilot5" component={DriveWithGlopilot5} options={{headerShown: false}}/>
        <Stack.Screen name="DriveWithGlopilot6" component={DriveWithGlopilot6} options={{headerShown: false}}/>
          <Stack.Screen name="DriveWithGlopilot7" component={DriveWithGlopilot7} options={{headerShown: false}}/>
          <Stack.Screen name="ManageTrustedContacts" component={ManageTrustedContacts} options={{headerShown: false}}/>
          <Stack.Screen name="ManageTrustedContacts1" component={ManageTrustedContacts1} options={{headerShown: false}}/>           
                 


     </Stack.Navigator>
     </GestureHandlerRootView>
     </NavigationContainer>
);

export default AppStack;
