const contrastContent = document.getElementById('module-contrast-modus-content');
const elementsWithBgClassContrast = document.querySelectorAll('[class*="bg-"]');

if (contrastContent) {
    const contrastModes = contrastContent.querySelectorAll('.contrast-mode');
    const pageContent = document.body.classList;
    const savedContrastMode = safeStorageGet('contrastMode');

    // Function to remove all contrast modes
    function removeAllContrastModes() {
        for (let i = 1; i <= 4; i++) {
            pageContent.remove(`contrast-mode-${i}`);

            if (i === 3 ) {
                document.getElementById('contrast-mode-3').classList.add('d-none');
                document.getElementById('contrast-mode-3').classList.remove('d-block');
            }
        }

        if (document.querySelectorAll('[class*="bg-light-mode"]') ) {
            document.querySelectorAll('[class*="bg-light-mode"]').forEach(el => el.classList.remove('bg-light-mode'));
        }

        if (document.querySelectorAll('[class*="bg-dark-mode"]') ) {
            document.querySelectorAll('[class*="bg-dark-mode"]').forEach(el => el.classList.remove('bg-dark-mode'));
        }

        if (document.querySelectorAll('[class*="bg-blue-mode"]') ) {
            document.querySelectorAll('[class*="bg-blue-mode"]').forEach(el => el.classList.remove('bg-blue-mode'));
        }

        if (document.querySelectorAll('[class*="bg-green-mode"]') ) {
            document.querySelectorAll('[class*="bg-green-mode"]').forEach(el => el.classList.remove('bg-green-mode'));
        }
    }

    // Function to apply contrast mode
    function applyContrastMode(modeNumber) {
        removeAllContrastModes();

        if (modeNumber) {
            pageContent.add(`contrast-mode-${modeNumber}`);

            document.querySelectorAll('.mobile-section').forEach(section => {
                section.classList.add(`contrast-mode-${modeNumber}`);
            });


            switch(modeNumber) {
                case '1':
                    elementsWithBgClassContrast.forEach(element => {
                        element.classList.toggle('bg-dark-mode');
                    });

                    document.querySelectorAll('#fullpage .section .textbox').forEach(el => el.classList.add('bg-light-mode'));
                    break;
                case '2':
                    elementsWithBgClassContrast.forEach(element => {
                        element.classList.toggle('bg-light-mode');
                    });

                    document.querySelectorAll('#fullpage .section .textbox').forEach(el => el.classList.add('bg-dark-mode'));
                    break;
                case '3':
                    // document.getElementById('contrast-mode-3').classList.remove('d-none');
                    // document.getElementById('contrast-mode-3').classList.add('d-block');
                    elementsWithBgClassContrast.forEach(element => {
                        element.classList.toggle('bg-blue-mode');
                    });

                    document.querySelectorAll('#fullpage .section .textbox').forEach(el => el.classList.add('bg-blue-mode'));
                    break;
                case '4':
                    elementsWithBgClassContrast.forEach(element => {
                        element.classList.toggle('bg-green-mode');
                    });

                    document.querySelectorAll('#fullpage .section .textbox').forEach(el => el.classList.add('bg-green-mode'));
                    // Maximum contrast mode (21:1 ratio)
                    break;
            }

            safeStorageSet('contrastMode', modeNumber);
        } else {
            safeStorageSet('contrastMode', null);
        }
    }



    if (savedContrastMode) {
        applyContrastMode(savedContrastMode);
    } else {
        document.querySelectorAll('.mobile-section img, #page-content img').forEach(img => {
            img.style.filter = 'none';
        });
    }

    // Handle contrast mode buttons
    contrastModes.forEach(mode => {
        mode.addEventListener('click', function () {
            contrastModes.forEach(m => m.classList.remove('active'));

            if (this.classList.contains('refresh-mode')) {
                // Reset to default
                applyContrastMode(null);
            } else {
                // Apply selected mode
                this.classList.add('active');
                const modeNumber = this.dataset.mode;

                applyContrastMode(modeNumber);
            }
        });

        mode.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                mode.click();
            }
        });
    });
}