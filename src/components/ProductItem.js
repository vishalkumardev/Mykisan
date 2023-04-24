import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Colors from '../Utitlies/Colors';
import Family from '../Utitlies/Family';

const ProductItem = ({item, navigation, index}) => {
  return (
    <TouchableOpacity
      style={{
        width: '50%',
        alignSelf: 'center',
        backgroundColor: Colors.light,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
      }}
      onPress={() =>
        navigation.navigate('ProductDetail', {
          id: item.productId,
        })
      }>
      <Image
        source={{uri: item.img}}
        style={{
          width: '100%',
          height: 150,
          resizeMode: 'contain',
          backgroundColor: Colors.light,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: Colors.dark,
          fontFamily: Family.Medium,
        }}>
        {item.productName}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 12,
            color: Colors.dark,
            fontFamily: Family.Medium,
          }}>
          ₹ {item.mrp}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: Colors.gray,
            fontFamily: Family.Medium,
            textDecorationLine: 'line-through',
          }}>
          Mrp. {item.offerPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
