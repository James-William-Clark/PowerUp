
import { View, Text, Button, ScrollView, StyleSheet, Modal } from 'react-native';
import React, { useEffect } from 'react';
import PastWorkoutModalScreenViewModel from './PastWorkoutModalScreenViewControl';

export function PastWorkoutModalScreenView( {workoutId, closeModal} : {workoutId : number, closeModal : Function}) {
    const viewModel = new PastWorkoutModalScreenViewModel();
    useEffect(()=> 
      {
        viewModel.LoadPastWorkout(workoutId)
      });

    return <View style={ styles.container }>
        <Text>{viewModel.Name}</Text>
        <Text>{viewModel.TimeTaken}</Text>
        <ScrollView>
          {viewModel.ExerciseList.map((exercise, index) => (
              <View style={styles.row} key={index}>
                  <Text>{exercise.Name}: {exercise.Duration} {exercise.Intensity}</Text>
              </View>
              ))}
        </ScrollView>
        <Button title='Close' onPress={() => closeModal()} />
      </View>
  }
  // TODO: Centralise styles
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
    time: {
        fontSize: 16,
        color: '#4b0082',
      },
  });