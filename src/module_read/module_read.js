const mask = document.getElementById('module-read-mask');
const toggleMode = document.getElementById('module-read-toggle');

document.addEventListener('DOMContentLoaded', () => {
    /**
     * Toggle read mode
     */
    toggleMode?.addEventListener('click', toggleReadMode);
    document.addEventListener('mousemove', updateMaskPosition);

    toggleMode?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            toggleReadMode();
        }
    });

    /**
     * Restore read mode from storage
     */
    restoreReadMode();
});

/**
 * Toggles the read mode by adding or removing a CSS class to an element and updates the state in storage.
 *
 * @return {void} This method does not return any value.
 */
function toggleReadMode() {
    const isHidden = mask.classList.toggle('d-none');
    safeStorageSet('readMode', isHidden ? 'false' : 'true');
}

/**
 * Restores the read mode state from storage and applies it to the UI.
 * If the saved state indicates read mode is enabled, it removes a CSS class to update the UI.
 *
 * @return {void} This function does not return any value.
 */
function restoreReadMode() {
    const saved = safeStorageGet('readMode');
    if (saved === 'true') {
        mask.classList.remove('d-none');
    }
}

/**
 * Updates the mask position based on the Y-coordinate of a mouse event.
 *
 * @param {MouseEvent} e - The mouse event containing the Y-coordinate to update the mask position.
 * @return {void} This method does not return a value.
 */
function updateMaskPosition(e) {
    mask.style.setProperty('--y', `${e.clientY}px`);
}