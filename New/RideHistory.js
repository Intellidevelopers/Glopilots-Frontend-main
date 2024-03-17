import { Alert, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Header from './components/Header';
import AllRideHistoryTab from './AllRideHistoryTab';
import PersonalRideHistoryTab from './PersonalRideHistoryTab';
import BusinessRideHistoryTab from './BusinessRideHistoryTab';
import { shareAsync } from 'expo-sharing';
import { printToFileAsync } from 'expo-print';
import { RIDE_DATA } from './data/data';

const Tab = createMaterialTopTabNavigator();

const RideHistory = ({ navigation }) => {
  const [rideData, setRideData] = React.useState(RIDE_DATA);

  const html = `
            <html>
            <head>
            <style>
            .container{

            }
            .section{
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            }
            .leftWrapper{
                display:flex;
                flex-direction:row;
                width:100%;
            align-items:center;
            }
            .userImage{
                width: 100px;
                height:100px;
                border-radius:50px;
            }
            .rideContent{
                padding-left:3px;
                width:60%;
                margin-left:20px
            }
            .tripDate{
                font-size:30
            }
            </style>
            </head>
            <body>

            ${rideData
              .map(
                (rideItem, index) => `

                <div key="${index}">
                        <h2 class="tripDate">${rideItem.tripDate}</h2>
                        <div class="section">
                        <div class="leftWrapper">
                        <img src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png" class="userImage" />

                        <div class="rideContent">
                        <span style="font-size:30">Wait & save ride</span>
                        <div style="padding:3px"></div>
                        <span style="font-size:30">$${rideItem.tripTime} 13 min</span>
                        </div>
                        </div>
                        <span style="font-size:30">$${rideItem.tripAmount}</span>
                    </div>
                    <hr />
                </div>
                
            `
              )
              .join('')}

            

            </body>
            </html>
        `;
  const rightFun = async () => {
    //Alert.alert("Export", "Write the export logic here :) ")
    const file = await printToFileAsync({
      html: html,
      base64: false,
    });

    shareAsync(file.uri);
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30 }}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title={'Ride History'}
          rightNavLabel={'Export'}
          RightFun={rightFun}
        />

        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#f8f8f8f8',
            },
          }}>
          <Tab.Screen name="All" component={AllRideHistoryTab} />
          <Tab.Screen name="Personal" component={PersonalRideHistoryTab} />
          <Tab.Screen name="Business" component={BusinessRideHistoryTab} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default RideHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8f8',
  },
});
