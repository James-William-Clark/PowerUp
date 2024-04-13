
import * as React from 'react';
import { AsyncStorageWrapper } from '../../../Models/Common/Data/AsyncStorageWrapper';
import { ProfileModel } from '../../../Models/Profile/ProfileModel';
export default class ProfileScreenViewModel {
    ProfileName: string;
    SetProfileName: any;
    ProfileWeight: string;
    SetProfileWeight: any;
    ProfileHeight: string;
    SetProfileHeight: any;

    InputName: string;
    SetInputName: any;
    InputWeight: string;
    SetInputWeight: any;
    InputHeight: string;
    SetInputHeight: any;

    ProfileModel: ProfileModel;

    constructor() {
        // TODO: Figure out a way to inject the data source dependency globally
        const dataSource = new AsyncStorageWrapper();
        this.ProfileModel = new ProfileModel(dataSource);
        [this.ProfileName, this.SetProfileName] = React.useState('');
        [this.ProfileWeight, this.SetProfileWeight] = React.useState('');
        [this.ProfileHeight, this.SetProfileHeight] = React.useState('');
    
        [this.InputName, this.SetInputName] = React.useState('');
        [this.InputWeight, this.SetInputWeight] = React.useState('');
        [this.InputHeight, this.SetInputHeight] = React.useState('');
    }

    async LoadProfileData() : Promise<void> {
        var loadedProfileData = await this.ProfileModel.LoadProfileData();
        console.log(loadedProfileData)
        this.SetProfileName(loadedProfileData['name']);
        this.SetProfileWeight(loadedProfileData['weight']);
        this.SetProfileHeight(loadedProfileData['height']);
        console.log(this.ProfileName)
    }

    async SaveProfileData() {
        const inputtedProfileData = {
            "name" : this.InputName, 
            "weight" : this.InputWeight, 
            "height" : this.InputHeight, 
        };
        await this.ProfileModel.SaveProfileData(inputtedProfileData);
        // Load the newly saved data
        await this.LoadProfileData();
    }

}