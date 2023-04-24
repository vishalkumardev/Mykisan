import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import ReacT, {useEffect, useState} from 'react';
import CommonHeader from '../components/CommonHeader';
import Global from '../Utitlies/Global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../Utitlies/Colors';
import Family from '../Utitlies/Family';
import {PlusIcon, TrashIcon} from 'react-native-heroicons/solid';
import Loader from '../components/Loader';
import Empty from '../components/Empty';

const Cart = ({navigation}) => {
  const [Cart, setCart] = useState([]);
  const [userId, setuserId] = useState('');
  const [Loading, setLoading] = useState(false);
  const [Address, setAddress] = useState([]);
  const [selectedIndex, setselectedIndex] = useState(0);

  const getData = () => {
    return AsyncStorage.getItem('userId').then(value => {
      setuserId(value);
      fetch(Global.BASE_URL + `myCart&userId=${value}`).then(res =>
        res.json().then(data => {
          setCart(data.response);
        }),
      );
    });
  };

  const getAddress = () => {
    return AsyncStorage.getItem('userId').then(value => {
      setuserId(value);
      fetch(Global.BASE_URL + `viewAddress&userId=${value}`).then(res =>
        res.json().then(data => {
          setAddress(data.addressBook);
        }),
      );
    });
  };
  useEffect(() => {
    getData();
    getAddress();
  }, []);

  const IncreaseQty = item => {
    const qty = item.qty + 1;
    console.log(qty);
    const price = qty * item.price;
    setLoading(true);
    return fetch(
      Global.BASE_URL +
        `addtocart&userId=${userId}&productId=${item.productId}&qty=${qty}&price=${price}`,
    ).then(() => {
      setLoading(false);
      getData();
    });
  };
  const DecreaseQty = item => {
    const qty = item.qty - 1;
    console.log(qty);
    const price = qty * item.price;
    setLoading(true);
    return fetch(
      Global.BASE_URL +
        `addtocart&userId=${userId}&productId=${item.productId}&qty=${qty}&price=${price}`,
    ).then(() => {
      setLoading(false);
      getData();
    });
  };

  const DeleteItem = item => {
    setLoading(true);
    return fetch(
      Global.BASE_URL +
        `deleteCart&userId=${userId}&productId=${item.productId}`,
    ).then(() => {
      setLoading(false);
      getData();
    });
  };

  return (
    <>
      {Loading ? (
        <Loader Loading={Loading} />
      ) : (
        <ScrollView style={{flex: 1}}>
          <CommonHeader name={'Cart'} navigation={navigation} />
          <View>
            <FlatList
              data={Cart}
              refreshing={false}
              onRefresh={getData}
              ListEmptyComponent={<Empty />}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      backgroundColor: Colors.light,
                      width: '95%',
                      alignSelf: 'center',
                      marginVertical: 10,
                      paddingVertical: 10,
                      borderRadius: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{uri: item.image}}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 10,
                        resizeMode: 'contain',
                      }}
                    />
                    <View style={{marginLeft: 20}}>
                      <Text
                        style={{
                          fontFamily: Family.Medium,
                          color: Colors.gray,
                          fontSize: 13,
                        }}>
                        {item.productName}
                      </Text>
                      <Text
                        style={{
                          fontFamily: Family.Medium,
                          color: Colors.gray,
                          fontSize: 14,
                        }}>
                        ₹ {item.price}
                      </Text>
                      <Text
                        style={{
                          fontFamily: Family.Medium,
                          color: Colors.gray,
                          fontSize: 14,
                        }}>
                        Quantity: {item.qty}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                        width: 100,
                      }}>
                      {item.qty == 1 ? (
                        <TouchableOpacity
                          style={{
                            width: '33%',
                            backgroundColor: Colors.primary,
                          }}
                          onPress={() => DeleteItem(item)}>
                          <TrashIcon
                            color={Colors.light}
                            size={16}
                            style={{
                              alignSelf: 'center',
                              alignItems: 'center',
                              marginTop: 3,
                            }}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={{
                            width: '33%',
                            backgroundColor: Colors.primary,
                          }}
                          onPress={() => DecreaseQty(item)}>
                          <Text
                            style={{
                              fontFamily: Family.Medium,
                              color: Colors.light,
                              fontSize: 14,
                              textAlign: 'center',
                            }}>
                            -
                          </Text>
                        </TouchableOpacity>
                      )}

                      <Text
                        style={{
                          fontFamily: Family.Medium,
                          color: Colors.gray,
                          fontSize: 14,
                        }}>
                        {item.qty}
                      </Text>
                      <TouchableOpacity
                        style={{width: '33%', backgroundColor: Colors.primary}}
                        onPress={() => IncreaseQty(item)}>
                        <Text
                          style={{
                            fontFamily: Family.Medium,
                            color: Colors.light,
                            fontSize: 14,
                            textAlign: 'center',
                          }}>
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              color: Colors.gray,
              fontFamily: Family.Medium,
              marginTop: 10,
              marginHorizontal: 15,
            }}>
            Address Details :
          </Text>
          <View
            style={{
              width: '95%',
              alignSelf: 'center',
              padding: 10,
              borderRadius: 5,
              marginTop: 10,
              backgroundColor: Colors.light,
              marginBottom: 20,
            }}>
            <FlatList
              data={Address}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: 15,
                      marginVertical: 10,
                    }}>
                    <TouchableOpacity
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 25,
                        borderWidth: 1,
                        borderColor: Colors.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => setselectedIndex(index)}>
                      {selectedIndex == index ? (
                        <View
                          style={{
                            height: 14,
                            width: 14,
                            borderRadius: 25,
                            backgroundColor: Colors.primary,
                          }}></View>
                      ) : null}
                    </TouchableOpacity>

                    <View style={{marginLeft: 20}}>
                      <Text
                        style={{
                          fontFamily: Family.Regular,
                          fontSize: 14,
                          color: Colors.gray,
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontFamily: Family.Regular,
                          fontSize: 14,
                          color: Colors.gray,
                        }}>
                        +91 {item.phone}
                      </Text>
                      <Text
                        style={{
                          fontFamily: Family.Regular,
                          fontSize: 13,
                          color: Colors.gray,
                        }}>
                        {item.houseNo}, {'  ' + item.streetAddress},{' '}
                        {'  ' + item.city},{'  ' + item.state},{' '}
                        {'  ' + item.pincode}
                      </Text>

                      <Text
                        style={{
                          fontFamily: Family.Regular,
                          fontSize: 14,
                          color: Colors.gray,
                        }}>
                        Pincode : {item.pincode}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                marginTop: 20,
                paddingHorizontal: 10,
              }}
              onPress={() => navigation.navigate('AddAddress')}>
              <PlusIcon color={Colors.primary} size={20} />
              <Text
                style={{
                  fontFamily: Family.Regular,
                  fontSize: 14,
                  color: Colors.gray,
                  marginLeft: 20,
                }}>
                Add New Address
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}

      <View style={{width: '100%', flexDirection: 'row'}}>
        <View
          style={{
            width: '50%',
            backgroundColor: Colors.lightdark,
            paddingVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Family.Medium,
              textAlign: 'center',
              color: Colors.dark,
            }}>
            Total Amount
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: '50%',
            backgroundColor: Colors.primary,
            paddingVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Family.Medium,
              textAlign: 'center',
              color: Colors.light,
            }}>
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({});
