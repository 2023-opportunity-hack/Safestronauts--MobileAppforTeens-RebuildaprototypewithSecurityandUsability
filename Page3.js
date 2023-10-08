import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Page3({ navigation }) {
  return (
    <View>
      <Text>This is Page 3</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}