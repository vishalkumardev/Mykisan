import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Family from '../Utitlies/Family';
import Colors from '../Utitlies/Colors';

const CategoryItem = ({item, index, navigation}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}}>
      <Image
        source={{uri: item.img}}
        style={{
          width: 50,
          height: 50,
          borderRadius: 35,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          fontSize: 11,
          fontFamily: Family.Regular,
          color: Colors.dark,
          marginTop: 10,
        }}>
        {item.categoryName}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
