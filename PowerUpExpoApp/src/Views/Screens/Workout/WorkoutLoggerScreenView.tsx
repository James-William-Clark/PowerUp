import * as React from 'react';
import { View, Button } from 'react-native';

export default function WorkoutLoggerScreenView({route, navigation} : any) {
    // TODO: Load by template ID
    return (
        <View>
            <Button title="Add Exercise"/>
            <Button title="Complete Workout"/>
            <Button title="Cancel Workout" onPress={() => navigation.navigate("WorkoutHomeScreen")} color="#FF0000"/>
        </View>
    );
}