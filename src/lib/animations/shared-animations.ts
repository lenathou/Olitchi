import type { Variants, Easing } from 'framer-motion';

// ──────────────────────────────────────────────
// Variants réutilisables pour toutes les sections
// ──────────────────────────────────────────────

/** Ease premium partagé */
const premiumEase: Easing = [0.25, 0.46, 0.45, 0.94];

// ──────────────────────────────────────────────
// Stagger containers
// ──────────────────────────────────────────────

/** Stagger pour les headers (badge → titre → texte) */
export const sectionHeaderStagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

/** Stagger pour les grilles de cards */
export const gridStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

/** Stagger pour les listes (schedule, info items) */
export const listStagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15,
        },
    },
};

// ──────────────────────────────────────────────
// Éléments d'entrée (scroll reveal)
// ──────────────────────────────────────────────

/** Fade + montée standard */
export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 18,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: premiumEase },
    },
};

/** Fade + montée pour cards (avec scale) */
export const cardReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 22,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: premiumEase },
    },
};

/** Fade + slide depuis la gauche */
export const fadeLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: premiumEase },
    },
};

/** Fade + slide depuis la droite */
export const fadeRight: Variants = {
    hidden: {
        opacity: 0,
        x: 30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: premiumEase },
    },
};

/** Fade + scale pour les blocs citation / testimonial */
export const scaleReveal: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: premiumEase },
    },
};

// ──────────────────────────────────────────────
// Hover interactions
// ──────────────────────────────────────────────

/** Hover card premium : élévation + ombre */
export const cardHover = {
    y: -6,
    boxShadow: '0 16px 32px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.25, ease: 'easeOut' as const },
};

/** Hover image : scale subtil */
export const imageHover = {
    scale: 1.04,
    transition: { duration: 0.4, ease: 'easeOut' as const },
};

// ──────────────────────────────────────────────
// Utilitaires
// ──────────────────────────────────────────────

/** Props standard pour le scroll-reveal (whileInView, once, 30% viewport) */
export const scrollRevealConfig = {
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: { once: true, amount: 0.3 },
};
