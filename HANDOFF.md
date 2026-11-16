# Handoff — GTA VI Geri Sayım

Son güncelleme: 16 Kasım 2026

## Durum

Site yayında ve çalışıyor: https://gokcank.github.io/gta-vi-countdown/

- GitHub Pages, `ccr-ea2e7ccd-xrycim` dalının kökünden yayınlıyor (repodaki tek dal bu; `main` yok).
- Bu dala yapılan her push birkaç dakika içinde otomatik yayına girer. Derleme adımı yok.
- Canlı site 15 Kasım'da masaüstü, telefon ve yan çevrilmiş telefon boyutlarında kontrol edildi; hata yoktu.

## Lokal çalışma

```bash
git clone https://github.com/gokcank/gta-vi-countdown.git
cd gta-vi-countdown
git checkout ccr-ea2e7ccd-xrycim
python3 -m http.server 8000   # http://localhost:8000
```

Bağımlılık yok. Dosyayı çift tıklayarak açmak da çalışır, ama sunucu üzerinden bakmak canlıya daha yakındır.

## Dosyalar

| Dosya | İçerik |
|---|---|
| `index.html` | Sayfa iskeleti, `<picture>` ile arka plan görseli, meta/OG etiketleri |
| `style.css` | Tüm görünüm; üç yerleşim (aşağıda) |
| `script.js` | Sayaç, TR/EN çeviri, paylaş, takvime ekle |
| `assets/bg.jpg` | Kaynak görsel (3840×2160). Sayfa bunu doğrudan yüklemez |
| `assets/bg-*.webp`, `bg-1920.jpg`, `og.jpg` | `bg.jpg`'den üretilen sürümler |
| `tools/make_images.py` | Üretilen görselleri yeniden oluşturur (Pillow gerekir) |
| `.nojekyll` | Pages'in Jekyll işlemesini kapatır |

## Nasıl çalışıyor

**Sayaç (`script.js`)**
- Hedef an sabit: `RELEASE = new Date('2026-11-19T00:00:00+03:00')` — Türkiye saatiyle gece yarısı, her ziyaretçi için aynı an.
- Hedef geçince sayaç kendiliğinden yukarı saymaya döner ("Çıktı! Çıkıştan bu yana"); ilerleme çubuğu ve "Takvime ekle" gizlenir.
- İlerleme çubuğu `WAIT_START` (5 Aralık 2023, ilk fragman) ile `RELEASE` arasındaki yüzdeyi gösterir.
- Dil: tarayıcı dili Türkçe ise TR, değilse EN; seçim `localStorage`'da tutulur. Metinler `I18N` nesnesinde.

**Arka plan (`index.html` + `style.css`)**
- Tarayıcı `srcset`/`sizes` ile ekran genişliği ve piksel yoğunluğuna göre dosya seçer.
- En-boy oranı 1:1 ve altı: karakterlere kırpılmış `bg-portrait-*` sürümleri.

**Yerleşimler (`style.css` sonundaki media query'ler)**
- Yatay (oran > 5:4): görseldeki logo solda açıkta, sayaç paneli sağ altta. Metin başlık yalnızca ekran okuyuculara.
- Dar/dikey (oran ≤ 5:4): sayaç alta ortalı, logo kadraj dışında kaldığı için metin başlık görünür.
- Alçak yatay (yükseklik ≤ 520px): ilerleme çubuğu ve alt not gizlenir, sayaç küçülür.

## Sık yapılacak değişiklikler

- **Çıkış tarihi değişirse:** `script.js` içindeki `RELEASE`; ayrıca `index.html`'deki açıklama metinleri ve `README.md`.
- **Görsel değişirse:** yeni dosyayı `assets/bg.jpg` olarak koyup `python3 tools/make_images.py` çalıştırın. Betik 16:9 kaynak ve karakterlerin sağda olduğunu varsayar; farklı bir kompozisyonda kırpma oranlarını (betikte) ve `object-position` değerlerini (`style.css`) elle ayarlamak gerekir.
- **Site adresi değişirse** (özel alan adı vb.): `index.html`'deki `og:image` mutlak adresini güncelleyin.

## Bilinen noktalar

- Telefonda iki yüz birlikte ekrandan geniş; kadının yüzü sol kenarda biraz kesiliyor (`object-position: 38% 0`).
- Yatay yerleşimde görselin sağ altındaki Rockstar logosu sayaç panelinin altında kalıyor.
- Paylaşım önizlemesi (`og:image`) gerçek bir mesajlaşma uygulamasında denenmedi; yalnızca dosyanın erişilebilir olduğu doğrulandı.
- Çıkış sonrası görünüm yalnızca sahte saatle test edildi; 19 Kasım'dan sonra canlıda bir kez bakmaya değer.
- Görsel Rockstar Games'in telifli çalışması; sayfadaki "hayran yapımı, resmî değil" notu bu yüzden duruyor.
- Çıkış tarihi Kasım 2025 duyurusuna dayanıyor; sonrasında bir değişiklik olup olmadığı ayrıca teyit edilmedi.
