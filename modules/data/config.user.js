// ==UserScript==
// @name         REXmanga Config
// @namespace    https://github.com/lozzyiech/REXmanga
// @version      1.0
// @description  Конфигурация для скриптов REXmanga
// ==/UserScript==

/* exported REXconfig */
const REXconfig = {
    button: {
        color: "#1A1B1E",
        svg: `<svg viewBox="0 0 24 24" fill="#FAFAFA" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6zm0-10a1 1 0 100-2 1 1 0 000 2zm0 14a1 1 0 100-2 1 1 0 000 2z"/>
              </svg>`,
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