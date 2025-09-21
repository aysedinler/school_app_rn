# 📱 Mobil Uygulama Geliştirme Kontrol Listesi

Bu kontrol listesi, School Management API'sini kullanarak geliştirilecek mobil uygulamanın tüm teknik gereksinimleri karşıladığından emin olmak için hazırlanmıştır.

## 🏠 Ana Ekranlar ve Navigasyon

### 📋 Ana Dashboard Ekranı
- [ ] **API Bağlantısı**: `/api/stats/overview` endpoint'ini kullanarak genel istatistikleri göster
- [ ] **Toplam Sayılar**: Öğrenci, öğretmen, sınıf, ders sayılarını card'larda göster
- [ ] **Hızlı Erişim**: Students, Teachers, Classes, Courses menülerine hızlı erişim butonları
- [ ] **Grafik/Chart**: Not dağılımı veya sınıf dağılımı grafiği (Chart.js, Recharts vs.)
- [ ] **Pull-to-Refresh**: Verileri yenilemek için yukarıdan aşağı çekme özelliği

### 🧭 Alt Tab Navigation
- [ ] **Dashboard Tab**: Ana ekran ikonu ve linki
- [ ] **Students Tab**: Öğrenci listesi ikonu ve linki  
- [ ] **Teachers Tab**: Öğretmen listesi ikonu ve linki
- [ ] **Courses Tab**: Ders listesi ikonu ve linki
- [ ] **Profile Tab**: Kullanıcı profili ikonu ve linki

## 👨‍🎓 Öğrenci (Students) Bölümü

### 📱 Öğrenci Listesi Ekranı  
- [ ] **API Endpoint**: `/api/students` ile öğrenci listesini çek
- [ ] **Kartlar/Listeler**: Her öğrencinin profil resmi, adı, öğrenci numarası, sınıfı gözüksün
- [ ] **Arama Fonksiyonu**: Search bar ile isim/öğrenci numarası arama (`?search=` parametresi)
- [ ] **Filtreleme**: Sınıfa göre filtreleme dropdown'u (`?classId=` parametresi)
- [ ] **Sonsuz Scroll/Pagination**: Sayfalama implementasyonu (`?page=&limit=` parametreleri)
- [ ] **Loading States**: Veri yüklenirken loading spinner/skeleton screen
- [ ] **Error Handling**: API hatası durumunda kullanıcı dostu hata mesajı

### 👤 Öğrenci Detay Ekranı
- [ ] **API Endpoint**: `/api/students/:id` ile tek öğrenci detayını çek
- [ ] **Profil Bilgileri**: Fotoğraf, ad soyad, email, telefon, adres, doğum tarihi
- [ ] **Akademik Bilgiler**: Öğrenci numarası, sınıf, kayıt tarihi, GPA
- [ ] **Sınıf Bilgisi**: Öğrencinin sınıf bilgilerini göster (embedded class data)
- [ ] **Notlar Bağlantısı**: "Notları Görüntüle" butonu ile notlar ekranına geçiş

### 📊 Öğrenci Notları Ekranı  
- [ ] **API Endpoint**: `/api/students/:id/grades` ile öğrencinin notlarını çek
- [ ] **Not Kartları**: Her ders için vize/final notları, ders adı, tarih
- [ ] **Not Ortalaması**: Öğrencinin genel not ortalamasını hesapla ve göster
- [ ] **Ders Filtreleme**: Derse göre notları filtrele
- [ ] **Grafik Görünümü**: Notların grafik olarak gösterilmesi (line/bar chart)

## 👨‍🏫 Öğretmen (Teachers) Bölümü

### 📱 Öğretmen Listesi Ekranı
- [ ] **API Endpoint**: `/api/teachers` ile öğretmen listesini çek
- [ ] **Kartlar**: Her öğretmenin profil resmi, adı, branşı, deneyim yılı
- [ ] **Arama**: İsim, branş veya personel numarası ile arama (`?search=` parametresi)
- [ ] **Bölüm Filtreleme**: Matematik, Fizik, Kimya gibi bölümlere göre filtre (`?department=` parametresi)
- [ ] **Pagination**: Sayfalama ile performans optimizasyonu
- [ ] **Sorting**: Deneyim, maaş veya alfabetik sıralama seçenekleri

### 👤 Öğretmen Detay Ekranı
- [ ] **API Endpoint**: `/api/teachers/:id` ile tek öğretmen detayını çek
- [ ] **Kişisel Bilgiler**: Fotoğraf, ad soyad, email, telefon, adres
- [ ] **Profesyonel Bilgiler**: Personel no, bölüm, branş, işe giriş tarihi, deneyim
- [ ] **Sınıflar**: Öğretmenin sorumlu olduğu sınıfları listele (embedded classes data)
- [ ] **Dersler Bağlantısı**: "Derslerini Görüntüle" butonu

