import { IDataSourceWrapper } from "./IDataSourceWrapper";

export class UnitTestDataWrapper implements IDataSourceWrapper {
    _data: {[key :string] : string} = {};

    GetData(key: string) {
        return this._data[key];
    }
    SetData(key: string, value: string): void {
       this._data[key] = value;
    }

}