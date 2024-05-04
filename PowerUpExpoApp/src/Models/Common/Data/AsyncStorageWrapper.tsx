
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IDataSourceWrapper } from './IDataSourceWrapper';


export class AsyncStorageWrapper implements IDataSourceWrapper {
    async SetData (key: string, value: string)  {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {
            console.log("The following error occurred when trying to set data " + value + " to key " + key + " :" + e);
        }   
    };

    async GetData (key : string) {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value;
            }
            return null;
        } catch (e) {
            console.log("The following error occurred when trying to retrieve data " + key + " :" + e);
            return null;
        }
    };
}