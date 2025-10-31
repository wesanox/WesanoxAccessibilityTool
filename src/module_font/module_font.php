<?php
/**
 * Settingspage - variable to get text and title
 * @var $settings
 *
 * Accessibility Module settings
 */

$tooltip_title = ($settings->text_font_title != '') ? $settings->text_font_title : 'Schriftgröße';
$tooltip_text = ($settings->text_font != '') ? $settings->text_font : 'Vergrößert die Schrifgröße der Website und kann beliebig angepasst werden.';
?>
<div class="accessibility-option" id="module-font-size" data-bs-custom-class="bg-tooltip" data-tooltip-title="<?php echo $tooltip_title; ?>" data-tooltip-text="<?php echo $tooltip_text; ?>" tabindex="0">
    <div class="option-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-fonts" viewBox="0 0 16 16">
            <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479z"/>
        </svg>
    </div>
    <span>Schriftgröße</span>
</div>
<div class="d-none accessibility-option-content py-3" id="module-font-size-content">
    <div class="d-flex align-items-center justify-content-between p-2 bg-white settings-item">
        <button class="btn-reset" aria-label="Reset Font Size">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
            </svg>
        </button>
        <div class="d-flex align-items-center gap-3">
            <button class="decrease">-</button>
            <span>0</span>
            <button class="increase">+</button>
        </div>
    </div>
</div>