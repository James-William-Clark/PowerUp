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

}