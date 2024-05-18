import { Exercise } from './Exercise';


export class ExerciseRecord {
    Exercise : Exercise;
    // TODO: Duration and Intensity should be lists since people often do multiple rep ranges and different weights
    Duration: string;
    Intensity: string;

    constructor(exercise : Exercise, duration : string, intensity : string) {
        this.Exercise = exercise;
        this.Duration = duration;
        this.Intensity = intensity;
    }

    Equals(otherExerciseRecord : ExerciseRecord) : boolean {
        if (otherExerciseRecord.Exercise.Name != otherExerciseRecord.Exercise.Name)
            return false;
        if (otherExerciseRecord.Duration != otherExerciseRecord.Duration)
            return false;
        if (otherExerciseRecord.Intensity != otherExerciseRecord.Intensity)
            return false;

        return true;
    }
}