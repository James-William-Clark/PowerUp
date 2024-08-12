import { Exercise } from "./Exercise";

// A list of standard exercises so users don't have to create them
export class StaticExerciseList {
    static BenchPress = new Exercise("Bench Press", "TODO", "Strength");
    static Squat = new Exercise("Squat", "TODO", "Strength");
    static Deadlift = new Exercise("Deadlift", "TODO", "Strength");
    static OverheadPress = new Exercise("Overhead Press", "TODO", "Strength");
    static Running = new Exercise("Running", "TODO", "Cardio");

    static AllBuiltInExercises = [this.BenchPress, this.Squat, this.Deadlift, this.OverheadPress, this.Running]
}