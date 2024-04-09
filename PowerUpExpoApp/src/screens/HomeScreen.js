import * as React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
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