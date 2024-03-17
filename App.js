import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import ProductProvider from './src/contexts/products';

export default function App() {

  return (
    <NavigationContainer>
      <ProductProvider>
        <Routes />
      </ProductProvider>
    </NavigationContainer>
  );
}


