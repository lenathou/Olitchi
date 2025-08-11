// Tokens UI réutilisables pour O'Litchi
// Selon les règles du projet: couleurs dérivées du camion, accent orange chaud + verts

export const colors = {
  // Couleurs principales dérivées du camion O'Litchi
  primary: {
    orange: '#FF6B35', // Orange chaud principal
    orangeLight: '#FF8A5B',
    orangeDark: '#E55A2B',
  },
  secondary: {
    green: '#2D5016', // Vert foncé
    greenLight: '#4A7C59',
    greenAccent: '#7FB069',
  },
  neutral: {
    white: '#FFFFFF',
    gray100: '#F5F5F5',
    gray200: '#E5E5E5',
    gray300: '#D4D4D4',
    gray400: '#A3A3A3',
    gray500: '#737373',
    gray600: '#525252',
    gray700: '#404040',
    gray800: '#262626',
    gray900: '#171717',
    black: '#000000',
  },
} as const;

// Breakpoints Tailwind + container queries
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Container queries pour responsive design
export const containerQueries = {
  mobile: '@container (max-width: 767px)',
  tablet: '@container (min-width: 768px) and (max-width: 1023px)',
  desktop: '@container (min-width: 1024px)',
} as const;

// Espacements cohérents
export const spacing = {
  xs: '0.25rem', // 4px
  sm: '0.5rem',  // 8px
  md: '1rem',    // 16px
  lg: '1.5rem',  // 24px
  xl: '2rem',    // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
} as const;

// Typographie - style 'Sign Language-like' pour logo/titres
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    display: ['Fredoka One', 'cursive'], // Pour le logo et titres spéciaux
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
} as const;

// Ombres et effets
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
} as const;

// Rayons de bordure
export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
} as const;