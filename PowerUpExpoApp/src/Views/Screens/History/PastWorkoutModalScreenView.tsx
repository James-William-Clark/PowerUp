
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
        <Button title='Close' onPress={() => closeModal()} />
      </View>
  }