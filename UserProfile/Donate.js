import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Head from '../Head';

const DonateScreen = ({ navigation }) => {
  const LinkWithIcon = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };

    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <Text style={[styles.linkText, { flex: 1 }]}>{text}</Text>
        <FontAwesome5 name="chevron-right" style={styles.arrowIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Head title="Donate" />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Millions lack access to transportation and basic needs</Text>
        <Text style={styles.subtitle}>
          Your small change matters. Round up the cost of your ride to the nearest dollar and donate
          the difference.
        </Text>

        <Text style={styles.sectionTitle}>Choose an organization</Text>
        <Text style={styles.subtitle}>Round up & Donate Partners</Text>

        <View style={styles.organizationContainer}>
          {/* Organization 1 */}
          <View style={styles.organizationItem}>
            {/* Add organization image or content */}
             </View>

          <View style={styles.organizationItem}>
            {/* Add organization image or content */}
              </View>



          {/* Organization 2 */}
          <View style={styles.organizationItem}>
            {/* Add organization image or content */}
              </View>
        </View>


        
        <View style={styles.organizationContainer}>
          {/* Organization 1 */}
          <View style={styles.organizationItem}>
            {/* Add organization image or content */}
            </View>

          <View style={styles.organizationItem}>
            {/* Add organization image or content */}
        </View>

          

          {/* Organization 2 */}
          <View style={styles.organizationItem}>
            {/* Add organization image or content */}
         </View>
        </View>

        

        <View style={styles.linksContainer}>
          <LinkWithIcon text="Learn more about Glopilots" screenName="MyInformation" />
          <LinkWithIcon text="Support" screenName="Payment" />
          <LinkWithIcon text="Terms & Conditions" screenName="Wallet" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: "#f8f8f8"
  },
  title: {
    fontFamily: 'Uber Move',
    fontWeight: 'bold',
    fontSize: 24,
    color: 'rgba(13, 19, 23, 255)',
    marginVertical: 21,
  },
  subtitle: {
    fontFamily: 'Uber Move',
    fontWeight: '400',
    fontSize: 18,
    color: 'rgba(84, 84, 84, 255)',
    marginVertical: 3,
  },
  sectionTitle: {
    fontFamily: 'Uber Move',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'rgba(13, 19, 23, 255)',
    marginVertical: 14,
  },
  organizationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  organizationItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100, // Set the desired width
    height: 100, // Set the desired height
    borderRadius: 50, // Half of the width or height to create a circle
    backgroundColor: 'rgba(255, 255, 255, 255)',
    marginVertical: 6,
    flexDirection: 'column',
  },
  
  
  organizationText: {
    fontFamily: 'Uber Move',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    color: 'rgba(23, 23, 23, 255)',
    marginTop: 6,
  },
  linksContainer: {
   // paddingLeft: 20,
  //  paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  linkText: {
    fontSize: 20,
    marginBottom: 10,
  },
  arrowIcon: {
    // Add styles for the arrow icon if needed
  },
});

export default DonateScreen;
