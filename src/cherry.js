/* Cherry.js v1.0.0
 * ================
 * Semantic js script for frontend optimization
 * Project: https://github.com/kaiserrrrrr/cherry
 */

(function() {
    'use strict';

    const cherry = {
        init() {
            this.Performance();
            this.Accessibility();
            this.BestPractices();
            this.SEO();
        },

        // --- PERFORMANCE ---
        Performance() {
            document.querySelectorAll('img, iframe').forEach(el => {
                if (el.tagName === 'IMG' && el.naturalWidth && !el.hasAttribute('width')) {
                    el.width = el.naturalWidth;
                    el.height = el.naturalHeight;
                }
                if (!el.hasAttribute('loading')) el.loading = 'lazy';
            });

            const originalAdd = EventTarget.prototype.addEventListener;
            EventTarget.prototype.addEventListener = function(type, fn, options) {
                if (['touchstart', 'touchmove', 'wheel', 'mousewheel'].includes(type)) {
                    options = (typeof options === 'object') ? Object.assign({}, options, {
                        passive: true
                    }) : {
                        passive: true
                    };
                }
                originalAdd.call(this, type, fn, options);
            };

            const domains = [window.location.origin, 'https://fonts.googleapis.com', 'https://fonts.gstatic.com'];
            domains.forEach(url => {
                const link = document.createElement('link');
                link.rel = 'preconnect';
                link.href = url;
                document.head.appendChild(link);
            });
        },

        // --- ACCESSIBILITY ---
        Accessibility() {
            document.body.removeAttribute('aria-hidden');

            document.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach((el, i) => {
                const cherryName = el.name || el.type || el.placeholder || 'field';
                const cherryId = el.id || `cherry-${cherryName.toLowerCase().replace(/[^a-z]/g, '')}-${i}`;
                el.id = cherryId;

                if (!document.querySelector(`label[for="${cherryId}"]`)) {
                    const l = document.createElement('label');
                    l.setAttribute('for', cherryId);
                    l.innerText = el.placeholder || el.name || `Input ${cherryName}`;
                    l.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);";
                    el.parentNode.insertBefore(l, el);
                }
            });

            document.querySelectorAll('button, a, img').forEach(el => {
                if (el.tagName === 'IMG' && !el.hasAttribute('alt')) el.alt = "";
                if ((el.tagName === 'BUTTON' || el.tagName === 'A') && !el.innerText.trim() && !el.hasAttribute('aria-label')) {
                    el.setAttribute('aria-label', el.title || 'Interactive element');
                }
            });

            document.querySelectorAll('button, a').forEach(el => {
                const r = el.getBoundingClientRect();
                if (r.width > 0 && (r.width < 44 || r.height < 44)) {
                    el.style.minWidth = '44px';
                    el.style.minHeight = '44px';
                }
            });
        },

        // --- BEST PRACTICES ---
        BestPractices() {
            document.querySelectorAll('a[target="_blank"]').forEach(a => {
                if (!a.rel.includes('noopener')) a.rel = (a.rel + ' noopener noreferrer').trim();
            });

            document.querySelectorAll('[tabindex]').forEach(el => {
                if (parseInt(el.getAttribute('tabindex')) > 0) el.setAttribute('tabindex', '0');
            });

            document.addEventListener('paste', e => e.stopPropagation(), true);

            document.querySelectorAll('meta[http-equiv="refresh"]').forEach(m => m.remove());
        },

        // --- SEO ---
        SEO() {
            if (!document.documentElement.lang) document.documentElement.lang = 'en';
            if (!document.querySelector('meta[charset]')) {
                const c = document.createElement('meta');
                c.setAttribute('charset', 'UTF-8');
                document.head.prepend(c);
            }

            if (!document.querySelector('meta[name="description"]')) {
                const metaDesc = document.createElement('meta');
                metaDesc.name = "description";
                metaDesc.content = document.title ? `${document.title} - Explore our high-performance, accessible web content.` : "Optimized web page providing quality user experience and accessible information.";
                document.head.appendChild(metaDesc);
            }

            if (!document.querySelector('meta[name="robots"]')) {
                const metaRobots = document.createElement('meta');
                metaRobots.name = "robots";
                metaRobots.content = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
                document.head.appendChild(metaRobots);
            }

            let vp = document.querySelector('meta[name="viewport"]');
            if (!vp) {
                vp = document.createElement('meta');
                vp.name = "viewport";
                vp.content = "width=device-width, initial-scale=1, maximum-scale=5";
                document.head.appendChild(vp);
            } else {
                vp.content = "width=device-width, initial-scale=1, maximum-scale=5";
            }

            if (!document.querySelector('h1')) {
                const h1 = document.createElement('h1');
                h1.innerText = document.title || "Content Overview";
                h1.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);";
                document.body.prepend(h1);
            }

            document.querySelectorAll('ul, ol').forEach(list => {
                Array.from(list.children).forEach(c => {
                    if (!['LI', 'SCRIPT', 'TEMPLATE'].includes(c.tagName)) {
                        const li = document.createElement('li');
                        c.parentNode.insertBefore(li, c);
                        li.appendChild(c);
                    }
                });
            });
        }
    };

    if (document.readyState === 'complete') {
        cherry.init();
    } else {
        window.addEventListener('load', () => cherry.init());
    }
})();
