/**
 * @type {HTMLElement}
 */
const nightModeToggle = document.getElementById('dark-mode-toggle');

document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
});

/**
 * Initializes the theme mode for the application by setting the saved theme and applying event listeners.
 *
 * The method determines the previously saved theme mode by retrieving it from storage. If no theme is found, it defaults to 'light' mode.
 * The theme is applied by invoking the `applyTheme` method
 *
 * @return {void} Does not return a value.
 */
function initDarkMode() {
    const savedMode = safeStorageGet('mode') || '';

    applyDarkMode(savedMode);

    nightModeToggle.addEventListener('click', () => {
        removeAllModes();
        toggleNightMode();
    });

    nightModeToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter')  {
            removeAllModes();
            toggleNightMode();
        }
    });
}

/**
 * Updates the theme icon to reflect the current theme mode (dark or light).
 *
 * @param {boolean} isDark - A boolean indicating whether the dark theme is active (true) or not (false).
 * @return {void} Does not return a value.
 */
function updateThemeIcon(isDark) {
    const icon = nightModeToggle.getElementsByClassName('option-icon');

    if (icon) {
        if ( !isDark ) {
            icon[0].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/></svg>';
        } else {
            icon[0].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg>';
        }
    }
}

/**
 * Applies the specified theme to the application by toggling classes and updating relevant elements.
 *
 * @param {string} mode - The theme to apply. Accepts 'dark-mode' to enable dark mode, or another value to disable it.
 * @return {void}
 */
function applyDarkMode(mode) {
    const elements = document.querySelectorAll('[class*="bg-"]');
    const isDark = mode === 'dark-mode';

    document.body.classList.toggle('dark-mode', isDark);
    nightModeToggle.classList.toggle('active', isDark);

    elements.forEach(el => {
        el.classList.toggle('bg-dark-mode', isDark);
    });

    safeStorageSet('mode', mode);
    updateThemeIcon(isDark);
}

/**
 * Toggles the night mode of the application by switching between light and dark themes.
 * Checks the current theme applied to the body element, switches to the opposite theme,
 * and ensures any contrast modes are removed.
 *
 * @return {void} No return value.
 */
function toggleNightMode() {
    const isDark = document.body.classList.contains('dark-mode');
    applyDarkMode(isDark ? '' : 'dark-mode');
}