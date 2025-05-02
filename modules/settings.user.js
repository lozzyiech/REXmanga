// ==UserScript==
// @name         REXmanga Settings
// @namespace    https://github.com/lozzyiech/REXmanga
// @version      1.1
// @description  Настройки интерфейса для remanga.org
// @author       ikuza47
// @match        https://remanga.org/*
// @match        http://remanga.org/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     settingsData https://github.com/lozzyiech/REXmanga/raw/main/modules/data/settings.json
// ==/UserScript==

(function() {
    'use strict';

    const settingsData = JSON.parse(GM_getResourceText('settingsData'));

    class SettingsManager {
        constructor() {
            this.init();
        }

        init() {
            this.injectSettingsButton();
        }

        injectSettingsButton() {
            const button = document.createElement('div');
            button.innerHTML = settingsData.buttonSVG;
            button.style.cssText = `
                position: fixed;
                left: 20px;
                bottom: 20px;
                width: 40px;
                height: 40px;
                background-color: ${settingsData.buttonColor};
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                transition: transform 0.2s;
            `;

            // Эффект при наведении
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'scale(1.1)';
            });
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'scale(1)';
            });

            button.addEventListener('click', () => {
                this.toggleSettingsPanel();
            });

            document.body.appendChild(button);
        }

        toggleSettingsPanel() {
            console.log('Settings panel toggled');
            // Логика панели настроек будет здесь
        }
    }

    if (window.location.hostname.includes('remanga.org')) {
        new SettingsManager();
    }
})();