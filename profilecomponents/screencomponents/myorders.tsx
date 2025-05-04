import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';



class MyOrders extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headingText}>MY ORDERS</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
      <View id='ordered'> 
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[styles.card, styles.elevated]}>
            <Image source={require('../../assets/biryani.jpg')} style={styles.cardImg} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Biryani</Text>
              <Text style={styles.cardSubtitle}>Spicy and flavorful</Text>
            </View>
          </View>

          <View style={[styles.card, styles.elevated]}>
            <Image source={require('../../assets/biryani.jpg')} style={styles.cardImg} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Haleem</Text>
              <Text style={styles.cardSubtitle}>Rich and hearty</Text>
            </View>
          </View>

          <View style={[styles.card, styles.elevated]}>
            <Image source={require('../../assets/biryani.jpg')} style={styles.cardImg} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Shawarma</Text>
              <Text style={styles.cardSubtitle}>Middle Eastern Wrap</Text>
            </View>
          </View>

          <View style={[styles.card, styles.elevated]}>
            <Image source={require('../../assets/biryani.jpg')} style={styles.cardImg} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Mandi</Text>
              <Text style={styles.cardSubtitle}>Arabic rice dish</Text>
            </View>
          </View>

          <View style={[styles.card, styles.elevated]}>
            <Image source={require('../../assets/biryani.jpg')} style={styles.cardImg} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Butter Chicken</Text>
              <Text style={styles.cardSubtitle}>Creamy & rich</Text>
            </View>
          </View>
        </ScrollView>
      </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    top: -46,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'#3e3f40'
  },
  seeAllText: {
    fontSize: 15,
    color: '#E5B143',
    fontWeight: 'bold',
    right:13
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 2,
    marginHorizontal: 8,
    width: 150,
    overflow: 'hidden',
  },
  elevated: {
    height: 192,
    //elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardImg: {
    height: 126,
    width: '100%',
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"#34495E",
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#7F8C8D',
    marginTop: 4,
  },
});

export { MyOrders };
