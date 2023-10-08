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
        onPress: () => navigation.navigate('Safety_plan'),
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
      <View style={styles.gridContainer}>
      <View style={styles.imageContainer}>
  <Image
    source={require('./assets/safespace1.png')}
    style={{ width: 300, height: 270 }}
    resizeMode="contain"
  />
  <Image
    source={require('./assets/heartspeak1.png')}
    style={{ width: 50, height: 50, position: 'absolute', right: -15, bottom:10, }}
    resizeMode="contain"
  />
    <Image
    source={require('./assets/heartspeak1.png')}
    style={{ width: 60, height: 60, position: 'absolute', left: 40, bottom:-25, }}
    resizeMode="contain"
  />
     <Image
    source={require('./assets/heartspeak1.png')}
    style={{ width: 30, height: 30, position: 'absolute', left: 40, bottom: -400, }}
    resizeMode="contain"
  />
    <Image
    source={require('./assets/cute(2).png')}
    style={{ width: 50, height: 60, position: 'absolute', left: -30, top: 25, }}
    resizeMode="contain"
  />
      <Image
    source={require('./assets/cute(2).png')}
    style={{ width: 100, height: 100, position: 'absolute', right: -30, top: 630, }}
    resizeMode="contain"
  />
  <Image
    source={require('./assets/heartspeak1.png')}
    style={{ width: 40, height: 40, position: 'absolute', left: -30, bottom:-200, }}
    resizeMode="contain"
  />
</View>
        {/* Row 1 */}
        <View style={styles.buttonRectangle}>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleEmergencyClick1}>
            <Image
              source={require('./assets/SOS_pic.png')}
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
            />
            <Text style={styles.buttonText}>Emergency</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRectangle}>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleEmergencyClick2}>
            <Image
              source={require('./assets/Contact_professional.png')}
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
            />
            <Text style={styles.buttonText}>Contact Professional</Text>
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View style={styles.buttonRectangle}>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleEmergencyClick3}>
            <Image
              source={require('./assets/document_abuse.png')}
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
            />
            <Text style={styles.buttonText}>Document Abuse</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRectangle}>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleEmergencyClick4}>
            <Image
              source={require('./assets/safety_plan.png')}
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
            />
            <Text style={styles.buttonText}>Safety Plan</Text>
          </TouchableOpacity>
        </View>

        {/* Row 3 */}
        <View style={styles.buttonRectangle}>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleEmergencyClick5}>
            <Image
              source={require('./assets/heartbroken.png')}
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
            />
            <Text style={styles.buttonText}>Self Care</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRectangle}>
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

      {/* Separate View for heartspeak.jpg */}
      <View>
        <Image
          source={require('./assets/map.png')}
          style={{ width: 60, height: 60 }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 40,
  },
  buttonText: {
    marginTop: 5,
    fontWeight: 'bold', 
  },
  buttonRectangle: {
    flexBasis: '35%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1dcf7',
    padding: 10,
  },
});
