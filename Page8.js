import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Page8({ navigation }) {
  return (
    <View>
      <Text>This is Page 8</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}