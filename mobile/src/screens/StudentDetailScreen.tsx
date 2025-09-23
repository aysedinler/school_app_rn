import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentDetailScreen({ route }: any) {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Öğrenci Detayı</Text>
      <Text>Gelen ID: {id}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
