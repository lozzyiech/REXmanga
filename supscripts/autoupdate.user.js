// ==UserScript==
// @name         AutoUpdate Utility
// @version      1.0
// @description  Автообновление скрипта
// @author       ikuza47
// @match        https://remanga.org/*
// @match        http://remanga.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Ждём загрузки страницы
    window.addEventListener('load', function() {
        // Находим элемент по сложному селектору
        const targetElement = document.querySelector('body > div.bg-background.flex.w-full.max-w-screen.flex-col > div > div.fresnel-container.fresnel-greaterThanOrEqual-md.fresnel-«R8rin9lb» > header > div > div > div > div:nth-child(3) > div');
        
        if (targetElement) {
            // Создаём кнопку
            const button = document.createElement('button');
            button.innerHTML = 'Кнопка';
            
            // Стилизуем кнопку
            button.style.position = 'absolute';
            button.style.right = '10px';
            button.style.top = '50%';
            button.style.transform = 'translateY(-50%)';
            button.style.width = '40px';
            button.style.height = '40px';
            button.style.borderRadius = '50%';
            button.style.backgroundColor = '#4285f4';
            button.style.color = 'white';
            button.style.border = 'none';
            button.style.cursor = 'pointer';
            button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
            button.style.zIndex = '1000';
            button.style.display = 'flex';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'center';
            button.style.fontSize = '12px';
            
            // Убедимся, что родительский элемент имеет position: relative
            targetElement.style.position = 'relative';
            
            // Добавляем кнопку в элемент
            targetElement.appendChild(button);
            
            // Добавляем обработчик клика
            button.addEventListener('click', function() {
                alert('Кнопка нажата!');
            });
        } else {
            console.log('Целевой элемент не найден');
        }
    });
})();
