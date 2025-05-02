// ==UserScript==
// @name         AutoUpdate Utility
// @version      1.0
// @description  Автообновление скрипта
// @author       ikuza47
// @match        *://*/*
// @grant        none
// ==/UserScript==

/**
 * Настраивает автообновление скрипта при изменениях DOM и навигации
 * @param {Function} scriptFunc - Главная функция скрипта
 * @param {string} [containerSelector='body'] - Селектор контейнера для наблюдения
 */
function setupAutoUpdate(scriptFunc, containerSelector = 'body') {
    scriptFunc();
    
    // Наблюдатель за изменениями DOM
    const observer = new MutationObserver((mutations) => {
        const shouldReload = mutations.some(mutation => 
            mutation.addedNodes.length > 0 || 
            mutation.removedNodes.length > 0
        );
        
        if (shouldReload) {
            console.log('[AutoUpdate] DOM changed, reloading script');
            scriptFunc();
        }
    });
    
    const container = document.querySelector(containerSelector);
    if (container) {
        observer.observe(container, {
            childList: true,
            subtree: true
        });
    }
    
    // Для SPA-приложений
    const handleSPANavigation = () => {
        console.log('[AutoUpdate] SPA navigation detected');
        scriptFunc();
    };
    
    window.addEventListener('popstate', handleSPANavigation);
    window.addEventListener('pushState', handleSPANavigation);
    window.addEventListener('replaceState', handleSPANavigation);
    
    // Перехват History API
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function() {
        originalPushState.apply(this, arguments);
        window.dispatchEvent(new Event('pushState'));
    };
    
    history.replaceState = function() {
        originalReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event('replaceState'));
    };
}
