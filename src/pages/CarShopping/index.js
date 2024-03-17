import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import CarShopItem from '../../components/CarShopItem';
import { ProductsContext } from '../../contexts/products';

export default function CarShopping() {

    const {itensCar, modItensCar, totalPrice } = useContext(ProductsContext);

    return (
        <View style={styles.container}>
            <View style={styles.areaProducts}>
                <FlatList
                    data={itensCar}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <CarShopItem
                            data={item}
                            set={(item, value) => modItensCar(item, value)}
                        />

                    }
                />
            </View>
            <View style={styles.areaFinishShop}>
                {totalPrice > 0?<Text style={styles.textTotalShop}>Total: R$ {totalPrice.toFixed(2).toString().replace('.', ',')}</Text>:null}
                <TouchableOpacity style={styles.buttonFinishSop}>
                    <Text style={styles.textFinishSop}>Finalizar Compra</Text>
                </TouchableOpacity>
            </View>
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
    areaProducts:{
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    areaFinishShop: {
        width: '100%',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTotalShop:{
        color: '#121212',
        fontSize: 25,
        fontWeight: 'bold',
    },
    buttonFinishSop:{
        backgroundColor: '#08BF13',
        width: '90%',
        height: 50,
        marginTop: 10, 
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textFinishSop: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    }
})