export const FuTheme =  {
  Light: 'light',
  Dark: 'dark'
} as const;

export type FuTheme = typeof FuTheme[keyof typeof FuTheme];