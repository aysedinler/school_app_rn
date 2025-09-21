# 🏫 School Management REST API

Bu proje, okul yönetim sistemi için geliştirilmiş kapsamlı bir REST API'dir. Express.js kullanılarak geliştirilmiş ve hard-coded veriler ile çalışmaktadır.

## 🚀 Özellikler

- **5 Ana Model**: Students, Teachers, Classes, Courses, Grades
- **RESTful API**: Standart HTTP GET metodları
- **Sayfalama**: Tüm liste endpoint'lerinde sayfalama desteği
- **Arama & Filtreleme**: Gelişmiş arama ve filtreleme özellikleri
- **İlişkisel Veriler**: Modeller arası ilişkiler ve zenginleştirilmiş veriler
- **İstatistikler**: Kapsamlı istatistik endpoint'leri
- **Hata Yönetimi**: Detaylı hata mesajları ve status kodları
- **CORS Desteği**: Cross-origin isteklere destek

## 🏃‍♂️ Çalıştırma

```bash
npm install

# Geliştirme modunda
npm run dev
```

API varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

## 📚 API Dokümantasyonu

### 🔗 Ana Endpoint
- `GET /` - API bilgileri ve mevcut endpoint'ler

### 👨‍🎓 Students (Öğrenciler)

| Endpoint | Açıklama | Query Parametreleri |
|----------|----------|---------------------|
| `GET /api/students` | Tüm öğrencileri listele | `page`, `limit`, `classId`, `isActive`, `search` |
| `GET /api/students/:id` | Belirli öğrenciyi getir | - |
| `GET /api/students/:id/grades` | Öğrencinin notlarını getir | - |

**Örnek İstekler:**
```bash
# Tüm öğrenciler
curl http://localhost:3000/api/students

# Sayfalama ile
curl "http://localhost:3000/api/students?page=1&limit=3"

# Arama
curl "http://localhost:3000/api/students?search=ahmet"

# Sınıfa göre filtreleme
curl "http://localhost:3000/api/students?classId=550e8400-e29b-41d4-a716-446655440011"
```

### 👨‍🏫 Teachers (Öğretmenler)

| Endpoint | Açıklama | Query Parametreleri |
|----------|----------|---------------------|
| `GET /api/teachers` | Tüm öğretmenleri listele | `page`, `limit`, `department`, `isActive`, `search` |
| `GET /api/teachers/:id` | Belirli öğretmeni getir | - |
| `GET /api/teachers/:id/courses` | Öğretmenin derslerini getir | - |

### 🏫 Classes (Sınıflar)

| Endpoint | Açıklama | Query Parametreleri |
|----------|----------|---------------------|
| `GET /api/classes` | Tüm sınıfları listele | `page`, `limit`, `grade`, `academicYear`, `isActive` |
| `GET /api/classes/:id` | Belirli sınıfı getir | - |
| `GET /api/classes/:id/students` | Sınıftaki öğrencileri getir | - |

### 📖 Courses (Dersler)

| Endpoint | Açıklama | Query Parametreleri |
|----------|----------|---------------------|
| `GET /api/courses` | Tüm dersleri listele | `page`, `limit`, `department`, `semester`, `teacherId`, `isActive`, `search` |
| `GET /api/courses/:id` | Belirli dersi getir | - |
| `GET /api/courses/:id/grades` | Dersin notlarını getir | - |

### 📊 Grades (Notlar)

| Endpoint | Açıklama | Query Parametreleri |
|----------|----------|---------------------|
| `GET /api/grades` | Tüm notları listele | `page`, `limit`, `studentId`, `courseId`, `examType`, `semester`, `isActive` |
| `GET /api/grades/:id` | Belirli notu getir | - |

### 📈 İstatistikler

| Endpoint | Açıklama |
|----------|----------|
| `GET /api/stats/overview` | Genel istatistikler |
| `GET /api/stats/grades-summary` | Not istatistikleri |

