import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Global from '../Utitlies/Global';
import Colors from '../Utitlies/Colors';
import Family from '../Utitlies/Family';
import {HeartIcon, StarIcon} from 'react-native-heroicons/solid';
import HTMLView from 'react-native-htmlview';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetail = ({navigation, route}) => {
  const {id} = route.params;
  const [Products, setProducts] = useState([]);
  const [userId, setuserId] = useState('');

  const getData = () => {
    fetch(Global.BASE_URL + `productDetail&productId=${id}`).then(res =>
      res.json().then(data => {
        setProducts(data.response);
      }),
    );
  };
  useEffect(() => {
    AsyncStorage.getItem('userId').then(value => {
      setuserId(value);
    });
    getData();
  }, []);

  const addToCart = () => {
    return fetch(
      Global.BASE_URL +
        `addtocart&userId=${userId}&productId=${id}&qty=${1}&price=${
          Products.offerPrice
        }`,
    ).then(res => {
      res.json().then(value => {
        if (value.response.status == 1) {
          ToastAndroid.show(
            'Product has been added in your Cart',
            ToastAndroid.SHORT,
          );
        }
      });
    });
  };
  return (
    <>
      <View style={{flex: 1}}>
        <Image
          source={{uri: Products.img}}
          style={{
            width: '100%',
            height: 170,
            resizeMode: 'contain',
            backgroundColor: Colors.light,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
          }}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: Family.Medium,
                  margin: 10,
                  color: Colors.dark,
                }}>
                ₹ {Products.offerPrice}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Family.Medium,
                  margin: 10,
                  color: Colors.gray,
                  textDecorationLine: 'line-through',
                }}>
                Mrp {Products.mrp}
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <StarIcon color={Colors.secondary} size={20} />
              <StarIcon color={Colors.secondary} size={20} />
              <StarIcon color={Colors.secondary} size={20} />
              <StarIcon color={Colors.secondary} size={20} />
              <StarIcon color={Colors.secondary} size={20} />
            </View>
          </View>
          <TouchableOpacity>
            <HeartIcon color={Colors.primary} size={24} />
          </TouchableOpacity>
        </View>

        <View style={{width: '95%', alignSelf: 'center', marginTop: 10}}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Family.Medium,
              margin: 10,
              color: Colors.gray,
            }}>
            Product Descriptions:
          </Text>
          <HTMLView value={Products.content} stylesheet={styles} />
        </View>
      </View>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: '50%',
            backgroundColor: Colors.lightdark,
            paddingVertical: 15,
          }}
          onPress={addToCart}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Family.Medium,
              textAlign: 'center',
              color: Colors.dark,
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
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
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
  p: {
    fontWeight: '300',
    color: Colors.gray,
    width: '95%',
    alignSelf: 'center',
    textAlign: 'justify', // make links coloured pink
  },
});
