// ==UserScript==
// @name         REXmanga Settings Panel
// @namespace    https://github.com/lozzyiech/REXmanga
// @version      2.3
// @description  Панель настроек для remanga.org
// @author       ikuza47
// @match        https://remanga.org/*
// @match        http://remanga.org/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @require      https://github.com/lozzyiech/REXmanga/raw/main/modules/data/config.user.js
// ==/UserScript==

(function() {
    'use strict';

    class SettingsPanel {
        constructor() {
            this.settings = this.loadSettings();
            this.init();
        }

        createButton() {
            const btn = document.createElement('div');
            btn.id = 'rex-settings-btn';
            
            // Вставляем SVG содержимое
            btn.innerHTML = REXconfig.button.svgContent;
            
            // Стили для контейнера
            btn.style.cssText = `
                position: fixed;
                left: ${REXconfig.button.position.left};
                bottom: ${REXconfig.button.position.bottom};
                width: ${REXconfig.button.size};
                height: ${REXconfig.button.size};
                background-color: ${REXconfig.button.color};
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                transition: all 0.3s ease;
            `;

            // Стили для SVG внутри кнопки
            const svg = btn.querySelector('svg');
            if (svg) {
                svg.style.width = '24px';
                svg.style.height = '24px';
            }

            btn.addEventListener('click', () => this.togglePanel());
            document.body.appendChild(btn);
        }

        // ...остальные методы без изменений
    }

    if (/remanga\.org/i.test(location.hostname)) {
        new SettingsPanel();
    }
})();