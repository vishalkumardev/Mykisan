import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import CommonHeader from '../components/CommonHeader';
import Colors from '../Utitlies/Colors';
import Global from '../Utitlies/Global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Family from '../Utitlies/Family';

const Setting = ({navigation}) => {
  const [Profile, setProfile] = useState('');

  const getData = () => {
    AsyncStorage.getItem('userId').then(value => {
      fetch(Global.BASE_URL + `myprofile&userId=${value}`).then(res =>
        res.json().then(data => {
          setProfile(data.response);
        }),
      );
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <View style={{flex: 1}}>
        <CommonHeader name={'Setting'} navigation={navigation} />
        <View
          style={{
            backgroundColor: Colors.light,
            width: '95%',
            alignSelf: 'center',
            marginVertical: 10,
            padding: 15,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw',
            }}
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              resizeMode: 'contain',
            }}
          />
          <View style={{marginLeft: 20}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: Family.Medium,
                color: Colors.dark,
              }}>
              {Profile.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: Family.Regular,
                color: Colors.gray,
              }}>
              {Profile.mobile}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: Family.SemiBold,
                color: Colors.gray,
              }}>
              {Profile.email}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Setting;

const styles = StyleSheet.create({});
