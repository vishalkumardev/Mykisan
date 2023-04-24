import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Family from '../Utitlies/Family';
import Colors from '../Utitlies/Colors';
import Global from '../Utitlies/Global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddAddress = ({navigation}) => {
  const [Name, setName] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Street, setStreet] = useState('');
  const [Pincode, setPincode] = useState('');
  const [HouseNo, setHouseNo] = useState('');
  const [State, setState] = useState('');
  const [City, setCity] = useState('');

  const AddAddress = () => {
    AsyncStorage.getItem('userId')
      .then(value => {
        return fetch(
          Global.BASE_URL +
            `addAddress&userId=${value}&name=${Name}&phone=${Mobile}&houseNo=${HouseNo}&streetAddress=${Street}&city=${City}&state=${State}&pincode=${Pincode}`,
        );
      })
      .then(res => {
        res.json().then(value => {
          if (value.response.status == 1) {
            navigation.navigate('Cart');
          }
        });
      });
  };

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Family.Medium,
              color: Colors.gray,
              marginTop: 15,
              marginBottom: 5,
            }}>
            Name
          </Text>
          <TextInput
            placeholderTextColor={Colors.gray}
            placeholder="Enter Name"
            value={Name}
            onChangeText={setName}
            style={{
              borderColor: Colors.primary,
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 15,
              color: Colors.gray,
              fontFamily: Family.Regular,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Family.Medium,
              color: Colors.gray,
              marginTop: 15,
              marginBottom: 5,
            }}>
            Mobile Number
          </Text>
          <TextInput
            placeholderTextColor={Colors.gray}
            placeholder="Enter Mobile Number"
            value={Mobile}
            onChangeText={setMobile}
            keyboardType="number-pad"
            style={{
              borderColor: Colors.primary,
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 15,
              color: Colors.gray,
              fontFamily: Family.Regular,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Family.Medium,
              color: Colors.gray,
              marginTop: 15,
              marginBottom: 5,
            }}>
            House No. / Appartment
          </Text>
          <TextInput
            placeholderTextColor={Colors.gray}
            placeholder="Enter House No. / Appartment"
            value={HouseNo}
            onChangeText={setHouseNo}
            style={{
              borderColor: Colors.primary,
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 15,
              color: Colors.gray,
              fontFamily: Family.Regular,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Family.Medium,
              color: Colors.gray,
              marginTop: 15,
              marginBottom: 5,
            }}>
            Street Address
          </Text>
          <TextInput
            placeholderTextColor={Colors.gray}
            placeholder="Enter Street Address"
            value={Street}
            onChangeText={setStreet}
            style={{
              borderColor: Colors.primary,
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 15,
              color: Colors.gray,
              fontFamily: Family.Regular,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Family.Medium,
              color: Colors.gray,
              marginTop: 15,
              marginBottom: 5,
            }}>
            City
          </Text>
          <TextInput
            placeholderTextColor={Colors.gray}
            placeholder="Enter your City "
            value={City}
            onChangeText={setCity}
            style={{
              borderColor: Colors.primary,
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 15,
              color: Colors.gray,
              fontFamily: Family.Regular,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Family.Medium,
              color: Colors.gray,
              marginTop: 15,
              marginBottom: 5,
            }}>
            State
          </Text>
          <TextInput
            placeholderTextColor={Colors.gray}
            placeholder="Enter State Name"
            value={State}
            onChangeText={setState}
            style={{
              borderColor: Colors.primary,
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 15,
              color: Colors.gray,
              fontFamily: Family.Regular,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Family.Medium,
              color: Colors.gray,
              marginTop: 15,
              marginBottom: 5,
            }}>
            Pincode
          </Text>
          <TextInput
            placeholderTextColor={Colors.gray}
            placeholder="Enter Picode"
            value={Pincode}
            onChangeText={setPincode}
            style={{
              borderColor: Colors.primary,
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 15,
              color: Colors.gray,
              fontFamily: Family.Regular,
            }}
          />
        </View>
        <View style={{marginVertical: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderRadius: 10,
            }}
            onPress={AddAddress}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                fontFamily: Family.Medium,
                color: Colors.light,
              }}>
              Add Address
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddAddress;

const styles = StyleSheet.create({});
