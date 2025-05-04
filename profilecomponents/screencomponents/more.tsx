import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const More = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.card}>MORE</Text>

      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.box}>
          <Icon name="star-rate" size={24} color="#BBB" style={styles.icon} />
          <View>
            <Text style={styles.mainText}>Rate Us</Text>
            <Text style={styles.subText}>Rate us on play store</Text>
          </View>
          <Icon name="chevron-right" size={26} color="#BBB" style={styles.rightIcon} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.box}>
          <Icon name="help-outline" size={24} color="#BBB" style={styles.icon} />
          <View>
            <Text style={styles.mainText}>FAQ'S</Text>
            <Text style={styles.subText}>Verified customer reviews and feedback</Text>
          </View>
          <Icon name="chevron-right" size={26} color="#BBB" style={styles.rightIcon} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.box}>
          <Icon name="logout" size={24} color="#BBB" style={styles.icon} />
          <Text style={styles.logoutText}>LOGOUT</Text>
        </View>
      </TouchableOpacity>
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
    width: 26,
  },
  rightIcon: {
    position: 'absolute',
    right: 15,
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#34495E',
  },
  subText: {
    fontSize: 12,
    color: '#7F8C8D',
  },
  logoutText: {
    borderRadius:8,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#5c5c5c',
  },
});

export default More;
