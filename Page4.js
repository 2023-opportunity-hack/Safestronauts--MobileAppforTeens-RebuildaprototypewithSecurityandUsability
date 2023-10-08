import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';

export default function Safety_plan({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.wording}>
        The safety plan is a set of actions that can help lower your risk of
        getting hurt by your partner. It includes information specific to you
        and your life that will increase your safety at school, home, and other
        places that you go on a daily basis. All the categories below are
        optional, so feel free to fill out the ones that are most relevant.
      </Text>
      <View style={styles.gridContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonRectangle}>
            <View style={styles.buttonContainer}>
              <Image
                source={require('./assets/basics.png')}
                style={{width: 80, height: 80}}
                resizeMode="contain"
              />
              <Text style={styles.buttonText1}>Basics</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonRectangle}>
            <View style={styles.buttonContainer}>
              <Image
                source={require('./assets/home.png')}
                style={{width: 40, height: 40}}
                resizeMode="contain"
              />
              <Text style={styles.buttonText}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRectangle}>
            <View style={styles.buttonContainer}>
              <Image
                source={require('./assets/school.png')}
                style={{width: 40, height: 40}}
                resizeMode="contain"
              />
              <Text style={styles.buttonText}>School</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonRectangle}>
            <View style={styles.buttonContainer}>
              <Image
                source={require('./assets/technology.png')}
                style={{width: 40, height: 40}}
                resizeMode="contain"
              />
              <Text style={styles.buttonText}>Technology</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRectangle}>
            <View style={styles.buttonContainer}>
              <Image
                source={require('./assets/job.png')}
                style={{width: 40, height: 40}}
                resizeMode="contain"
              />
              <Text style={styles.buttonText}>Job</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonRectangle}>
            <View style={styles.buttonContainer}>
              <Image
                source={require('./assets/children.png')}
                style={{width: 40, height: 40}}
                resizeMode="contain"
              />
              <Text style={styles.buttonText}>Children</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRectangle}>
            <View style={styles.buttonContainer}>
              <Image
                source={require('./assets/partner.png')}
                style={{width: 40, height: 40}}
                resizeMode="contain"
              />
              <Text style={styles.buttonText}>Partner</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wording: {
    margin: 10,
    padding: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10, // Reduced padding
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10, // Reduced margin
  },
  buttonRectangle: {
    flexBasis: '50%', // Reduced button size
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 5, // Reduced padding
    borderWidth: 1,
    borderColor: '#dcdcdc',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1dcf7',
  },
  buttonText: {
    marginTop: 5,
  },
  buttonText1: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 21,
  },
});
