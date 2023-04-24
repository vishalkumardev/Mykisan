import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  BackHandler,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Global from '../Utitlies/Global';
import CategoryItem from '../components/CategoryItem';
import {SliderBox} from 'react-native-image-slider-box';
import Colors from '../Utitlies/Colors';
import Family from '../Utitlies/Family';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import {useNavigation} from '@react-navigation/native';

const Home = ({navigation}) => {
  const [Products, setProducts] = useState([]);
  const [Slider, setSlider] = useState([]);
  const [Category, setCategory] = useState([]);

  const Navigation = useNavigation();
  useEffect(() => {
    const unsuscribe = Navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      BackHandler.exitApp();
    });
    return unsuscribe;
  }, [Navigation]);

  const getData = () => {
    fetch(Global.BASE_URL + `homeScreen`).then(res =>
      res.json().then(data => {
        setProducts(data.product);
        setSlider(data.slider);
        setCategory(data.category.response);
      }),
    );
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: Colors.light}}>
      <Header navigation={navigation} />
      <SliderBox images={Slider} circleLoop={true} autoplay={true} />
      <View>
        <Text
          style={{
            fontSize: 14,
            color: Colors.gray,
            fontFamily: Family.Medium,
            marginTop: 20,
            marginHorizontal: 15,
          }}>
          All Category
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Category}
          style={{marginVertical: 10}}
          horizontal
          renderItem={({item, index}) => {
            return (
              <CategoryItem item={item} index={index} navigation={navigation} />
            );
          }}
        />
      </View>

      <View style={{width: '100%'}}>
        <Text
          style={{
            fontSize: 14,
            color: Colors.gray,
            fontFamily: Family.Medium,
            marginTop: 20,
            marginHorizontal: 15,
          }}>
          Top Selling Products
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Products}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <ProductItem item={item} index={index} navigation={navigation} />
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
