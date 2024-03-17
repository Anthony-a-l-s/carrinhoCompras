import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'

import { ProductsContext } from '../../contexts/products';

export default function CarShopItem({ data, set }) {

  const {itensCar, modTotalPrice } = useContext(ProductsContext);

  function setAmount(item, value){
      modTotalPrice(item.price*value);
      let temp = itensCar;
      let i = temp.indexOf(item);
      temp[i].amount = temp[i].amount + value;
      if(temp[i].amount === 0){
        temp.splice(i, 1);
      }
      set(temp, value);
  }

  return (
    <View style={styles.cotainerProductShop}>
      <View style={styles.areaProductText}>

        <Text style={styles.textProduct}>{data.name}</Text>
        <Text style={styles.textPrice}>R$ {data.price.toFixed(2).toString().replace('.', ',')}</Text>

      </View>

      <Text style={styles.textAmount}>x {data.amount}</Text>

      <View style={styles.buttonArea}>

        <TouchableOpacity onPress={()=>setAmount(data, 1)} style={styles.buttonModCarShop}>
          <Icon name='plus' color='#fff' size={20} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setAmount(data, -1)} style={styles.buttonModCarShop}>
          <Icon name='minus' color='#fff' size={20} />
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cotainerProductShop: {
    backgroundColor: '#ECECEC',
    width: '100%',
    flexDirection: 'row',
    height: 100,
    marginTop: 20,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
  },

  areaProductText: {
    flexDirection: 'column'
  },
  textProduct: {
    color: '#121212',
    fontSize: 18,
    fontWeight: 'bold',
  },

  textPrice: {
    fontSize: 15,
  },
  textAmount: {
    color: '#323232',
    fontSize: 18,
    marginLeft: -120,
    marginBottom: 20,
  },
  buttonArea: {
    flexDirection: 'column',
    padding: 10,
  },

  buttonModCarShop: {
    backgroundColor: '#002076',
    width: 50,
    height: 30,
    margin: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }

})