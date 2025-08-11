'use client';

import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour les media queries côté client
 * Selon les règles O'Litchi: useMediaQuery pour swap de composants desktop/mobile
 * SSR-safe avec hydration correcte
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Utiliser la nouvelle API si disponible, sinon fallback
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
    } else {
      // Fallback pour les anciens navigateurs
      mediaQuery.addListener(handler);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, [query]);

  // Retourner false pendant l'hydration pour éviter les mismatches
  if (!mounted) {
    return false;
  }

  return matches;
}

/**
 * Hook spécialisé pour détecter les appareils mobiles
 * Selon les règles: breakpoint < 768px = mobile
 */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 767px)');
}

/**
 * Hook spécialisé pour détecter les appareils desktop
 * Selon les règles: breakpoint >= 1024px = desktop
 */
export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1024px)');
}

/**
 * Hook spécialisé pour détecter les tablettes
 * Selon les règles: 768px <= breakpoint < 1024px = tablet
 */
export function useIsTablet(): boolean {
  return useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
}

/**
 * Hook pour détecter les appareils tactiles
 * Utile pour adapter l'UX selon le type d'interaction
 */
export function useIsTouchDevice(): boolean {
  return useMediaQuery('(hover: none) and (pointer: coarse)');
}

/**
 * Hook pour obtenir la variante d'appareil actuelle
 * Retourne 'mobile', 'tablet' ou 'desktop'
 */
export function useDeviceVariant(): 'mobile' | 'tablet' | 'desktop' {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  
  if (isMobile) return 'mobile';
  if (isTablet) return 'tablet';
  return 'desktop';
}