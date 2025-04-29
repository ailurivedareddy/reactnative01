import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './profilecomponents/homescreen';
//import OrdersPage from './profilecomponents/subprofilecomponents/orderspage';
import ProfileSettingsScreen from './profilecomponents/subprofilecomponents/profileinfo';

export type RootStackParamList = {
  Profilesettings: undefined;
  ProfileInfo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Profilesettings" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileInfo" component={ProfileSettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
