
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import PastWorkoutModalScreenViewModel from './PastWorkoutModalScreenViewControl';

export function PastWorkoutModalScreenView( {workoutId} : {workoutId : number}) {
    const pastWorkoutInfo = {
      "Name" : "Not Found",
      "Time Taken" : "1h0m",
      "Exercises" : [<Text>Workout could not be loaded</Text>]
    };
    const controller = new PastWorkoutModalScreenViewModel();
    useEffect(()=> 
      {
        controller.LoadPastWorkout(workoutId)
      });

    return <View style={ styles.container }>
      <Text>{pastWorkoutInfo["Name"]}</Text>
      <ScrollView>
        {pastWorkoutInfo["Exercises"].map((exercise, index) => (
            <View style={styles.row} key={index}>
                {exercise}
            </View>
            ))}
      </ScrollView>
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