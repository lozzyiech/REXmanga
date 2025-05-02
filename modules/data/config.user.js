// ==UserScript==
// @name         REXmanga Config
// @namespace    https://github.com/lozzyiech/REXmanga
// @version      1.2
// @description  Конфигурация для скриптов REXmanga
// @grant        GM_getResourceText
// @resource     buttonIcon https://github.com/lozzyiech/REXmanga/raw/main/assets/settings_button.svg
// ==/UserScript==

/* exported REXconfig */
const REXconfig = {
    button: {
        color: "#1A1B1E",
        svgContent: GM_getResourceText('buttonIcon'), // Получаем содержимое SVG
        size: "40px",
        position: {
            left: "20px",
            bottom: "20px"
        }
    },
    defaults: {
        theme: "dark",
        fontSize: 14,
        customCSS: ""
    }
};