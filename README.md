# Wesanox Accessibility Tool

**Version**: 0.0.2  
**Author**: Frittenfritze / [wesanox.de](https://wesanox.de)

## Description

The **Wesanox Accessibility Tool** is a lightweight accessibility module for [ProcessWire CMS](https://processwire.com). It provides frontend features to improve accessibility and user experience, such as dark mode, font resizing, contrast adjustments, image hiding, and a link to an accessibility statement.

## Features

- Floating accessibility widget
- Dark mode toggle
- Font size adjustment
- Contrast mode overlay
- Option to hide images
- Easy Language support (planned)
- Link to accessibility information page
- Configurable frontend modules
- Automatic installation of language support modules

## Requirements

- ProcessWire >= 3.0.210
- PHP >= 8.0.0
- Optional: LanguageSupport modules

## Installation

1. Copy the module folder `WesanoxAccessibilityTool` to `/site/modules/`.
2. In ProcessWire Admin, go to **Modules > Refresh**, then install the module.
3. Optional: Configure which frontend modules should be hidden via the module settings.

## Configuration

Under **Modules > Wesanox Accessibility Tool**, you can configure:

- **Frontend Modules**  
  Choose which tools to **hide** from the frontend widget.

- **Accessibility Page URL**  
  Set a custom URL for your accessibility information page. Default is `/barrierefreiheit/`.

- **Easy Language**  
  (Planned) Add an alternative language like "Einfache Sprache" (German plain language).

- **Remove Language Modules**  
  Optionally remove language modules upon uninstalling this module.

## Template Integration

### 1. Styles and Scripts

In your site's main template file (e.g., `_head.php` or `_main.php`), add the following:

```php
echo $modules->WesanoxAccessibilityTool->renderStyles();
echo $modules->WesanoxAccessibilityTool->renderScripts();
```

### 2. HTML Markup Requirements

#### Wrap default content with:

```html
<main id="page-content">
    <div id="content">
        <!-- Default content -->
    </div>
</main>
```

#### Add contrast overlay **after** your site’s `<footer>`:

```html
<div id="contrast-mode-3" class="d-none" style="background: rgba(255, 147, 41, .8); z-index: 10000000; margin: 0; border-radius: 0; padding: 0; pointer-events: none; position: fixed; inset: -10%; width: auto; height: auto; mix-blend-mode: multiply;"></div>
```

This overlay is part of the "contrast mode" feature and enhances visual accessibility.

## Notes

- The module auto-installs required language support modules if not already present.
- Currently, the "Easy Language" feature is not yet functional.
- Frontend module files (PHP, SCSS, JS) are dynamically loaded from:  
  `/site/modules/WesanoxAccessibilityTool/src/module_<module>/`

## License

MIT License (or specify another if needed)
