import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import Family from '../Utitlies/Family';
import Colors from '../Utitlies/Colors';
import Global from '../Utitlies/Global';
import Loader from '../components/Loader';

const Login = ({navigation}) => {
  const [Mobile, setMobile] = useState('');
  const [Loading, setLoading] = useState(false);

  const Login = () => {
    setLoading(true);
    return fetch(Global.BASE_URL + `login&mobile=${Mobile}`).then(res => {
      res.json().then(value => {
        if (value.response.status == 1) {
          navigation.navigate('Otp', {
            Mobile: Mobile,
            data: value,
          });
        } else {
          navigation.navigate('Signup');
        }
      });
      setLoading(false);
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
              Sign into your account
            </Text>
            <View style={{marginVertical: 5, width: '100%'}}>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: Family.Regular,
                  color: Colors.gray,
                }}>
                Mobile Number
              </Text>
              <View
                style={{
                  width: '100%',
                  borderColor: Colors.primary,
                  borderWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  marginTop: 10,
                }}>
                <Text style={{color: Colors.gray, fontFamily: Family.Medium}}>
                  +91
                </Text>
                <TextInput
                  placeholder="Enter your Mobile Number"
                  value={Mobile}
                  onChangeText={setMobile}
                  keyboardType="number-pad"
                  placeholderTextColor={Colors.gray}
                  style={{
                    fontSize: 14,
                    fontFamily: Family.Medium,
                    color: Colors.gray,
                    marginLeft: 15,
                    flex: 1,
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
                onPress={Login}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontFamily: Family.Medium,
                    color: Colors.light,
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
