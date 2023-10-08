import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function Abuse_Report({ navigation }) {
    const [userInput, setUserInput] = useState('');
    const [isYearDropdownVisible, setIsYearDropdownVisible] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null);
    const [isMonthDropdownVisible, setIsMonthDropdownVisible] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [isDayPickerVisible, setIsDayPickerVisible] = useState(false); // Add this line
    const [selectedDay, setSelectedDay] = useState('1'); // Default to 1
  
    const toggleYearDropdown = () => {
      setIsYearDropdownVisible(!isYearDropdownVisible);
      setIsMonthDropdownVisible(false); // Close the month dropdown if it's open
      setIsDayPickerVisible(false); // Close the day picker if it's open
    };
  
    const toggleMonthDropdown = () => {
      setIsMonthDropdownVisible(!isMonthDropdownVisible);
      setIsYearDropdownVisible(false); // Close the year dropdown if it's open
      setIsDayPickerVisible(false); // Close the day picker if it's open
    };
  
    const toggleDayPicker = () => {
      setIsDayPickerVisible(!isDayPickerVisible);
      setIsYearDropdownVisible(false); // Close the year dropdown if it's open
      setIsMonthDropdownVisible(false); // Close the month dropdown if it's open
    };
  
    const handleYearSelect = (year) => {
      setSelectedYear(year);
      setIsYearDropdownVisible(false); // Close the year dropdown
    };
  
    const handleMonthSelect = (month) => {
      setSelectedMonth(month);
      setIsMonthDropdownVisible(false); // Close the month dropdown
    };
  
    const handleDayChange = (day) => {
      setSelectedDay(day);
      setIsDayPickerVisible(false); // Close the day picker
    };
  
    const years = [
      '2017', '2018', '2019', '2020',
      '2021', '2022', '2023',
    ];
  
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December',
    ];
    
    return (
        <ScrollView>
            
      <View>
        <View>
          <Text style={styles.text1}>
            What happened?
          </Text>
          <TextInput
            style={styles.input1}
            value={userInput}
            onChangeText={text => setUserInput(text)}
            placeholder="Type what happened here.  Provide as much detail as possible"
            multiline={true}
            textAlignVertical="top"
          />
        </View>
        <Text style={styles.text1}>
          When did it happen?
        </Text>
        <View style={styles.border0}>
          <View style={styles.border1}>
            <Text style={styles.text2}>
              Year of event
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

          <View style={styles.border1}>
            <Text style={styles.text2}>
              Month of event
            </Text>
            <Text style={styles.text2}>
              <View style={styles.container}>
                <TouchableOpacity onPress={toggleMonthDropdown}>
                  <Text style={styles.monthText}>
                    {selectedMonth || 'Select Month'}
                  </Text>
                </TouchableOpacity>

                {isMonthDropdownVisible && (
                  <View style={styles.dropdown}>
                    {months.map((month) => (
                      <TouchableOpacity
                        key={month}
                        onPress={() => handleMonthSelect(month)}
                      >
                        <Text style={styles.text3}>{month}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </Text>
          </View>

          <View style={styles.border1}>
            <Text style={styles.text2}>
              Day of event
            </Text>
            <Text style={styles.text2}>
              <View style={styles.container}>
                <TouchableOpacity onPress={toggleDayPicker}>
                  <Text style={styles.dayText}>
                    {selectedDay || 'Select Day'}
                  </Text>
                </TouchableOpacity>

                {isDayPickerVisible && (
                  <View style={styles.dropdown}>
                    {Array.from({ length: 31 }, (_, i) => (
                      <TouchableOpacity
                        key={i.toString()}
                        onPress={() => handleDayChange((i + 1).toString())}
                      >
                        <Text style={styles.text3}>{(i + 1).toString()}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </Text>
          </View>

                    <View style={styles.border1}>
                        <Text style={styles.text2}>
                            Time of event
                        </Text>
                        <Text style={styles.text2}>
                            11:11
                        </Text>
                    </View>
                </View>

                <View style={styles.goBackButtonContainer}>
                    <TouchableOpacity
                        style={styles.goreport}
                        onPress={() => navigation.navigate('Page7')}
                    >
                        <Text style={styles.goBackButtonText}>Add supporting evidence</Text>
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

    text1: {
        margin: 20,
        fontWeight: 'bold',
        fontSize: 20,
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