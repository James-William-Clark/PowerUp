export class ExerciseRecord {
    Name : string;
    // TODO: Duration and Intensity should be lists since people often do multiple rep ranges and different weights
    Duration: string;
    Intensity: string;

    constructor(name : string, duration : string, intensity : string) {
        this.Name = name;
        this.Duration = duration;
        this.Intensity = intensity;
    }
}