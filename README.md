# FigSetup

A private Figma plugin that scaffolds a new design file in one click — pages, color variables, and text styles, all from a configurable preset.

---

## Why

Every new Figma project starts the same way: create the pages, set up the color palette, define the type scale. It's the same 20 minutes of repetitive work every time.

FigSetup runs inside a blank Figma file and does all of that instantly. Pick a preset, click **Apply Preset**, and your file is ready to design in.

Because it's a private plugin (not published to the Figma Community), you own the presets entirely — the pages, colors, and type styles are whatever you define in the config file.

---

## What it sets up

Each preset configures three things:

- **Pages** — creates your standard page structure and removes the default "Page 1"
- **Color variables** — builds a local variable collection with your full palette (primitives, semantic tokens, etc.)
- **Text styles** — generates named text styles for your type scale with the correct font, size, and line height

---

## Presets included

### Web UI Kit
For web design systems and UI component libraries.

- Pages: `Cover`, `Components`, `Typography`, `Colors`, `Icons`, `Templates`
- Colors: Indigo primary scale (50–900), Neutral scale (50–900), Status colors, Base
- Type styles: Display (2XL–SM), Heading (H1–H4), Body (LG/MD/SM × Regular/Medium), Label, Caption — using **Inter**

### iOS App
For native iOS app design following Apple's Human Interface Guidelines.

- Pages: `Cover`, `Screens`, `Components`, `Typography`, `Colors`, `Icons`, `Prototypes`
- Colors: iOS system palette (Red, Orange, Yellow, Green, Teal, Blue, Purple, Pink), Background, Label, Separator
- Type styles: Full HIG dynamic type scale (Large Title → Caption 2) — using **SF Pro**

---

## Getting started

### 1. Clone and install

```bash
git clone git@github.com:iosipratama/FigSetup.git
cd FigSetup
npm install
npm run build
```

### 2. Load the plugin in Figma

1. Open the Figma desktop app
2. Go to **Plugins → Development → Import plugin from manifest…**
3. Select the `manifest.json` file from this repo
4. FigSetup will appear under **Plugins → Development**

> The plugin runs locally from your machine. No Figma account publishing needed.

### 3. Use it

1. Open a new, blank Figma file
2. Run **Plugins → Development → FigSetup**
3. Choose a preset
4. Click **Apply Preset**

---

## Customizing presets

All presets live in [`src/config.ts`](src/config.ts). Edit that file to change pages, colors, or type styles — or add entirely new presets.

```ts
// src/config.ts
export const presets: Preset[] = [
  {
    id: 'my-preset',
    label: 'My Project',
    description: 'Description shown in the plugin UI.',
    pages: ['Cover', 'Components', 'Screens'],
    colorCollectionName: 'Colors',
    colors: [
      { name: 'Brand/Primary', value: '#FF5733' },
      { name: 'Neutral/100',   value: '#F5F5F5' },
    ],
    typeStyles: [
      { name: 'Heading/H1', fontFamily: 'Inter', fontStyle: 'Bold', fontSize: 32, lineHeight: 40 },
      { name: 'Body/MD',    fontFamily: 'Inter', fontStyle: 'Regular', fontSize: 16, lineHeight: 24 },
    ],
  },
];
```

After editing, rebuild:

```bash
npm run build
```

Then reload the plugin in Figma (close and reopen it).

### Color token naming

Use `/` in a color name to create groups in Figma's variable panel:

```ts
{ name: 'Brand/Primary', value: '#6366F1' }   // → Brand group > Primary
{ name: 'Neutral/500',   value: '#6B7280' }   // → Neutral group > 500
```

### Font styles

The `fontStyle` value must match exactly what Figma lists for that font family (e.g. `'Regular'`, `'Medium'`, `'Bold'`, `'Semibold'`, `'Semi Bold'`). If a style isn't available, that text style is silently skipped.

---

## Development

```bash
npm run watch   # rebuild on every save
```

Point Figma at this repo's `manifest.json` once — it picks up `dist/code.js` automatically on each rebuild (close and reopen the plugin to reload).

---

## Stack

- TypeScript + [esbuild](https://esbuild.github.io/) for bundling
- [Figma Plugin API](https://www.figma.com/plugin-docs/) — Variables API for color tokens, TextStyle API for type scale
