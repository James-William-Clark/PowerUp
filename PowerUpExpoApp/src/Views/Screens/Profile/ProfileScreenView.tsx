import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ProfileScreenViewModel from './ProfileScreenViewModel';

export default function ProfileScreenView(navigation : any) {

  const viewModel = new ProfileScreenViewModel();

  React.useEffect(() => {
    viewModel.LoadProfileData();
    }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My Profile</Text>
      <Text>Name: {viewModel.ProfileName} </Text>
      <Text>Weight: {viewModel.ProfileWeight}kg </Text>
      <Text>Height: {viewModel.ProfileHeight}cm </Text>
      <Text>Update my info</Text>
      <TextInput placeholder='Name' onChangeText={viewModel.SetInputName} value={viewModel.InputName}/>
      <TextInput placeholder='Weight' onChangeText={viewModel.SetInputWeight} value={viewModel.InputWeight}/>
      <TextInput placeholder='Height' onChangeText={viewModel.SetInputHeight} value={viewModel.InputHeight}/>
      <Button title="Save" onPress={() => viewModel.SaveProfileData()}/>
    </View>
  );
}

  