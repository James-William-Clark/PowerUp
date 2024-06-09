export interface IDataSourceWrapper {
    // Returns data for a given key.
    // If key is not present, return null
    GetData(key : string) : any;
    SetData(key : string, value : string) : void;
}