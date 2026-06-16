import type { Preset } from '../types';

export const webUiKit: Preset = {
  id: 'web-ui-kit',
  label: 'Web UI Kit',
  description: 'Standard setup for web design systems and UI component libraries.',
  pages: ['Design', 'Style Guide', 'Components', 'File Settings'],
  colorCollectionName: 'Colors',
  colors: [
    // Text
    { name: 'color/text/primary',    value: '#171717', description: 'Main body and heading text' },
    { name: 'color/text/secondary',  value: '#404040', description: 'Supporting text, labels' },
    { name: 'color/text/tertiary',   value: '#787878', description: 'Captions, hints, metadata' },
    { name: 'color/text/quaternary', value: '#BDBDBD', description: 'Decorative, very low emphasis' },
    { name: 'color/text/muted',      value: '#737373', description: 'Disabled text' },
    { name: 'color/text/inverse',    value: '#FFFFFF', description: 'Text on dark backgrounds' },
    { name: 'color/text/link',       value: '#2563EB', description: 'Hyperlinks' },
    { name: 'color/text/link-hover', value: '#1D4ED8', description: 'Hyperlink hover state' },
    { name: 'color/text/on-brand',   value: '#FFFFFF', description: 'Text on brand-colored surfaces' },
    // Background
    { name: 'color/bg/page',     value: '#FAFAF9', description: 'Main page background' },
    { name: 'color/bg/surface',  value: '#FFFFFF', description: 'Cards, panels, modals' },
    { name: 'color/bg/subtle',   value: '#F2F2F2', description: 'Subtle section backgrounds' },
    { name: 'color/bg/elevated', value: '#FAFAF9', description: 'Dropdowns, tooltips, popovers' },
    { name: 'color/bg/inverse',  value: '#171717', description: 'Dark section backgrounds, footers' },
    // Icon
    { name: 'color/icon/default', value: '#404040', description: 'Default icon color' },
    { name: 'color/icon/subtle',  value: '#787878', description: 'Low-emphasis icons' },
    { name: 'color/icon/inverse', value: '#FFFFFF', description: 'Icons on dark backgrounds' },
    // Border
    { name: 'color/border/default', value: '#E5E5E5', description: 'Default dividers and outlines' },
    { name: 'color/border/subtle',  value: '#F5F5F5', description: 'Low-contrast dividers' },
    { name: 'color/border/strong',  value: '#D4D4D4', description: 'High-emphasis borders' },
    { name: 'color/border/focus',   value: '#2563EB', description: 'Focus ring' },
    // Brand
    { name: 'color/brand/primary',        value: '#2563EB', description: 'Primary brand color, CTAs' },
    { name: 'color/brand/primary-hover',  value: '#1D4ED8', description: 'CTA hover state' },
    { name: 'color/brand/primary-active', value: '#1E40AF', description: 'CTA pressed state' },
    { name: 'color/brand/primary-subtle', value: '#EFF6FF', description: 'Brand-tinted backgrounds' },
    { name: 'color/brand/foreground',     value: '#FFFFFF', description: 'Text and icons on brand buttons' },
    // State
    { name: 'color/state/hover',    value: '#F5F5F5', description: 'Generic interactive hover background' },
    { name: 'color/state/active',   value: '#E5E5E5', description: 'Generic interactive active background' },
    { name: 'color/state/disabled', value: '#D4D4D4', description: 'Disabled element background' },
    { name: 'color/state/focus',    value: '#2563EB', description: 'Focus indicator color' },
    // Status
    { name: 'color/status/success',        value: '#16A34A', description: 'Success text and icons' },
    { name: 'color/status/success-subtle', value: '#DCFCE7', description: 'Success badge background' },
    { name: 'color/status/warning',        value: '#D97706', description: 'Warning text and icons' },
    { name: 'color/status/warning-subtle', value: '#FEF3C7', description: 'Warning badge background' },
    { name: 'color/status/error',          value: '#DC2626', description: 'Error text and icons' },
    { name: 'color/status/error-subtle',   value: '#FEE2E2', description: 'Error badge background' },
    { name: 'color/status/info',           value: '#2563EB', description: 'Info text and icons' },
    { name: 'color/status/info-subtle',    value: '#EFF6FF', description: 'Info badge background' },
    // Input
    { name: 'color/input/bg',           value: '#050505', opacity: 0.08, description: 'Input field background' },
    { name: 'color/input/border',       value: '#D4D4D4', description: 'Input border' },
    { name: 'color/input/border-focus', value: '#2563EB', description: 'Input border when focused' },
    { name: 'color/input/placeholder',  value: '#A3A3A3', description: 'Placeholder text' },
    { name: 'color/input/text',         value: '#171717', description: 'Input text color' },
    // Overlay
    { name: 'color/overlay/scrim', value: '#000000', opacity: 0.14, description: 'Modal and drawer backdrop' },
    // Base
    { name: 'color/base/white', value: '#FFFFFF', description: 'Pure white' },
    { name: 'color/base/black', value: '#000000', description: 'Pure black' },
  ],
  typeStyles: [
    // Display — Inter Display Regular
    { name: 'Display/2XL', fontFamily: 'Inter Display', fontStyle: 'Regular', fontSize: 72, lineHeight: 90 },
    { name: 'Display/XL',  fontFamily: 'Inter Display', fontStyle: 'Regular', fontSize: 60, lineHeight: 72 },
    { name: 'Display/LG',  fontFamily: 'Inter Display', fontStyle: 'Regular', fontSize: 48, lineHeight: 60 },
    { name: 'Display/MD',  fontFamily: 'Inter Display', fontStyle: 'Regular', fontSize: 36, lineHeight: 44 },
    { name: 'Display/SM',  fontFamily: 'Inter Display', fontStyle: 'Regular', fontSize: 30, lineHeight: 38 },
    // Heading — Inter Bold
    { name: 'Heading/H1', fontFamily: 'Inter', fontStyle: 'Bold', fontSize: 30, lineHeight: 38 },
    { name: 'Heading/H2', fontFamily: 'Inter', fontStyle: 'Bold', fontSize: 24, lineHeight: 32 },
    { name: 'Heading/H3', fontFamily: 'Inter', fontStyle: 'Bold', fontSize: 20, lineHeight: 28 },
    { name: 'Heading/H4', fontFamily: 'Inter', fontStyle: 'Bold', fontSize: 16, lineHeight: 24 },
    // Body
    { name: 'Body/LG Regular', fontFamily: 'Inter', fontStyle: 'Regular', fontSize: 18, lineHeight: 28 },
    { name: 'Body/LG Medium',  fontFamily: 'Inter', fontStyle: 'Medium',  fontSize: 18, lineHeight: 28 },
    { name: 'Body/MD Regular', fontFamily: 'Inter', fontStyle: 'Regular', fontSize: 16, lineHeight: 24 },
    { name: 'Body/MD Medium',  fontFamily: 'Inter', fontStyle: 'Medium',  fontSize: 16, lineHeight: 24 },
    { name: 'Body/SM Regular', fontFamily: 'Inter', fontStyle: 'Regular', fontSize: 14, lineHeight: 20 },
    { name: 'Body/SM Medium',  fontFamily: 'Inter', fontStyle: 'Medium',  fontSize: 14, lineHeight: 20 },
    // Label
    { name: 'Label/LG', fontFamily: 'Inter', fontStyle: 'Medium', fontSize: 14, lineHeight: 20 },
    { name: 'Label/MD', fontFamily: 'Inter', fontStyle: 'Medium', fontSize: 12, lineHeight: 16 },
    { name: 'Label/SM', fontFamily: 'Inter', fontStyle: 'Medium', fontSize: 11, lineHeight: 16 },
    // Overline
    { name: 'Overline/Default', fontFamily: 'Inter', fontStyle: 'Medium', fontSize: 12, lineHeight: 16, letterSpacing: 8 },
    // Caption
    { name: 'Caption/Default', fontFamily: 'Inter', fontStyle: 'Regular', fontSize: 12, lineHeight: 16 },
  ],
};
