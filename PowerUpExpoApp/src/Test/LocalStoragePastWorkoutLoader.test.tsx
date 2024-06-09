import { ExerciseRecord } from "../Core/ExerciseRecord";
import { PastWorkout } from "../Core/PastWorkout";
import { StaticExerciseList } from "../Core/StaticExerciseList";
import { StrengthExerciseSet } from "../Core/StrengthExerciseSet";
import { UnitTestDataWrapper } from "../Models/Common/Data/UnitTestDataWrapper";
import { LocalStoragePastWorkoutLoader } from "../Models/Workout/LocalStoragePastWorkoutLoader";

test("Can save an exercise record and load and preserve all values", async () => {

    const testData : Array<PastWorkout> = new Array<PastWorkout>();
    testData.push(new PastWorkout(1, [new ExerciseRecord(StaticExerciseList.BenchPress, [new StrengthExerciseSet(1, 2)])], "2012-12-12"));
    testData.push(new PastWorkout(1, [new ExerciseRecord(StaticExerciseList.Squat, [new StrengthExerciseSet(3, 5)])], "2011-12-12"));

    const unitTestDataWrapper = new UnitTestDataWrapper();
    unitTestDataWrapper.SetData("PastWorkouts", JSON.stringify(testData));

    const workoutLoader = new LocalStoragePastWorkoutLoader(unitTestDataWrapper);
    var pastWorkouts = await workoutLoader.LoadPastWorkouts();
    console.log(pastWorkouts);
    console.log(testData);
    for (var i = 0; i < testData.length; i++) {
        expect(testData[i].Id).toBe(pastWorkouts[i].Id);
        expect(testData[i].Date_Completed).toBe(pastWorkouts[i].Date_Completed);
        for (var j = 0; j < testData[i].Exercises.length; j++) {
            // TODO: This fails as I need to save and load the data in a way that preserves the class structure
            expect(testData[i].Exercises[j].Equals(pastWorkouts[i].Exercises[j])).toBe(true);
        }
    }
});