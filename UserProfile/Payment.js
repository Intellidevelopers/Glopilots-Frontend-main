import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button, Icon } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Head from '../Head';
import infor from '../assets/icons/infor.png';
import info from '../assets/icons/info.png';
import business from '../assets/icons/business.png';
import refill from '../assets/icons/refill.png';
import plus from '../assets/icons/plus.png';
import visa from '../assets/icons/visa.png';
import apple from '../assets/icons/apple.png';
import addpass from '../assets/icons/addpass.png';
import historys from '../assets/icons/history.png';
import frequency from '../assets/icons/frequency.png';
import PaymentCard from './PaymentCard';
import { useSelector, useDispatch } from 'react-redux';

const Payment = () => {
  const navigation = useNavigation();
  const logDetails = (detail) => {
    console.log(detail);
  };
  const wallet = useSelector(state => state.wallet);
  
  const LinkWithIcon = ({ iconName, text, screenName, title }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };
  
    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <Image source={info} style={styles.imagecontrols} resizeMode="contain" />
        <View  style={[styles.linkText, { flex: 1 }]}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title} </Text>
            <Text style={styles.linkText}>{text}</Text>
            </View>
            <FontAwesome5 name="chevron-right" style={styles.arrowIcons} />
       
           
       
         
        </View>
      </TouchableOpacity>
    );
  };
  const BLinkWithIcon = ({ iconName, text, screenName, title }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };
  
    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <Image source={business} style={styles.imagecontrols} resizeMode="contain" />
        <View  style={[styles.linkText, { flex: 1 }]}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title} </Text>
            <Text style={styles.linkText}>{text}</Text>
            </View>
            <FontAwesome5 name="chevron-right" style={styles.arrowIcons} />
       
           
       
         
        </View>
      </TouchableOpacity>
    );
  };
  
  const Pass = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };
  
    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
          <Image source={addpass} style={styles.icona} resizeMode="contain" />
        <View  style={[styles.linkText, { flex: 1 }]}>
          <View style={styles.textContainer}>
           
            <Text style={[styles.leftLinks,]}>{text}</Text>
            </View>
            <FontAwesome5 name="chevron-right" style={styles.arrowIcons} />
       
           
       
         
        </View>
      </TouchableOpacity>
    );
  };
  const Frequency = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };
  
    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
          <Image source={frequency} style={styles.icona} resizeMode="contain" />
        <View  style={[styles.linkText, { flex: 1 }]}>
          <View style={styles.textContainer}>
           
            <Text style={[styles.leftLinks,]}>{text}</Text>
            </View>
            <FontAwesome5 name="chevron-right" style={styles.arrowIcons} />
       
           
       
         
        </View>
      </TouchableOpacity>
    );
  };

  const AddPass = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };
  
    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
          <Image source={historys} style={styles.icona} resizeMode="contain" />
        <View  style={[styles.linkText, { flex: 1 }]}>
          <View style={styles.textContainer}>
           
            <Text style={[styles.leftLinks,]}>{text}</Text>
            </View>
            <FontAwesome5 name="chevron-right" style={styles.arrowIcons} />
       
           
       
         
        </View>
      </TouchableOpacity>
    );
  };

  const ALinskWithIcon = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };

    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <Image source={apple}  style={styles.icon} resizeMode="contain" />
        <Text style={[styles.linkText, { flex: 1 }]}>{text}</Text>
        
        <FontAwesome5 name="chevron-right" style={styles.arrowIcon} />
      </TouchableOpacity>
    );
  };

  const VLinskWithIcon = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };

    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
         <Image source={visa}  style={styles.icon} resizeMode="contain" />
        <Text style={[styles.linkText, { flex: 1 }]}>{text}</Text>
        
        <FontAwesome5 name="chevron-right" style={styles.arrowIcon} />
      </TouchableOpacity>
    );
  };



  const LinskWithIcon = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };

    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <FontAwesome5 name={iconName} style={styles.icon} />
        <Text style={[styles.linkText, { flex: 1 }]}>{text}</Text>
        
        <FontAwesome5 name="chevron-right" style={styles.arrowIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <View  style={{ flex: 1 }}>
      <Head title="Payment" navigation={navigation} />
    <ScrollView>
      <View>
        <View style={styles.badgecontainer}>
        <View style={styles.card}>
              <View style={styles.circleContainer}>
                <View style={[styles.circle, styles.circleTopRight]} />
                <View style={[styles.circle, styles.circleBottom]} />
                <View style={[styles.circle, styles.circleBottomRight]} />
              </View>
              <Text style={styles.gloPilotsCash}>GloPilots Cash</Text>
              <Text style={styles.gloPilotsAmount}>$ {wallet}</Text>
              <FontAwesome5 name="chevron-right" style={styles.cardIcon} />
              <Text style={styles.gloPilotsAuto}> <Image source={infor} style={styles.imagecontrol} resizeMode="contain" /> Auto-fill is off</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddCash')}>
                <Image source={plus} style={styles.imagecontrols} resizeMode="contain" />
                
                  <Text style={styles.buttonText}>Add Cash</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.refillButton} onPress={() => navigation.navigate('Refill')}>
                <Image source={refill} style={styles.imagecontrols} resizeMode="contain" />
                  <Text style={styles.buttonAddText}>Auto Refill</Text>
                </TouchableOpacity>
              </View>
            </View>

         
            <Text style={styles.left}>Payment defaults</Text>
          </View>
        </View>
        <View style={styles.linksContainer}>
          <LinkWithIcon iconName="user" text="Visa *1590" title="Personal" screenName="" />
          <BLinkWithIcon iconName="briefcase" text="Set up business profile" title="Business" screenName="AddBusinessProfile" />
        </View>




        
        <View style={styles.badgecontainer}>
          <Text style={styles.leftTitle}>Payment methods</Text>
        </View>
        <View style={styles.linksContainer}>
          <VLinskWithIcon iconName="cc-visa" text="••••1590" screenName="CreditCardPayment" />
          <ALinskWithIcon iconName="apple-pay" text="Apple Pay" screenName="" /> 
          <View style={styles.lef}>
            <TouchableOpacity style={styles.lefx} onPress={() => navigation.navigate('Method')}>
              <Text> <FontAwesome5 name="plus" size={12} style={styles.icony} />  {'Add payment method'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.badgecontainer}>
          <Text style={styles.left}>Add GloPilots pass</Text>
        </View>
       