### 📚 Öğretmen Dersleri Ekranı
- [ ] **API Endpoint**: `/api/teachers/:id/courses` ile öğretmenin derslerini çek
- [ ] **Ders Kartları**: Ders adı, kodu, kredi, kayıtlı öğrenci sayısı
- [ ] **Program Bilgisi**: Ders saatleri ve günleri
- [ ] **Sınıf Bilgisi**: Dersin işlendiği sınıf/laboratuvar

## 🏫 Sınıf (Classes) Bölümü

### 📱 Sınıf Listesi Ekranı
- [ ] **API Endpoint**: `/api/classes` ile sınıf listesini çek
- [ ] **Sınıf Kartları**: Sınıf adı (9-A, 10-B), öğrenci sayısı, sınıf öğretmeni
- [ ] **Sınıf Seviyesi Filtreleme**: 9, 10, 11, 12. sınıflara göre filtre (`?grade=` parametresi)
- [ ] **Akademik Yıl Filtreleme**: Akademik yıla göre filtreleme (`?academicYear=` parametresi)
- [ ] **Kapasite Göstergesi**: Doluluk oranını progress bar ile göster

### 🏫 Sınıf Detay Ekranı
- [ ] **API Endpoint**: `/api/classes/:id` ile tek sınıf detayını çek
- [ ] **Sınıf Bilgileri**: Sınıf adı, seviye, şube, akademik yıl, derslik
- [ ] **Öğretmen Bilgisi**: Sınıf öğretmeninin bilgileri (embedded teacher data)
- [ ] **Öğrenci Listesi Bağlantısı**: "Öğrencileri Görüntüle" butonu
- [ ] **İstatistikler**: Sınıf not ortalaması, devam durumu gibi bilgiler

### 👥 Sınıftaki Öğrenciler Ekranı
- [ ] **API Endpoint**: `/api/classes/:id/students` ile sınıftaki öğrencileri çek
- [ ] **Öğrenci Kartları**: Profil resmi, ad soyad, öğrenci numarası, GPA
- [ ] **Alfabetik Sıralama**: A-Z veya Z-A sıralama seçeneği
- [ ] **GPA Sıralama**: En yüksek/düşük GPA'ya göre sıralama
- [ ] **Arama**: Sınıf içinde öğrenci arama özelliği

## 📖 Dersler (Courses) Bölümü

### 📱 Ders Listesi Ekranı
- [ ] **API Endpoint**: `/api/courses` ile ders listesini çek
- [ ] **Ders Kartları**: Ders adı, kodu, öğretmen, kayıtlı öğrenci sayısı, ders resmi
- [ ] **Bölüm Filtreleme**: Matematik, Fizik, Kimya gibi bölümlere göre filtre (`?department=` parametresi)
- [ ] **Dönem Filtreleme**: Güz/Bahar dönemi filtreleme (`?semester=` parametresi)
- [ ] **Arama**: Ders adı, kodu veya açıklama ile arama (`?search=` parametresi)
- [ ] **Kredi Göstergesi**: Ders kredilerini badge olarak göster

### 📚 Ders Detay Ekranı
- [ ] **API Endpoint**: `/api/courses/:id` ile tek ders detayını çek
- [ ] **Ders Bilgileri**: Ad, kod, açıklama, kredi, dönem, kapasite
- [ ] **Öğretmen Bilgisi**: Dersi veren öğretmenin bilgileri (embedded teacher data)
- [ ] **Program Bilgisi**: Ders günleri, saatleri, sınıf/laboratuvar
- [ ] **İstatistikler**: Kayıtlı öğrenci sayısı, kapasite doluluk oranı
- [ ] **Notlar Bağlantısı**: "Ders Notlarını Görüntüle" butonu

### 📊 Ders Notları Ekranı
- [ ] **API Endpoint**: `/api/courses/:id/grades` ile dersin notlarını çek
- [ ] **Not Tablosu**: Öğrenci adı, vize, final, ortalama notları
- [ ] **İstatistikler**: Sınıf ortalaması, en yüksek/düşük not
- [ ] **Grafik**: Sınıf not dağılımı histogram/bar chart
- [ ] **Sınav Türü Filtreleme**: Vize, final, ödev notlarını ayrı ayrı görüntüleme

## 📊 Notlar (Grades) Bölümü

### 📱 Genel Notlar Ekranı
- [ ] **API Endpoint**: `/api/grades` ile tüm notları çek
- [ ] **Not Kartları**: Öğrenci adı, ders, sınav türü, not, tarih
- [ ] **Çoklu Filtreleme**: Öğrenci, ders, sınav türü, dönem filtrelemeleri
- [ ] **Tarih Aralığı**: Belirli tarih aralığında sınav filtreleme
- [ ] **Export Özelliği**: Notları CSV/PDF olarak dışa aktarma butonu

### 📈 Not İstatistikleri Ekranı  
- [ ] **API Endpoint**: `/api/stats/grades-summary` ile not istatistiklerini çek
- [ ] **Genel İstatistikler**: Toplam sınav sayısı, ortalama not, en yüksek/düşük notlar
- [ ] **Harf Notu Dağılımı**: A, B, C, D, F notlarının dağılım grafiği
- [ ] **Sınav Türü Analizi**: Vize, final başarı oranları
- [ ] **Trend Analizi**: Zaman içindeki not değişimleri line chart

