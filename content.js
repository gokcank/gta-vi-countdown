// Sayfadaki oyun bilgileri. Yeni bir bilgi eklemek ya da düzeltmek için yalnızca
// bu dosyayı değiştirin; her metnin Türkçe (tr) ve İngilizce (en) karşılığı olmalı.
// Değişiklikten sonra `updated` tarihini de güncelleyin.
window.GTA_CONTENT = {
  // Bilgilerin son gözden geçirildiği gün (YYYY-AA-GG).
  updated: '2026-11-16',

  // Künye. `note` ve `links` isteğe bağlıdır; `wide: true` kartı tüm satıra yayar.
  // \u00a0 = bölünmez boşluk: iki kelimenin satır sonunda ayrılmasını önler.
  facts: [
    {
      label: { tr: 'Çıkış tarihi', en: 'Release date' },
      value: { tr: '19 Kasım 2026', en: 'November 19, 2026' },
      note: { tr: 'Her bölgede yerel saatle 00:00', en: 'Midnight local time in every region' },
    },
    {
      label: { tr: 'Platformlar', en: 'Platforms' },
      value: { tr: 'PlayStation 5 · Xbox Series X|S', en: 'PlayStation 5 · Xbox Series X|S' },
    },
    {
      label: { tr: 'Geliştirici ve yayıncı', en: 'Developer and publisher' },
      value: { tr: 'Rockstar Games', en: 'Rockstar Games' },
      note: { tr: 'Take-Two Interactive çatısı altında', en: 'A Take-Two Interactive label' },
    },
    {
      label: { tr: 'Ana karakterler', en: 'Protagonists' },
      value: { tr: 'Lucia Caminos ve Jason Duval', en: 'Lucia Caminos and Jason Duval' },
    },
    {
      label: { tr: 'Geçtiği yer', en: 'Setting' },
      value: { tr: 'Leonida eyaleti', en: 'State of Leonida' },
      note: { tr: 'Florida’dan esinlenen kurgusal bir eyalet', en: 'A fictional state inspired by Florida' },
    },
    {
      label: { tr: 'Türkiye fiyatı', en: 'Price in Türkiye' },
      value: { tr: 'Standart\u00a03.999\u00a0TL · Ultimate\u00a04.999\u00a0TL', en: 'Standard\u00a03,999\u00a0TL · Ultimate\u00a04,999\u00a0TL' },
      note: { tr: '16 Kasım 2026 itibarıyla', en: 'As of November 16, 2026' },
      links: [
        { label: 'PlayStation Store', url: 'https://store.playstation.com/tr-tr/product/EP1004-PPSA01547_00-GTAVISTANDARD001' },
        { label: 'Xbox Store', url: 'https://www.xbox.com/tr-TR/games/store/grand-theft-auto-vi/9p3h4968grsm' },
      ],
    },
    {
      wide: true,
      label: { tr: 'Bölgeler', en: 'Regions' },
      value: {
        tr: 'Vice\u00a0City · Leonida\u00a0Keys · Grassrivers · Port\u00a0Gellhorn · Ambrosia · Mount\u00a0Kalaga',
        en: 'Vice\u00a0City · Leonida\u00a0Keys · Grassrivers · Port\u00a0Gellhorn · Ambrosia · Mount\u00a0Kalaga',
      },
    },
  ],

  // Zaman çizelgesi, eskiden yeniye. Tarihler Türkiye saatine göredir (YYYY-AA-GG).
  // Tarihi henüz gelmemiş satırlar kendiliğinden "yaklaşıyor" olarak işaretlenir.
  timeline: [
    { date: '2023-12-05', text: { tr: 'İlk fragman; çıkış 2025 için duyuruldu', en: 'First trailer; release announced for 2025' } },
    { date: '2025-05-02', text: { tr: 'İlk erteleme: yeni tarih 26 Mayıs 2026', en: 'First delay: new date May 26, 2026' } },
    { date: '2025-05-06', text: { tr: 'İkinci fragman', en: 'Second trailer' } },
    { date: '2025-11-06', text: { tr: 'İkinci erteleme: yeni tarih 19 Kasım 2026', en: 'Second delay: new date November 19, 2026' } },
    { date: '2026-06-25', text: { tr: 'Ön siparişler açıldı (PS Store ve Xbox Store)', en: 'Pre-orders open (PS Store and Xbox Store)' } },
    { date: '2026-08-27', text: { tr: 'Extended Look tanıtımı (Netflix, 26 dk)', en: 'Extended Look showcase (Netflix, 26 min)' } },
    { date: '2026-10-15', text: { tr: 'Çıkış fragmanı', en: 'Launch trailer' } },
    { date: '2026-11-10', text: { tr: 'Ön yükleme başladı', en: 'Pre-load begins' } },
    { date: '2026-11-19', text: { tr: 'Çıkış', en: 'Release' } },
  ],

  // Fragman kartları: resmî YouTube kanalındaki videolara gider. `length` videonun süresidir.
  trailers: [
    {
      title: { tr: 'İlk fragman', en: 'Trailer 1' },
      date: '2023-12-05', length: '1:30',
      url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0',
    },
    {
      title: { tr: 'İkinci fragman', en: 'Trailer 2' },
      date: '2025-05-06', length: '2:47',
      url: 'https://www.youtube.com/watch?v=VQRLujxTm3c',
    },
    {
      title: { tr: 'Extended Look', en: 'An Extended Look' },
      date: '2026-08-27', length: '26:48',
      url: 'https://www.youtube.com/watch?v=tJbzMqJGH4k',
    },
    {
      title: { tr: 'Çıkış fragmanı', en: 'Launch Trailer' },
      date: '2026-10-15', length: '1:30',
      url: 'https://www.youtube.com/watch?v=rz1B4B2yBZY',
    },
  ],

  // Resmî sayfa ve mağaza bağlantıları.
  links: [
    { label: { tr: 'Rockstar Games — oyun sayfası', en: 'Rockstar Games — game page' }, url: 'https://www.rockstargames.com/VI' },
    { label: 'PlayStation Store', url: 'https://store.playstation.com/tr-tr/product/EP1004-PPSA01547_00-GTAVISTANDARD001' },
    { label: 'Xbox Store', url: 'https://www.xbox.com/tr-TR/games/store/grand-theft-auto-vi/9p3h4968grsm' },
  ],

  // Sayfa sonunda listelenen kaynaklar.
  sources: [
    {
      label: { tr: 'Rockstar Games — resmî oyun sayfası', en: 'Rockstar Games — official game page' },
      url: 'https://www.rockstargames.com/VI',
    },
    {
      label: { tr: 'PlayStation Store Türkiye', en: 'PlayStation Store Türkiye' },
      url: 'https://store.playstation.com/tr-tr/product/EP1004-PPSA01547_00-GTAVISTANDARD001',
    },
    {
      label: { tr: 'Xbox Store Türkiye', en: 'Xbox Store Türkiye' },
      url: 'https://www.xbox.com/tr-TR/games/store/grand-theft-auto-vi/9p3h4968grsm',
    },
    {
      label: { tr: 'Rockstar Games — resmî YouTube kanalı', en: 'Rockstar Games — official YouTube channel' },
      url: 'https://www.youtube.com/@RockstarGames',
    },
    {
      label: { tr: 'VGC — ilk erteleme', en: 'VGC — first delay' },
      url: 'https://www.videogameschronicle.com/news/grand-theft-auto-6-has-been-delayed-to-2026/',
    },
    {
      label: { tr: 'VGC — ikinci erteleme', en: 'VGC — second delay' },
      url: 'https://www.videogameschronicle.com/news/grand-theft-auto-6-has-been-delayed-again-to-the-end-of-2026/',
    },
    {
      label: { tr: 'Medyascope — ön siparişler', en: 'Medyascope — pre-orders' },
      url: 'https://medyascope.tv/2026/06/25/gta-6-on-siparisleri-acildi-fiyat-80-dolar/',
    },
    {
      label: { tr: 'Forbes — çıkış saatleri', en: 'Forbes — launch times' },
      url: 'https://www.forbes.com/sites/brianmazique/2026/11/12/gta-6-unlocks-at-midnight-on-november-19-but-millions-of-americans-can-start-playing-the-night-before/',
    },
  ],
};
