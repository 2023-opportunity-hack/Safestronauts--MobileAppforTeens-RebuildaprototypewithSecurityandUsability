import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Abuse_Report({navigation}) {
  return (
    <View>
      <Text>This is Page 7</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
