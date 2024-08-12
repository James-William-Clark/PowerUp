import * as React from 'react';
import { View, Button, StyleSheet, Text, ScrollView, TextInput, Alert } from 'react-native';
import { StaticExerciseList } from '../../../Core/StaticExerciseList';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Exercise } from '../../../Core/Exercise';
import { Swipeable } from 'react-native-gesture-handler';

const exerciseLogListPlaceholder = [
    {
        exercise : StaticExerciseList.BenchPress, sets : [{reps : 5, weight: 50}, {reps : 3, weight : 60}],
    },
    {
        exercise : StaticExerciseList.Deadlift, sets : [{reps : 3, weight: 75}, {reps : 3, weight : 90}],
    },
]

export default function WorkoutLoggerScreenView({route, navigation} : any) {

    // TODO: Load by template ID

    const [logList, setLogList] = React.useState(exerciseLogListPlaceholder)

    React.useEffect(() => {
        if (route.params?.exercise) {
          console.log(route.params.exercise);
          const newLogList = [...logList, {exercise: route.params.exercise, sets : [{reps : 0, weight : 0}]}]
          setLogList(newLogList);
        }
      }, [route.params?.exercise]);
    

    function addSet(logList: { exercise: Exercise; sets: { reps: number; weight: number; }[]; }[], log: { exercise: Exercise; sets: { reps: number; weight: number; }[]; }): void {
        log.sets = log.sets.concat([{reps : 0, weight : 0}])
        // TODO: Cleaner way to do this surely
        setLogList(logList = logList.concat());
    }

    function deleteSet(set: { reps: number; weight: number; }, exerciseIndex : number): void {
        const newList = logList.map((exerciseLog, i) => {
            if (i === exerciseIndex) {
                return {exercise : exerciseLog.exercise, sets : exerciseLog.sets.filter(s => s !== set)};
            }
            return {exercise : exerciseLog.exercise, sets : exerciseLog.sets};
        }).filter((exerciseLog) => exerciseLog.sets.length > 0);

        setLogList(newList);
    }

    function cancelAlert() {
        Alert.alert(
            'Are you sure you want to cancel workout?',
            '',
            [
                {
                    text:"Quit",
                    onPress: () => navigation.goBack()
                },
                {
                    text:"Continue",
                }
            ]
        )
    }

    function completeWorkoutAlert() {
        Alert.alert(
            'Save and Finish Workout?',
            '',
            [
                {
                    text:"Yes",
                    onPress: () => navigation.goBack() // TODO: Also save to DB
                },
                {
                    text:"Continue",
                }
            ]
        )
    }

    return (
        <View>
            <ScrollView>
                {logList.map((log, index) => (
                    <View style={styles.row} key={index}>
                        <Text style={styles.workoutName}>{log.exercise.Name}</Text>
                        <ScrollView>
                            <Grid>
                                <Row>
                                    <Text>Reps</Text>
                                    <Text>Weight</Text>
                                </Row>
                                {log.sets.map((set, setIndex) => (
                                    <Row key={setIndex}>
                                        <TextInput defaultValue={set.reps.toString()}></TextInput>
                                        <TextInput defaultValue={set.weight.toString()}></TextInput>
                                        <Button title='X' onPress={() => deleteSet(set, index)} color={"#FF0000"} /* TODO  replace with swipe to delete*//>
                                    </Row>
                                ))}
                                <Button title='Add' onPress={() => addSet(logList, log)}/>
                            </Grid>
                        </ScrollView>
                    </View>
                    ))}
            </ScrollView>
            <Button title="Add Exercise" onPress={() => navigation.navigate("AddExerciseView")} color="#00FF00"/>
            <Button title="Complete Workout" onPress={completeWorkoutAlert} color="#0000FF"/>
            <Button title="Cancel Workout" onPress={cancelAlert} color="#FF0000"/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      top:0,
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
    },
    icon: {
      marginRight: 10,
    },
    workoutName: {
      flex: 1,
      fontWeight: 'bold',
      fontSize: 16,
      color: '#2F2F2F',
    },
    xp: {
      fontSize: 16,
      color: '#4b0082',
    },
  });