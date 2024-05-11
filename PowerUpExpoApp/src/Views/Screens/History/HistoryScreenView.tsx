import * as React from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { PastWorkoutModalScreenView } from './PastWorkoutModalScreenView';
import PastWorkoutModalScreenViewModel from './PastWorkoutModalScreenViewControl';

export default function HistoryScreenView(navigation : any) {

    // TODO: Each of these should link to more information, ideally popup
    const pastWorkoutsList = [
        {
            name: "Strength Training - Beginner",
            // TODO: Nice to have, dynamic date formatting. E.g. yesterday, last monday
            date_completed: "2022-11-4",
            time_taken: "1:10",
            id : 1
        },
        {
            name: "Couch to 10K",
            date_completed: "2022-10-4",
            time_taken: "0:31",
            id : 2
        }
      ];

      const completedQuestsList = [
        {
            name: "Run 50KM in 1 Week",
            date_completed: "2022-10-4",
            xp_reward: "100"
        },
        {
            name: "Complete 20 Workouts This Month",
            date_completed: "2022-11-30",
            xp_reward: "500"
        }
      ];

  // TODO: Move to ViewModel
  const [modalState, setModal] = React.useState({ show: false, workoutId: 0 });

  function openPastWorkoutModal(id: number) : void {
    setModal({show: true, workoutId : id});
  }
  const handleClose = () => {
    setModal({show: false, workoutId : 0});
  };

  return (
    <View style={ styles.container }>
      <ScrollView>
        {pastWorkoutsList.map((template, index) => (
            <View style={styles.row} key={index}>
                <Ionicons name="american-football" size={20} color="#2F2FAF" style={styles.icon} />
                <Text style={styles.workoutName}>{template.name}</Text>
                <Text style={styles.time}>{template.date_completed}</Text>
                <Text style={styles.xp}>{template.time_taken}</Text>
                <Button
                  title="View Details"
                  onPress={()=> {
                    openPastWorkoutModal(index);
                    }
                  }
                />
            </View>
            ))}
      </ScrollView>
      <Modal visible={modalState.show}>
          <PastWorkoutModalScreenView workoutId={modalState.workoutId} closeModal={handleClose}/>
      </Modal>
      <ScrollView>
        {completedQuestsList.map((template, index) => (
            <View style={styles.row} key={index}>
                <Ionicons name="mail" size={20} color="#2F2F2F" style={styles.icon} />
                <Text style={styles.workoutName}>{template.name}</Text>
                <Text style={styles.xp}>{template.xp_reward}</Text>
                <Text style={styles.xp}>{template.date_completed}XP</Text>
                <Button
                  title="View Details"
                />
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
    time: {
        fontSize: 16,
        color: '#4b0082',
      },
  });