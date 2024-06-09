import { Exercise } from "./Exercise";
import { ExerciseRecord } from "./ExerciseRecord";

export class PastWorkout {
    Id: number;
    Exercises: ExerciseRecord[];
    Date_Completed: string;
    constructor(id : number, exercises : ExerciseRecord[], date_completed : string) {
        this.Id = id;
        this.Exercises = exercises;
        this.Date_Completed = date_completed;
    }

    static FromJson(json : {Id : number, Exercises : {}[], Date_Completed: string}) : PastWorkout {
        var exerciseRecords : ExerciseRecord[] = [];
        json.Exercises.forEach(element => {
            // TODO
        });
        return new PastWorkout(json.Id, exerciseRecords, json.Date_Completed);
    }

}