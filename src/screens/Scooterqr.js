import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import QRCodeDetails from './QRCodeDetails';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function QRCodeScanner({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [isFlashlightOn, setFlashlightOn] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
  };

  const toggleFlashlight = () => {
    setFlashlightOn(!isFlashlightOn);
  };

  const handleBackToScanner = () => {
    setScanned(false);
  };

  if (hasPermission === null) {
    return ;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (scanned) {
    return <QRCodeDetails data={scannedData} onBack={handleBackToScanner} />;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        flashMode={isFlashlightOn ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
      >
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            alignItems: 'flex-start',
            padding: 10,
            borderRadius: 20,
            backgroundColor: 'rgba(238, 238, 238, 0.7)',
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name="times" style={styles.closeIcon} size={16} />
        </TouchableOpacity>
        <View  
        style={{
            position: 'relative',
            
            alignItems: 'center',
            flex: 1,      
            justifyContent: 'flex-start',
          }}>
        <Text style={[styles.scanText, { zIndex: 1 }]}>SCAN TO RIDE</Text>
        </View>
      </Camera>
      {/* Flashlight icon at the end of the camera screen */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 80,
          right: "45%",
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
        //  backgroundColor: 'rgba(238, 238, 238, 0.7)',
          justifyContent: 'center',
        }}
        onPress={toggleFlashlight}
      >
        <MaterialCommunityIcons
          name={isFlashlightOn ? 'flashlight-off' : 'flashlight'}
          style={styles.flashlightIcon}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    position: 'relative',
  },
  scanText: {
    fontSize: 20,
    fontWeight: 'bold',
  //  position: 'absolute',
 //   top: 27,
    textAlign: 'center',
    color: 'white',
  },
  flashlightIcon: {
    color: 'white',
    // Add any additional styles if needed
  },
  closeIcon: {
    color: 'black',
    // Add any additional styles if needed
  },
});


export default QRCodeScanner;
