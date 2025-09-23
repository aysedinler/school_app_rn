import React from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useGetStudentsQuery } from '../services/studentsApi';
import StudentCard from '../components/StudentCard';

export default function StudentsScreen({ navigation }: any) {
  const { data: students, isLoading, error } = useGetStudentsQuery();

  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error || !students) return <View><ActivityIndicator /></View>;

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudentCard
            student={item}
            onPress={() => navigation.navigate('StudentDetail', { id: item.id })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
