export interface IProfileModel {
    LoadProfileData() : Record<string, string>;
    SaveProfileData(inputProfileData: Record<string, string>) : Record<string, string>;
}