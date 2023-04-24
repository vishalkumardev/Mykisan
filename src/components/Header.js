import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../Utitlies/Colors';
import Family from '../Utitlies/Family';
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from 'react-native-heroicons/solid';

const Header = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.light,
        shadowOffset: 50,
        elevation: 50,
        paddingVertical: 5,
      }}>
      <View style={{height: 40, width: '50%'}}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{width: 70, height: '100%', resizeMode: 'cover'}}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '20%',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <MagnifyingGlassIcon color={Colors.primary} size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <ShoppingCartIcon color={Colors.primary} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
