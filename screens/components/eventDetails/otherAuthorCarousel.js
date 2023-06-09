import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import Currency from '../currency/Currency';
import CurrencySymbol from '../currency/CurrencySymbol';
// import { eventData } from '../../constant/eventData';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const renderItem = ({item, index}) => {
  return <EventCard item={item} index={index} />;
};

const EventCard = ({item, index}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('EventDetail', {item: item.id})}>
        <View style={styles.imageDiv}>
          <Image source={item.img} style={styles.img} />
          <Text style={styles.leftTime}>{item.leftTime} days</Text>
        </View>
        <View style={styles.collectionMeta}>
          <View style={styles.detail}></View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.info}>{item.date}</Text>
          <Text style={styles.info}>Location: {item.location}</Text>
          <View style={styles.divider}></View>
          <Text style={styles.info}>Current price</Text>
          <Text style={styles.price}>
            <Currency price={item.price} /> <CurrencySymbol />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const OthersCarousel = () => {
  return (
    <View style={{marginTop: 10, marginBottom: 50}}>
      {/* <Carousel
          data={eventData}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
        /> */}
      <Text>xxx</Text>
    </View>
  );
};

export default OthersCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14142f',
    borderWidth: 1,
    borderColor: '#887bff',
    padding: 25,
    borderRadius: 16,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    borderRadius: 16,
  },
  imageDiv: {
    position: 'relative',
  },
  leftTime: {
    position: 'absolute',
    left: 10,
    bottom: 0,
    backgroundColor: '#534f77',
    borderRadius: 20,
    overflow: 'hidden',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    borderColor: '#6164ff',
    borderWidth: 1,
  },
  collectionMeta: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 0,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  divider: {
    width: '100%',
    backgroundColor: '#887bff',
    height: 2,
    marginTop: 20,
    marginBottom: 20,
  },
  name: {
    width: '100%',
    textAlign: 'left',
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  info: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
    color: '#bdbdbd',
    fontWeight: '400',
  },
  price: {
    width: '100%',
    textAlign: 'left',
    fontSize: 26,
    marginTop: 20,
    color: '#fff',
    fontWeight: '600',
  },
});
