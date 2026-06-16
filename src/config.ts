import { webUiKit } from './presets/web-ui-kit';
import { iosApp } from './presets/ios-app';
import type { Preset } from './types';

// Add new presets here — each one lives in its own file under src/presets/
export const presets: Preset[] = [
  webUiKit,
  iosApp,
];
