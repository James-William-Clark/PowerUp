import * as React from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutScreenView from './WorkoutScreenView';

export default function WorkoutHomeScreenView() {
  // TODO: Move to ViewModel
  const [modalState, setModal] = React.useState({ show: false, workoutId: 0 });

  function openPastWorkoutModal(id: number) : void {
    setModal({show: true, workoutId : id});
  }
  const handleClose = () => {
    setModal({show: false, workoutId : 0});
  };

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
        <Modal visible={modalState.show}>
            <WorkoutScreenView closeModal={handleClose}/>
        </Modal>
        <Button
          title="Quickstart"
          onPress={()=> {
            openPastWorkoutModal(0);
            }
          }
        />
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