import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Profilecontainer extends Component {

  render() {
    return (
      <SafeAreaView>
        <View>
          <View style={styles.container}></View>
          <View style={styles.profileimg}>
            <ImageBackground
              source={require('../../assets/default-profile-picture.jpg')}
              style={styles.avatar}
              imageStyle={{ borderRadius: 100, height: 130 }}
            />
            <Text style={styles.name}>Jack</Text>
            <Text style={styles.detail}>jack@gmail.com / 1231231234</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    backgroundColor: '#E5B143',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  backButton: {
    position: 'absolute',
    top: 18,
    left: 18,
    zIndex: 1,
    color: '#FFFFFF',
  },
  name: {
    color: '#2C3335',
    fontSize: 20,
    top: -52
  },
  detail: {
    color: '#535C68',
    fontSize: 16,
    top: -50
  },
  profileimg: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    backgroundColor: '#EAF0F1',
    borderRadius: 100,
    alignItems: 'center',
    height: 130,
    width: 129,
    top: -60
  }
});
