import { IDataSourceWrapper } from "../Common/Data/IDataSourceWrapper";


export class ProfileModel {
    dataSource: IDataSourceWrapper;

    constructor(dataSource : IDataSourceWrapper) {
        this.dataSource = dataSource;
    }

    async LoadProfileData(): Promise<Record<string, string>> {
        var name = await this.dataSource.GetData("user.name");
        var weight = await this.dataSource.GetData("user.weight").then();
        var height = await this.dataSource.GetData("user.height").then();
        return { 
            "name" : name ?? "Set a username",
            "height" : weight ?? "0",
            "weight" : height ?? "0"
         }
    }

    async SaveProfileData(inputProfileData: Record<string, string>): Promise<void> {
        // TODO: Figure out why Javascript can't guarantee the input specified...
        if (inputProfileData['name'] != null && inputProfileData['name']) {
            await this.dataSource.SetData('user.name', inputProfileData['name']);
        }
        if (inputProfileData['height'] != null && inputProfileData['height']) {
            await this.dataSource.SetData('user.height', inputProfileData['height']);
        }
        if (inputProfileData['weight'] != null && inputProfileData['weight']) {
            await this.dataSource.SetData('user.weight', inputProfileData['weight']);
        }
    }


}