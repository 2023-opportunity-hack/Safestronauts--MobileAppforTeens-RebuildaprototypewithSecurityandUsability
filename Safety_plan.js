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
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/heartspeak1.png')}
          style={{
            width: 50,
            height: 50,
            position: 'absolute',
            right: 15,
            bottom: -180,
          }}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/heartspeak1.png')}
          style={{
            width: 60,
            height: 60,
            position: 'absolute',
            left: 40,
            bottom: -40,
          }}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/heartspeak1.png')}
          style={{
            width: 30,
            height: 30,
            position: 'absolute',
            left: 40,
            bottom: -400,
          }}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/cute(2).png')}
          style={{
            width: 50,
            height: 60,
            position: 'absolute',
            left: -200,
            top: 150,
          }}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/cute(2).png')}
          style={{
            width: 100,
            height: 100,
            position: 'absolute',
            right: -200,
            top: 240,
          }}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/cute(2).png')}
          style={{
            width: 80,
            height: 80,
            position: 'absolute',
            right: -150,
            top: 515,
          }}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/heartspeak1.png')}
          style={{
            width: 40,
            height: 40,
            position: 'absolute',
            left: -30,
            bottom: -685,
          }}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/heartspeak1.png')}
          style={{
            width: 40,
            height: 40,
            position: 'absolute',
            left: -150,
            bottom: -610,
          }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.wording}>
        The safety plan is a set of actions that can help lower your risk of
        getting hurt by your partner. It includes information specific to you
        and your life that will increase your safety at school, home, and other
        places that you go on a daily basis.
      </Text>
      <View style={styles.dottedLine} />
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
          <View style={{width: 5}} />
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
          <View style={{width: 5}} />
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
          <View style={{width: 5}} />
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
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.goBackButtonText}>Go back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wording: {
    margin: 10,
    padding: 10,

    fontWeight: 'bold',
    fontSize: 17,
    fontStyle: 'italic',
    color: '#420C5C',
    borderBottomColor: '#683d7d',
    borderBottomWidth: 4,
    borderStyle: 'dotted',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonRectangle: {
    flexBasis: '50%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 5,
    borderWidth: 3,
    borderColor: '#000000',
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
    fontWeight: 'bold',
  },
  buttonText1: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 21,
  },
  goBackButton: {
    backgroundColor: '#683d7d',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  goBackButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffffff',
  },
});
