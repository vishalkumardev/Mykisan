import {StyleSheet, Text, View, Button, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Onboarding = ({navigation}) => {
  const Navigation = useNavigation();
  useEffect(() => {
    const unsuscribe = Navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      BackHandler.exitApp();
    });
    return unsuscribe;
  }, [Navigation]);
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
