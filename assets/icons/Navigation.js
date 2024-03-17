import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import Welcome from './src/Auth/Welcome';
import Login from './src/Auth/Login/Login';
import Register1 from './src/Auth/Register/Register1';
import Register2 from './src/Auth/Register/Register2';
import Register3 from './src/Auth/Register/Register3';
import Home from './src/Main/Home/Home';
import Categories from './src/Main/Category/Categories';
import Add from './src/Main/Add/Add';
import Cart from './src/Main/Cart/Cart';
import Profile from './src/Main/Profile/Profile';
import { AntDesign, FontAwesome5, Fontisto, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { Appcolor } from './UTILS/Color';
import Product from './src/Main/Home/Product';
import Buynow from './src/Main/Home/Buynow';
import Personal from './src/Main/Profile/Personal';
import ChangeEmail from './src/Main/Profile/ChangeEmail';
import ChangePassword from './src/Main/Profile/ChangePassword';
import Notifications from './src/Main/Home/Notifications';
import WelcomeUser from './src/Auth/Register/Welcome';
import Passcoder from './src/Auth/Login/Passcoder';
import Addadress from './src/Main/Profile/Addadress';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

function AppTab() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { height: 60, borderTopWidth: 0, shadowColor: null, borderWidth: 0, shadowRadius: 0, shadowOpacity: 0, borderTopColor: "#fff" },
        }}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarLabel: 'Home',
                tabBarInactiveTintColor: "grey",
                tabBarActiveTintColor: Appcolor.blue,
                tabBarLabelStyle: { fontFamily: "inter-bold" },
                tabBarIcon: ({ color, size, focused }) => (
                    <Octicons name="home" size={25} color={focused ? Appcolor.blue : "grey"} />
                ),
            }} />
            <Tab.Screen name='Cat' component={Categories} options={{
                tabBarLabel: 'Categories',
                tabBarInactiveTintColor: "grey",
                tabBarActiveTintColor: Appcolor.blue,
                tabBarLabelStyle: { fontFamily: "inter-bold" },
                tabBarIcon: ({ color, size, focused }) => (
                    <MaterialCommunityIcons name="view-grid-plus-outline" size={25} color={focused ? Appcolor.blue : "grey"} />
                ),
            }} />
            <Tab.Screen name='Add' component={Add} options={{
                tabBarLabel: '',
                tabBarInactiveTintColor: "grey",
                tabBarActiveTintColor: Appcolor.blue,
                tabBarIcon: ({ color, size, focused }) => (
                    <AntDesign name="pluscircle" size={35} color={focused ? Appcolor.blue : "grey"} />
                ),
            }} />
            <Tab.Screen name='Cart' component={Cart} options={{
                tabBarLabel: 'Cart',
                tabBarInactiveTintColor: "grey",
                tabBarActiveTintColor: Appcolor.blue,
                tabBarLabelStyle: { fontFamily: "inter-bold" },
                tabBarIcon: ({ color, size, focused }) => (
                    <Fontisto name="shopping-basket" size={20} color={focused ? Appcolor.blue : "grey"} />
                ),
            }} />
            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarLabel: 'Accont',
                tabBarInactiveTintColor: "grey",
                tabBarActiveTintColor: Appcolor.blue,
                tabBarLabelStyle: { fontFamily: "inter-bold" },
                tabBarIcon: ({ color, size, focused }) => (
                    <FontAwesome5 name="user-circle" size={23} color={focused ? Appcolor.blue : "grey"} />
                ),
            }} />
        </Tab.Navigator>
    )
}

export function Auth() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="Onboard" component={Welcome} /> */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Passcoder" component={Passcoder} />
            <Stack.Screen name="Register1" component={Register1} />
            <Stack.Screen name="Register2" component={Register2} />
            <Stack.Screen name="Register3" component={Register3} />
            <Stack.Screen name="Welcome" component={WelcomeUser} />
        </Stack.Navigator>

    );
}

export function MainApp() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Hydra" component={AppTab} />
            <Stack.Screen name="Notification" component={Notifications} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Address" component={Addadress} />
            <Stack.Screen name="Buynow" component={Buynow} />
            <Stack.Screen name="Personal" component={Personal} />
            <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </Stack.Navigator>
    )
}

function SellTab() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Sell" component={Login} />
        </Stack.Navigator>
    )
}


export function Wrapper() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="MainApp" component={MainApp} />
                <Stack.Screen name="AuthApp" component={Auth} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}