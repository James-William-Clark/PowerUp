import { ExerciseSet } from "./ExerciseSet";

export class StrengthExerciseSet extends ExerciseSet {
    constructor(weight : number, reps : number) {
        super();
        this.Weight = weight;
        this.Reps = reps;
        // TODO: Handle units, load from system settins
        this.Units = "kg";
    }
    ToString(): string {
        return this.Reps + "x" + this.Weight + this.Units;
    }
    Weight : number;
    Reps : number;
    Units: string;

}