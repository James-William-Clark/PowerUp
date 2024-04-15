import * as React from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function WorkoutScreenView(navigation : any) {

    const workoutTemplateList = [
        {
            name: "Strength Training - Beginner",
            xp_reward: "25",
        },
        {
            name: "Endurance Training - Advanced",
            xp_reward: "100",
        }
      ];

  return (
    <View style={ styles.container }>
      <Button title="Quickstart"/>
      <ScrollView>
        {workoutTemplateList.map((template, index) => (
            <View style={styles.row} key={index}>
                <Ionicons name="mail" size={20} color="#2F2F2F" style={styles.icon} />
                <Text style={styles.workoutName}>{template.name}</Text>
                <Text style={styles.xp}>{template.xp_reward}XP</Text>
            </View>
            ))}
      </ScrollView>
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