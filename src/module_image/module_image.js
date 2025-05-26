const hideImagesOption = document.getElementById('bilder-ausblenden');

if (hideImagesOption) {
    let imagesHidden = false;

    function toggleImages() {
        const images = document.querySelectorAll('img:not(.accessibility-widget img)');
        const bgElements = document.querySelectorAll('[style*="background-image"]');
        const optionIcon = hideImagesOption.querySelector('.option-icon i');

        imagesHidden = !imagesHidden;

        // Bilder mit <img>-Tag ausblenden
        images.forEach(img => {
            img.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
            img.style.opacity = imagesHidden ? '0' : '1';
            img.style.visibility = imagesHidden ? 'hidden' : 'visible';
        });

        // Hintergrundbilder entfernen
        bgElements.forEach(element => {
            if (imagesHidden) {
                element.dataset.originalBg = element.style.backgroundImage; // Original speichern
                element.style.backgroundImage = 'none';
            } else {
                element.style.backgroundImage = element.dataset.originalBg || ''; // Wiederherstellen
            }
        });

        // Icon aktualisieren
        if (imagesHidden) {
            optionIcon.classList.remove('fa-image');
            optionIcon.classList.add('fa-ban');
        } else {
            optionIcon.classList.remove('fa-ban');
            optionIcon.classList.add('fa-image');
        }

        // Zustand speichern
        safeStorageSet('imagesHidden', imagesHidden);
        hideImagesOption.classList.toggle('active');
    }

    // Klick-Handler hinzufügen
    hideImagesOption.addEventListener('click', toggleImages);

    hideImagesOption.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            toggleImages();
        }
    });

    // Gespeicherten Zustand anwenden
    const savedState = safeStorageGet('imagesHidden');
    if (savedState === 'true') {
        toggleImages();
    }
}
