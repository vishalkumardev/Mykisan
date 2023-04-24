import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import Colors from '../Utitlies/Colors';
import Family from '../Utitlies/Family';

const CommonHeader = ({navigation, name}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: Colors.light,
        paddingVertical: 15,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeftIcon color={Colors.dark} size={20} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 16,
          fontFamily: Family.Regular,
          color: Colors.dark,
          marginLeft: 10,
        }}>
        {name}
      </Text>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({});
