import React from 'react';
import { StyleSheet, View, Button, Alert, TouchableOpacity, Text, Image } from 'react-native';

export default function MainScreen({ navigation }) {
  const handleEmergencyClick1 = () => {
    Alert.alert('Confirmation', 'Do you want to navigate to Page 1?', [
      {
        text: 'Yes',
        onPress: () => navigation.navigate('Page1'),
      },
      {
        text: 'No',
        onPress: () => console.log('No pressed'),
        style: 'cancel',
      },
    ]);
  };

  const handleEmergencyClick2 = () => {
    Alert.alert('Confirmation', 'Do you want to navigate to Page 2?', [
      {
        text: 'Yes',
        onPress: () => navigation.navigate('Page2'),
      },
      {
        text: 'No',
        onPress: () => console.log('No pressed'),
        style: 'cancel',
      },
    ]);
  };

  const handleEmergencyClick3 = () => {
    Alert.alert('Confirmation', 'Do you want to navigate to Page 3?', [
      {
        text: 'Yes',
        onPress: () => navigation.navigate('Page3'),
      },
      {
        text: 'No',
        onPress: () => console.log('No pressed'),
        style: 'cancel',
      },
    ]);
  };

  const handleEmergencyClick4 = () => {
    Alert.alert('Confirmation', 'Do you want to navigate to Page 4?', [
      {
        text: 'Yes',
        onPress: () => navigation.navigate('Page4'),
      },
      {
        text: 'No',
        onPress: () => console.log('No pressed'),
        style: 'cancel',
      },
    ]);
  };

  const handleEmergencyClick5 = () => {
    Alert.alert('Confirmation', 'Do you want to navigate to Page 5?', [
      {
        text: 'Yes',
        onPress: () => navigation.navigate('Page5'),
      },
      {
        text: 'No',
        onPress: () => console.log('No pressed'),
        style: 'cancel',
      },
    ]);
  };

  const handleEmergencyClick6 = () => {
    Alert.alert('Confirmation', 'Do you want to navigate to Page 6?', [
      {
        text: 'Yes',
        onPress: () => navigation.navigate('Page6'),
      },
      {
        text: 'No',
        onPress: () => console.log('No pressed'),
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowStyle}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleEmergencyClick1}>
          <Image
            source={require('./assets/SOS_pic.png')}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>Emergency</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress={handleEmergencyClick2}>
          <Image
            source={require('./assets/Contact_professional.png')}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>Contact Professional</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowStyle}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleEmergencyClick3}>
          <Image
            source={require('./assets/document_abuse.png')}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>Document Abuse</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress={handleEmergencyClick4}>
          <Image
            source={require('./assets/safety_plan.png')}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>Safety Plan</Text>
        </TouchableOpacity>
      </View>
   
      <View style={styles.rowStyle}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleEmergencyClick5}>
          <Image
            source={require('./assets/heartbroken.png')}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>Self Care</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress={handleEmergencyClick6}>
          <Image
            source={require('./assets/warning_sign.png')}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>Warning Sign</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    marginTop: 10,
  },
});
