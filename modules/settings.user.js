// ==UserScript==
// @name         REXmanga Settings Panel
// @namespace    https://github.com/lozzyiech/REXmanga
// @version      2.5
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
            this.initUI();
        }

        loadSettings() {
            return {
                ...REXconfig.defaults,
                ...JSON.parse(GM_getValue('rex-settings', '{}'))
            };
        }

        initUI() {
            this.createButton();
            this.applyStyles();
        }

        createButton() {
            const btn = document.createElement('div');
            btn.innerHTML = REXconfig.button.svg;
            btn.style.cssText = `
                position: fixed;
                left: ${REXconfig.button.position.left}px;
                bottom: ${REXconfig.button.position.bottom}px;
                width: ${REXconfig.button.size}px;
                height: ${REXconfig.button.size}px;
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

            // Оптимизация SVG
            const svg = btn.querySelector('svg');
            svg.style.width = '60%';
            svg.style.height = '60%';

            btn.addEventListener('click', () => this.togglePanel());
            document.body.appendChild(btn);
        }

        applyStyles() {
            GM_addStyle(`
                #rex-settings-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
                }
            `);
        }

        togglePanel() {
            console.log('Открытие панели настроек');
            // Здесь будет реализация панели
        }
    }

    if (/remanga\.org/i.test(location.hostname)) {
        new SettingsPanel();
    }
})();