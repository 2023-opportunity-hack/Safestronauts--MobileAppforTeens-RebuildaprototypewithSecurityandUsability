import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Page1({ navigation }) {
  return (
    <View>
      <Text>This is Page 1</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}