	// Stan
    let fontSizes = [100, 120, 140];
    let currentFontSizeIndex = 0;

    // Toggle widżetu
        document.getElementById('toggle-widget').addEventListener('click', () => {
        const widget = document.getElementById('accessibility-widget');
        widget.classList.toggle('hidden');
        });

    // Skokowa zmiana czcionki
    function cycleFontSize() {
        currentFontSizeIndex = (currentFontSizeIndex + 1) % fontSizes.length;
        const size = fontSizes[currentFontSizeIndex];
        document.body.setAttribute('data-font-size', size);
    }

    // Kontrast
    function toggleContrast() {
        document.body.classList.toggle('high-contrast');
    }

    // Podkreślanie linków
    function toggleUnderlineLinks() {
        document.body.classList.toggle('underline-links');
    }

    // Czcionka dyslektyczna
    function toggleDyslexicFont() {
        document.body.classList.toggle('dyslexic-font');
    }

    // Reset
    function resetAccessibility() {
        document.body.removeAttribute('data-font-size');
        document.body.classList.remove(
        'high-contrast',
        'underline-links',
        'dyslexic-font'
        );
        currentFontSizeIndex = 0;
    }