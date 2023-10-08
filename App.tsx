/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {useState, useEffect} from 'react';

import { ReactNativeFirebase } from '@react-native-firebase/app';
import { firestore } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//Adding client id from google-services.json for Google sign in.
GoogleSignin.configure({
  webClientId:
    '636449863243-b9a75pt4j3cmlhj4vrkujqr4v7pfh5mk.apps.googleusercontent.com',
});

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, Colors.white]}>{title}</Text>
      <Text style={[styles.sectionDescription, Colors.light]}>{children}</Text>
    </View>
  );
}

function App(): JSX.Element {

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
  }, []);

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  //View if Firebase is connecting.
  if (initializing) {
    return (
      <View>
        <Text>Initializing...</Text>
      </View>
    );
  }

  //View if user has not logged in.
  if (!user) {
    return (
      <View>
        <Text>You are not logged in</Text>
      </View>
    );
  }

  //View if user is logged in.
  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}

/*
async function onGoogleButtonPress() {
  // Check if device has Google Play.
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  // Get the login ID token.
  const {idToken} = await GoogleSignin.signIn();
  // Create a Google credential with the token.
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // Sign-in the user with the credential.
  return auth().signInWithCredential(googleCredential);
}
*/

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
