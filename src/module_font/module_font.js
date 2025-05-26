document.addEventListener('DOMContentLoaded', function () {
    let currentLevel = 0;
    const MIN_LEVEL = -2;
    const MAX_LEVEL = 3;
    const SIZE_INCREMENT = 3;

    const fontSizeContent = document.getElementById('module-font-size-content');
    const fontSizeResetBtn = document.querySelector('#module-font-size-content .reset-btn');
    const header = document.querySelector('header');

    if (fontSizeResetBtn) {
        fontSizeResetBtn.addEventListener('click', function () {
            // Reset font size
            document.querySelectorAll('body *').forEach(element => {
                if (!element.closest('.accessibility-widget')) {
                    element.style.fontSize = '';
                }
            });

            // Reset header height
            if (header) {
                header.style.height = '88px';
            }

            // Reset font size display and controls
            const fontSizeDisplay = document.querySelector('#module-font-size-content .controller span');
            if (fontSizeDisplay) {
                fontSizeDisplay.textContent = '0';
                currentLevel = 0;
                const decreaseBtn = document.querySelector('#module-font-size-content .decrease');
                const increaseBtn = document.querySelector('#module-font-size-content .increase');
                if (decreaseBtn) decreaseBtn.disabled = currentLevel <= MIN_LEVEL;
                if (increaseBtn) increaseBtn.disabled = currentLevel >= MAX_LEVEL;
            }
            safeStorageSet('fontSize', null);
        });
    }

    if (fontSizeContent) {
        const decreaseBtn = fontSizeContent.querySelector('.decrease');
        const increaseBtn = fontSizeContent.querySelector('.increase');
        const sizeDisplay = fontSizeContent.querySelector('span');

        // Store initial font sizes for all elements except accessibility widget
        const initialFontSizes = {};
        document.querySelectorAll('body *').forEach((element, index) => {
            // Skip elements inside accessibility widget
            if (!element.closest('.accessibility-widget')) {
                const size = parseFloat(window.getComputedStyle(element).fontSize);
                initialFontSizes[`elem-${index}`] = {
                    element: element,
                    size: size
                };
            }
        });

        const initialHeaderHeight = header ? parseFloat(window.getComputedStyle(header).height) : null;

        // Increase font size handler
        increaseBtn.addEventListener('click', () => {
            if (currentLevel < MAX_LEVEL) {
                currentLevel++;
                sizeDisplay.textContent = currentLevel;

                Object.values(initialFontSizes).forEach(({element,size}) => {
                    element.style.fontSize = `${size + (currentLevel * SIZE_INCREMENT)}px`;
                    element.style.lineHeight = `${size + (currentLevel * SIZE_INCREMENT) + 10}px`;
                });
            }

            if (header && initialHeaderHeight) {
                header.style.height = `${initialHeaderHeight + (currentLevel * 5)}px`;
            }

            // Update button states
            decreaseBtn.disabled = currentLevel <= MIN_LEVEL;
            increaseBtn.disabled = currentLevel >= MAX_LEVEL;
        });

        // Decrease font size handler
        decreaseBtn.addEventListener('click', () => {
            if (currentLevel > MIN_LEVEL) {
                currentLevel--;
                sizeDisplay.textContent = currentLevel;

                Object.values(initialFontSizes).forEach(({element,size}) => {
                    element.style.fontSize = `${size + (currentLevel * SIZE_INCREMENT)}px`;
                    element.style.lineHeight = `${size + (currentLevel * SIZE_INCREMENT) + 5}px`;
                });
            }

            if (header && initialHeaderHeight) {
                header.style.height = `${initialHeaderHeight + (currentLevel * 5)}px`;
            }

            // Update button states
            decreaseBtn.disabled = currentLevel <= MIN_LEVEL;
            increaseBtn.disabled = currentLevel >= MAX_LEVEL;
        });

        // Initialize button states
        decreaseBtn.disabled = currentLevel <= MIN_LEVEL;
        increaseBtn.disabled = currentLevel >= MAX_LEVEL;
    }
});