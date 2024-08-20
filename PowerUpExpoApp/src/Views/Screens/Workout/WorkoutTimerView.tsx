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
        }, 1000);
    });

    return (
        <View>
            <Text>Time elapsed: {time}</Text>
        </View>
    )
}