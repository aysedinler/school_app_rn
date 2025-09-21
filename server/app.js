
const express = require('express');
const cors = require('cors');
const { students, teachers, classes, courses, grades } = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'School Management API',
    version: '2.0.0',
    note: 'Pagination completely removed. All list endpoints now return full datasets after optional filtering.',
    endpoints: {
      students: '/api/students',
      teachers: '/api/teachers',
      classes: '/api/classes',
      courses: '/api/courses',
      grades: '/api/grades'
    }
  });
});

// ====================
// STUDENTS ENDPOINTS
// ====================

// GET /api/students - Get all students with optional filtering (NO pagination)
app.get('/api/students', (req, res) => {
  try {
    const { classId, isActive, search } = req.query;
    let filteredStudents = [...students];

    if (classId) {
      filteredStudents = filteredStudents.filter(s => s.classId === classId);
    }
    if (isActive !== undefined) {
      filteredStudents = filteredStudents.filter(s => s.isActive === (isActive === 'true'));
    }
    if (search) {
      const s = search.toLowerCase();
      filteredStudents = filteredStudents.filter(st =>
        st.firstName.toLowerCase().includes(s) ||
        st.lastName.toLowerCase().includes(s) ||
        st.email.toLowerCase().includes(s) ||
        st.studentNumber.includes(search)
      );
    }

    res.json({
      success: true,
      count: filteredStudents.length,
      data: filteredStudents
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// GET /api/students/:id - Get single student
app.get('/api/students/:id', (req, res) => {
  try {
    const student = students.find(s => s.id === req.params.id);
    if (!student) return res.status(404).json({ success: false, message: 'Student not found' });

    const studentClass = classes.find(c => c.id === student.classId);
    const studentGrades = grades.filter(g => g.studentId === student.id);

    res.json({
      success: true,
      data: { ...student, class: studentClass, grades: studentGrades }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// GET /api/students/:id/grades - Get student's grades
app.get('/api/students/:id/grades', (req, res) => {
  try {
    const student = students.find(s => s.id === req.params.id);
    if (!student) return res.status(404).json({ success: false, message: 'Student not found' });

    const enriched = grades
      .filter(g => g.studentId === req.params.id)
      .map(g => ({ ...g, course: courses.find(c => c.id === g.courseId) }));

    res.json({ success: true, count: enriched.length, data: enriched });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// ====================
// TEACHERS ENDPOINTS
// ====================

// GET /api/teachers - Get all teachers with optional filtering (NO pagination)
app.get('/api/teachers', (req, res) => {
  try {
    const { department, isActive, search } = req.query;
    let filtered = [...teachers];

    if (department) filtered = filtered.filter(t => t.department.toLowerCase().includes(department.toLowerCase()));
    if (isActive !== undefined) filtered = filtered.filter(t => t.isActive === (isActive === 'true'));
    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter(t =>
        t.firstName.toLowerCase().includes(s) ||
        t.lastName.toLowerCase().includes(s) ||
        t.email.toLowerCase().includes(s) ||
        t.employeeNumber.includes(search) ||
        t.subject.toLowerCase().includes(s)
      );
    }

    res.json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// GET /api/teachers/:id - Get single teacher
app.get('/api/teachers/:id', (req, res) => {
  try {
    const teacher = teachers.find(t => t.id === req.params.id);
    if (!teacher) return res.status(404).json({ success: false, message: 'Teacher not found' });

    const teacherClasses = classes.filter(c => c.teacherId === teacher.id);
    const teacherCourses = courses.filter(c => c.teacherId === teacher.id);

    res.json({ success: true, data: { ...teacher, classes: teacherClasses, courses: teacherCourses } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// GET /api/teachers/:id/courses
app.get('/api/teachers/:id/courses', (req, res) => {
  try {
    const teacher = teachers.find(t => t.id === req.params.id);
    if (!teacher) return res.status(404).json({ success: false, message: 'Teacher not found' });

    const teacherCourses = courses.filter(c => c.teacherId === req.params.id);
    res.json({ success: true, count: teacherCourses.length, data: teacherCourses });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// ====================
// CLASSES ENDPOINTS
// ====================

// GET /api/classes - Get all classes with optional filtering (NO pagination)
app.get('/api/classes', (req, res) => {
  try {
    const { grade, academicYear, isActive } = req.query;
    let filtered = [...classes];

    if (grade) filtered = filtered.filter(cls => cls.grade === parseInt(grade));
    if (academicYear) filtered = filtered.filter(cls => cls.academicYear === academicYear);
    if (isActive !== undefined) filtered = filtered.filter(cls => cls.isActive === (isActive === 'true'));

    res.json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// GET /api/classes/:id
app.get('/api/classes/:id', (req, res) => {
  try {
    const classItem = classes.find(c => c.id === req.params.id);
    if (!classItem) return res.status(404).json({ success: false, message: 'Class not found' });

    const classTeacher = teachers.find(t => t.id === classItem.teacherId);
    const classStudents = students.filter(s => s.classId === classItem.id);

    res.json({ success: true, data: { ...classItem, teacher: classTeacher, students: classStudents } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// GET /api/classes/:id/students
app.get('/api/classes/:id/students', (req, res) => {
  try {
    const classItem = classes.find(c => c.id === req.params.id);
    if (!classItem) return res.status(404).json({ success: false, message: 'Class not found' });

    const classStudents = students.filter(s => s.classId === req.params.id);
    res.json({ success: true, count: classStudents.length, data: classStudents });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// ====================
// COURSES ENDPOINTS
// ====================

// GET /api/courses - Get all courses with optional filtering (NO pagination)
app.get('/api/courses', (req, res) => {
  try {
    const { department, semester, teacherId, isActive, search } = req.query;
    let filtered = [...courses];

    if (department) filtered = filtered.filter(c => c.department.toLowerCase().includes(department.toLowerCase()));
    if (semester) filtered = filtered.filter(c => c.semester === semester);
    if (teacherId) filtered = filtered.filter(c => c.teacherId === teacherId);
    if (isActive !== undefined) filtered = filtered.filter(c => c.isActive === (isActive === 'true'));
    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter(c =>
        c.courseName.toLowerCase().includes(s) ||
        c.courseCode.toLowerCase().includes(s) ||
        c.description.toLowerCase().includes(s)
      );
    }

    res.json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// GET /api/courses/:id
app.get('/api/courses/:id', (req, res) => {
  try {
    const course = courses.find(c => c.id === req.params.id);
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });

    const courseTeacher = teachers.find(t => t.id === course.teacherId);
    const courseGrades = grades.filter(g => g.courseId === course.id);

    res.json({ success: true, data: { ...course, teacher: courseTeacher, grades: courseGrades } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// GET /api/courses/:id/grades
app.get('/api/courses/:id/grades', (req, res) => {
  try {
    const course = courses.find(c => c.id === req.params.id);
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });

    const enriched = grades
      .filter(g => g.courseId === req.params.id)
      .map(g => ({ ...g, student: students.find(s => s.id === g.studentId) }));

    res.json({ success: true, count: enriched.length, data: enriched });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// ====================
// GRADES ENDPOINTS
// ====================

// GET /api/grades - Get all grades with optional filtering (NO pagination)
app.get('/api/grades', (req, res) => {
  try {
    const { studentId, courseId, examType, semester, isActive } = req.query;
    let filtered = [...grades];

    if (studentId) filtered = filtered.filter(g => g.studentId === studentId);
    if (courseId) filtered = filtered.filter(g => g.courseId === courseId);
    if (examType) filtered = filtered.filter(g => g.examType.toLowerCase() === examType.toLowerCase());
    if (semester) filtered = filtered.filter(g => g.semester === semester);
    if (isActive !== undefined) filtered = filtered.filter(g => g.isActive === (isActive === 'true'));

    res.json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// GET /api/grades/:id
app.get('/api/grades/:id', (req, res) => {
  try {
    const grade = grades.find(g => g.id === req.params.id);
    if (!grade) return res.status(404).json({ success: false, message: 'Grade not found' });

    const student = students.find(s => s.id === grade.studentId);
    const course = courses.find(c => c.id === grade.courseId);

    res.json({ success: true, data: { ...grade, student, course } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// ====================
// STATISTICAL ENDPOINTS
// ====================

app.get('/api/stats/overview', (req, res) => {
  try {
    const stats = {
      totalStudents: students.filter(s => s.isActive).length,
      totalTeachers: teachers.filter(t => t.isActive).length,
      totalClasses: classes.filter(c => c.isActive).length,
      totalCourses: courses.filter(c => c.isActive).length,
      totalGrades: grades.filter(g => g.isActive).length,
      averageGPA: students.reduce((sum, s) => sum + s.gpa, 0) / students.length,
      averageClassSize: classes.reduce((sum, c) => sum + c.currentStudentCount, 0) / classes.length
    };
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

app.get('/api/stats/grades-summary', (req, res) => {
  try {
    const { courseId, studentId } = req.query;
    let filtered = [...grades];
    if (courseId) filtered = filtered.filter(g => g.courseId === courseId);
    if (studentId) filtered = filtered.filter(g => g.studentId === studentId);

    const gradeStats = {
      totalGrades: filtered.length,
      averageGrade: filtered.length ? filtered.reduce((s, g) => s + g.grade, 0) / filtered.length : 0,
      highestGrade: filtered.length ? Math.max(...filtered.map(g => g.grade)) : 0,
      lowestGrade: filtered.length ? Math.min(...filtered.map(g => g.grade)) : 0,
      examTypeDistribution: filtered.reduce((acc, g) => { acc[g.examType] = (acc[g.examType]||0)+1; return acc; }, {}),
      gradeRanges: {
        'A (90-100)': filtered.filter(g => g.grade >= 90).length,
        'B (80-89)': filtered.filter(g => g.grade >= 80 && g.grade < 90).length,
        'C (70-79)': filtered.filter(g => g.grade >= 70 && g.grade < 80).length,
        'D (60-69)': filtered.filter(g => g.grade >= 60 && g.grade < 70).length,
        'F (0-59)': filtered.filter(g => g.grade < 60).length
      }
    };
    res.json({ success: true, data: gradeStats });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

// 404
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    availableEndpoints: {
      students: '/api/students',
      teachers: '/api/teachers',
      classes: '/api/classes',
      courses: '/api/courses',
      grades: '/api/grades',
      statistics: '/api/stats/overview'
    }
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 School Management API (no-pagination) listening on port ${PORT}`);
});