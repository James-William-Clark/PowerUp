import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkoutLoggerScreenView from "./WorkoutLoggerScreenView";
import WorkoutHomeScreenView from "./WorkoutHomeScreenView";
import AddExerciseView from "./AddExerciseView";

export default function WorkoutHomeStackNavigator() {

      const Stack = createNativeStackNavigator();
  
      return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="WorkoutHomeScreen" component={WorkoutHomeScreenView} />
          <Stack.Screen name="WorkoutLoggerScreen" component={WorkoutLoggerScreenView} />
          <Stack.Screen name="AddExerciseView" component={AddExerciseView} />
        </Stack.Navigator>
  
      );
      
  }