import React from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import Profile from './screencomponents/profilecontainer';
import AccountSettings from './screencomponents/Profilesettings';
import { MyOrders } from './screencomponents/myorders';
import More from './screencomponents/more';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Profile />
          <AccountSettings />
          <MyOrders />
          <More />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
