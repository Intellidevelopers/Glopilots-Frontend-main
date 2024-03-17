import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button, Icon } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Head from '../Head';
import gift from '../assets/icons/gift-box.png';
import visa from '../assets/icons/visa.png';
import apple from '../assets/icons/apple.png';
import voucher from '../asset/Voucher.png';
import business from '../assets/icons/business.png';
import info from '../assets/icons/info.png';
import infor from '../assets/icons/infor.png';
import aesp from '../assets/icons/aexp.png';
import ccard from '../assets/icons/ccard.png';
import cone from '../assets/icons/cone.png';
import plus from '../assets/icons/plus-black.png';
import Svg, { Circle, Rect } from 'react-native-svg';



const   Wallet = ({navigation}) => {
 
  const logDetails = (detail) => {
    console.log(detail);
  };
  
  
  const LinkWithIcon = ({ iconName, text, screenName, title }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };
  
    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <View style={styles.titleContainer}>
          <FontAwesome5 name={iconName} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <FontAwesome5 name="chevron-right" style={styles.PdIcon} />
            <Text style={styles.linkText}>{text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Apple = ({ iconName, text, screenName, title }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };
  
    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <View style={styles.titleContainer}>
        <Image source={apple}  style={styles.icon} resizeMode="contain" />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <FontAwesome5 name="chevron-right" style={styles.PdIcon} />
            <Text style={styles.linkText}>{text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  
  const LinskWithIcon = ({ iconName, text, screenName }) => {
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

  const Personal = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };

    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <Image source={info}  style={styles.icon} resizeMode="contain" />
        <Text style={[styles.linkText, { flex: 1 }]}>{text}</Text>
        <FontAwesome5 name="chevron-right" style={styles.arrowIcon} />
      </TouchableOpacity>
    );
  };

  const Business = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };

    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <Image source={business}  style={styles.icon} resizeMode="contain" />
        <Text style={[styles.linkText, { flex: 1 }]}>{text}</Text>
        <FontAwesome5 name="chevron-right" style={styles.arrowIcon} />
      </TouchableOpacity>
    );
  };


  const Voucher = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };

    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <Image source={voucher}  style={styles.icon} resizeMode="contain" />
        <Text style={[styles.linkText, { flex: 1 }]}>{text}</Text>
        <FontAwesome5 name="chevron-right" style={styles.arrowIcon} />
      </TouchableOpacity>
    );
  };

  const Cards = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };

    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <Image source={cone}  style={styles.icon} resizeMode="contain" />
        <Text style={[styles.linkTextc, { flex: 1 }]}>{text}</Text>
        <FontAwesome5 name="chevron-right" style={styles.arrowIcon} />
      </TouchableOpacity>
    );
  };
  const Carde = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };

    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <Image source={aesp}  style={styles.icon} resizeMode="contain" />
        <Text style={[styles.linkTextc, { flex: 1 }]}>{text}</Text>
        <FontAwesome5 name="chevron-right" style={styles.arrowIcon} />
      </TouchableOpacity>
    );
  };

  const Cad = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };

    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <Image source={ccard}  style={styles.icon} resizeMode="contain" />
        <Text style={[styles.linkTextc, { flex: 1 }]}>{text}</Text>
        <FontAwesome5 name="chevron-right" style={styles.arrowIcon} />
      </TouchableOpacity>
    );
  };









  return (
    <View style={{ flex: 1 }}>
      <Head title="Wallet" navigation={navigation} />
      <ScrollView>
        <View>
          <View style={styles.badgecontainer}>
          <View style={styles.card}>
              <View style={styles.circleContainer}>
                <View style={[styles.circle, styles.circleTopRight]} />
                <View style={[styles.circle, styles.circleBottom]} />
                <View style={[styles.circle, styles.circleBottomRight]} />
              </View>
              <Text style={styles.gloPilotsCash}>GloPilots</Text>
              <Text style={styles.gloPilotsAmount}>$24.56</Text>
              <FontAwesome5 name="chevron-right" style={styles.cardIcon} />
              <Text style={styles.autofill}>
              <Image source={infor} style={styles.icon} resizeMode="contain" /> 
              <Text style={styles.gloPilotsAuto}>Auto-fill is off</Text>
              </Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddCash')}>
                  <FontAwesome5 name="plus" style={styles.buttonIcon} />
                  <Text style={styles.buttonTexts}>Add Funds</Text>
                </TouchableOpacity>
               
              </View>
            </View>


            <View style={styles.wcard}>
              <View style={styles.giftcontainer}>
              <Text style={styles.giftcardtext}>Send a gift</Text>
              <Image source={gift} style={styles.imagecontrol} resizeMode="contain" />
              </View>
              <Text style={styles.giftcardtexts}>You can now buy an instant gift card for use on GloPilots</Text> 
              <FontAwesome5 name="chevron-right" style={styles.cardIcon} />
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.giftButton} onPress={() => {}}>
                  <Text style={styles.buttonText}>Send gift card</Text>
                </TouchableOpacity>
              </View>
            </View>
            
        

           

        
          <Text style={styles.leftxTitle}>Payment methods</Text>
          </View>
        </View>
        <View style={styles.linksContainer}>
          <LinskWithIcon iconName="cc-visa" text="****1590" screenName="CreditCardPayment" />
          <Apple iconName="apple-pay" text="Apple Pay" screenName="Payment" /> 
          <View style={styles.lef}>
            <TouchableOpacity style={styles.lefx} onPress={() => {}}>
             <Image source={plus}  style={styles.plus} resizeMode="contain" /> 
              <Text>{'Add payment method or redeem gift card'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.badgecontainer}>
          <Text style={styles.leftTitle}>Ride Profiles</Text>
        </View>
        <View style={styles.linksContainer}>
          <Personal iconName="cc-visa" text="Personal" screenName="CreditCardPayment" />
          <Business iconName="apple-pay" text="Business" screenName="Payment" /> 
          <Business iconName="apple-pay" text="Add another business profile" screenName="Payment" /> 
          <View style={styles.lef}>
          </View>
        </View>

        <View style={styles.badgecontainer}>
          <Text style={styles.leftTitle}>Vouchers</Text>
        </View>
        <View style={styles.linksContainer}>
          <Voucher iconName="cc-visa" text="Voucher" screenName="CreditCardPayment" />
          </View>
          <View style={styles.lef}>
            <TouchableOpacity style={styles.lefxaa} onPress={() => {}}>
            <Text style={styles.bblinks}> <Image source={plus}  style={styles.plus} resizeMode="contain" />{'  Add Voucher code'}</Text>
            </TouchableOpacity>
          </View>


        <View style={styles.badgecontainer}>
          <Text style={styles.leftTitle}>Payment Offers</Text>
        </View>
        <View style={styles.linksContainer}>
          <Cards iconName="cc-visa" text="Capital One Savor and Quick Benefits" screenName="e" />
          <Carde iconName="cc-visa" text="American Express Corporate Card benefit" screenName="CreditCardPayment" />
          <Carde iconName="cc-visa" text="American Express Platinum benefit" screenName="CreditCardPayment" />
          <Carde iconName="cc-visa" text="American Express Gold benefit" screenName="CreditCardPayment" />
          <Cad iconName="cc-visa" text="Unlimited 3% back with Apple Card" screenName="CreditCardPayment" />
          </View>
          <View style={styles.lef}>
            <TouchableOpacity style={styles.lefxaa} onPress={() => {}}>
              <Text style={styles.bblinks}><Image source={plus}  style={styles.plus} resizeMode="contain" />{'  Add Voucher code'}</Text>
            </TouchableOpacity>
          </View>
        

        <View style={styles.badgecontainer}>
          <Text style={styles.leftTitle}>Promotions</Text>
        </View>
        <View style={styles.linksContainer}>
           </View>
          <View style={styles.lef}>
            <TouchableOpacity style={styles.lefxaa} onPress={() => {}}>
              <Text style={styles.bblinks}><Image source={plus}  style={styles.plus} resizeMode="contain" />{'  Add Promo code'}</Text>
            </TouchableOpacity>
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
    flex: 1,
  },
  touchableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icona: {
    marginLeft: 10,
    paddingRight: 0,
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
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },
  giftcontainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  linkTextc: {
    fontSize: 16,
  },

  imagecontrol: {
   width: 56,
   height: 36,
   marginRight: 15,
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
  wcard: {
    width: '100%',
    height: 194,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginTop: 15, 
    borderRadius: 9,
    borderColor: '#EEEEEE',
    borderWidth: 1,
  },
  linkText: {
    fontSize: 20,
  },
  arrowIcon: {
    marginLeft: 10, 
    textAlign: 'right',
  },
  lef: {

    textAlign: 'left',
    backgroundColor: '#fff',
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
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
  },

  leftxTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
    marginTop: 10,
  },
  leftLinks: {
    fontSize: 16,
    marginLeft: 12,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 0,
  },
  gloPilotsCash: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  addButton: {
    backgroundColor: '#4460ef',
    borderRadius: 25,
    paddingVertical: 10,
    height: 48,
    flexDirection: 'row', 
    marginRight: 10,
   
    paddingHorizontal: 35,
  },
  giftcardtext: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 10,
    color: 'black',
  },

  
  autofill: {
   paddingBottom: 15,
  },
  giftcardtexts: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 15,
    color: 'black',
  },
  gloPilotsAmount: {
    fontSize: 22,
  
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  gloPilotsAuto: {
    fontSize: 16,

    color: '#FFFFFF',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  giftButton: {
    backgroundColor: '#EEEEEE',
    borderRadius: 25,
    paddingVertical: 10,
    flexDirection: 'row', 
    marginRight: 10,
    marginLeft: 10,
    paddingHorizontal: 20,
  },
  refillButton: {
    backgroundColor: '#ffffff',
    flexDirection: 'row', 
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 35,
  },
  buttonText: {
    color: '#0d1317',
    fontSize: 18,
  },
  buttonTexts: {
    color: '#fff',
    fontSize: 18,
    position: 'relative',
  },
  buttonAddText: {
    color: 'black',
    fontSize: 16,
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

  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
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
  plus: {
    width: 16,
    height: 16,
    marginRight: 15
  },
  giftIcon: {
    fontSize: 24,
    marginRight: 20,
    color: 'green',

  },
  bblinks: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  lefx: {
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    paddingVertical: 10,
    width: '90%',
    flexDirection: 'row',
    marginRight: 10,
    paddingLeft: 10,
 
  },
});

export default  Wallet;
