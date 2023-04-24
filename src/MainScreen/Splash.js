import {View, Image} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
  const checkUser = async () => {
    const userId = await AsyncStorage.getItem('userId');
    if (userId == null) {
      navigation.navigate('Onboarding');
    } else {
      navigation.navigate('BottomStack');
    }
  };
  setTimeout(() => {
    checkUser();
  }, 2000);

  return (
    <View style={{flex: 1}}>
      <Animatable.Image
        animation="bounceIn"
        duration={3000}
        source={require('../../assets/images/logo.png')}
        style={{width: '100%', height: '100%', resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Splash;
