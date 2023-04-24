import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import Family from '../Utitlies/Family';
import Colors from '../Utitlies/Colors';
import Global from '../Utitlies/Global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';

const Otp = ({navigation, route}) => {
  const {data} = route.params;
  const {mobile, otp} = data.response;
  const [Loading, setLoading] = useState(false);
  const [Otp, setOtp] = useState('');

  const Submit = () => {
    setLoading(true);
    return fetch(Global.BASE_URL + `otp&mobile=${mobile}&otp=${Otp}`).then(
      res => {
        res.json().then(value => {
          if (value.response.status == 1) {
            AsyncStorage.setItem('userId', value.response.userId).then(() => {
              Alert.alert('Login Successfull');
              navigation.navigate('BottomStack');
            });
          }
        });
        setLoading(false);
      },
    );
  };
  const alertOtp = otp => {
    Alert.alert(`Your Otp is ${otp}`);
  };
  useEffect(() => {
    alertOtp(otp);
  }, []);

  const ResendOtp = () => {
    setLoading(true);
    return fetch(Global.BASE_URL + `resendOtp&mobile=${mobile}`).then(res => {
      res.json().then(value => {
        if (value.response.status == 1) {
          alertOtp(value.response.otp);
        }
        setLoading(false);
      });
    });
  };

  return (
    <>
      {Loading ? (
        <Loader Loading={Loading} />
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Animatable.Image
            animation="bounceInDown"
            duration={3000}
            source={require('../../assets/images/logo.png')}
            style={{
              width: '80%',
              height: 200,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                marginVertical: 30,
                fontSize: 16,
                fontFamily: Family.Regular,
                color: Colors.gray,
              }}>
              Enter One Time Password
            </Text>
            <View style={{marginVertical: 5, width: '100%'}}>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: Family.Regular,
                  color: Colors.gray,
                }}>
                Enter Otp
              </Text>
              <View
                style={{
                  borderColor: Colors.primary,
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}>
                <TextInput
                  placeholder="Enter your Otp"
                  value={Otp}
                  onChangeText={setOtp}
                  keyboardType="number-pad"
                  placeholderTextColor={Colors.gray}
                  style={{
                    fontSize: 14,
                    fontFamily: Family.Medium,
                    color: Colors.gray,
                    width: '100%',
                  }}
                />
              </View>
            </View>
            <View style={{marginVertical: 20}}>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.primary,
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  borderRadius: 10,
                }}
                onPress={Submit}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontFamily: Family.Medium,
                    color: Colors.light,
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={ResendOtp}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    textDecorationLine: 'underline',
                    color: Colors.dark,
                    fontFamily: Family.Medium,
                  }}>
                  Resend Otp
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Otp;

const styles = StyleSheet.create({});
