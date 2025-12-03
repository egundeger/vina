# AutoDock Vina Moleküler Docking Rehberi

Modern, hızlı ve kullanımı kolay AutoDock Vina tutoriali - Kurulumdan otomasyona kadar eksiksiz Türkçe rehber.

## 🚀 Özellikler

- ⚡ **Hızlı ve Modern**: AutoDock 4'ten 5-10× daha hızlı
- 🎯 **Basit Kullanım**: Tek komutla docking
- 🐍 **Python Entegrasyonu**: API ile otomasyon
- 🔬 **Best Practices**: Yayın standardı protokoller
- 📊 **Veri Analizi**: Batch processing ve görselleştirme
- 💡 **İpuçları**: Yaygın hatalar ve çözümler

## 🌐 GitHub Pages'de Yayınlama

### Hızlı Başlangıç

1. **GitHub'da repository oluştur:**
   ```
   Repository name: vina-tutorial
   Public repository seçin
   ```

2. **Dosyaları yükle:**
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

3. **GitHub Pages aktifleştir:**
   - Settings → Pages
   - Source: main branch, / (root)
   - Save

4. **Siteniz hazır!**
   ```
   https://KULLANICI-ADINIZ.github.io/vina-tutorial/
   ```

### Detaylı Adımlar

#### Yöntem A: Web Arayüzü (Önerilir - Kolay)

1. GitHub.com'da oturum açın
2. Sağ üstten "+" → "New repository"
3. Repository ayarları:
   - **Name**: `vina-tutorial`
   - **Description**: "AutoDock Vina Moleküler Docking - Türkçe Rehber"
   - ✅ **Public** seçin
   - Create repository

4. Repository sayfasında:
   - "uploading an existing file" linkine tıklayın
   - 4 dosyayı sürükleyip bırakın
   - Commit message: "Initial commit - Vina tutorial"
   - Commit changes

5. Settings → Pages:
   - Source: Branch "main"
   - Folder: "/ (root)"
   - Save
   - ⏳ 2-3 dakika bekleyin

6. Yeşil kutu ile URL görünecek:
   ```
   https://KULLANICI-ADINIZ.github.io/vina-tutorial/
   ```

#### Yöntem B: Git ile (Terminal/Command Prompt)

```bash
# Proje klasörüne gidin
cd /path/to/vina-website

# Git başlatın
git init

# Dosyaları ekleyin
git add .

# Commit yapın
git commit -m "Initial commit - AutoDock Vina tutorial"

# Remote ekleyin (YOUR-USERNAME yerine GitHub kullanıcı adınız)
git remote add origin https://github.com/YOUR-USERNAME/vina-tutorial.git

# Branch ayarlayın
git branch -M main

# GitHub'a gönderin
git push -u origin main
```

Sonra GitHub → Settings → Pages → main branch seçin → Save

---

## 📝 İçerik Güncelleme

### Web Arayüzünde:

1. GitHub'da değiştirmek istediğiniz dosyayı açın
2. Sağ üstteki kalem ikonuna (✏️) tıklayın
3. Değişiklikleri yapın
4. "Commit changes" ile kaydedin
5. 1-2 dakika sonra sitede güncellenir

### Git ile:

```bash
# Değişiklikleri yapın (index.html, styles.css, vb.)

# Stage
git add .

# Commit
git commit -m "Açıklayıcı mesaj"

# Push
git push origin main

# 1-2 dakika sonra canlıya yansır
```

---

## 🎨 Özelleştirme

### Renk Temasını Değiştirme

`styles.css` dosyasında `:root` bölümü:

```css
:root {
    /* Mor & Turkuaz tema (varsayılan) */
    --primary: #7c3aed;      /* Mor */
    --secondary: #14b8a6;    /* Turkuaz */
    --accent: #f59e0b;       /* Amber */
    
    /* Alternatif temalar */
    /* Mavi & Yeşil:
    --primary: #2563eb;
    --secondary: #10b981;
    */
    
    /* Kırmızı & Turuncu:
    --primary: #dc2626;
    --secondary: #f97316;
    */
}
```

### Logo ve Başlık

`index.html` dosyasında `<nav>` bölümü:

```html
<div class="nav-brand">
    <span class="logo">Vina</span>  <!-- Değiştir -->
    <span class="brand-text">AutoDock Vina Rehberi</span>  <!-- Değiştir -->
</div>
```

### Bölüm Ekleme/Çıkarma

Her bölüm şu yapıdadır:

