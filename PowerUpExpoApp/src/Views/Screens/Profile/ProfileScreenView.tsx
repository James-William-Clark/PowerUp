import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ProfileScreenViewModel from './ProfileScreenViewModel';

// TODO: Properly specify type
export default function ProfileScreen({ }) {

  // TODO: Some sort of profile datastructure to condense all these methods...
  const { name, weight, height, inputName, inputWeight, inputHeight, loadProfileData, saveProfileData, onChangeInputName, onChangeInputWeight, onChangeInputHeight} = ProfileScreenViewModel({});

  React.useEffect(() => {
    loadProfileData();
    }, []);

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>My Profile</Text>
        <Text>Name: {name} </Text>
        <Text>Weight: {weight}kg </Text>
        <Text>Height: {height}cm </Text>
        <Text>Update my info</Text>
        <TextInput placeholder='Name' onChangeText={onChangeInputName} value={inputName}/>
        <TextInput placeholder='Weight' onChangeText={onChangeInputWeight} value={inputWeight}/>
        <TextInput placeholder='Height' onChangeText={onChangeInputHeight} value={inputHeight}/>
        <Button title="Save" onPress={saveProfileData}/>
      </View>
    );
  }

  