import type { Variants, Easing } from 'framer-motion';

// ──────────────────────────────────────────────
// Variants pour la page /menu
// ──────────────────────────────────────────────

const premiumEase: Easing = [0.25, 0.46, 0.45, 0.94];

// ── Header stagger ──

/** Stagger pour le header (badge → h1 → paragraphe) */
export const headerStagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

/** Fade + montée standard pour les éléments du header */
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: premiumEase },
    },
};

// ── Category pill ──

/** Reveal de la pill catégorie (fade + scale) */
export const pillReveal: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: premiumEase },
    },
};

// ── Product grid ──

/** Stagger container pour la grille de produits */
export const gridStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.05,
        },
    },
};

/** Reveal pour chaque card produit */
export const cardReveal: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, ease: premiumEase },
    },
};
