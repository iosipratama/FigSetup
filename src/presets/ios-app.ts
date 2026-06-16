import type { Preset } from '../types';

export const iosApp: Preset = {
  id: 'ios-app',
  label: 'iOS App',
  description: 'Apple HIG-aligned setup for native iOS app design projects.',
  pages: ['Cover', 'Screens', 'Components', 'Typography', 'Colors', 'Icons', 'Prototypes'],
  colorCollectionName: 'Colors',
  colors: [
    // Brand
    { name: 'Brand/Primary',   value: '#007AFF' },
    { name: 'Brand/Secondary', value: '#5856D6' },
    // iOS System Colors
    { name: 'System/Red',    value: '#FF3B30' },
    { name: 'System/Orange', value: '#FF9500' },
    { name: 'System/Yellow', value: '#FFCC00' },
    { name: 'System/Green',  value: '#34C759' },
    { name: 'System/Teal',   value: '#5AC8FA' },
    { name: 'System/Blue',   value: '#007AFF' },
    { name: 'System/Purple', value: '#AF52DE' },
    { name: 'System/Pink',   value: '#FF2D55' },
    // Background
    { name: 'Background/Primary',   value: '#FFFFFF' },
    { name: 'Background/Secondary', value: '#F2F2F7' },
    { name: 'Background/Grouped',   value: '#EFEFF4' },
    // Label
    { name: 'Label/Primary',    value: '#000000' },
    { name: 'Label/Secondary',  value: '#6C6C70' },
    { name: 'Label/Tertiary',   value: '#AEAEB2' },
    { name: 'Label/Quaternary', value: '#C7C7CC' },
    // Separator & Fill
    { name: 'Separator/Default', value: '#C6C6C8' },
    { name: 'Fill/Primary',      value: '#E5E5EA' },
  ],
  typeStyles: [
    // SF Pro — following Apple HIG dynamic type scale
    { name: 'iOS/Large Title', fontFamily: 'SF Pro Display', fontStyle: 'Regular',  fontSize: 34, lineHeight: 41 },
    { name: 'iOS/Title 1',     fontFamily: 'SF Pro Display', fontStyle: 'Regular',  fontSize: 28, lineHeight: 34 },
    { name: 'iOS/Title 2',     fontFamily: 'SF Pro Display', fontStyle: 'Regular',  fontSize: 22, lineHeight: 28 },
    { name: 'iOS/Title 3',     fontFamily: 'SF Pro Display', fontStyle: 'Regular',  fontSize: 20, lineHeight: 25 },
    { name: 'iOS/Headline',    fontFamily: 'SF Pro Text',    fontStyle: 'Semibold', fontSize: 17, lineHeight: 22 },
    { name: 'iOS/Body',        fontFamily: 'SF Pro Text',    fontStyle: 'Regular',  fontSize: 17, lineHeight: 22 },
    { name: 'iOS/Callout',     fontFamily: 'SF Pro Text',    fontStyle: 'Regular',  fontSize: 16, lineHeight: 21 },
    { name: 'iOS/Subheadline', fontFamily: 'SF Pro Text',    fontStyle: 'Regular',  fontSize: 15, lineHeight: 20 },
    { name: 'iOS/Footnote',    fontFamily: 'SF Pro Text',    fontStyle: 'Regular',  fontSize: 13, lineHeight: 18 },
    { name: 'iOS/Caption 1',   fontFamily: 'SF Pro Text',    fontStyle: 'Regular',  fontSize: 12, lineHeight: 16 },
    { name: 'iOS/Caption 2',   fontFamily: 'SF Pro Text',    fontStyle: 'Regular',  fontSize: 11, lineHeight: 13 },
  ],
};
