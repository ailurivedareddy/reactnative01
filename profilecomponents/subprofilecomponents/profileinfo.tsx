import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileInfo = () => {
  const [fullName, setFullName] = useState('jack');
  const [email, setEmail] = useState('xyz@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('1231231234');

  const handleSettingsChange = () => {
    console.log('Settings Updated');
  };

  // Validate email format
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Validate phone number: must have exactly 10 digits total
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  const isPhoneValid = /^\d{10}$/.test(digitsOnly);

  // Enable save only if all fields are filled and valid
  const isSaveEnabled =
    fullName.trim() !== '' &&
    isEmailValid &&
    isPhoneValid;

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.inputContainer}>
        <View style={styles.card}>
          <Text style={styles.label}>FULL NAME</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />
          {fullName.trim() === '' && (
            <Text style={{ color: 'red', fontSize: 12 }}>Full name is required</Text>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>EMAIL ADDRESS</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          {!isEmailValid && email !== '' && (
            <Text style={{ color: 'red', fontSize: 12 }}>Invalid email address</Text>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>PHONE NUMBER</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          {!isPhoneValid && phoneNumber !== '' && (
            <Text style={{ color: 'red', fontSize: 12 }}>Phone number must contain exactly 10 digits</Text>
          )}
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, !isSaveEnabled && styles.disabledButton]}
        onPress={handleSettingsChange}
        disabled={!isSaveEnabled}
      >
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  inputContainer: {
    flex: 1,
  },
  card: {
    height: 90,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    shadowColor: '#BBB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 12,
    color: '#888',
  },
  input: {
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#F5A623',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileInfo;
