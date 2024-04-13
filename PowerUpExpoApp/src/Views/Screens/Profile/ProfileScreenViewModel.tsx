
import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { IProfileModel } from '../../../Models/Profile/IProfileModel';
export default class ProfileScreenViewModel {
    ProfileModel: IProfileModel;
    ProfileData: any;
    SetProfileData: any;
    InputProfileData: any;
    SetInputProfileData: any;

    constructor(profileModel: IProfileModel ) {
        this.ProfileModel = profileModel;

        [this.ProfileData, this.SetProfileData] = React.useState({
            name: "",
            weight: 0,
            height: 0
        });
    
        [this.InputProfileData, this.SetInputProfileData] = React.useState({
            name: "",
            weight: 0,
            height: 0
        });
    }

    LoadProfileData() : void {
        var loadedProfileData = this.ProfileModel.LoadProfileData();
        this.SetProfileData['Name'](loadedProfileData['Name']);
        this.SetProfileData['Weight'](loadedProfileData['Weight']);
        this.SetProfileData['Height'](loadedProfileData['Height']);
    }

    SaveProfileData() {
        throw new Error("Not implemented exception");
    }

}