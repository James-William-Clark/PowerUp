import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WorkoutInformationScreenView as WorkoutInformationScreenView } from "./WorkoutInformationScreenView";
import HistoryScreenView from "./HistoryScreenView";

export default function HistoryStackNavigator() {

      const Stack = createNativeStackNavigator();
  
      return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="History" component={HistoryScreenView} />
          <Stack.Screen name="WorkoutInformation" component={WorkoutInformationScreenView} />
        </Stack.Navigator>
  
      );
      
  }