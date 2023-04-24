import {StyleSheet, Text, View, ActivityIndicator, Modal} from 'react-native';
import React from 'react';
import Colors from '../Utitlies/Colors';

const Loader = ({Loading}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={Loading}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator color={Colors.secondary} size={60} />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark,
    opacity: 0.8,
  },
  modalView: {
    alignItems: 'center',
    shadowColor: '#000',
    opacity: 1,
  },
});
