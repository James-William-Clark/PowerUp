import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import HomeScreen from './src/Views/Screens/Home/HomeScreenView'
import ProfileScreenView from './src/Views/Screens/Profile/ProfileScreenView'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import WorkoutHomeStackNavigator from './src/Views/Screens/Workout/WorkoutHomeStackNavigator';
import HistoryStackNavigator from './src/Views/Screens/History/HistoryStackNavigator';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" component={HomeScreen} options={{tabBarIcon: () => <Ionicons name="home"/>}}
        />
        <Tab.Screen 
          name="Profile" component={ProfileScreenView} 
          options={{tabBarIcon: () => <Ionicons name="person-outline"/>}}
        />
        <Tab.Screen 
          name="Workout" component={WorkoutHomeStackNavigator}
          options={{tabBarIcon: () => <Ionicons name="walk-outline"/>}}
        />
        <Tab.Screen 
          name="History" component={HistoryStackNavigator} 
          options={{tabBarIcon: () => <Ionicons name="book"/>}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
