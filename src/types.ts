export interface ColorToken {
  name: string;
  value: string; // hex #RRGGBB
  opacity?: number; // 0–1, defaults to 1
  description?: string;
}

export interface TypeStyle {
  name: string;
  fontFamily: string;
  fontStyle: string; // 'Regular' | 'Medium' | 'SemiBold' | 'Bold' etc.
  fontSize: number;
  lineHeight: number; // px
  letterSpacing?: number; // percent
  description?: string;
}

export interface Preset {
  id: string;
  label: string;
  description: string;
  pages: string[];
  colorCollectionName: string;
  colors: ColorToken[];
  typeStyles: TypeStyle[];
}
