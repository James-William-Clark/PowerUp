// Loads a JSON string from local storage and converts it into exercise records

import { ExerciseRecord } from "../../Core/ExerciseRecord";
import { PastWorkout } from "../../Core/PastWorkout";
import { IDataSourceWrapper } from "../Common/Data/IDataSourceWrapper";

export class LocalStoragePastWorkoutDataModel {
    DataSource: IDataSourceWrapper;
    constructor (datasource : IDataSourceWrapper) {
        this.DataSource = datasource;
    }

    // Adds new workouts to existing workouts and saves
    async SavePastWorkouts(newWorkouts : Array<PastWorkout>) {
        var currentWorkouts = await this.LoadPastWorkouts();
        newWorkouts.forEach(element => {
            currentWorkouts.push(element);
        });

        var workoutJson = Array<{}>();
        currentWorkouts.forEach(element => {
            var thisElementExercises = new Array<{}>();
            element.Exercises.forEach(exercise => {
                thisElementExercises.push(exercise.ToJson());
            })
            workoutJson.push({"Id" : element.Id, "Exercises" : thisElementExercises, "Date_Completed" : element.Date_Completed});
        });
        this.DataSource.SetData("PastWorkouts", JSON.stringify(workoutJson));
    }

    async LoadPastWorkouts() : Promise<Array<PastWorkout>> {
        const jsonString = await this.DataSource.GetData("PastWorkouts");
        var pastWorkouts = new Array<PastWorkout>();
        if (jsonString == null) {
            return pastWorkouts;
        }
        const json = JSON.parse(jsonString);
        console.log(json)
        for (var i = 0; i < json.length; i++) {
            pastWorkouts.push(PastWorkout.FromJson(json[i]));
        }

        return pastWorkouts;

    }

    // Deletes a workout given it's ID
    async DeleteWorkout(id : number) {
        throw new Error("Not implemented");
    }

}