## 🗂️ Veri Modelleri

### Student (Öğrenci)
```json
{
  "id": "UUID",
  "firstName": "string",
  "lastName": "string", 
  "email": "string",
  "phone": "string",
  "dateOfBirth": "date",
  "address": "string",
  "profileImage": "url",
  "studentNumber": "string",
  "classId": "UUID",
  "enrollmentDate": "date",
  "gpa": "number",
  "isActive": "boolean"
}
```

### Teacher (Öğretmen)
```json
{
  "id": "UUID",
  "firstName": "string",
  "lastName": "string",
  "email": "string", 
  "phone": "string",
  "dateOfBirth": "date",
  "address": "string",
  "profileImage": "url",
  "employeeNumber": "string",
  "department": "string",
  "subject": "string",
  "hireDate": "date",
  "salary": "number",
  "isActive": "boolean",
  "experience": "number"
}
```

### Class (Sınıf)
```json
{
  "id": "UUID",
  "className": "string",
  "grade": "number",
  "section": "string",
  "academicYear": "string",
  "teacherId": "UUID",
  "capacity": "number",
  "currentStudentCount": "number",
  "classroom": "string",
  "schedule": "string",
  "isActive": "boolean"
}
```

### Course (Ders)
```json
{
  "id": "UUID",
  "courseName": "string",
  "courseCode": "string",
  "description": "string",
  "credits": "number",
  "teacherId": "UUID",
  "department": "string",
  "semester": "string",
  "schedule": {
    "days": ["array"],
    "startTime": "string",
    "endTime": "string"
  },
  "classroom": "string",
  "capacity": "number",
  "enrolledStudents": "number",
  "isActive": "boolean",
  "courseImage": "url"
}
```

### Grade (Not)
```json
{
  "id": "UUID",
  "studentId": "UUID",
  "courseId": "UUID", 
  "examType": "string",
  "grade": "number",
  "maxGrade": "number",
  "examDate": "date",
  "semester": "string",
  "weight": "number",
  "isActive": "boolean",
  "feedback": "string"
}
```

## 📱 Response Formatı

Tüm API yanıtları aşağıdaki formatı takip eder:

### Başarılı Yanıt
```json
{
  "success": true,
  "data": {},
  "message": "İşlem başarılı"
}
```

### Hata Yanıtı
```json
{
  "success": false,
  "message": "Hata açıklaması",
  "error": "Detaylı hata bilgisi"
}
```

### Sayfalama Yanıtı
```json
{
  "success": true,
  "data": {
    "results": [],
    "total": 50,
    "totalPages": 5,
    "currentPage": 1,
    "next": {
      "page": 2,
      "limit": 10
    },
    "previous": null
  },
  "message": "Veriler başarıyla getirildi"
}
```

## 🔧 Teknik Detaylar

- **Node.js** & **Express.js** framework
- **UUID** kullanarak unique identifier'lar
- **Pagination** sistemi
- **CORS** middleware
- **Error handling** middleware
- **RESTful** API prensipleri
- **JSON** formatında veri döndürme

## 🎯 Kullanım Örnekleri

### Öğrenci Arama
```bash
curl "http://localhost:3000/api/students?search=ahmet&page=1&limit=5"
```

### Matematik Dersini Veren Öğretmenler
```bash
curl "http://localhost:3000/api/teachers?department=matematik"
```

### 9. Sınıf Şubeleri
```bash
curl "http://localhost:3000/api/classes?grade=9"
```

### Bir Öğrencinin Tüm Notları
```bash
curl "http://localhost:3000/api/students/550e8400-e29b-41d4-a716-446655440001/grades"
```

## 📄 Lisans

MIT License

---

**Not**: Bu API eğitim amaçlı hazırlanmıştır ve hard-coded veriler kullanmaktadır. Gerçek uygulamalar için veritabanı entegrasyonu önerilir.