import type { Variants, Easing } from 'framer-motion';

// ──────────────────────────────────────────────
// Variants pour la page /localisation
// ──────────────────────────────────────────────

const premiumEase: Easing = [0.25, 0.46, 0.45, 0.94];

// ── Stagger containers ──

/** Stagger pour les headers (titre → paragraphe) */
export const headerStagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

/** Stagger pour les grilles (cards, schedule rows) */
export const gridStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

// ── Éléments d'entrée ──

/** Fade + montée standard */
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: premiumEase },
    },
};

/** Reveal pour chaque card / row (avec scale) */
export const cardReveal: Variants = {
    hidden: { opacity: 0, y: 22, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: premiumEase },
    },
};

/** Scale reveal pour les blocs centrés */
export const scaleReveal: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: premiumEase },
    },
};

// ── Utilitaires ──

/** Props standard pour le scroll-reveal */
export const scrollRevealConfig = {
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: { once: true, amount: 0.3 },
};
