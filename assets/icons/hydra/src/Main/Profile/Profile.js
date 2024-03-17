import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome5, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { Appcolor } from '../../../UTILS/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RequireAuth from '../../../Components/RequireAuth';
import { BaseUrl } from '../../../UTILS/Urls';

export default function Profile() {
  const nav = useNavigation();
  const [checkUser, setCheckUser] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false)
  const [userToken, setUserToken] = useState('');
  const [currentUser, setCurrentUser] = useState({})


  //get current user items
  async function GetCurrentUser() {
    fetch(`${BaseUrl}/user/profile`, {
      method: "GET",
      headers: {
        'hydra-express-access-token': userToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(async (res) => {
      const respone = await res.json();
      setCurrentUser(respone.data)
    })
  }


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      if (value !== null) {
        setCheckUser(true)
        setUserToken(value)
      } else {
        setCheckUser(false)
      }
    } catch (e) {
      console.warn(e)
    }
  }

  useEffect(() => {
    getData();
    GetCurrentUser();
  }, [userToken, checkUser]);

  async function Logout() {
    setLogoutLoading(true)
    try {
      await AsyncStorage.removeItem('userToken').then((res) => {
        setLogoutLoading(false)
        getData()
      });
    } catch (e) {
      alert('Error loging in you out')
    }
  }


  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 50, margin: 15, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
        <View>
          <Text style={{ fontFamily: 'inter-bold', fontSize: 25 }}>Account</Text>
          <View style={{ height: 2, width: 60, backgroundColor: "#000", borderRadius: 100 }} />
        </View>
        <TouchableOpacity>
          <Feather name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {checkUser ? (
        <>
          <ScrollView>
            <View style={styles.wrapper}>

              <TouchableOpacity activeOpacity={0.5} onPress={() => {
                nav.navigate("Personal", { firstname: currentUser?.firstname, lastname: currentUser?.lastname, address: currentUser?.address, number: currentUser?.phone_number, email: currentUser?.email, gender: currentUser?.gender, dob: currentUser?.dob, ref: currentUser?.referral_count })
              }} style={{ margin: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View>
                  <Image source={{ uri: currentUser?.photo }} style={{ width: 80, height: 80, borderRadius: 100 }} />
                </View>
                <View style={{ flex: 1, marginLeft: 20 }}>
                  <Text style={{ fontFamily: "inter-medium", fontSize: 18 }}>{currentUser?.firstname}{" "}{currentUser?.lastname}</Text>
                  <Text style={{ fontFamily: "inter-light", fontSize: 13 }}>Personal Details</Text>
                </View>
                <TouchableOpacity>
                  <Entypo name="chevron-right" size={24} color="grey" />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30 }}>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", padding: 15, marginBottom: 20 }}>
                <View>
                  <Text style={{ color: Appcolor.blue, fontFamily: 'inter-bold', fontSize: 18 }}>Affiliate Link</Text>
                  <Text>{currentUser?.referral_link}</Text>
                </View>
                <View>
                  <MaterialCommunityIcons name="content-copy" size={24} color="black" />
                </View>
              </View>

              <View style={styles.section1}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 15 }}>
                  <Text style={{ fontFamily: "inter-bold" }}>Business Information</Text>
                  <TouchableOpacity>
                    <Entypo name="chevron-right" size={24} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity onPress={() => {
                nav.navigate("ChangeEmail")
              }} style={[styles.section1, { height: 50 }]}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 15 }}>
                  <Text style={{ fontFamily: "inter-bold" }}>Change e-mail</Text>
                  <TouchableOpacity>
                    <Entypo name="chevron-right" size={24} color="grey" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>

              <View style={[styles.section1, { height: 170 }]}>
                <TouchableOpacity onPress={() => {
                  nav.navigate("ChangePassword")
                }} style={{ flexDirection: "row", justifyContent: "space-between", margin: 15 }}>
                  <Text style={{ fontFamily: "inter-bold" }}>Change Password</Text>
                  <TouchableOpacity>
                    <Entypo name="chevron-right" size={24} color="grey" />
                  </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ height: 2, backgroundColor: "#eee", margin: 15, marginBottom: -1, marginTop: -1 }} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 15 }}>
                  <Text style={{ fontFamily: "inter-bold" }}>Verify Account</Text>
                  <TouchableOpacity>
                    <Entypo name="chevron-right" size={24} color="grey" />
                  </TouchableOpacity>
                </View>
                <View style={{ height: 2, backgroundColor: "#eee", margin: 15, marginBottom: -1, marginTop: -1 }} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 15 }}>
                  <Text style={{ fontFamily: "inter-bold" }}>Security</Text>
                  <TouchableOpacity>
                    <Entypo name="chevron-right" size={24} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ backgroundColor: "#fff", height: 110 }}>
                <Text style={{ fontFamily: "inter-bold", margin: 15 }}>Card and Payments</Text>
                <View style={{ flexDirection: "row", margin: 15, marginTop: -5 }}>
                  <TouchableOpacity>
                    <Ionicons name="md-card-outline" size={35} color="black" />
                    <Text style={{ fontFamily: "inter-medium", textAlign: "center" }}>cards</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginLeft: 20 }}>
                    <AntDesign name="customerservice" size={35} color="black" />
                    <Text style={{ fontFamily: "inter-medium", textAlign: "center" }}>Help</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                disabled={logoutLoading}
                onPress={Logout}
                style={{ height: 45, backgroundColor: "red", justifyContent: 'center', alignItems: "center", marginTop: 20, margin: 15, borderRadius: 10 }}>
                {logoutLoading ? (
                  <ActivityIndicator color='#fff' size={20} />
                ) : (
                  <Text style={{ color: "#fff", fontFamily: 'inter-medium' }}>Logout</Text>
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      ) : (
        <RequireAuth />
      )}
    </View>

  )
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    backgroundColor: "#fff"
  },
  section1: {
    height: 50,
    backgroundColor: "#fff",
    marginBottom: 10,
  }
})