const safeStorageGet = (key) => {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        console.warn('LocalStorage access error:', e);
        return null;
    }
};

const safeStorageSet = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.warn('LocalStorage access error:', e);
    }
};

// Then modify your consent message handling
const handleConsentMessage = (message) => {
    if (!message || typeof message !== 'string') {
        console.warn('Invalid consent message format');
        return;
    }

    try {
        // Make sure message is properly formatted
        const consentData = {
            message: message,
            timestamp: new Date().toISOString(),
            version: '1.0'
        };

        safeStorageSet('userConsent', JSON.stringify(consentData));
        return consentData;
    } catch (e) {
        console.warn('Error handling consent message:', e);
        return null;
    }
};

// Use this when setting consent messages
const setConsentMessage = (message) => {
    const formattedConsent = handleConsentMessage(message);
    if (formattedConsent) {
        // Your existing consent message handling code
        // Make sure to use the formatted consent data
    }
};

document.addEventListener('DOMContentLoaded', function () {
    /**
     * const
     */
    const options = ['module-font-size', 'module-contrast-modus'];
    const accessibilityButton = document.querySelector('.accessibility-button');
    const accessibilityPanel = document.querySelector('.accessibility-panel');
    const closePanel = document.querySelector('.btn-close');
    const tooltipContainer = document.getElementById('tooltip-container');

    /**
     * functions
     */
    setupTooltips();

    /**
     * Panel open / close handlers
     */
    accessibilityButton.addEventListener('click', function () {
        accessibilityPanel.classList.add('active');
        accessibilityButton.classList.add('panel-open');
    });

    closePanel.addEventListener('click', function () {
        accessibilityPanel.classList.remove('active');
        accessibilityButton.classList.remove('panel-open');
    });

    /**
     * Tooltip controls
     */

    /**
     * Creates a tooltip DOM element with the specified title and text.
     *
     * @param {string} title - The title to be displayed in the tooltip.
     * @param {string} text - The descriptive text to be shown in the tooltip.
     * @return {HTMLDivElement} The created tooltip element.
     */
    function createTooltip(title, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip-box';
        tooltip.innerHTML = `<strong>${title}</strong><br><small>${text}</small>`;
        return tooltip;
    }

    /**
     * Sets up tooltips for elements with the class "accessibility-option"
     * and the `data-tooltip-title` attribute. Tooltips are displayed on
     * hover. This function is not executed on mobile or touch devices.
     *
     * @return {void} This function does not return a value.
     */
    function setupTooltips() {
        const isMobileDevice = window.matchMedia("(max-width: 768px)").matches || (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
        const options = document.querySelectorAll('.accessibility-option[data-tooltip-title]');

        if (isMobileDevice) return;

        options.forEach(option => {
            const title = option.dataset.tooltipTitle;
            const text = option.dataset.tooltipText;

            if (!title || !text) return;

            const tooltip = createTooltip(title, text);

            tooltipContainer.appendChild(tooltip);

            option.addEventListener('mouseenter', () => {
                const optionRect = option.getBoundingClientRect();
                const containerRect = tooltipContainer.getBoundingClientRect();

                tooltip.style.top = `${optionRect.top - containerRect.top + (optionRect.height / 2)}px`;
                tooltip.style.transform = 'translateY(-50%)';
                tooltip.classList.add('visible');
            });

            option.addEventListener('mouseleave', () => {
                tooltip.classList.remove('visible');
            });
        });
    }

    /**
     *
     */
    options.forEach(option => {
        const optionElement = document.getElementById(option);
        const contentElement = document.getElementById(`${option}-content`);

        if (optionElement && contentElement) {
            optionElement.addEventListener('click', function () {
                contentElement.classList.toggle('d-none');
            });

            optionElement.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    contentElement.classList.toggle('d-none');
                }
            });
        }
    });

    /**
     *
     */
    window.addEventListener('message', function(event) {
        if (event.origin === "https://cdn.consentmanager.net") {
            try {
                const data = JSON.parse(event.data);
                if (data.type === 'consent_update') {
                    // Handle consent update
                    updateConsentPreferences(data);
                }
            } catch (e) {
                console.warn('Invalid consent message format');
            }
        }
    });

    /**
     *
     * @param data
     */
    function updateConsentPreferences(data) {
        // Handle consent preferences update
        const preferences = data.preferences || {};
        Object.entries(preferences).forEach(([key, value]) => {
            try {
                localStorage.setItem(`consent_${key}`, JSON.stringify(value));
            } catch (e) {
                console.warn('Could not save consent preference:', key);
            }
        });
    }

    // ============================================
    // Reset All Settings Functionality
    // ============================================
    const MIN_LEVEL = -2;
    const MAX_LEVEL = 3;

    const resetOption = document.querySelector('.reset-option');

    if (resetOption) {
        resetOption.addEventListener('click', function () {
            // Reset font size
            document.querySelectorAll('body *').forEach(element => {
                if (!element.closest('.accessibility-widget')) {
                    element.style.fontSize = '';
                }
            });

            // Reset font size display and controls
            const fontSizeDisplay = document.querySelector('#module-font-size-content span');
            if (fontSizeDisplay) {
                fontSizeDisplay.textContent = '0';
                currentLevel = 0;
                const decreaseBtn = document.querySelector('#module-font-size-content .decrease');
                const increaseBtn = document.querySelector('#module-font-size-content .increase');
                if (decreaseBtn) decreaseBtn.disabled = currentLevel <= MIN_LEVEL;
                if (increaseBtn) increaseBtn.disabled = currentLevel >= MAX_LEVEL;
            }
            safeStorageSet('fontSize', null);

            // Reset contrast mode
            const pageContent = document.body;

            removeAllContrastModes();

            safeStorageSet('contrastMode', null);

            document.querySelectorAll('.contrast-mode').forEach(mode => {
                mode.classList.remove('active');
            });

            // Reset dark mode
            if (document.body.classList.contains('dark-mode')) {
                document.body.classList.remove('dark-mode');
                safeStorageSet('theme', 'light');

                document.getElementById('dark-mode-toggle').classList.remove('active');
            }

            // Reset hidden images
            const images = document.querySelectorAll('img:not(.accessibility-widget img)');
            images.forEach(img => {
                img.style.opacity = '1';
                img.style.visibility = 'visible';
            });
            const hideImagesOption = document.getElementById('bilder-ausblenden');
            if (hideImagesOption) {
                hideImagesOption.classList.remove('active');
                const optionIcon = hideImagesOption.querySelector('.option-icon i');
                optionIcon.classList.remove('fa-ban');
                optionIcon.classList.add('fa-image');
            }
            safeStorageSet('imagesHidden', null);

            // Reset TTS settings
            const speedDisplay = document.querySelector('.speed-control span');
            if (speedDisplay) speedDisplay.textContent = '1,0x';
            const volumeDisplay = document.querySelector('.volume-control span');
            if (volumeDisplay) volumeDisplay.textContent = '100%';
            safeStorageSet('ttsSpeed', null);
            safeStorageSet('ttsVolume', null);

            // Reset any open panels
            document.querySelectorAll('.accessibility-option-content.active').forEach(panel => {
                panel.classList.remove('active');
            });
        });

        resetOption.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                resetOption.click();
            }
        });
    }
    // ============================================
    // End Reset All Settings Functionality
    // ============================================
    // Add this at the beginning of your DOMContentLoaded function
    const accessibilityWidget = document.querySelector('.accessibility-widget');
    const accessibilityContent = document.querySelector('.accessibility-content');

    // Prevent scroll propagation when mouse is over the widget
    accessibilityWidget.addEventListener('wheel', function(event) {
        // Check if the panel is active
        const isActive = accessibilityWidget.querySelector('.accessibility-panel.active');
        if (!isActive) return;

        event.stopPropagation();

        // Only prevent default if we're at the scroll boundaries
        const scrollTop = accessibilityContent.scrollTop;
        const scrollHeight = accessibilityContent.scrollHeight;
        const clientHeight = accessibilityContent.clientHeight;

        if (
            (event.deltaY < 0 && scrollTop === 0) || // Scrolling up at top
            (event.deltaY > 0 && scrollTop >= scrollHeight - clientHeight) // Scrolling down at bottom
        ) {
            event.preventDefault();
        }
    }, { passive: false });

    // Prevent touchmove propagation for mobile devices
    accessibilityWidget.addEventListener('touchmove', function(event) {
        const isActive = accessibilityWidget.querySelector('.accessibility-panel.active');
        if (isActive) {
            event.stopPropagation();
        }
    }, { passive: false });
});