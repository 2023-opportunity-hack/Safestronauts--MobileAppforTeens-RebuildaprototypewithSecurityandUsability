import React from 'react';
import {useState, useEffect} from 'react';

import auth from '@react-native-firebase/auth';

import {StyleSheet, View, Button, Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function LoginVerification({navigation}) {
  // Set an initializing state whilst Firebase connects.
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // Handler for whenever user state changes.
  function onAuthStateChanged(account) {
    setUser(account);
    if (initializing) {
      setInitializing(false);
    }
  }

  //Effect hook that subscribes to user authentication state.
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  //View if Firebase is still initializing.
  if (initializing) {
    return (
      <View>
        <Text>Firebase initializing...</Text>
      </View>
    );
  }

  //View if user has not logged in.
  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.inputHeader}>Username</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
        />
        <View>
          <Text style={styles.inputHeader}>Password</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />
        <View style={styles.buttonText}>
          <Button
            title="Login"
            onPress={() => navigation.navigate('TicTacToe')}
          />
          <Button title="Sign Up" />
        </View>
      </SafeAreaView>
    );
  }

  //View if user has logged in.
  return () => navigation.navigate('TicTacToe');
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 40,
    color: '#000',
  },
  buttonRectangle: {
    flexBasis: '35%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1, // Add border width
    borderColor: '#dcdcdc', // Add border color
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f1dcf7', // Set the background color here
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputHeader: {
    margin: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#000', // Button text color.
  },
});
