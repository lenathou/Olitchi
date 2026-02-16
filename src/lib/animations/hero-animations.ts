import type { Variants, Transition, Easing } from 'framer-motion';

// ──────────────────────────────────────────────
// §1  Animation d'entrée "ciné" — Orchestrateur
// ──────────────────────────────────────────────

/** Stagger container — Desktop : délai plus long, Mobile : plus court */
export const containerDesktop: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

export const containerMobile: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.05,
        },
    },
};

// ──────────────────────────────────────────────
// §1  Éléments d'entrée
// ──────────────────────────────────────────────

/** Décoration / background : fade + scale + blur dissipation */
export const decorFadeIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.98,
        filter: 'blur(10px)',
    },
    visible: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
        },
    },
};

/** Slide-up + fade pour titre, sous-titre, boutons */
export const fadeSlideUp: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

/** Variante mot par mot pour le titre Desktop (stagger interne) */
export const wordContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
        },
    },
};

export const wordReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 12,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

/** Pop-in premium pour les images de plats */
export const popIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.92,
        rotate: -2,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1], // spring-like overshoot
        },
    },
};

/** Bouton CTA — spring léger sans bounce excessif */
export const buttonSpring: Variants = {
    hidden: {
        opacity: 0,
        y: 16,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 24,
        },
    },
};

// ──────────────────────────────────────────────
// §2  Micro-animations continues (floating)
// ──────────────────────────────────────────────

/** Floating lent sur l'axe Y — à utiliser via `animate` et non via variants */
export const floatingTransition = (duration: number, delay: number = 0): Transition => ({
    y: {
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay,
    },
});

// ──────────────────────────────────────────────
// §3  Hover interactions (Desktop)
// ──────────────────────────────────────────────

/** Hover CTA : scale + glow */
export const buttonHover = {
    scale: 1.03,
    boxShadow: '0 0 20px rgba(255, 165, 0, 0.3)',
    transition: { duration: 0.2, ease: 'easeOut' as const },
};

export const buttonTap = {
    scale: 0.98,
};

/** Hover image plat : scale + léger tilt */
export const dishHover = {
    scale: 1.06,
    rotateX: 3,
    rotateY: -3,
    transition: { duration: 0.3, ease: 'easeOut' as const },
};
