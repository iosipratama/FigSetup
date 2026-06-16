import type { Preset } from '../types';

export const webUiKit: Preset = {
  id: 'web-ui-kit',
  label: 'Web UI Kit',
  description: 'Standard setup for web design systems and UI component libraries.',
  pages: ['Design', 'Style Guide', 'Components', 'File Settings'],
  colorCollectionName: 'Colors',
  colors: [
    // Primary (Indigo)
    { name: 'Primary/50',  value: '#EEF2FF' },
    { name: 'Primary/100', value: '#E0E7FF' },
    { name: 'Primary/200', value: '#C7D2FE' },
    { name: 'Primary/300', value: '#A5B4FC' },
    { name: 'Primary/400', value: '#818CF8' },
    { name: 'Primary/500', value: '#6366F1' },
    { name: 'Primary/600', value: '#4F46E5' },
    { name: 'Primary/700', value: '#4338CA' },
    { name: 'Primary/800', value: '#3730A3' },
    { name: 'Primary/900', value: '#312E81' },
    // Neutral
    { name: 'Neutral/50',  value: '#F9FAFB' },
    { name: 'Neutral/100', value: '#F3F4F6' },
    { name: 'Neutral/200', value: '#E5E7EB' },
    { name: 'Neutral/300', value: '#D1D5DB' },
    { name: 'Neutral/400', value: '#9CA3AF' },
    { name: 'Neutral/500', value: '#6B7280' },
    { name: 'Neutral/600', value: '#4B5563' },
    { name: 'Neutral/700', value: '#374151' },
    { name: 'Neutral/800', value: '#1F2937' },
    { name: 'Neutral/900', value: '#111827' },
    // Status
    { name: 'Status/Success', value: '#10B981' },
    { name: 'Status/Warning', value: '#F59E0B' },
    { name: 'Status/Error',   value: '#EF4444' },
    { name: 'Status/Info',    value: '#3B82F6' },
    // Base
    { name: 'Base/White', value: '#FFFFFF' },
    { name: 'Base/Black', value: '#000000' },
  ],
  typeStyles: [
    // Display — Inter Regular
    { name: 'Display/2XL', fontFamily: 'Inter', fontStyle: 'Regular', fontSize: 72, lineHeight: 90 },
    { name: 'Display/XL',  fontFamily: 'Inter', fontStyle: 'Regular', fontSize: 60, lineHeight: 72 },
    { name: 'Display/LG',  fontFamily: 'Inter', fontStyle: 'Regular', fontSize: 48, lineHeight: 60 },
    { name: 'Display/MD',  fontFamily: 'Inter', fontStyle: 'Regular', fontSize: 36, lineHeight: 44 },
    { name: 'Display/SM',  fontFamily: 'Inter', fontStyle: 'Regular', fontSize: 30, lineHeight: 38 },
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
    // Caption
    { name: 'Caption', fontFamily: 'Inter', fontStyle: 'Regular', fontSize: 12, lineHeight: 16 },
  ],
};
