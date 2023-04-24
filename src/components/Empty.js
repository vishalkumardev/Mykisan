import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Family from '../Utitlies/Family';
import Colors from '../Utitlies/Colors';

const Empty = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: Family.Medium,
          color: Colors.gray,
          marginTop: '70%',
        }}>
        No product Found
      </Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({});
