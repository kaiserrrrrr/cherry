# 🍒 Cherry

**A native, zero-config optimization engine for the modern web.**

Cherry.js is a "healing" library designed to bridge the gap between semantic design and technical performance. It identifies common accessibility gaps, SEO omissions, and performance bottlenecks (like Cumulative Layout Shift) and patches them at runtime during browser idle periods.

---

## 🌟 Why Cherry?

Most performance tools only *report* errors; Cherry **fixes** them. Built on the principle of **"In-Flight Repair"**, it offers:

* **Zero Technical Debt:** Patches legacy HTML for WCAG and SEO compliance without changing a line of source code.
* **Idle-Time Execution:** Utilizes `requestIdleCallback` to perform DOM surgery only when the browser is idle, protecting your Total Blocking Time (TBT).
* **Aesthetic Preservation:** Allows designers to focus on the visual layer while the engine handles the technical enforcement underneath.

---

## 🚀 Installation

**CDN** (*recommended*):

1. Simply add this in your `<head>` tag:

    ```html
    <script src="https://cdn.jsdelivr.net/gh/Kaiserrrrrr/cherry/dist/cherry.min.js" async></script>
    ```

**Manually**:

1. Download the file:

    ```bash
    wget "https://cdn.jsdelivr.net/gh/Kaiserrrrrr/cherry/dist/cherry.min.js"
    ```

    **OR** download directly:
    [cherry](https://cdn.jsdelivr.net/gh/Kaiserrrrrr/cherry/dist/cherry.min.js)

2. Link it from HTML:

    ```html
    <script src="cherry.min.js" async></script>
    ```

## 🛠 Features & Fixes

| Patch | Action |
| :--- | :--- |
| **Accessibility** | Auto-generates `aria-labels` for icon-buttons and repairs `tabindex` hierarchies. |
| **CLS Patch** | Calculates and injects missing image/media dimensions to stabilize layout. |
| **SEO Audit** | Validates heading hierarchy (H1) and dynamically generates meta-descriptors. |
| **Security** | Secures `target="_blank"` links with `rel="noopener"` to prevent tab-nabbing. |

---

## ❓ How it works

```mermaid
sequenceDiagram
    autonumber
    participant Browser
    participant Cherry as Cherry.js
    participant DOM as Web Page (DOM)

    Note over Browser, DOM: Script Execution Starts
    
    Browser->>Cherry: Load script
    alt document.readyState === 'complete'
        Cherry->>Cherry: init()
    else Document still loading
        Browser-->>Cherry: window.addEventListener('load')
        Cherry->>Cherry: init()
    end

    rect
        Note over Cherry, DOM: --- PERFORMANCE ---
        Cherry->>DOM: Set loading='lazy' on img/iframe
        Cherry->>DOM: Auto-fix naturalWidth/Height on images
        Cherry->>Browser: Inject 'passive: true' into Event Listeners
        Cherry->>DOM: Append 'preconnect' links for Google Fonts
    end

    rect
        Note over Cherry, DOM: --- ACCESSIBILITY ---
        Cherry->>DOM: Remove 'aria-hidden' from body
        Cherry->>DOM: Generate IDs/Labels for inputs & textareas
        Cherry->>DOM: Enforce min-size (44px) on small tap targets
        Cherry->>DOM: Ensure alt='' and aria-labels on links/buttons
    end

    rect
        Note over Cherry, DOM: --- BEST PRACTICES ---
        Cherry->>DOM: Add 'noopener noreferrer' to target='_blank'
        Cherry->>DOM: Reset positive tabindex (>0) to 0
        Cherry->>Browser: Enable paste propagation
        Cherry->>DOM: Remove 'http-equiv=refresh' tags
    end

    rect
        Note over Cherry, DOM: --- SEO ---
        Cherry->>DOM: Set HTML lang & Charset (UTF-8)
        Cherry->>DOM: Auto-generate Meta Description & Robots tags
        Cherry->>DOM: Enforce Viewport scale (max-scale=5)
        Cherry->>DOM: Inject hidden H1 & Fix invalid list nesting
    end

    Note over Browser, DOM: Page Optimized Successfully
```

---

## 🎨 Built for Blossom

Cherry.js is the definitive technical companion for **[Blossom.css](https://github.com/Kaiserrrrrr/blossom)**. While Blossom provides the visual framework and semantic baseline, Cherry handles the technical enforcement:

* **Layout Stability:** Respects Blossom's centering logic (`max-width` and `margin: auto`) while preventing layout jumps.
* **Theme Native:** Injected UI elements automatically inherit Blossom’s CSS variables (`--bg-color`, `--text-color`, `--btn-bg`).
* **Responsive Dark Mode:** Fully compatible with Blossom’s native `@media (prefers-color-scheme: dark)` root variables.

---

## 🌐 Browsers supported

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| Edge | Last 68 versions | Last 65 versions | Last 6 versions | Last 6 versions | Last 16 versions | Last 60 versions |

---

## 📜 License

&copy; Cherry 2026. Code released under the [MIT license](https://github.com/Kaiserrrrrr/cherry/blob/master/LICENSE).

---
Built with 🍒 and Blossom.
