import { Guid } from 'guid-typescript';
import { Exercise } from './Exercise';
import { ExerciseSet } from './ExerciseSet';


export class ExerciseRecord {
    Exercise : Exercise;
    Sets: ExerciseSet[];

    constructor(exercise : Exercise, sets : ExerciseSet[]) {
        this.Exercise = exercise;
        this.Sets = sets;
    }

    Equals(otherExerciseRecord : ExerciseRecord) : boolean {
        if (this.Exercise.Name != otherExerciseRecord.Exercise.Name)
            return false;
        if (otherExerciseRecord.Sets.length != this.Sets.length)
            return false;
        for (let i = 0; i < this.Sets.length; i++) {
            // TODO: Hashcode
            if (this.Sets[i].ToString() != otherExerciseRecord.Sets[i].ToString()) {
                return false;
            }
        }

        return true;
    }

    ToJson() : {} {
        var sets : {}[]= [];
        this.Sets.forEach(element => {
            sets.push(element.ToJson())
        });
        return {"Exercise" : this.Exercise.Name, "Sets" : sets};
    }

    static fromJson(json : {}) : ExerciseRecord {
        
        return new ExerciseRecord(new Exercise("", "", ""), [])
    }
}