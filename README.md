# 🍒 Cherry

**A native, zero-config optimization engine for the modern web.**

Cherry.js is a library designed to bridge the gap between semantic design and technical performance. It identifies common accessibility gaps, SEO omissions, and performance bottlenecks (like Cumulative Layout Shift) and patches them at runtime during browser idle periods.

---

## 🌟 Why Cherry?

cherry builds upon the on-the-fly philosophy, ensuring that sites remain optimized without any trade-off:

* **Zero Technical Debt:** Patches legacy HTML for WCAG and SEO compliance without changing a line of source code.
* **Idle-Time Execution:** Utilizes `requestIdleCallback` to perform DOM surgery only when the browser is idle, protecting your Total Blocking Time (TBT).

---

## 🚀 Installation

**CDN** (*recommended*):

1. Simply add this in your `<head>` tag:

    ```html
    <script src="https://cdn.jsdelivr.net/gh/kaiserrrrrr/cherry/src/cherry.min.js" defer></script>
    ```

**Manually**:

1. Download the file:

    ```bash
    wget "https://cdn.jsdelivr.net/gh/kaiserrrrrr/cherry/src/cherry.min.js"
    ```

    **OR** download directly:
    [cherry](https://cdn.jsdelivr.net/gh/kaiserrrrrr/cherry/src/cherry.min.js)

2. Link it from HTML:

    ```html
    <script src="cherry.min.js"defer></script>
    ```

---

## ❓ How it works

```mermaid
sequenceDiagram
    autonumber
    participant B as Browser
    participant C as Cherry.js
    participant D as DOM (Web Page)

    Note over B, D: Script Initialization
    
    B->>C: Load script
    activate C
    alt if readyState is 'complete'
        C->>C: init()
    else wait for 'load' event
        B-->>C: window.onload
        C->>C: init()
    end
    deactivate C

    Note over C, D: Performance
    activate C
    C->>D: Set loading="lazy" (img/iframe)
    C->>D: Set width/height from naturalWidth
    C->>B: Force {passive: true} on listeners
    C->>D: Append font preconnect links
    deactivate C

    Note over C, D: Accessibility
    activate C
    C->>D: Remove body[aria-hidden]
    C->>D: Fix input Labels & unique IDs
    C->>D: Ensure alt="" and aria-labels exist
    C->>D: Set min-size (44px) for tap targets
    deactivate C

    Note over C, D: Best Practices
    activate C
    C->>D: Add [rel="noopener"] to _blank links
    C->>D: Reset tabindex > 0 to 0
    C->>B: Stop paste event propagation
    C->>D: Remove <meta http-equiv="refresh">
    deactivate C

    Note over C, D: SEO
    activate C
    C->>D: Set html[lang] & charset="UTF-8"
    C->>D: Generate Description & Robots meta
    C->>D: Enforce viewport max-scale=5
    C->>D: Inject hidden H1 & fix list nesting
    deactivate C

    Note over B, D: Page Optimization Complete
```

---

## 🌐 Browsers supported

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| Edge | Last 68 versions | Last 65 versions | Last 6 versions | Last 6 versions | Last 16 versions | Last 60 versions |

---

## 📜 License

&copy; Cherry 2026. Code released under the [GNU General Public License v3.0](https://github.com/kaiserrrrrr/cherry/blob/master/LICENSE).

---
Built with 🍒 and Blossom.
