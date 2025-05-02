// ==UserScript==
// @name         REXmanga Main
// @namespace    https://github.com/lozzyiech/REXmanga
// @version      0.1
// @description  Main script for REXmanga
// @author       ikuza47
// @match        https://remanga.org/*
// @match        http://remanga.org/*
// @grant        GM_getValue
// @grant        GM_setValue
// @require      https://github.com/lozzyiech/REXmanga/raw/main/modules/Settings.user.js
// ==/UserScript==

(function() {
    'use strict';
    
    const REXmanga = {
        init: function() {
            if (typeof REXmanga.Settings !== 'undefined') {
                REXmanga.Settings.init();
            }
        }
    };
    
    window.REXmanga = REXmanga;
    REXmanga.init();
})();