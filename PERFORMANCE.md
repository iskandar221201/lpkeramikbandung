# Performance Optimization Recommendations

## 🚀 Masalah Performance Mobile

Berdasarkan PageSpeed Insights, berikut optimasi yang perlu dilakukan:

---

## ✅ Yang Sudah Dilakukan

1. ✅ **Lazy Loading Images**: Sudah ditambahkan `loading="lazy"` pada hero images
2. ✅ **SEO Meta Tags**: Complete dengan Open Graph dan Schema.org
3. ✅ **Minimal JS**: Pure Astro tanpa framework JS berat
4. ✅ **Static Generation**: Build menghasilkan static HTML

---

## 📌 Rekomendasi Optimasi Berikutnya

### 1️⃣ **Image Optimization** (PRIORITY: HIGH)

**Masalah**: Unsplash images sangat besar dan tidak teroptimasi

**Solusi**: Gunakan Astro Image Component

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg'; // Download & save locally
---

<Image 
  src={heroImage} 
  alt="..." 
  width={1920}
  height={1080}
  loading="lazy"
  format="webp"
/>
```

**Action Items**:
- Download images dari Unsplash
- Save ke `src/assets/`
- Ganti semua `<img>` dengan `<Image>` component
- Astro akan auto-optimize ke WebP/AVIF

---

### 2️⃣ **Font Optimization** (PRIORITY: MEDIUM)

**Current**:
```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" />
```

**Better**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">
```

**Action**: Reduce font weights dari 6 (300-800) menjadi 3 (400,600,700)

---

### 3️⃣ **Reduce Unused CSS** (PRIORITY: LOW)

TailwindCSS already optimized dengan purge. Tidak perlu action.

---

### 4️⃣ **Eliminate Render-Blocking Resources**

**Add to `astro.config.mjs`**:
```js
export default defineConfig({
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
})
```

---

### 5️⃣ **Add Resource Hints**

**Update Layout.astro `<head>`**:
```html
<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="https://images.unsplash.com">

<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

## 🎯 Expected Lighthouse Score After Optimization

| Metric | Before | Target After |
|--------|--------|--------------|
| Performance | ~60-70 | **90+** ✅ |
| Accessibility | Good | **95+** ✅ |
| Best Practices | Good | **100** ✅ |
| SEO | Good | **100** ✅ |

---

## 🛠️ Quick Wins (1-2 hours)

1. **Download & Replace Unsplash Images**
   - Hero image
   - Project images
   - About page images
   
2. **Use Astro Image Component**
   ```bash
   # Already included in Astro
   import { Image } from 'astro:assets';
   ```

3. **Reduce Font Weights**
   - Edit Layout.astro
   - Change: `wght@300;400;500;600;700;800` → `wght@400;600;700`

4. **Add Preload for Critical Resources**

---

## 📊 Tools untuk Testing

- **PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/
- **Lighthouse (Chrome DevTools)**: F12 → Lighthouse tab

---

## ⚡ Advanced (Optional)

1. **Self-host Google Fonts** menggunakan `fontsource`
2. **Add Service Worker** untuk caching
3. **Implement Critical CSS** extraction
4. **Use CDN** (Cloudflare, Vercel Edge)

---

**Priority Order**: Image Optimization → Font Reduction → Resource Hints
