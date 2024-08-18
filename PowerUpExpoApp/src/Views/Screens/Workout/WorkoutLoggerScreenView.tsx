import * as React from 'react';
import { View, Button, StyleSheet, Text, ScrollView, TextInput, Alert } from 'react-native';
import { StaticExerciseList } from '../../../Core/StaticExerciseList';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Exercise } from '../../../Core/Exercise';
import { Swipeable } from 'react-native-gesture-handler';
import WorkoutLoggerScreenViewModel from './WorkoutLoggerScreenViewModel';

export default function WorkoutLoggerScreenView({route, navigation} : any) {

    const viewModel = new WorkoutLoggerScreenViewModel();

    React.useEffect(() => {
        if (route.params?.exercise) {
            const exerciseToAdd = route.params.exercise;
            viewModel.addExercise(exerciseToAdd);
        }
      }, [route.params?.exercise]);

      React.useEffect(() => {
        if (route.params?.templateId) {
            const templateId = route.params.templateId;
            viewModel.loadWorkout(templateId);
        }
      }, [route.params?.templateId]);
    
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
                {viewModel.logList.map((log, index) => (
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
                                        <Button title='X' onPress={() => viewModel.deleteSet(set, index)} color={"#FF0000"} /* TODO  replace with swipe to delete*//>
                                    </Row>
                                ))}
                                <Button title='Add' onPress={() => viewModel.addSet(log)}/>
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