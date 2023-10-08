import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';

export default function Emergency({navigation}) {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Image
            source={require('./assets/heartspeak1.png')}
            style={{
              width: 50,
              height: 50,
              position: 'absolute',
              right: 15,
              top: 300,
            }}
            resizeMode="contain"
          />
          <Image
            source={require('./assets/heartspeak1.png')}
            resizeMode="contain"
            style={{
              width: 60,
              height: 60,
              position: 'absolute',
              left: 40,
              bottom: -30,
            }}
          />
          <Image
            source={require('./assets/heartspeak1.png')}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              left: 40,
              bottom: -350,
            }}
          />
          <Image
            source={require('./assets/cute(2).png')}
            style={{
              width: 50,
              height: 60,
              position: 'absolute',
              left: 80,
              bottom: -420,
            }}
            resizeMode="contain"
          />
          <Image
            source={require('./assets/cute(2).png')}
            style={{
              width: 100,
              height: 100,
              position: 'absolute',
              right: -60,
              bottom: -90,
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
        <View style={styles.gridContainer}>
          {/* Row 1 */}
          <View style={[styles.row]}>
            <TouchableOpacity style={styles.buttonRectangle}>
              <View style={styles.buttonContainer}>
                <View style={styles.imageTextContainer}>
                  <Image
                    source={require('./assets/call911.png')}
                    style={{width: 65, height: 65}}
                    resizeMode="contain"
                  />
                  <Text style={styles.buttonText1}>Call 911</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* Row 1 */}
          <View style={[styles.row]}>
            <TouchableOpacity style={styles.buttonRectangle}>
              <View style={styles.buttonContainer}>
                <View style={styles.imageTextContainer}>
                  <Image
                    source={require('./assets/location.png')}
                    style={{width: 65, height: 65}}
                    resizeMode="contain"
                  />
                  <Text style={styles.buttonText1}>
                    Send location to contacts
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.row]}>
            <TouchableOpacity style={styles.buttonRectangle}>
              <View style={styles.buttonContainer}>
                <View style={styles.imageTextContainer}>
                  <Image
                    source={require('./assets/friend.png')}
                    style={{width: 65, height: 65}}
                    resizeMode="contain"
                  />
                  <Text style={styles.buttonText1}>Call a friend</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.goBackButtonContainer}>
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.goBackButtonText}>Go back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  gridContainer: {
    flex: 1,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  buttonRectangle: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#683d7d',
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
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
    marginTop: 260,
  },
  goBackButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffffff',
  },
  imageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  buttonText1: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
});
