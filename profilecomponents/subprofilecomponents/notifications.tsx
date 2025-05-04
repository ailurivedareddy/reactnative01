import React, { Component } from 'react';
import { Text, StyleSheet, View, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type State = {
  pushEnabled: boolean;
  smsEnabled: boolean;
  promoEnabled: boolean;
};

export default class Notifications extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      pushEnabled: false,
      smsEnabled: true,
      promoEnabled: true,
    };
  }

  togglePush = () => this.setState(prev => ({ pushEnabled: !prev.pushEnabled }));
  toggleSMS = () => this.setState(prev => ({ smsEnabled: !prev.smsEnabled }));
  togglePromo = () => this.setState(prev => ({ promoEnabled: !prev.promoEnabled }));

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.box}>
          <Icon name="notifications" size={24} color="#BBB" style={styles.icon} />
          <View>
            <Text style={styles.mainText}>Push Notifications</Text>
            <Text style={styles.subText}>You'll receive daily updates</Text>
          </View>
          <Switch
            value={this.state.pushEnabled}
            onValueChange={this.togglePush}
            style={styles.switch}
            trackColor={{ false: '#d3d3d3', true: '#FCE5A0' }}
            thumbColor={this.state.pushEnabled ? '#E5B143' : '#f4f3f4'}
          />
        </View>

        <View style={styles.box}>
          <Icon name="sms" size={24} color="#BBB" style={styles.icon} />
          <View>
            <Text style={styles.mainText}>SMS Notification</Text>
            <Text style={styles.subText}>Stay updated through SMS</Text>
          </View>
          <Switch
            value={this.state.smsEnabled}
            onValueChange={this.toggleSMS}
            style={styles.switch}
            trackColor={{ false: '#d3d3d3', true: '#FCE5A0' }}
            thumbColor={this.state.smsEnabled ? '#E5B143' : '#f4f3f4'} 
          />
        </View>

        <View style={styles.box}>
          <Icon name="campaign" size={24} color="#BBB" style={styles.icon} />
          <View>
            <Text style={styles.mainText}>Promotional Notifications</Text>
            <Text style={styles.subText}>Get promotional offers and deals</Text>
          </View>
          <Switch
            value={this.state.promoEnabled}
            onValueChange={this.togglePromo}
            style={styles.switch}
            trackColor={{ false: '#d3d3d3', true: '#FCE5A0' }} 
            thumbColor={this.state.promoEnabled ? '#E5B143' : '#f4f3f4'} 
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        gap: 8,
        
      },
      card: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 8,
        color: '#1c1b19',
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
      switch: {
        position: 'absolute',
        right: 15,
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
