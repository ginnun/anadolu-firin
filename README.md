# Anadolu Usulü Odun Fırını Yapım Rehberi

Pizza, ekmek ve tandır yemekleri için Anadolu usulü taş fırın yapımına dair, akademik araştırmalarla ve teknik çizimlerle desteklenmiş kapsamlı bir rehber.

**Canlı site:** https://ginnun.github.io/anadolu-firin/

## İçerik

- [index.html](index.html) — Ana sayfa, fırın anatomisi
- [yapim.html](yapim.html) — Adım adım yapım aşamaları
- [pisirme.html](pisirme.html) — Pişirme teknikleri ve sıcaklık yönetimi
- [yalitim.html](yalitim.html) — Yalıtım ve malzeme listesi
- [bilim.html](bilim.html) — Termodinamik ve malzeme bilimi
- [svg/](svg/) — Teknik çizimler

## Yerel Çalıştırma

Statik bir site olduğu için herhangi bir HTTP sunucusu yeterlidir:

```bash
python -m http.server 8000
# veya
npx serve .
```

Ardından tarayıcıdan `http://localhost:8000` adresine gidin.

## Yapı

Build adımı yok — saf HTML, CSS ve JavaScript. `style.css` tüm sayfalar için ortak; `shared.js` navigasyon ve etkileşim mantığını içerir.
