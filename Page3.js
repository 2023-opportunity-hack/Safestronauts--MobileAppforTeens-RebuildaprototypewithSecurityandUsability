import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Page3({ navigation }) {
  return (
    <View style>
      <View>
        <Image
          source={require('./assets/heartspeak1.png')}
          style={{ width: 50, height: 50, position: 'absolute', right: 15, top : 300, }}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/heartspeak1.png')}
          resizeMode="contain"
          style={{ width: 60, height: 60, position: 'absolute', left: 40, bottom: -30, }}
        />
        <Image
          source={require('./assets/heartspeak1.png')}
          resizeMode="contain"
          style={{ width: 30, height: 30, position: 'absolute', left: 40, bottom: -350, }}
        />
        <Image
          source={require('./assets/cute(2).png')}
          style={{ width: 50, height: 60, position: 'absolute', left: 10, bottom: -500, }}
          resizeMode="contain"
        />
               <Image
          source={require('./assets/cute(2).png')}
          style={{ width: 80, height: 90, position: 'absolute', left: 200, bottom: -730, }}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/cute(2).png')}
          style={{ width: 100, height: 100, position: 'absolute', right: -20, bottom: -90, }}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/cute(2).png')}
          style={{ width: 80, height: 80, position: 'absolute', right: -150, top: 515, }}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/heartspeak1.png')}
          style={{ width: 40, height: 40, position: 'absolute', left: -30, bottom: -685, }}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/heartspeak1.png')}
          style={{ width: 40, height: 40, position: 'absolute', left: 100, bottom: -610, }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.pic1}>
        <Image
          source={require('./assets/document_abuse1.png')}
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text1}>
        Select Add a New Record to document a new abuse incident or select View Records to see previous incidents. 
      </Text>
      <View style={styles.goBackButtonContainer}>
        <TouchableOpacity
          style={styles.goreport}
          onPress={() => navigation.navigate('Page7')}
          >
          <Text style={styles.goBackButtonText}>Add new record</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.goBackButtonContainer}>
        <TouchableOpacity
          style={styles.goreport1}
          onPress={() => navigation.navigate('Page8')}
          >
          <Text style={styles.goBackButtonText1}>View past records</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.goBackButtonContainer}>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.goBack()}
          >
          <Text style={styles.goBackButtonText}>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pic1: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    margin: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#420C5C',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#000',
    borderStyle: 'dotted',
  },
  position1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000',
    borderColor: '#128',
  },
  text2: {
    margin: 20,
    fontWeight: 'bold',
    fontSize: 16,
color:'#fff',
  },
  goreport:{
    backgroundColor: '#420C5C',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 70,
    alignSelf: 'center',
    marginTop: 20, 
    borderColor: '#ffffff',
    borderWidth: 3,
  },
  goreport1:{
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 60,
    alignSelf: 'center',
    marginTop: 20, 
    borderColor: '#420C5C',
    borderWidth: 3,
  },
  goBackButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    marginTop: 10, 
  },
  goBackButton: {
    backgroundColor: '#683d7d',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 180, 
  },
  goBackButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffffff',
  },
  goBackButtonText1: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#420C5C',
  }
});