import { ExerciseSet } from "./ExerciseSet";

export class SpeedExerciseSet extends ExerciseSet {
    constructor(speed : number, duration : string) {
        super();
        this.Speed = speed;
        this.Duration = duration;
        this.Units = "km/hr"
    }

    ToString(): string {
        return this.Duration + " at " + this.Speed + this.Units;
    }
    Speed : number;
    Duration : string;
    Units: string;
}