import * as React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({ navigation } : { navigation : any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Placeholder - should display daily notifications and a progress summary</Text>
    </View>
  );
};