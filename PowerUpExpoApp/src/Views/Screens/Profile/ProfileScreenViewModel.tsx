
import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function ProfileScreenViewModel({ }) {

    const [name, setName] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [height, setHeight] = React.useState('');

    const [inputName, onChangeInputName] = React.useState('');
    const [inputWeight, onChangeInputWeight] = React.useState('');
    const [inputHeight, onChangeInputHeight] = React.useState('');


    function loadProfileData() {
    // TODO: Backend integration!
    fetch('http://192.168.1.137:3000/profiles')
        .then(response=>response.json())
        .then(data=> {
        setName(data['name']);
        setWeight(data['weight']);
        setHeight(data['height']);
        }
        )
        .catch(error=>console.log(error))
    }

    function saveProfileData() {
        fetch('http://192.168.1.137:3000/profiles', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            name: inputName,
            weight: inputWeight,
            height: inputHeight
            }),
        });
        if (inputName != '') {
            setName(inputName)
        }

        if (inputWeight != '') {
            setWeight(inputWeight)
        }

        if (inputHeight != '') {
            setHeight(inputHeight)
        }
    }

    return {name, weight, height, inputName, inputWeight, inputHeight, loadProfileData, saveProfileData, onChangeInputName, onChangeInputWeight, onChangeInputHeight}

}