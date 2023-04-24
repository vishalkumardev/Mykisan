import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonHeader from '../components/CommonHeader';

const Order = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1}}>
        <CommonHeader name={'My Order'} navigation={navigation} />
      </View>
    </>
  );
};

export default Order;

const styles = StyleSheet.create({});
