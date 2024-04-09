import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>My Profile</Text>
        <TextInput placeholder='Name'/>
        <TextInput placeholder='Weight'/>
        <TextInput placeholder='Height'/>
      </View>
    );
  }

  