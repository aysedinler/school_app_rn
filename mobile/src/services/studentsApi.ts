import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Student } from '../types/Student';
import { BASE_API_URL } from './constants';


export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: "BASE_API_URL " }),
  endpoints: (builder) => ({
  
    getStudents: builder.query<Student[], void>({
      query: () => 'students',
      transformResponse: (response: { data: Student[] }) => response.data,
    }),

    
    getStudentById: builder.query<Student, string>({
      query: (id) => `students/${id}`,
      transformResponse: (response: { data: Student }) => response.data,
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentByIdQuery,
} = studentsApi;