<View style={styles.badgecontainer}>

          <Pass iconName="plus" text="Add GloPilots pass"  screenName="Pass" />
          <AddPass iconName="history" text="Payment History" screenName="History" />
          <Frequency iconName="money-bill-alt" text="Payment Frequency" screenName="Frequency" />

 
</View>

        


    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  imagecontrol: {
   width: 24,
   height: 28,
  },

  
  imagecontrols: {
    width: 20,
    height: 20,
    marginTop: 5,
    marginRight: 10,
   },

  touchableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icona: {
      marginLeft: 10,
      paddingRight: 0,
      width: 24.5,
      height: 24.5,
  },
  icony: {
    marginLeft: 10,
    marginTop: 10,
    paddingRight: 5,
    marginRight: 20,

},
  
  iconx: {
    position: 'absolute',
    top: 10,
    left: 320,
    fontSize: 16,
    color: 'black',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  badgecontainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },
  linksContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    fontSize: 16,
    width: 24,
    height: 24,
    marginRight: 10,
    color: '#888888',
    backgroundColor: '#FFFFFF',
  },
  icons: {
    width: 24,
    height: 24,
    marginRight: 10,
    color: '#888888',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  card: {
    flex: 1,
    width: '100%',
    backgroundColor: '#96a5f6',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
    height: 205,
    marginLeft: 0,
    marginRight: 0,
  },
  linkText: {
    fontSize: 16,
  },
  arrowIcon: {
    marginLeft: 10, 
    textAlign: 'right',
  },
  arrowIcons: {
    marginLeft: 10, 
    textAlign: 'right',
    top: -25,
  },
  lef: {
    marginLeft: 10, 
    textAlign: 'left',
  },
  badgeText: {
    fontSize: 14,
    textAlign: 'center',
  },
  left: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 20,
  },
  leftTitle: {
    fontSize: 16,
    fontWeight: 'bold',
   // marginTop: 15,
    marginLeft: 20,
  },

  
  leftLinks: {
    fontSize: 16,
    marginTop: 12,
    marginLeft: 12,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 0,
  },
  gloPilotsCash: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 1,
  },
  lefx: {
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    paddingVertical: 10,
    flexDirection: 'column', 
    marginRight: 160,
    paddingLeft: 10,
 //   paddingHorizontal: 20,
  },
  gloPilotsAmount: {
    fontSize: 22,
    
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  gloPilotsAuto: {
    fontSize: 16,
    paddingBottom: 4,
   
    color: '#FFFFFF',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  addButton: {
    backgroundColor: '#4460ef',
    borderRadius: 25,
    paddingVertical: 10,
    height: 48,
    width: '48%',
    flexDirection: 'row', 
    justifyContent: 'center',
    marginRight: 10,
    paddingHorizontal: 25,
  },
  
  refillButton: {
    backgroundColor: '#ffffff',
    flexDirection: 'row', 
    borderRadius: 25,
    height: 48,
    width: '48%',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 5,
    justifyContent: 'center',
  },
  buttonAddText: {
    color: 'black',
    fontSize: 18,
    marginTop: 5,
  },
   buttonIcon: {
    fontSize: 16,
    color: '#FFFFFF',
    marginRight: 5,
  },
  buttonAddIcon: {
    fontSize: 16,
    color: 'black',
    marginRight: 5,
  },
  cardIcon: {
    position: 'absolute',
    top: 35,
    right: 10,
    fontSize: 16,
    color: '#FFFFFF',
  },
  PdIcon: {
    position: 'absolute',
    top: 10,
    left: 280,
    fontSize: 16,
    color: 'black',
  },
  
  
  circleContainer: {
    position: 'absolute',
    top: -25, // Adjust the position of the circles vertically
    left: -25, // Adjust the position of the circles horizontally
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: -1, // Added to make the circles appear in the background
  },
  circle: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
  circleTopRight: {
    top: -60,
    right: 25,
  },
  circleBottom: {
    bottom: -180,
    left: 40,
  },
  circleBottomRight: {
//    bottom: 6,
    left: 110,
    top: 30,
  },
  
  
});

export default Payment;
