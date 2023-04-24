import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/BottomStack/Home';
import Setting from './src/BottomStack/Setting';
import Cart from './src/BottomStack/Cart';
import Order from './src/BottomStack/Order';
import {
  ShoppingCartIcon,
  ShoppingBagIcon,
  HomeIcon,
  Cog6ToothIcon,
} from 'react-native-heroicons/solid';
import Colors from './src/Utitlies/Colors';
import Family from './src/Utitlies/Family';

const Tab = createBottomTabNavigator();
const BottomStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: Family.Medium,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => (
            <ShoppingCartIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({color, size}) => (
            <ShoppingBagIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color, size}) => (
            <Cog6ToothIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;

const styles = StyleSheet.create({});