## 🔧 Teknik Gereksinimler

### 📡 API Entegrasyonu
- [ ] **HTTP Client**: Axios, Fetch API veya benzeri HTTP client implementasyonu
- [ ] **Base URL**: API base URL'ini environment variable olarak ayarla
- [ ] **Error Handling**: Network hataları için global error handler
- [ ] **Loading States**: Tüm API çağrıları için loading state management
- [ ] **Offline Support**: Temel offline çalışma capability (cache mekanizması)

### 🎨 UI/UX Gereksinimleri
- [ ] **Responsive Design**: Farklı ekran boyutlarına uygun tasarım
- [ ] **Dark/Light Theme**: Tema değiştirme özelliği
- [ ] **Accessibility**: Screen reader uyumluluğu, yeterli kontrast
- [ ] **Animasyonlar**: Smooth page transitions ve micro-interactions
- [ ] **Loading Skeletons**: Content yüklenirken placeholder screens

### 📱 Platform Özellikleri
- [ ] **Pull-to-Refresh**: Listelerde veri yenileme özelliği
- [ ] **Infinite Scroll**: Pagination için sonsuz scroll
- [ ] **Search Debouncing**: Arama sırasında API çağrılarını optimize etme
- [ ] **Cache Management**: Veri cache'leme ve invalidation stratejisi
- [ ] **Push Notifications**: Yeni not, duyuru gibi bildirimler

### 🔒 Güvenlik ve Performans
- [ ] **Input Validation**: Kullanıcı girdilerini validate etme
- [ ] **Rate Limiting**: API rate limit'lerini handle etme
- [ ] **Image Optimization**: Profil resimlerini lazy loading ile yükleme
- [ ] **Bundle Optimization**: App bundle size'ını optimize etme
- [ ] **Memory Management**: Memory leak'leri önleme

### 📊 State Management
- [ ] **Global State**: Redux, Context API veya benzeri state management
- [ ] **Local Storage**: Kullanıcı tercihlerini yerel olarak saklama
- [ ] **Data Synchronization**: API ile local state senkronizasyonu
- [ ] **Error State Management**: Hata durumlarını merkezi olarak yönetme

### 🧪 Test Gereksinimleri
- [ ] **Unit Tests**: Önemli fonksiyonlar için unit testler
- [ ] **Integration Tests**: API entegrasyonu testleri
- [ ] **E2E Tests**: Kritik user journey'ler için end-to-end testler
- [ ] **Performance Tests**: App performance ölçümleri

## 📝 Ekstra Özellikler (Nice to Have)

### 🔍 Gelişmiş Arama
- [ ] **Global Search**: Tüm modellerde arama yapabilme
- [ ] **Barcode Scanner**: Öğrenci kartlarını QR kod ile okuma
- [ ] **Voice Search**: Sesli arama özelliği

### 📈 Analitik
- [ ] **Usage Analytics**: Kullanıcı davranış analizi
- [ ] **Performance Monitoring**: App performance izleme
- [ ] **Crash Reporting**: Hata raporlama sistemi

### 💬 İletişim
- [ ] **Chat Feature**: Öğrenci-öğretmen mesajlaşma
- [ ] **Announcements**: Duyuru sistemi
- [ ] **Parent Portal**: Veli bilgilendirme ekranları

### 📅 Takvim
- [ ] **Academic Calendar**: Akademik takvim entegrasyonu
- [ ] **Exam Schedule**: Sınav takvimi
- [ ] **Event Management**: Etkinlik yönetimi

## ✅ Kontrol Listesi Özeti

**Temel Gereksinimler (Minimum Viable Product):**
- [ ] Tüm ana ekranlar implement edildi (Dashboard, Students, Teachers, Classes, Courses)
- [ ] API entegrasyonu çalışıyor ve tüm endpoint'ler kullanılıyor
- [ ] Arama ve filtreleme özellikleri çalışıyor
- [ ] Sayfalama implementasyonu tamamlandı
- [ ] Error handling ve loading states mevcut
- [ ] Responsive design uygulandı

**İleri Seviye Gereksinimler:**
- [ ] Grafik ve chart implementasyonları
- [ ] Offline support ve cache mekanizması
- [ ] Push notifications
- [ ] Advanced filtering ve sorting
- [ ] Export özellikleri
- [ ] Test coverage %80+

**Bonus Özellikler:**
- [ ] Dark/Light theme
- [ ] Voice search
- [ ] QR code scanning
- [ ] Chat functionality
- [ ] Parent portal

---

**🎯 Başarı Kriteri**: Bu kontrol listesindeki "Temel Gereksinimler" bölümündeki tüm maddelerin tamamlanması, projenin teknik gereksinimlerini karşıladığını gösterir.