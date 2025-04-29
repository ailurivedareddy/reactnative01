import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const More = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.card}>MORE</Text>

      <View style={styles.box}>
        <Icon name="star-rate" size={28} color="#888" style={styles.icon} />
        <View>
          <Text style={styles.mainText}>Rate Us</Text>
          <Text style={styles.subText}>Rate us on play store</Text>
        </View>
        <Icon name="chevron-right" size={30} color="#888" style={styles.rightIcon} />
      </View>

      <View style={styles.box}>
        <Icon name="help-outline" size={28} color="#888" style={styles.icon} />
        <View>
          <Text style={styles.mainText}>FAQ'S</Text>
          <Text style={styles.subText}>Verified customer reviews and feedback</Text>
        </View>
        <Icon name="chevron-right" size={30} color="#888" style={styles.rightIcon} />
      </View>

      <View style={styles.box}>
        <Icon name="logout" size={28} color="#888" style={styles.icon} />
        <Text style={styles.logoutText}>LOGOUT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    gap: 8,
    top: -50,
  },
  card: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 8,
    color: '#2C3E50',  // Dark blue for card header
  },
  box: {
    width: 340,
    height: 60,
    borderWidth: 1,
    borderColor: '#d3d3d3', // Light border color
    borderRadius: 8,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow direction
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 3, // Shadow blur radius
  },
  icon: {
    width: 30,
  },
  rightIcon: {
    position: 'absolute',
    right: 15, 
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#34495E',  // Dark grey for text like Rate Us, FAQ's
  },
  subText: {
    fontSize: 12,
    color: '#7F8C8D',  // Lighter grey for description text
  },
  logoutText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '',
  },
});

export default More;
