import { presets } from './config';
import type { ColorToken, TypeStyle } from './types';

figma.showUI(__html__, { width: 380, height: 520, themeColors: true });

figma.ui.onmessage = async (msg: { type: string; presetId?: string }) => {
  if (msg.type === 'get-presets') {
    figma.ui.postMessage({
      type: 'presets',
      data: presets.map(({ id, label, description, pages }) => ({ id, label, description, pages })),
    });
    return;
  }

  if (msg.type === 'apply-preset' && msg.presetId) {
    const preset = presets.find(p => p.id === msg.presetId);
    if (!preset) {
      send('error', 'Preset not found.');
      return;
    }

    try {
      send('progress', 'Creating pages…');
      setupPages(preset.pages);

      send('progress', 'Building color variables…');
      setupColors(preset.colorCollectionName, preset.colors);

      send('progress', 'Creating text styles…');
      await setupTypeStyles(preset.typeStyles);

      send('done', 'All done! Your file is ready.');
    } catch (err) {
      send('error', String(err));
    }
    return;
  }

  if (msg.type === 'reset') {
    try {
      for (const c of figma.variables.getLocalVariableCollections()) c.remove();
      for (const s of figma.getLocalTextStyles()) s.remove();
      send('done', 'Styles and variables cleared.');
    } catch (err) {
      send('error', String(err));
    }
    return;
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};

function send(type: string, message: string) {
  figma.ui.postMessage({ type, message });
}

function setupPages(pageNames: string[]) {
  const originals = [...figma.root.children];
  const created = pageNames.map(name => {
    const page = figma.createPage();
    page.name = name;
    return page;
  });
  // Switch to a new page before removing originals — Figma won't allow
  // removing the currently active page.
  figma.currentPage = created[0];
  for (const page of originals) page.remove();
}

function setupColors(collectionName: string, tokens: ColorToken[]) {
  const collection = figma.variables.createVariableCollection(collectionName);
  const modeId = collection.defaultModeId;
  for (const token of tokens) {
    const variable = figma.variables.createVariable(token.name, collection, 'COLOR');
    variable.setValueForMode(modeId, hexToRgba(token.value, token.opacity ?? 1));
    if (token.description) variable.description = token.description;
  }
}

async function setupTypeStyles(styles: TypeStyle[]) {
  const fonts = [
    ...new Map(
      styles.map(s => [`${s.fontFamily}::${s.fontStyle}`, { family: s.fontFamily, style: s.fontStyle }])
    ).values(),
  ];

  await Promise.allSettled(fonts.map(f => figma.loadFontAsync(f)));

  for (const style of styles) {
    try {
      const textStyle = figma.createTextStyle();
      textStyle.name = style.name;
      textStyle.fontName = { family: style.fontFamily, style: style.fontStyle };
      textStyle.fontSize = style.fontSize;
      textStyle.lineHeight = { value: style.lineHeight, unit: 'PIXELS' };
      if (style.letterSpacing !== undefined) {
        textStyle.letterSpacing = { value: style.letterSpacing, unit: 'PERCENT' };
      }
      if (style.description) textStyle.description = style.description;
    } catch (_) {
      // Skip styles whose font variant isn't available
    }
  }
}

function hexToRgba(hex: string, a = 1): RGBA {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { r, g, b, a };
}
