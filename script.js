(() => {
  // ---- Ayarlar -------------------------------------------------------------
  // Çıkış anı: 19 Kasım 2026 00:00 Türkiye saati (UTC+3). Ziyaretçi nerede
  // olursa olsun herkes aynı ana sayar. Tarih değişirse bu satırı güncelleyin.
  const RELEASE = new Date('2026-11-19T00:00:00+03:00');
  const TZ = 'Europe/Istanbul';
  // İlerleme çubuğunun başlangıcı: ilk fragmanın yayınlandığı gün.
  const WAIT_START = new Date(Date.UTC(2023, 11, 5));

  const I18N = {
    tr: {
      title: 'GTA VI Geri Sayım',
      status: 'Çıkışa kalan süre',
      statusOut: 'Çıktı! Çıkıştan bu yana',
      days: 'Gün', hours: 'Saat', minutes: 'Dakika', seconds: 'Saniye',
      share: 'Paylaş',
      calendar: 'Takvime ekle',
      about: 'Oyun hakkında ↓',
      factsTitle: 'Künye',
      timelineTitle: 'Zaman çizelgesi',
      upcoming: 'Yaklaşıyor',
      trailersTitle: 'Fragmanlar ve bağlantılar',
      officialLinks: 'Resmî bağlantılar',
      watch: 'YouTube’da izle',
      trackingTitle: 'Çıkış sonrası takip',
      tags: { waiting: 'Bekleniyor', unverified: 'Doğrulanmadı' },
      sourcesTitle: 'Kaynaklar',
      updated: 'Son güncelleme',
      newTab: 'yeni sekmede açılır',
      copied: 'Bağlantı kopyalandı',
      progress: (p) => `İlk fragmandan beri süren bekleyiş: %${p} tamamlandı`,
      shareText: (d) => d > 0 ? `GTA VI'ya ${d} gün kaldı!` : `GTA VI'ya saatler kaldı!`,
      shareOut: 'GTA VI çıktı!',
      event: 'GTA VI çıkışı',
      tz: '00:00 Türkiye saati',
      disclaimer: 'Hayran yapımı, resmî olmayan bir sitedir. Rockstar Games veya Take-Two Interactive ile bağlantısı yoktur. Grand Theft Auto, ilgili sahiplerinin tescilli markasıdır.',
      other: 'EN',
      locale: 'tr-TR',
    },
    en: {
      title: 'GTA VI Countdown',
      status: 'Time until release',
      statusOut: 'Out now! Time since launch',
      days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds',
      share: 'Share',
      calendar: 'Add to calendar',
      about: 'Game info ↓',
      factsTitle: 'At a glance',
      timelineTitle: 'Timeline',
      upcoming: 'Upcoming',
      trailersTitle: 'Trailers and links',
      officialLinks: 'Official links',
      watch: 'Watch on YouTube',
      trackingTitle: 'After launch',
      tags: { waiting: 'Pending', unverified: 'Unverified' },
      sourcesTitle: 'Sources',
      updated: 'Last updated',
      newTab: 'opens in a new tab',
      copied: 'Link copied',
      progress: (p) => `The wait since the first trailer: ${p}% complete`,
      shareText: (d) => d > 0 ? `${d} days until GTA VI!` : 'Just hours until GTA VI!',
      shareOut: 'GTA VI is out!',
      event: 'GTA VI release',
      tz: '00:00 Turkey time',
      disclaimer: 'Unofficial fan-made site. Not affiliated with Rockstar Games or Take-Two Interactive. Grand Theft Auto is a trademark of its respective owners.',
      other: 'TR',
      locale: 'en-US',
    },
  };

  const $ = (id) => document.getElementById(id);
  const store = {
    get() { try { return localStorage.getItem('lang'); } catch { return null; } },
    set(v) { try { localStorage.setItem('lang', v); } catch { /* yok say */ } },
  };

  let lang = store.get() || ((navigator.language || 'tr').toLowerCase().startsWith('tr') ? 'tr' : 'en');
  if (!I18N[lang]) lang = 'tr';
  let t = I18N[lang];
  let daysLeft = 0;
  let released = false;
  let shownReleased = null; // zaman çizelgesinin en son hangi duruma göre çizildiği

  function applyLang() {
    t = I18N[lang];
    document.documentElement.lang = lang;
    document.title = t.title;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = t[el.dataset.i18n];
      if (typeof v === 'string') el.textContent = v;
    });
    $('lang').textContent = t.other;
    $('dateText').textContent = RELEASE.toLocaleDateString(t.locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: TZ });
    renderInfo();
    tick();
  }

  // ---- Oyun bilgileri (content.js) -----------------------------------------
  const CONTENT = window.GTA_CONTENT || {};
  const tx = (v) => (v && typeof v === 'object' ? v[lang] || v.tr || '' : v || '');

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  const fmtDate = (iso) => new Date(iso + 'T00:00:00+03:00')
    .toLocaleDateString(t.locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: TZ });

  function extLink(label, url, cls) {
    const a = el('a', cls, label);
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', `${label} (${t.newTab})`);
    return a;
  }

  // Künye ve takip kartları aynı kalıbı kullanır: başlık, değer, not, etiket, bağlantılar.
  function infoCard(f) {
    const box = el('div', f.wide ? 'fact wide' : 'fact');
    box.append(el('dt', null, tx(f.label)));
    const dd = el('dd');
    dd.append(el('span', 'fact-value', tx(f.value)));
    if (f.note) dd.append(el('span', 'fact-note', tx(f.note)));
    if (f.tag && t.tags[f.tag]) dd.append(el('span', `badge ${f.tag}`, t.tags[f.tag]));
    if (f.links) {
      const links = el('span', 'fact-links');
      links.append(...f.links.map((l) => extLink(tx(l.label), l.url)));
      dd.append(links);
    }
    box.append(dd);
    return box;
  }

  function renderInfo() {
    $('facts').replaceChildren(...(CONTENT.facts || []).map(infoCard));
    $('tracking').replaceChildren(...(CONTENT.tracking || []).map(infoCard));

    $('sources').replaceChildren(...(CONTENT.sources || []).map((s) => {
      const li = el('li');
      li.append(extLink(tx(s.label), s.url));
      return li;
    }));

    renderTimeline();

    $('trailers').replaceChildren(...(CONTENT.trailers || []).map((v) => {
      const title = tx(v.title);
      const a = extLink('', v.url, 'trailer');
      a.setAttribute('aria-label', `${title} — ${t.watch} (${t.newTab})`);
      const play = el('span', 'play');
      play.setAttribute('aria-hidden', 'true');
      const body = el('span', 'trailer-body');
      body.append(
        el('span', 'trailer-title', title),
        el('span', 'trailer-meta', `${fmtDate(v.date)} · ${v.length}`),
        el('span', 'trailer-cta', t.watch),
      );
      a.append(play, body);
      const li = el('li');
      li.append(a);
      return li;
    }));

    $('links').replaceChildren(...(CONTENT.links || []).map((l) => {
      const li = el('li');
      li.append(extLink(tx(l.label), l.url, 'btn ext'));
      return li;
    }));

    const upd = $('updated');
    if (CONTENT.updated) {
      upd.dateTime = CONTENT.updated;
      upd.textContent = new Date(CONTENT.updated + 'T12:00:00Z')
        .toLocaleDateString(t.locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    }
  }

  const pad = (n) => String(n).padStart(2, '0');

  function tick() {
    const now = Date.now();
    let diff = RELEASE.getTime() - now;
    released = diff <= 0;
    diff = Math.abs(diff);

    const sec = Math.floor(diff / 1000);
    daysLeft = Math.floor(sec / 86400);
    $('d').textContent = daysLeft;
    $('h').textContent = pad(Math.floor(sec / 3600) % 24);
    $('m').textContent = pad(Math.floor(sec / 60) % 60);
    $('s').textContent = pad(sec % 60);

    document.body.classList.toggle('released', released);
    $('status').textContent = released ? t.statusOut : t.status;
    $('ics').hidden = released;
    $('progressWrap').hidden = released;
    // Çıkış anında "yaklaşıyor" işareti kalksın diye çizelge yeniden çizilir.
    if (shownReleased !== released) renderTimeline();

    if (!released) {
      const total = RELEASE.getTime() - WAIT_START.getTime();
      const pct = Math.min(100, Math.max(0, ((now - WAIT_START.getTime()) / total) * 100));
      const shown = pct.toFixed(2);
      $('fill').style.width = pct + '%';
      $('bar').setAttribute('aria-valuenow', shown);
      $('progressText').textContent = t.progress(lang === 'tr' ? shown.replace('.', ',') : shown);
    }
  }

  function renderTimeline() {
    shownReleased = released;
    const now = Date.now();
    $('timeline').replaceChildren(...(CONTENT.timeline || []).map((e) => {
      const when = new Date(e.date + 'T00:00:00+03:00');
      const upcoming = when.getTime() > now;
      const li = el('li', upcoming ? 'event upcoming' : 'event');
      const time = el('time', 'event-date', fmtDate(e.date));
      time.dateTime = e.date;
      li.append(time, el('p', 'event-text', tx(e.text)));
      if (upcoming) li.append(el('span', 'badge', t.upcoming));
      return li;
    }));
  }

  // ---- Paylaş --------------------------------------------------------------
  $('share').addEventListener('click', async () => {
    const text = released ? t.shareOut : t.shareText(daysLeft);
    const url = location.href;
    if (navigator.share) {
      try { await navigator.share({ title: t.title, text, url }); } catch { /* iptal edildi */ }
      return;
    }
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      const btn = $('share');
      btn.textContent = t.copied;
      setTimeout(() => { btn.textContent = t.share; }, 1800);
    } catch { /* pano kullanılamıyor */ }
  });

  // ---- Takvime ekle (.ics) -------------------------------------------------
  $('ics').addEventListener('click', () => {
    const utc = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, '');
    const ics = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//gta-vi-countdown//TR',
      'BEGIN:VEVENT',
      'UID:gta-vi-release@gta-vi-countdown',
      `DTSTAMP:${utc(new Date())}`,
      `DTSTART:${utc(RELEASE)}`,
      `DTEND:${utc(new Date(RELEASE.getTime() + 3600000))}`,
      `SUMMARY:${t.event}`,
      'END:VEVENT', 'END:VCALENDAR',
    ].join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
    a.download = 'gta-vi.ics';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  $('lang').addEventListener('click', () => {
    lang = lang === 'tr' ? 'en' : 'tr';
    store.set(lang);
    applyLang();
  });

  applyLang();
  setInterval(tick, 1000);
})();
