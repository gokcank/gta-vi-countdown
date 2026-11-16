# GTA VI Geri Sayım

Grand Theft Auto VI'nın çıkışına (19 Kasım 2026) Türkiye saatiyle (00:00, UTC+3) canlı geri sayım. Saf HTML/CSS/JS — derleme adımı yok.

- Türkçe / İngilizce dil desteği
- Çıkıştan sonra otomatik olarak "çıkıştan bu yana" sayacına döner
- Paylaş ve takvime ekle (.ics) düğmeleri
- Aşağı kaydırınca oyun bilgileri: künye, zaman çizelgesi, fragmanlar ve resmî bağlantılar, çıkış sonrası takip

## Oyun bilgileri

İlk ekranın altındaki bütün bilgiler `content.js` dosyasından gelir; her metnin Türkçe (`tr`) ve İngilizce (`en`) karşılığı vardır. Yeni bir bilgi eklemek ya da düzeltmek için yalnızca bu dosyayı değiştirin:

- `facts`: künye kartları (çıkış tarihi, platformlar, karakterler…)
- `prices`: fiyat tablosu (PS Store ve Xbox Store liste fiyatları). Tutarlar sayı olarak yazılır, sayfa dile göre biçimlendirir. `asOf` fiyatların okunduğu gündür. İki mağazada fiyat farklıysa sayı yerine `{ ps: …, xbox: … }` yazılır, ikisi de gösterilir.
- `timeline`: zaman çizelgesi. Tarihi henüz gelmemiş satırlar kendiliğinden "Yaklaşıyor" olarak işaretlenir.
- `trailers`, `links`: fragman kartları ve resmî bağlantılar. Videolar sayfaya gömülmez, yeni sekmede açılır.
- `tracking`: çıkış sonrası takip kartları (PC sürümü, çevrimiçi mod…). Yeni bir duyuru geldiğinde ilgili kartın metnini güncelleyin. `tag: 'unverified'` resmî olmayan basın iddialarını "Doğrulanmadı", `tag: 'waiting'` henüz açıklanmamış konuları "Bekleniyor", `tag: 'confirmed'` resmî açıklamaya dayanan bilgileri "Açıklandı" olarak etiketler.
- `sources`: sayfa sonundaki kaynak listesi.
- `updated`: "Son güncelleme" tarihi. Her içerik değişikliğinde güncelleyin.

Yalnızca resmî kaynaklar ve güvenilir basın kullanılır; kesinleşmemiş bilgi etiketsiz yazılmaz. Fiyatlar tarihli yazılır.

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
