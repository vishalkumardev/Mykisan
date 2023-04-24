import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/MainScreen/Login';
import Onboarding from './src/MainScreen/Onboarding';
import Splash from './src/MainScreen/Splash';
import BottomStack from './BottomStack';
import Otp from './src/MainScreen/Otp';
import ProductDetail from './src/BottomStack/ProductDetail';
import Family from './src/Utitlies/Family';
import Search from './src/BottomStack/Search';
import Signup from './src/MainScreen/Signup';
import AddAddress from './src/BottomStack/AddAddress';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerTitleStyle: {
            fontSize: 13,
            fontFamily: Family.Medium,
          },
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AddAddress" component={AddAddress} />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomStack"
          component={BottomStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
