
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IDataSourceWrapper } from './IDataSourceWrapper';


export class AsyncStorageWrapper implements IDataSourceWrapper {
    async SetData (key: string, value: string)  {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {
            // TODO: Log exception / handle better
            console.log("Error saving: " + e)
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
            // TODO: Log exception / handle better
            return null;
        }
    };
}