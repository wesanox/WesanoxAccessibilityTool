/**
 * @type {HTMLElement}
 */
const contrastContent = document.getElementById('module-contrast-modus-content');
const contrastModes = contrastContent.querySelectorAll('.contrast-mode');

document.addEventListener('DOMContentLoaded', () => {
    initContrastMode();
});

/**
 * Initializes the contrast mode functionality by applying the saved contrast mode if available,
 * and sets up event listeners for each contrast mode option to handle selection and mode switching.
 *
 * @return {void} Does not return a value.
 */
function initContrastMode() {
    const savedMode = safeStorageGet('mode');

    if (savedMode) {
        applyContrastMode(savedMode);
    }

    contrastModes.forEach(mode => {
        mode.addEventListener('click', () => {
            removeAllModes();

            document.body.classList.remove('dark-mode');

            contrastModes.forEach(m => m.classList.remove('active'));

            const modeNumber = mode.dataset.mode;

            if (mode.classList.contains('refresh-mode')) {
                applyContrastMode(null);
            } else {
                mode.classList.add('active');
                applyContrastMode(modeNumber);
            }
        });

        mode.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                removeAllModes();

                mode.click();
            }
        });
    });
}

/**
 * Applies a specific contrast mode to the web page by adding respective classes to the body
 * and other relevant elements, and stores the selected mode in safe storage.
 *
 * @param {string|number|null} mode The contrast mode to apply. Accepts values '1', '2', '3', '4', or null to reset.
 * @return {void} This function does not return a value.
 */
function applyContrastMode(mode) {
    if (!mode) {
        safeStorageSet('mode', null);
        return;
    }

    const className = `contrast-mode-${mode}`;
    const elements = document.querySelectorAll('[class*="bg-"]');

    document.body.classList.add(className);

    switch (mode) {
        case '1':
            elements.forEach(el => el.classList.add('bg-dark-mode'));
            break;
        case '2':
            elements.forEach(el => el.classList.add('bg-light-mode'));
            break;
        case '3':
            elements.forEach(el => el.classList.add('bg-blue-mode'));
            break;
        case '4':
            elements.forEach(el => el.classList.add('bg-green-mode'));
            break;
    }

    safeStorageSet('mode', mode);
}