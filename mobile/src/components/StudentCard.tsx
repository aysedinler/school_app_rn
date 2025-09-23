import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Student } from '../types/Student';

type Props = {
  student: Student;
  onPress: () => void;
};

export default function StudentCard({ student, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: student.profileImage }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>
          {student.firstName} {student.lastName}
        </Text>
        <Text>🎓 Öğrenci No: {student.studentNumber}</Text>
        <Text>📊 GPA: {student.gpa}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
    backgroundColor: '#ddd',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
