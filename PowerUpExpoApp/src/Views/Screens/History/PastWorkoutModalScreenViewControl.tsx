
import * as React from 'react';

export default class PastWorkoutModalScreenViewModel {
    Name: string;
    SetName: any;
    TimeTaken: string;
    SetTime: any;
    ExerciseList: Array<Exercise>;

    constructor() {
        [this.Name, this.SetName] = React.useState('');
        [this.TimeTaken, this.SetTime] = React.useState('');
        [this.ExerciseList, this.SetExercises] = React.useState('');
    
    }
    async LoadPastWorkout(workoutId : number) : Promise<void> {
        // placeholder until saving workouts is implemented
        if (workoutId == 1) {
            return <Text>Workout 1 Info</Text>;
        } else if (workoutId == 2) {
            return <Text>Workout 2 Info</Text>
        }
    }

}