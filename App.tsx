import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './profilecomponents/types/navigation';
import HomeScreen from './profilecomponents/homescreen';
import ProfileInfo from './profilecomponents/subprofilecomponents/profileinfo';
import Notifications from './profilecomponents/subprofilecomponents/notifications';
//import { CardStyleInterpolators } from '@react-navigation/stack'; 
const Stack = createNativeStackNavigator<RootStackParamList>();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Profilesettings"
        screenOptions={{ 
          gestureEnabled: true,          
          gestureDirection: 'horizontal',
          animation: 'slide_from_right', 
          
        }}
        >
          <Stack.Screen 
            name="Profilesettings" 
            component={HomeScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="ProfileInfo" 
            component={ProfileInfo} 
          />
           <Stack.Screen 
            name="Notifications" 
            component={Notifications} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
