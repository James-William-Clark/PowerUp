
import { View, Text, Button, ScrollView, StyleSheet, Modal } from 'react-native';
import React, { useEffect } from 'react';
import PastWorkoutModalScreenViewModel from './PastWorkoutModalScreenViewControl';
import { PastWorkoutListStyle } from '../../../Styles/PastWorkoutListStyle';

export function PastWorkoutModalScreenView( {workoutId, closeModal} : {workoutId : number, closeModal : Function}) {
    const viewModel = new PastWorkoutModalScreenViewModel();
    useEffect(()=> 
      {
        viewModel.LoadPastWorkout(workoutId)
      });

    return <View style={ PastWorkoutListStyle.container }>
        <Text>{viewModel.Name}</Text>
        <Text>{viewModel.TimeTaken}</Text>
        <ScrollView>
          {viewModel.ExerciseList.map((exercise, index) => (
              <View style={PastWorkoutListStyle.row} key={index}>
                  <Text>{exercise.Exercise.Name}: {exercise.Duration} {exercise.Intensity}</Text>
              </View>
              ))}
        </ScrollView>
        <Button title='Close' onPress={() => closeModal()} />
      </View>
  }