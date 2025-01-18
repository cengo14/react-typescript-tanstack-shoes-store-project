# Ayakkabı Satış Sistemi

Bu proje, kullanıcıların ayakkabı ürünlerini listeleyip detaylarını görüntüleyebileceği ve çeşitli filtreleme özelliklerinden faydalanabileceği bir web uygulamasıdır. **React** ve **TypeScript** ile geliştirilmiş olup, veriler **JSON-Server** üzerinde saklanmaktadır. Frontend tarafında **TanStack Query**, **Axios** ve **Tailwind CSS** kullanılmıştır.

## Özellikler

- **Ürün Listeleme:** Tüm ayakkabı ürünlerini listeler.
- **Detay Görüntüleme:** Her bir ürünün detayına, üzerine tıklayarak erişilebilir.
- **Filtreleme:**
  - **Rengine Göre:** Ürünler renklerine göre filtrelenebilir.
  - **Numarasına Göre:** İstenilen numaradaki ürünler görüntülenebilir.
  - **Fiyatına Göre:** Fiyat aralığına göre ayakkabılar listelenebilir.
  - **Cinsiyete Göre:** Kadın, erkek veya unisex ürünler filtrelenebilir.
- **Modern Tasarım:** Tailwind CSS ile responsive ve kullanıcı dostu bir arayüz.
- **Hızlı ve Gerçek Zamanlı Veri Yönetimi:** TanStack Query ve Axios kullanımı.

## Kullanılan Teknolojiler

### Frontend:

- **React**
- **TypeScript**
- **TanStack Query**
- **Axios**
- **Tailwind CSS**

### Backend:

- **JSON-Server**

## Kurulum ve Çalıştırma

1. Proje dizinine gidin:
   ```bash
   cd react-typescript-tanstack-shoes-store-project
   ```
2. Gerekli bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. JSON-Server'ı başlatın:
   ```bash
   npm run server
   ```
4. Uygulamayı başlatın:
   ```bash
   npm run dev
   ```

## Ekran Görüntüleri

![Uygulama Görünümü](./screenshots/ss.gif)

## Katkıda Bulunma

1. Bu projeyi forklayın.
2. Yeni bir dal oluşturun:
   ```bash
   git checkout -b yeni-ozellik
   ```
3. Değişikliklerinizi commit edin:
   ```bash
   git commit -m "Yeni bir özellik eklendi"
   ```
4. Dalınızı push edin:
   ```bash
   git push origin yeni-ozellik
   ```
5. Pull Request oluşturun.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakabilirsiniz.

---
