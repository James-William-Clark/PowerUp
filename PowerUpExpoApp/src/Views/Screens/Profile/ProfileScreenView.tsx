import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ProfileScreenViewModel from './ProfileScreenViewModel';
import { IProfileModel } from '../../../Models/Profile/IProfileModel';
import { MmkvProfileModel } from '../../../Models/Profile/MmkvProfileModel';


// TODO: Properly specify type
export default function ProfileScreen(navigation : any, profileModel : IProfileModel) {

  // TODO: Figure out a way to inject the profile model dependency

  const profileScreenViewModel = new ProfileScreenViewModel(profileModel);
  const profileData = profileScreenViewModel.ProfileData;

  const inputProfileData = profileScreenViewModel.InputProfileData;
  const setInputProfileData = profileScreenViewModel.SetInputProfileData;

  profileScreenViewModel.LoadProfileData();
  
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>My Profile</Text>
        <Text>Name: {profileData['Name']} </Text>
        <Text>Weight: {profileData['Weight']}kg </Text>
        <Text>Height: {profileData['Height']}cm </Text>
        <Text>Update my info</Text>
        <TextInput placeholder='Name' onChangeText={setInputProfileData['Name']} value={inputProfileData['Name']}/>
        <TextInput placeholder='Weight' onChangeText={setInputProfileData['Weight']} value={inputProfileData['Weight']}/>
        <TextInput placeholder='Height' onChangeText={setInputProfileData['Height']} value={inputProfileData['Height']}/>
        <Button title="Save" onPress={profileScreenViewModel.SaveProfileData}/>
      </View>
    );
  }

  