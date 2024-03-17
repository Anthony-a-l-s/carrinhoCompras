import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Shop from '../pages/Shop/index.js';
import CarShopping from '../pages/CarShopping/index.js';

const Stack = createStackNavigator();

export default function routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name='Compra'
            component={Shop}
            options={{
                headerShown: false,
            }}
        />
            <Stack.Screen 
            name='Carrinho de compras'
            component={CarShopping}
        />
        </Stack.Navigator>
    );
}