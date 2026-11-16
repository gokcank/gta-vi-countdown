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
      label: { tr: 'Forbes — çıkış saatleri', en: 'Forbes — launch times' },
      url: 'https://www.forbes.com/sites/brianmazique/2026/11/12/gta-6-unlocks-at-midnight-on-november-19-but-millions-of-americans-can-start-playing-the-night-before/',
    },
  ],
};
