import * as React from 'react';
import { View, StyleSheet, ScrollView, Text, Button } from 'react-native';
import { StaticExerciseList } from '../../../Core/StaticExerciseList';

export default function AddExerciseView({route, navigation} : any) {
    const exercises = [
        StaticExerciseList.Squat
    ]
    return (
        <View>
            <ScrollView>
                {exercises.map((exercise, index) => (
                    <View key={index}>
                        <Text style={styles.row}>{exercise.Name}</Text>
                        <Button onPress = {() => {navigation.navigate("WorkoutLoggerScreen", { exercise : exercise })}} title="Add"/>
                  </View>
                ))}
            </ScrollView>
            <Button title="Cancel" onPress={() => navigation.goBack()} color="#FF0000"/>
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