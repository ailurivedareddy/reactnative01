import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

type ProfileSettingsNavProp = NativeStackNavigationProp<RootStackParamList, 'Profilesettings'>;

const ProfileSettings = () => {
  const navigation = useNavigation<ProfileSettingsNavProp>();

  const [isProfileInfoEnabled, setProfileInfoEnabled] = useState(true);
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isPaymentEnabled, setPaymentEnabled] = useState(true);
  const [isLocationEnabled, setLocationEnabled] = useState(false);
  const [isContactEnabled, setContactEnabled] = useState(true);
  const [isReferEnabled, setReferEnabled] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.card}>ACCOUNT SETTINGS</Text>

      {isProfileInfoEnabled && (
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('ProfileInfo')}>
          <Icon name="person" size={24} color="#BBB" style={styles.icon} />
          <View>
            <Text style={styles.mainText}>Profile Information</Text>
            <Text style={styles.subText}>Change your account information</Text>
          </View>
          <Icon name="chevron-right" size={26} color="#BBB" style={styles.rightIcon} />
        </TouchableOpacity>
      )}

      {isNotificationsEnabled && (
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Notifications')}>
          <Icon name="notifications" size={24} color="#BBB" style={styles.icon} />
          <View>
            <Text style={styles.mainText}>Notifications</Text>
            <Text style={styles.subText}>Turn on notifications</Text>
          </View>
          <Icon name="chevron-right" size={26} color="#BBB" style={styles.rightIcon} />
        </TouchableOpacity>
      )}

      {isPaymentEnabled && (
        <TouchableOpacity style={styles.box}>
          <Icon name="payment" size={24} color="#BBB" style={styles.icon} />
          <View>
            <Text style={styles.mainText}>Payment Methods</Text>
            <Text style={styles.subText}>Add your credit and debit card</Text>
          </View>
          <Icon name="chevron-right" size={26} color="#BBB" style={styles.rightIcon} />
        </TouchableOpacity>
      )}

      {isLocationEnabled && (
        <TouchableOpacity style={styles.box}>
          <Icon name="location-on" size={24} color="#BBB" style={styles.icon} />
          <View>
            <Text style={styles.mainText}>Location</Text>
            <Text style={styles.subText}>Add or remove your delivery location</Text>
          </View>
          <Icon name="chevron-right" size={26} color="#BBB" style={styles.rightIcon} />
        </TouchableOpacity>
      )}

      {isContactEnabled && (
        <TouchableOpacity style={styles.box}>
          <Icon name="contact-mail" size={24} color="#BBB" style={styles.icon} />
          <View>
            <Text style={styles.mainText}>Contact Us</Text>
            <Text style={styles.subText}>Contact us on abcd@gmail.com</Text>
          </View>
          <Icon name="chevron-right" size={26} color="#BBB" style={styles.rightIcon} />
        </TouchableOpacity>
      )}

      {isReferEnabled && (
        <TouchableOpacity style={styles.box}>
          <Icon name="group-add" size={24} color="#BBB" style={styles.icon} />
          <View>
            <Text style={styles.mainText}>Refer to Friends</Text>
            <Text style={styles.subText}>Get ₹100 for referring friends</Text>
          </View>
          <Icon name="chevron-right" size={26} color="#BBB" style={styles.rightIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    gap: 8,
    top: -46,
  },
  card: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 8,
    color: '#3e3f40',
  },
  box: {
    width: 340,
    height: 66,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  icon: {
    width: 30,
    left: 4,
  },
  rightIcon: {
    position: 'absolute',
    right: 15,
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#34495E',
  },
  subText: {
    fontSize: 12,
    color: '#7F8C8D',
  },
});
