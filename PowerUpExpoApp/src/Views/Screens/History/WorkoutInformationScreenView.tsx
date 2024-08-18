
import { View, Text, Button, ScrollView, StyleSheet, Modal } from 'react-native';
import React, { useEffect } from 'react';
import WorkoutModalScreenViewModel from './WorkoutInformationScreenViewControl';
import { PastWorkoutListStyle } from '../../../Styles/PastWorkoutListStyle';

export function WorkoutInformationScreenView({route, navigation} : any) {
    const viewModel = new WorkoutModalScreenViewModel();

    React.useEffect(() => {
        if (route.params?.workoutId) {
            const workoutToLoad = route.params.workoutId;
            viewModel.LoadPastWorkout(workoutToLoad);
        }
      }, [route.params?.exercise]);
    

    return <View style={ PastWorkoutListStyle.container }>
        <Text>{viewModel.Name} - Duration: {viewModel.TimeTaken}</Text>
        <ScrollView>
          {viewModel.ExerciseList.map((exercise, index) => (
              <View style={PastWorkoutListStyle.row} key={index}>
                <Text>{exercise.Exercise.Name}</Text>
                <ScrollView>
                  {exercise.Sets.map((set, index) => (
                      <View style={PastWorkoutListStyle.row} key={index}>
                          <Text>{set.ToString()}</Text>
                      </View>
                      ))}
                </ScrollView>
              </View>
              ))}
        </ScrollView>
        <Button title='Close' onPress={() => navigation.goBack()} />
      </View>
  }