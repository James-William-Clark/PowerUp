export interface IDataSourceWrapper {
    GetData(key : string) : any;
    SetData(key : string, value : string) : void;
}