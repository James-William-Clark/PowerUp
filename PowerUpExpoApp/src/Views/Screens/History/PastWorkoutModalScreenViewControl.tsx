
import * as React from 'react';
import { ExerciseRecord } from '../../../Core/ExerciseRecord';
import { StaticExerciseList } from '../../../Core/StaticExerciseList';
import { StrengthExerciseSet } from '../../../Core/StrengthExerciseSet';
import { SpeedExerciseSet } from '../../../Core/SpeedExerciseSet';

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
        if (workoutId == 0) {
            this.SetName("Strength Training - Beginner");
            this.SetTime("1:10")
            let setList = [new StrengthExerciseSet(10, 10), new StrengthExerciseSet(5, 20), new StrengthExerciseSet(5, 30)]
            let preloaded = [new ExerciseRecord(StaticExerciseList.BenchPress, setList), new ExerciseRecord(StaticExerciseList.Squat, setList)];
            if (!this.compareExerciseRecordList(this.ExerciseList, preloaded))
                this.SetExercises(preloaded);
        } else if (workoutId == 1) {
            this.SetName("Couch to 10K");
            this.SetTime("5:01")
            let setList = [new SpeedExerciseSet(10, "5:01")]
            let preloaded = [new ExerciseRecord(StaticExerciseList.Running, setList)];
            if (!this.compareExerciseRecordList(this.ExerciseList, preloaded))
                this.SetExercises(preloaded)
        }
    }

    compareExerciseRecordList(exerciseListA : ExerciseRecord[], exerciseListB : ExerciseRecord[]) : Boolean {
        if (exerciseListA.length != exerciseListB.length)
            return false;
        for (let i = 0; i < exerciseListA.length; i++) {
            if (!exerciseListA[i].Equals(exerciseListB[i])) {
                return false;
            }
        }
        return true;
    }

}
