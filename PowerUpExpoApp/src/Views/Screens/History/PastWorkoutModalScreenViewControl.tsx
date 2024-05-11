
import * as React from 'react';
import { ExerciseRecord } from '../../../Core/ExerciseRecord';

export default class PastWorkoutModalScreenViewModel {
    // TODO: Getters/Setters
    Name: string;
    SetName: any;
    TimeTaken: string;
    SetTime: any;
    ExerciseList: ExerciseRecord[];
    SetExercises: any;

    constructor() {
        [this.Name, this.SetName] = React.useState('');
        [this.TimeTaken, this.SetTime] = React.useState('');
        [this.ExerciseList, this.SetExercises] = React.useState([]);
    
    }
    async LoadPastWorkout(workoutId : number) : Promise<void> {
        // placeholder until saving workouts is implemented
        if (workoutId == 1) {
            this.SetName("Strength Training - Beginner");
            this.SetTime("1:10")
            this.SetExercises([new ExerciseRecord("Bench Press", "3x5", "50KG")]);
        } else if (workoutId == 2) {
            this.SetName("Couch to 10K");
            this.SetTime("0:31")
            this.SetExercises([new ExerciseRecord("Running", "31 minutes", "9km/hr")])
        }
    }

}
