import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import ProductItem from '../../components/ProductItem';
import { useNavigation } from '@react-navigation/native';
import { ProductsContext } from '../../contexts/products';

export default function Shop() {

    const navigation = useNavigation();
    const { products, valueItensCar,itensCar } = useContext(ProductsContext);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Carrinho de compras', {
                        itens: itensCar,
                    })}
                    style={styles.areaShoppingCart}
                >
                    <Icon name='shopping-cart' size={30} color='#002076' />
                    {valueItensCar > 0 ? <View style={styles.valueSoppingCart}>
                        <Text style={styles.textValueSoppingCart}>{valueItensCar}</Text>
                    </View> : null}
                </TouchableOpacity>

            </View>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ProductItem
                    data={item}
                />}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        width: '100%',
        height: 60,
        marginBottom: 10,
        padding: 12,
        flexDirection: 'row-reverse',
    },
    areaShoppingCart: {
        marginRight: 15,
    },
    valueSoppingCart: {
        backgroundColor: '#ff0000',
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 20
    },
    textValueSoppingCart: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
})