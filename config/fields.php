<?php

return [
    [
        'name' => 'tab_accessibility',
        'type' => 'FieldsetTabOpen',
        'label' => 'Barrierefreiheit',
        'tags' => 'accessibility',
        'icon' => 'male',
    ],
    [
        'name' => 'tab_accessibility_END',
        'type' => 'FieldsetClose',
        'label' => 'Close an open fieldset',
        'tags' => 'accessibility',
        'icon' => 'male',
    ],
    [
        'name' => 'fieldset_accessibility_settings',
        'type' => 'FieldsetOpen',
        'label' => 'Tool Einstellungen',
        'tags' => 'accessibility',
        'icon' => 'male',
    ],
    [
        'name' => 'fieldset_accessibility_settings_END',
        'type' => 'FieldsetClose',
        'label' => 'Close an open fieldset',
        'tags' => 'accessibility',
        'icon' => 'male',
    ],
    [
        'name' => 'fieldset_accessibility_content',
        'type' => 'FieldsetOpen',
        'label' => 'Tooltip Content',
        'tags' => 'accessibility',
        'icon' => 'male',
    ],
    [
        'name' => 'fieldset_accessibility_content_END',
        'type' => 'FieldsetClose',
        'label' => 'Close an open fieldset',
        'tags' => 'accessibility',
        'icon' => 'male',
    ],
    [
        'name' => 'select_accessibility',
        'type' => 'Options',
        'label' => 'Module im Frontend entfernen',
        'description' => 'Wähle die Module aus, die im Frontend entfernt werden sollen.',
        'tags' => 'accessibility',
        'icon' => 'male',
        'width' => 50,
        'formatter' => null,
        'inputfieldClass' => 'InputfieldCheckboxes',
        'options' => '
                    1=not_dark|"Nachtmodus" nicht anzeigen
                    2=not_font|"Schriftgröße" nicht anzeigen
                    3=not_contrast|"Kontrastmodes" nicht anzeigen
                    4=not_read|"Lesemaske" nicht anzeigen
                    5=not_image|"Bilder ausblenden" nicht anzeigen
                    6=not_language|"Leichte Sprache" nicht anzeigen
                ',
    ],
    [
        'name' => 'text_accessibility_url',
        'type' => 'Text',
        'label' => 'URL für die Barrierefreiheitshinweise.',
        'placeholder' => '/barrierefreiheit/',
        'tags' => 'accessibility',
        'icon' => 'male',
        'width' => 50,
        'formatter' => 'TextformatterEntities'
    ],
    [
        'name' => 'text_contrast_title',
        'type' => 'Text',
        'label' => 'Tooltip "Kontrastmodus" Titel',
        'placeholder' => 'Kontrastmodus',
        'tags' => 'accessibility',
        'icon' => 'male',
        'width' => 50,
        'formatter' => 'TextformatterEntities'
    ],
    [
        'name' => 'text_contrast',
        'type' => 'Textarea',
        'label' => 'Tooltip "Kontrastmodus" Text',
        'tags' => 'accessibility',
        'icon' => 'male',
        'width' => 50,
        'formatter' => 'TextformatterEntities'
    ],
    [
        'name' => 'text_dark_title',
        'type' => 'Text',
        'label' => 'Tooltip "Darkmode" Titel',
        'placeholder' => 'Darkmode',
        'tags' => 'accessibility',
        'icon' => 'male',
        'width' => 50,
        'formatter' => 'TextformatterEntities'
    ],
    [
        'name' => 'text_dark',
        'type' => 'Textarea',
        'label' => 'Tooltip "Darkmode" Text',
        'tags' => 'accessibility',
        'icon' => 'male',
        'width' => 50,
        'formatter' => 'TextformatterEntities'
    ],
    [
        'name' => 'text_font_title',
        'type' => 'Text',
        'label' => 'Tooltip "Schriftgröße" Titel',
        'placeholder' => 'Schriftgröße',
        'tags' => 'accessibility',
        'icon' => 'male',
        'width' => 50,
        'formatter' => 'TextformatterEntities'
    ],
    [
        'name' => 'text_font',
        'type' => 'Textarea',
        'label' => 'Tooltip "Schriftgröße" Text',
        'tags' => 'accessibility',
        'icon' => 'male',
        'width' => 50,
        'formatter' => 'TextformatterEntities'
    ],
    [
        'name' => 'text_image_title',
        'type' => 'Text',
        'label' => 'Tooltip "Bild ausblenden" Titel',
        'placeholder' => 'Bild ausblenden',
        'tags' => 'accessibility',
        'icon' => 'male',
        'width' => 50,
        'formatter' => 'TextformatterEntities'
    ],
    [
        'name' => 'text_image',
        'type' => 'Textarea',
        'label' => 'Tooltip "Bild ausblenden" Text',
        'tags' => 'accessibility',
        'icon' => 'male',
        'width' => 50,
        'formatter' => 'TextformatterEntities'
    ],
    [
        'name' => 'text_language_title',
        'type' => 'Text',
        'label' => 'Tooltip "leichte Sprache" Titel',
        'placeholder' => 'leichte Sprache',
        'tags' => 'accessibility',
        'icon' => 'male',
        'width' => 50,
        'formatter' => 'TextformatterEntities'
    ],
    [
        'name' => 'text_language',
        'type' => 'Textarea',
        'label' => 'Tooltip "leichte Sprache" Text',
        'tags' => 'accessibility',
        'icon' => 'male',
        'width' => 50,
        'formatter' => 'TextformatterEntities'
    ],
    [
        'name' => 'text_read_title',
        'type' => 'Text',
        'label' => 'Tooltip "Lesemaske" Titel',
        'placeholder' => 'Lesemaske',
        'tags' => 'accessibility',
        'icon' => 'male',
        'width' => 50,
        'formatter' => 'TextformatterEntities'
    ],
    [
        'name' => 'text_read',
        'type' => 'Textarea',
        'label' => 'Tooltip "Lesemaske" Text',
        'tags' => 'accessibility',
        'icon' => 'male',
        'width' => 50,
        'formatter' => 'TextformatterEntities'
    ],
];