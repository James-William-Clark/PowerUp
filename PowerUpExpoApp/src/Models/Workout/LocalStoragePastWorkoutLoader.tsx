// Loads a JSON string from local storage and converts it into exercise records

import { PastWorkout } from "../../Core/PastWorkout";
import { IDataSourceWrapper } from "../Common/Data/IDataSourceWrapper";

export class LocalStoragePastWorkoutLoader {
    DataSource: IDataSourceWrapper;
    constructor (datasource : IDataSourceWrapper) {
        this.DataSource = datasource;
    }

    async LoadPastWorkouts() : Promise<PastWorkout[]> {
        const jsonString = await this.DataSource.GetData("PastWorkouts");
        return JSON.parse(jsonString);

    }
}