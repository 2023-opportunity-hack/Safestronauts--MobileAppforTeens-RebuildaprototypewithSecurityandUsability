import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function Contact_Professional({ navigation }) {
    const [userInput, setUserInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [contactedInput, setcontactedInput] = useState('');
    const [isYearDropdownVisible, setIsYearDropdownVisible] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null);
    const toggleYearDropdown = () => {
      setIsYearDropdownVisible(!isYearDropdownVisible);
      setIsDayPickerVisible(false);
    };
  
    const handleYearSelect = (year) => {
      setSelectedYear(year);
      setIsYearDropdownVisible(false); // Close the year dropdown
    };
  
    const years = [
      '2017', '2018', '2019', '2020',
      '2021', '2022', '2023',
    ];

    return (
        <ScrollView>
            
      <View>
        <View>
         
          <Text style={styles.text1}>
          The dropdown menu provides a list of national hotlines you can text or call for information
          </Text>
      
          <View style={styles.border1}>
            <Text style={styles.text2}>
              Please Select
            </Text>
            <Text style={styles.text2}>
              <View style={styles.container}>
                <TouchableOpacity onPress={toggleYearDropdown}>
                  <Text style={styles.yearText}>
                    {selectedYear || 'Select Year'}
                  </Text>
                </TouchableOpacity>

                {isYearDropdownVisible && (
                  <View style={styles.dropdown}>
                    {years.map((year) => (
                      <TouchableOpacity
                        key={year}
                        onPress={() => handleYearSelect(year)}
                      >
                        <Text style={styles.text3}>{year}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </Text>
          </View>
          <Text style={styles.text1}>
          Type your message here
          </Text>
          <TextInput
            style={styles.input1}
            value={userInput}
            onChangeText={text => setUserInput(text)}
            placeholder="160/160 remaining"
            multiline={true}
            textAlignVertical="top"
          />
          <Text style={styles.text1}>
          Your name
          </Text>
          <TextInput
            style={styles.input2}
            value={nameInput}
            onChangeText={text => setNameInput(text)}
            placeholder="First and Last"
            multiline={true}
            textAlignVertical="top"
          />
            <Text style={styles.text1}>
          Your phone number
          </Text>
          <TextInput
            style={styles.input2}
            value={phoneInput}
            onChangeText={text => setPhoneInput(text)}
            placeholder="+1"
            multiline={true}
            textAlignVertical="top"
          />
               <Text style={styles.text1}>
          Your email address
          </Text>
          <TextInput
            style={styles.input2}
            value={emailInput}
            onChangeText={text => setEmailInput(text)}
            placeholder="xxx@domain.com"
            multiline={true}
            textAlignVertical="top"
          />
               <Text style={styles.text1}>
          Choose how to be contacted
          </Text>
          <TextInput
            style={styles.input2}
            value={contactedInput}
            onChangeText={text => setcontactedInput(text)}
            placeholder="Type 'C' for Call, 'T' for text, 'E' for Email"
            multiline={true}
            textAlignVertical="top"
          />
        </View>
      </View>
      <View style={styles.goBackButtonContainer}>
                    <TouchableOpacity
                        style={styles.goBackButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.goBackButtonText}>Go back</Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    text3:{
        fontWeight: 'bold',
    },
    text2: {

        fontWeight: 'bold',
        fontSize: 20,
        color: '#000000',
    },
    border0: {
        width: 370,
        height: 250,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        paddingHorizontal: 10,
        borderColor: '#420C5C',
        borderWidth: 3,
        padding: 20,
        marginHorizontal: 20,
    },
    border1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        paddingHorizontal: 10,
        borderColor: '#420C5C',
        borderWidth: 3,
        padding: 20,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    input1: {
        width: 370,
        height: 150,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        paddingHorizontal: 10,
        borderColor: '#420C5C',
        borderWidth: 3,
        padding: 20,
        marginHorizontal: 20,

    },
    input2: {
      width: 370,
      height: 60,
      backgroundColor: '#ffffff',
      borderRadius: 15,
      paddingHorizontal: 10,
      borderColor: '#420C5C',
      borderWidth: 3,
      padding: 20,
      marginHorizontal: 20,

  },
    text1: {
        margin: 20,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#420C5C',

    },
    position1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderColor: '#128',
    },
    goreport: {
        backgroundColor: '#420C5C',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 70,
        alignSelf: 'center',
        marginTop: 20,
        borderColor: '#ffffff',
        borderWidth: 3,
    },
    goreport1: {
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
        marginTop: 170,
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
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    monthText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    yearText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropdown: {
        position: 'absolute',
        top: 30,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
});