```html
<section id="benzersiz-id" class="section">
    <div class="section-header">
        <span class="section-number">01</span>
        <h2>Bölüm Başlığı</h2>
    </div>
    <div class="content-block">
        <!-- İçerik buraya -->
    </div>
</section>
```

Navigasyona da ekleyin:

```html
<li><a href="#benzersiz-id" class="nav-link">Bölüm Adı</a></li>
```

---

## 📁 Proje Yapısı

```
vina-tutorial/
│
├── index.html          # Ana sayfa (2800+ satır, tam içerik)
├── styles.css          # Mor-turkuaz temalı tasarım
├── script.js           # Interaktif özellikler
└── README.md           # Bu dosya
```

---

## 🎯 İçerik Özeti

### 1. **Giriş**
- AutoDock Vina vs AutoDock 4 karşılaştırma
- Performans analizi
- Ne zaman kullanılır?

### 2. **Kurulum**
- Linux, Windows, macOS kurulumları
- Conda/Pip paket yönetimi
- MGLTools, Open Babel, Meeko

### 3. **Protein Hazırlama**
- PDB temizleme
- PDBQT dönüşümü (3 yöntem)
- Protonasyon optimizasyonu

### 4. **Ligand Hazırlama**
- 3D yapı oluşturma
- Enerji minimizasyonu
- PDBQT format dönüşümü
- Rotatable bonds kontrolü

### 5. **Config Dosyası**
- Basit config yapısı
- Grid box merkezi belirleme (PyMOL, Python, ADT)
- Box boyutlandırma kuralları
- Parametre ayarları

### 6. **Docking Çalıştırma**
- Tek komutla çalıştırma
- Sonuç yorumlama
- Batch docking
- Paralel processing

### 7. **Sonuç Analizi**
- PyMOL görselleştirme
- Etkileşim analizi (PLIP, Prolif)
- Enerji değerlendirmesi
- Görsel kalite kontrol

### 8. **Python Otomasyonu**
- Vina Python API
- Virtual screening pipeline
- Paralel processing
- Redocking validasyonu

### 9. **Best Practices**
- Protokol optimizasyonu
- Yaygın hatalar
- Yayın checklist
- Troubleshooting
- Consensus scoring

---

## 🔧 Teknik Detaylar

### Teknolojiler

- **HTML5**: Semantic markup
- **CSS3**: Modern gradients, animations, grid/flexbox
- **JavaScript (Vanilla)**: No dependencies
- **Prism.js**: Syntax highlighting (CDN)
- **Google Fonts**: Space Grotesk, Inter, IBM Plex Mono

### Responsive Breakpoints

- **Desktop**: > 968px (tam görünüm)
- **Tablet**: 768px - 968px (hamburger menü)
- **Mobile**: < 768px (tek kolon)

### Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers

### Performance

- **HTML**: ~160KB
- **CSS**: ~28KB
- **JS**: ~8KB
- **Total**: ~196KB
- **Load Time**: < 1 second (fast connection)
- **Lighthouse Score**: 95+ (estimated)

---

## 🌟 Gelişmiş Özellikler

### Özel Domain Ekleme

1. GitHub Pages → Settings → Custom domain
2. Domain girin: `vina.example.com`
3. DNS sağlayıcınızda CNAME ekleyin:
   ```
   Type: CNAME
   Name: vina (veya @)
   Value: YOUR-USERNAME.github.io
   ```

### Google Analytics

`index.html` dosyasının `<head>` bölümüne:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Open Graph Meta Tags

Sosyal medya paylaşımları için:

```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://YOUR-USERNAME.github.io/vina-tutorial/">
<meta property="og:title" content="AutoDock Vina Moleküler Docking Rehberi">
<meta property="og:description" content="Modern, hızlı ve kolay Vina tutoriali">
<meta property="og:image" content="https://YOUR-USERNAME.github.io/vina-tutorial/preview.png">
```

### Search Console

SEO optimizasyonu için:

