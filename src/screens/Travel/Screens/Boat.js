import React, { useState } from "react";
import { FlatList,StyleSheet,View, Text, TextInput, TouchableOpacity,SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { Calendar } from 'react-native-calendars';
import { useRoute } from '@react-navigation/native';
import Head from "../../Head";



const Boat = ({navigation}) => {
    const [isCalenderModalVisibleWhen, setCalenderModalVisibleWhen] = useState(false);
    const route = useRoute();
    const data = route.params?.data;
    const [status,setStatus] = useState(data);
  

    const toggleCalenderModal = () => {
        setCalenderModalVisibleWhen(!isModalVisible);
      };

 

 
  
                        
    return (
        <SafeAreaView style={{backgroundColor:'#f8f8f8'}}>
            <Head title="Boat Cruise" navigation={navigation} />
         
         <View style={{width:'90%',alignSelf:'center',marginTop:20}}>
                            <View style={{backgroundColor:'#eeeeee',borderRadius:10,padding:10}}>
                                <Text style={{color:'grey',fontSize:13}}>From Where?</Text>
                                <TextInput placeholder={'City'} placeholderTextColor="#000"  style={{fontSize:17}}/>
                            </View>
                            <View style={{backgroundColor:'#eeeeee',borderRadius:10,padding:10,marginTop:15}}>
                                <Text style={{color:'grey',fontSize:13}}>To Where?</Text>
                                <TextInput placeholder={'Seaports'} placeholderTextColor="#000"  style={{fontSize:17}}/>
                            </View>
                            <View style={{backgroundColor:'#eeeeee',borderRadius:10,padding:10,marginTop:15}}>
                                <TouchableOpacity onPress={toggleCalenderModal} style={{width:'100%',flexDirection:'row'}}>
                                <View style={{width:'13%',justifyContent:'center'}}>
                                    <Ionicons name="calendar-outline" size={25} color={'#0d1317'} />
                                </View>
                                <View>
                                <Text style={{color:'grey',fontSize:13}}>When</Text>
                                <Text placeholderTextColor="#000"  style={{fontSize:17}}>City or Airport</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                        


                            <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                        
                                <TextInput placeholder={'1 Passenger'} placeholderTextColor="#000"  style={{backgroundColor:'#eeeeee',fontSize:17, width: "100%", borderRadius:10,padding:10,marginTop:15,}}/>
                              
                                
                            </View>

                            <TouchableOpacity style={{ width: '100%', backgroundColor: '#4460ef', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10, marginTop: 20 }}  onPress={() => navigation.navigate("TravelExplore")}>
                                        <Text style={{ color: '#fff', fontSize: 17 }}>Search</Text>
                                    </TouchableOpacity>

                            {/* Calender Modal */}
                            <Modal isVisible={isCalenderModalVisibleWhen} style={{ width: '100%', marginLeft: 0, marginBottom: 0 }} onBackButtonPress={toggleCalenderModal}>
                                <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%' }}>
                                <View style={{ padding: 15, backgroundColor: '#fff', width: '100%', height: '90%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                                    {/* Inner code of Modal */}
                                    <View style={{ flexDirection: 'row', paddingBottom: 10, borderBottomColor: '#c8c8c8', borderBottomWidth: 2, width: '100%' }}>
                                    <Text onPress={toggleCalenderModal} style={{ width: '33.33%', textAlign: 'left' }}>
                                        <Ionicons name="close" size={30} color={'red'} />
                                    </Text>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', width: '33.33%', textAlign: 'center' }}>Date</Text>
                                    <Text style={{ width: '33.33%', textAlign: 'right' }}></Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10, paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: '#c8c8c8' }}>
                                    <Text style={{ width: '33.333%', textAlign: 'left', fontSize: 17, fontWeight: 'bold' }}>Start Date</Text>
                                    <Text style={{ width: '33.333%', textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}><Ionicons name="arrow-forward-outline" size={30} color={'#000'} /></Text>
                                    <Text style={{ width: '33.333%', textAlign: 'right', fontSize: 17, fontWeight: 'bold' }}>End Date</Text>
                                    </View>
                                    <View>
                                    <Calendar
                                        markingType={'period'}
                                        markedDates={{
                                        '2023-08-21': { startingDay: true, color: 'lightblue' },
                                        '2023-08-22': { selected: true, color: 'lightblue' },
                                        '2023-08-23': { selected: true, color: 'lightblue' },
                                        '2023-08-24': { selected: true, color: 'lightblue' },
                                        '2023-08-25': { selected: true, color: 'lightblue' },
                                        '2023-08-26': { endingDay: true, color: 'lightblue' },
                                        }}
                                    />
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                    <TouchableOpacity style={{ width: '100%', backgroundColor: '#4460ef', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }} onPress={() => navigation.navigate("TravelSearch")}>
                                        <Text style={{ color: '#fff', fontSize: 17 }}>Done</Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                                </View>
                            </Modal>
                        </View>
        </SafeAreaView>
    );
                                    }
const styles = StyleSheet.create({
    r2:{
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        borderRightWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
    },
    r1:{
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderLeftWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
    },
    btnActive:{
        backgroundColor:'#435eea',
        color:'#fff'
    },
    btnActive2:{
        backgroundColor:"#e9e9e9",
    },
    i3:{
        borderTopWidth:1,         
        borderBottomWidth:1,         
    },
    r3:{
    }
});
export default Boat;