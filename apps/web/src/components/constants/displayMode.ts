export const DisplayMode = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;

export type DisplayModeType = (typeof DisplayMode)[keyof typeof DisplayMode];
