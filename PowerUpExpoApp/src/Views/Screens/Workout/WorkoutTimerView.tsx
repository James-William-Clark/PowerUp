import React, {useState, useRef} from 'react'
import { View, Text } from 'react-native';

export default function WorkoutTimerView() {
    const [time, setTime] = useState(0);
    const startTimeRef = useRef(Date.now());
    const intervalRef = useRef(0);

    React.useEffect(() => {
        startTimeRef.current = Date.now() - time * 1000;
        intervalRef.current = setInterval(() => {
            setTime(Math.floor((Date.now() - 
            startTimeRef.current) / 1000));
        }, 10);
    });

    function formatTime(time : number) {
        var hours = Math.floor(time / 3600);
        var minutes = Math.floor(time % 3600 / 60);
        var seconds = Math.floor(time % 3600 % 60);
        return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds}`
    }

    return (
        <View>
            <Text>Time elapsed: {formatTime(time)}</Text>
        </View>
    )
}