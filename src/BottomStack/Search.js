import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../Utitlies/Colors';
import Family from '../Utitlies/Family';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import Global from '../Utitlies/Global';
import ProductItem from '../components/ProductItem';
import Loader from '../components/Loader';
import Empty from '../components/Empty';

const Search = ({navigation}) => {
  const [Products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [text, settext] = useState('');

  const handleSearch = text => {
    settext(text);
    if (text.length > 2) {
      return fetch(Global.BASE_URL + `search&search=${text}`).then(res => {
        res.json().then(data => {
          setProducts(data.response);
        });
      });
    } else {
      setProducts([]);
    }
  };
  return (
    <>
      {Loading ? (
        <Loader Loading={Loading} />
      ) : (
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 15,
              backgroundColor: Colors.light,
              paddingVertical: 5,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftIcon color={Colors.dark} size={20} />
            </TouchableOpacity>
            <TextInput
              placeholder="Search for Fertilizer"
              autoFocus={true}
              value={text}
              onChangeText={text => handleSearch(text)}
              placeholderTextColor={Colors.gray}
              style={{
                fontSize: 14,
                color: Colors.gray,
                fontFamily: Family.Medium,
                marginLeft: 15,
                flex: 1,
              }}
            />
          </View>

          <View style={{width: '95%', alignSelf: 'center', marginVertical: 10}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={Products}
              numColumns={2}
              ListEmptyComponent={<Empty />}
              renderItem={({item, index}) => {
                return (
                  <ProductItem
                    item={item}
                    index={index}
                    navigation={navigation}
                  />
                );
              }}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default Search;

const styles = StyleSheet.create({});
