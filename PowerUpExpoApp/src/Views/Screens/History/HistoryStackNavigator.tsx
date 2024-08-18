import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WorkoutInformationScreenView as WorkoutInformationScreenView } from "./WorkoutInformationScreenView";
import HistoryHomeScreenView from "./HistoryScreenView";

export default function HistoryStackNavigator() {

      const Stack = createNativeStackNavigator();
  
      return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="HistoryHomeScreen" component={HistoryHomeScreenView} />
          <Stack.Screen name="WorkoutInformationScreen" component={WorkoutInformationScreenView} />
        </Stack.Navigator>
  
      );
      
  }