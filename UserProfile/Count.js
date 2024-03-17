import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback, FlatList, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the appropriate icon library (e.g., FontAwesome)

const countries = [
    { name: 'Afghanistan', flag: '🇦🇫' },
    { name: 'Albania', flag: '🇦🇱' },
    
    { name: 'Yemen', flag: '🇾🇪' },
    { name: 'Zambia', flag: '🇿🇲' },
    { name: 'Zimbabwe', flag: '🇿🇼' },
  ];
  

const Count = ({ onValueChange }) => {
    // Initialize the state with the first country as the default
    const [visible, setVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(countries[0].name);
  
    const handleToggleDropdown = () => {
      setVisible(!visible);
    };
  
    const handleSelectItem = (item) => {
      onValueChange(item.name);
      setSelectedItem(item.name);
      setVisible(false);
    };
  
    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.modalItem} onPress={() => handleSelectItem(item)}>
        <View style={styles.flagCircle}>
          <Text style={styles.flagText}>{item.flag}</Text>
        </View>
        <Text style={styles.modalItemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View>
        <TouchableOpacity style={styles.dropdownIconContainer} onPress={handleToggleDropdown}>
          <Text style={styles.modalItemText}>{selectedItem}</Text>
          <Text style={styles.selectedFlag}>{countries.find((item) => item.name === selectedItem)?.flag}</Text>
          <Icon name="chevron-down" size={16} />
        </TouchableOpacity>
        <Modal visible={visible} transparent={true}>
          <TouchableWithoutFeedback onPress={handleToggleDropdown}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>
  
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeading}>Select Country</Text>
            <FlatList data={countries} renderItem={renderItem} keyExtractor={(item) => item.name} />
          </View>
        </Modal>
      </View>
    );
  };
  const { height } = Dimensions.get('window');
  
  const styles = StyleSheet.create({
    dropdownIconContainer: {
      borderWidth: 1,
      backgroundColor: '#EEEEEE',
      borderColor: '#EEEEEE',
      paddingHorizontal: 10,
      marginHorizontal: 20,
      height: 56,
      maxWidth: 388,
      borderRadius: 5,
      marginRight: 20,
      flexDirection: 'row', // Add flexDirection to align icon with text horizontally
      justifyContent: 'space-between', // Add justifyContent to create space between text and icon
      alignItems: 'center', // Add alignItems to vertically center the content
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
      backgroundColor: 'white',
      maxHeight: height,
      marginTop: 'auto',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingVertical: 20,
    },
    modalHeading: {
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 10,
    },
    modalItem: {
      paddingHorizontal: 10,
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#EEEEEE',
      
    },
    modalItemText: {

      fontSize: 20,

    },
    flagCircle: {
      backgroundColor: '#EEEEEE',
      width: 15,
      height: 15,
      borderRadius: 10,
      fontSize: 15, // Adjust the font size to fit the flag inside the circle
      textAlign: 'center', // Center the flag horizontally and vertically
      lineHeight: 15,
      zIndex: 1, // Center the flag vertically
      // Add any other necessary styling for the flag, such as background color or font color
    },
    flagText: {
      fontSize: 24,
    },
    selectedFlag: {
      marginRight: 10,
      fontSize: 16,
      borderRadius: 10,
      width: 12,
      height: 12,
      left: 90,
    },
  });
  
  export default Count;
  