// src/screens/HomeScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BoxInfo from '../../components/AlertBox';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
       <BoxInfo percentagem={91} />
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default HomeScreen;