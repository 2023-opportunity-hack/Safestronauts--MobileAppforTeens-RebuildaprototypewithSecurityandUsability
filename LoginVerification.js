import React from 'react';
import {useState, useEffect} from 'react';

import auth from '@react-native-firebase/auth';

import {StyleSheet, View, Button, Text} from 'react-native';

export default function LoginVerification({navigation}) {
  // Set an initializing state whilst Firebase connects.
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

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
      <View>
        <Text>PLease login</Text>
      </View>
    );
  }

  //
  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <Button onClick={() => navigation.navigate('Main')}>tictactoe</Button>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1dcf7', // Set the background color here
    padding: 10,
  },
});
