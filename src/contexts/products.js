import React, { createContext, useState, useEffect } from 'react';


export const ProductsContext = createContext({});


function ProductProvider({ children }) {

    const [valueItensCar, setValueItensCar] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [itensCar, setItensCar] = useState([])
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Coca-Cola',
            price: 19.90
        },
        {
            id: 2,
            name: 'Chocolate',
            price: 6.50
        },
        {
            id: 3,
            name: 'Queijo 500g',
            price: 15.00
        },
        {
            id: 4,
            name: 'Batata frita',
            price: 23.90
        },
        {
            id: 5,
            name: 'Garana lata',
            price: 6.00
        },
    ])

    function setAmountItensCar(val) {
        setValueItensCar(val)
    }



    function modItensCar(item, value) {
        setItensCar(item);
        setAmountItensCar(valueItensCar + value);
    }


    function verifyRepetition(id) {
        for (let i = 0; i < itensCar.length; i++) {
            if (itensCar[i].id === id) {
                itensCar[i].amount++;
                return true;
            }
        }
        return false;
    }

    function addItem(data) {

        if (!verifyRepetition(data.id)) {
            const temp = {
                id: data.id,
                name: data.name,
                price: data.price,
                amount: 1
            }
            setItensCar([...itensCar, temp]);
            modTotalPrice(data.price);
        } else {

        }
        setAmountItensCar(valueItensCar + 1);
        modTotalPrice(data.price);
    }

    function modTotalPrice(val) {
        setTotalPrice(totalPrice + val);
    }


    return (
        <ProductsContext.Provider value={{ products, addItem, setValueItensCar, valueItensCar, setAmountItensCar, itensCar, modItensCar, totalPrice, modTotalPrice }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductProvider;