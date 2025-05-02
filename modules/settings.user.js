// ==UserScript==
// @name         REXmanga Settings Panel
// @namespace    https://github.com/lozzyiech/REXmanga
// @version      2.1
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

        loadSettings() {
            return {
                ...REXconfig.defaults,
                ...JSON.parse(GM_getValue('rex-settings', '{}'))
            };
        }

        init() {
            this.createButton();
            this.applyStyles();
        }

        createButton() {
            const btn = document.createElement('div');
            btn.id = 'rex-settings-btn';
            btn.innerHTML = REXconfig.button.svg;
            btn.style.cssText = `
                position: fixed;
                left: ${REXconfig.button.position.left};
                bottom: ${REXconfig.button.position.bottom};
                width: 40px;
                height: 40px;
                background: ${REXconfig.button.color};
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                transition: all 0.3s ease;
            `;

            btn.addEventListener('click', () => this.togglePanel());
            document.body.appendChild(btn);
        }
        
        // ...остальные методы без изменений
    }

    if (/remanga\.org/i.test(location.hostname)) {
        new SettingsPanel();
    }
})();