import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, ScrollView } from 'react-native';
import { useGetStudentByIdQuery } from '../services/studentsApi';

export default function StudentDetailScreen({ route }: any) {
  const { id } = route.params;
  const { data: student, isLoading, error } = useGetStudentByIdQuery(id);

  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.centered} />;
  }

  if (error || !student) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>Veri alınamadı ❌</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: student.profileImage }} style={styles.image} />
      <Text style={styles.name}>{student.firstName} {student.lastName}</Text>
      <Text style={styles.label}>📧 Email: <Text style={styles.value}>{student.email}</Text></Text>
      <Text style={styles.label}>📞 Telefon: <Text style={styles.value}>{student.phone}</Text></Text>
      <Text style={styles.label}>🎓 Öğrenci No: <Text style={styles.value}>{student.studentNumber}</Text></Text>
      <Text style={styles.label}>🏫 Sınıf ID: <Text style={styles.value}>{student.classId}</Text></Text>
      <Text style={styles.label}>📅 Kayıt Tarihi: <Text style={styles.value}>{student.enrollmentDate}</Text></Text>
      <Text style={styles.label}>📊 GPA: <Text style={styles.value}>{student.gpa}</Text></Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '600',
  },
  value: {
    fontWeight: 'normal',
    color: '#555',
  },
});

