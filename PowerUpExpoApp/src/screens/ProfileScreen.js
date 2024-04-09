import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  const [name, setName] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');

  const [inputName, onChangeInputName] = React.useState('');
  const [inputWeight, onChangeInputWeight] = React.useState('');
  const [inputHeight, onChangeInputHeight] = React.useState('');


  React.useEffect(() => {
    loadProfileData();
  }, []);

  function loadProfileData() {
    // TODO: Backend integration!
    setName("Fake Name");
    setWeight(76);
    setHeight(175.6);

  }

  function saveProfileData() {
    if (inputName != '') {
      setName(inputName)
    }

    if (inputWeight != '') {
      setWeight(inputWeight)
    }

    if (inputHeight != '') {
      setHeight(inputHeight)
    }
  }


  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>My Profile</Text>
        <Text>Name: {name} </Text>
        <Text>Weight: {weight}kg </Text>
        <Text>Name: {height}cm </Text>
        <TextInput placeholder='Name' onChangeText={onChangeInputName} value={inputName}/>
        <TextInput placeholder='Weight' onChangeText={onChangeInputWeight} value={inputWeight}/>
        <TextInput placeholder='Height' onChangeText={onChangeInputHeight} value={inputHeight}/>
        <Button title="Save" onPress={saveProfileData}/>
      </View>
    );
  }

  