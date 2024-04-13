import { IProfileModel } from "./IProfileModel"
import { MMKV } from 'react-native-mmkv'

// This class implements IProfileModel using React Native's async storage
export class MmkvProfileModel implements IProfileModel {
    storage: MMKV;

    constructor() {
      this.storage = new MMKV();
    }

    LoadProfileData(): Record<string, string> { 
        return { 
            "Name" : this.storage.getString('user.name') ?? "Set a username",
            "Height" : this.storage.getString('user.height') ?? "Set a height",
            "Weight" : this.storage.getString('user.weight') ?? "Set a weight"
    }
    }
    SaveProfileData(inputProfileData: Record<string, string>): Record<string, string> {
        throw new Error("Method not implemented.");
    }


}