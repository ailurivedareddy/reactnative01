import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  RefreshControl,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccountSettings from './screencomponents/Profilesettings';
import { MyOrders } from './screencomponents/myorders';
import More from './screencomponents/more';
import Profilecontainer from './screencomponents/profilecontainer';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#E5B143" barStyle="light-content" />

      <View style={styles.stickyHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingTop: 60 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Profilecontainer />
        <AccountSettings />
        <MyOrders />
        <More />
      </ScrollView>

      {refreshing && (
        <View style={styles.centerSpinner}>
          <ActivityIndicator size='small' color="#E5B143" />
          <Text style={styles.loadingText}></Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stickyHeader: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#E5B143',
    flexDirection: 'row',
    alignItems: 'center',
    //paddingHorizontal: 15,
    zIndex: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  centerSpinner: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    alignItems: 'center',
    transform: [{ translateY: -30 }],
    zIndex: 100,
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    color: '#555',
  },
});
