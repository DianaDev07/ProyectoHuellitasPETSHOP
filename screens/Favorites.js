import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Favorites({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites Screen</Text>
      <Button
        title="View Favorite Items"
        onPress={() => {/* Agregar funcionalidad para ver los items favoritos */}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
