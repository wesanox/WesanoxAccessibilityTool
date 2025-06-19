/**
 * Removes all classes from the provided elements that start with the specified prefix.
 *
 * @param {HTMLElement[]} elements - An array of HTML elements from which classes will be removed.
 * @param {string} prefix - The prefix used to match and remove classes from the elements.
 * @return {void} This function does not return a value.
 */
function removeClassByPrefix(elements, prefix) {
    elements.forEach(el => {
        el.classList.forEach(cls => {
            if (cls.startsWith(prefix)) {
                el.classList.remove(cls);
            }
        });
    });
}

/**
 * Removes all contrast mode classes and updates the display properties for certain elements.
 * This method clears any applied contrast mode classes from the body element, hides specific elements with contrast-related IDs,
 * and removes background-related classes from elements with class names starting with specific prefixes.
 *
 * @return {void} Does not return a value.
 */
function removeAllModes() {
    const pageContent = document.body.classList;

    for (let i = 1; i <= 4; i++) {
        pageContent.remove(`contrast-mode-${i}`);
    }

    const elements = document.querySelectorAll('[class*="bg-"]');

    removeClassByPrefix(elements, 'bg-light-mode');
    removeClassByPrefix(elements, 'bg-dark-mode');
    removeClassByPrefix(elements, 'bg-blue-mode');
    removeClassByPrefix(elements, 'bg-green-mode');
}