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
    fetch('http://192.168.1.137:3000/profiles')
      .then(response=>response.json())
      .then(data=> {
        setName(data['name']);
        setWeight(data['weight']);
        setHeight(data['height']);
        }
      )
      .catch(error=>console.log(error))


  }

  function saveProfileData() {
    fetch('http://192.168.1.137:3000/profiles', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: inputName,
        weight: inputWeight,
        height: inputHeight
      }),
    });
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
        <Text>Height: {height}cm </Text>
        <TextInput placeholder='Name' onChangeText={onChangeInputName} value={inputName}/>
        <TextInput placeholder='Weight' onChangeText={onChangeInputWeight} value={inputWeight}/>
        <TextInput placeholder='Height' onChangeText={onChangeInputHeight} value={inputHeight}/>
        <Button title="Save" onPress={saveProfileData}/>
      </View>
    );
  }

  