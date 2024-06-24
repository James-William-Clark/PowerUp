import * as React from 'react';
import { View, Button } from 'react-native';

export default function WorkoutScreenView({templateId, closeModal} : {templateId : number, closeModal : Function}) {
    // TODO: Load by template ID
    return (
        <View>
            <Button title="Add Exercise"/>
            <Button title="Complete Workout"/>
            <Button title="Cancel Workout" onPress={() => closeModal()} color="#FF0000"/>
        </View>
    );
}