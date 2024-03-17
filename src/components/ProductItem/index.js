import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import { ProductsContext } from '../../contexts/products';


export default function ProductItem({ data }) {

    const { addItem } = useContext(ProductsContext);


    return (
        <View style={styles.containerProduct}>
            <View style={styles.areaProductText}>
                <Text style={styles.textProduct}>{data.name}</Text>
                <Text style={styles.textPrice}>R$ {data.price.toFixed(2).toString().replace('.', ',')}</Text>
            </View>
            <TouchableOpacity style={styles.buttonAdd} onPress={() => addItem(data)}>

                <Icon name='add' color='#fff' size={30} />

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    containerProduct: {
        backgroundColor: '#ECECEC',
        width: '100%',
        flexDirection: 'row',
        height: 80,
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

    buttonAdd: {
        backgroundColor: '#002076',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 8,
    }
})