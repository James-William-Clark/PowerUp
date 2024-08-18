
import * as React from 'react';
import { AsyncStorageWrapper } from '../../../Models/Common/Data/AsyncStorageWrapper';
import { Exercise } from '../../../Core/Exercise';
import { StaticExerciseList } from '../../../Core/StaticExerciseList';

export default class WorkoutLoggerScreenViewModel {

    setLogList: any;
    // TODO: Support cardio
    logList!: { exercise: Exercise; sets: { reps: number; weight: number; }[]}[];

    constructor() {
        const dataSource = new AsyncStorageWrapper();
        [this.logList, this.setLogList] = React.useState([]);
    }

    addExercise(exerciseToAdd: Exercise) {
        if (this.logList.find((record) => record.exercise == exerciseToAdd)) {
            return;
        }
        const newLogList = [...this.logList, {exercise: exerciseToAdd, sets : [{reps : 0, weight : 0}]}]
        this.setLogList(newLogList);
    }

    addSet(log: { exercise: Exercise; sets: { reps: number; weight: number; }[]; }): void {
        log.sets = log.sets.concat([{reps : 0, weight : 0}])
        this.setLogList(this.logList = this.logList.concat());
    }

    deleteSet(set: { reps: number; weight: number; }, exerciseIndex : number): void {
        const newList = this.logList.map((exerciseLog, i) => {
            if (i === exerciseIndex) {
                return {exercise : exerciseLog.exercise, sets : exerciseLog.sets.filter(s => s !== set)};
            }
            return {exercise : exerciseLog.exercise, sets : exerciseLog.sets};
        }).filter((exerciseLog) => exerciseLog.sets.length > 0);

        this.setLogList(newList);
    }

    async loadWorkout(templateId: any) {
        if (templateId == 1) {
            const preloaded = [
                {
                    exercise : StaticExerciseList.BenchPress, sets : [{reps : 5, weight: 50}, {reps : 3, weight : 60}],
                },
                {
                    exercise : StaticExerciseList.Deadlift, sets : [{reps : 3, weight: 75}, {reps : 3, weight : 90}],
                },
            ]
            this.setLogList(preloaded);
        } else if (templateId == 2) {
            const preloaded = [
                {
                    exercise : StaticExerciseList.Running, sets : [{reps : 5, weight: 50}, {reps : 3, weight : 60}],
                },
            ]
            this.setLogList(preloaded)
        }
    }

}