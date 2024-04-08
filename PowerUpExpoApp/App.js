import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
//import {HomeScreen, ProfileScreen} from './src/screens/Home.js'

const Stack = createNativeStackNavigator();
function  HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="My profile"
        onPress={() =>
          navigation.navigate('Profile')
        }
      />
      <Button
        title="Workout Routines"
        onPress={() =>
          navigation.navigate('Profile')
        }
      />
      <Button
        title="Start a new workout"
        onPress={() =>
          navigation.navigate('Profile')
        }
      />
      <Button
        title="Past Workouts"
        onPress={() =>
          navigation.navigate('Profile')
        }
      />
    </View>
  );
};

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My Profile</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
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