1. [Google Search Console](https://search.google.com/search-console)
2. Property ekle → URL prefix
3. HTML tag ile doğrula
4. Sitemap gönder (opsiyonel)

---

## 🐛 Sorun Giderme

### Site Görünmüyor / 404 Error

**Çözümler:**
- ✅ GitHub Pages aktif mi? (Settings → Pages)
- ✅ Branch "main" ve root "/" seçili mi?
- ✅ URL doğru mu? (github.io adresi)
- ⏳ 5-10 dakika bekle (ilk deployment)
- 🔄 Browser cache temizle (Ctrl+Shift+Delete)

### CSS/JS Yüklenmiyor

**Çözümler:**
- ✅ Dosya isimleri tamamen küçük harf mı?
- ✅ Uzantılar doğru mu? (.css, .js)
- ✅ Tarayıcı konsolunu kontrol et (F12)
- 🔄 Hard refresh (Ctrl+F5)

### Değişiklikler Yansımıyor

**Çözümler:**
- ⏳ 2-3 dakika bekle
- 🔄 Hard refresh (Ctrl+F5)
- 🕵️ Gizli pencerede aç (Ctrl+Shift+N)
- ✅ GitHub'da commit başarılı mı kontrol et

### Responsive Sorunları

**Çözümler:**
- ✅ Viewport meta tag var mı?
- ✅ Media queries doğru mu?
- 📱 Gerçek cihazda test et
- 🛠️ Developer tools'da cihaz emülasyonu

---

## 📚 Ek Kaynaklar

### Resmi Dokümantasyon

- [AutoDock Vina](https://vina.scripps.edu/)
- [GitHub Repository](https://github.com/ccsb-scripps/AutoDock-Vina)
- [Python API Docs](https://github.com/ccsb-scripps/AutoDock-Vina/wiki/Python-API)
- [Meeko](https://github.com/forlilab/Meeko)

### Tutorials & Papers

- [Vina 1.2.0 Paper (2021)](https://pubs.acs.org/doi/10.1021/acs.jcim.1c00203)
- [Original Vina Paper (2010)](https://doi.org/10.1002/jcc.21334)
- [PyMOL](https://pymol.org/)
- [PLIP](https://plip-tool.biotec.tu-dresden.de/)

### Web Development

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [Markdown Guide](https://www.markdownguide.org/)
- [HTML/CSS/JS Tutorials](https://developer.mozilla.org/)

---

## 📄 Lisans

Bu proje eğitim ve araştırma amaçlıdır. Özgürce kullanabilir, değiştirebilir ve paylaşabilirsiniz.

**Not:** AutoDock Vina Apache License 2.0 ile lisanslanmıştır.

---

## 🤝 Katkıda Bulunma

Hata bulursanız veya iyileştirme önerileriniz varsa:

1. Repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/improvement`)
3. Commit yapın (`git commit -m 'Add improvement'`)
4. Push edin (`git push origin feature/improvement`)
5. Pull Request açın

### Katkı Alanları

- 🐛 Hata düzeltmeleri
- 📝 İçerik iyileştirmeleri
- 🎨 Tasarım önerileri
- 🌍 Çeviriler (İngilizce versiyonu)
- 🔧 Yeni özellikler
- 📚 Ek kaynaklar

---

## ✨ Changelog

### v1.0.0 (2024)
- ✅ İlk release
- ✅ 9 ana bölüm
- ✅ Python otomasyon örnekleri
- ✅ Best practices
- ✅ Responsive tasarım
- ✅ Mor-turkuaz tema

---

## 📧 İletişim

Sorularınız için GitHub Issues kullanabilirsiniz.

---

## 💡 İpuçları

### Performans

- **Minify**: Production'da CSS/JS minify edin
- **CDN**: Statik dosyalar için CDN kullanın
- **Cache**: Browser caching ayarları
- **Images**: WebP format kullanın (resim eklerseniz)

### SEO

- ✅ Meta descriptions
- ✅ Alt texts (resimler için)
- ✅ Semantic HTML
- ✅ Sitemap (büyük siteler için)
- ✅ robots.txt
- ✅ Structured data

### Erişilebilirlik

- ✅ Keyboard navigation
- ✅ Screen reader uyumu
- ✅ Color contrast
- ✅ Focus indicators
- ✅ ARIA labels

---

**Son güncelleme:** Aralık 2024  
**Hazırlayan:** AutoDock Vina Tutorial Project  
**Teknoloji:** HTML5, CSS3, Vanilla JavaScript

---

## 🎓 Alıntı

Bu rehberi akademik çalışmalarda kullanırsanız:

```bibtex
@misc{vina_tutorial_2024,
  title={AutoDock Vina Moleküler Docking Rehberi},
  author={AutoDock Tutorial Project},
  year={2024},
  url={https://github.com/YOUR-USERNAME/vina-tutorial}
}
```

---

**Not:** Bu proje Anthropic Claude ile oluşturulmuştur ve açık kaynak topluluğa katkı amaçlıdır.
