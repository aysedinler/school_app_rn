import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useGetStudentsQuery } from '../services/studentsApi';
import { Student } from '../types/Student';

export default function StudentsScreen() {
  const { data: students, isLoading, error } = useGetStudentsQuery();

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error || !students) {
    return <Text>Veriler alınamadı!</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
            <Text>Öğrenci No: {item.studentNumber}</Text>
            <Text>Sınıf ID: {item.classId}</Text>
            <Text>GANO: {item.gpa}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  card: { padding: 12, marginBottom: 12, backgroundColor: '#f2f2f2', borderRadius: 8 },
  name: { fontSize: 18, fontWeight: 'bold' },
});
