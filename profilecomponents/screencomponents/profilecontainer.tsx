import React, { Component } from 'react'
import { Text, StyleSheet, View ,SafeAreaView, ImageBackground} from 'react-native'

export default class profile extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
            <View style={styles.container}>
            </View>
            <View style={styles.profileimg}> 
                <ImageBackground
                    source={require('../assets/default-profile-picture.jpg')}
                    style={styles.avatar}
                    imageStyle={{ borderRadius: 100,height:130 }}
                />
                <Text style={styles.name}>
                    Jack
                </Text>
                <Text style={styles.detail}>
                    jack@gmail.com/1231231234
                </Text>
            </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        height:150,
        backgroundColor: '#E5B143',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius:40    
    },
    name:{
        color:'#2C3335',
        fontSize:20,
        top:-52
    },
    detail:{
        color:'#535C68',
        fontSize:16,
        top:-50
    },
    profileimg:{
        alignItems:'center',
        justifyContent:'center'
    },
    avatar:{
        backgroundColor: '#EAF0F1',
        borderRadius: 100,
        alignItems:'center',
        height:131,
        width: 129,
        top:-60
    }
})
