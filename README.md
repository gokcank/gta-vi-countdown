# GTA VI Geri Sayım

Grand Theft Auto VI'nın çıkışına (19 Kasım 2026) Türkiye saatiyle (00:00, UTC+3) canlı geri sayım. Saf HTML/CSS/JS — derleme adımı yok.

- Türkçe / İngilizce dil desteği
- Çıkıştan sonra otomatik olarak "çıkıştan bu yana" sayacına döner
- Paylaş ve takvime ekle (.ics) düğmeleri

## Arka plan görseli

Kaynak görsel `assets/bg.jpg` (3840×2160). Sayfa bunu doğrudan yüklemez; tarayıcı ekran boyutuna ve piksel yoğunluğuna göre aşağıdaki küçültülmüş WebP sürümlerinden uygun olanı seçer:

- Yatay: `bg-1280/1920/2560/3840.webp` (eski tarayıcılar için `bg-1920.jpg`)
- Dikey (telefon/tablet): karakterlere kırpılmış `bg-portrait-900/1400/1997.webp`
- Paylaşım önizlemesi: `og.jpg`

Görseli değiştirirseniz bu dosyaları da yeniden üretmeniz gerekir.

## Yayınlama (GitHub Pages)

Repo ayarlarında **Settings → Pages → Build and deployment → Deploy from a branch** seçip dalı ve `/ (root)` klasörünü işaretleyin.

Çıkış tarihi değişirse `script.js` içindeki `RELEASE` sabitini güncellemek yeterli.

Hayran yapımı, resmî olmayan bir sitedir; Rockstar Games veya Take-Two Interactive ile bağlantısı yoktur.
