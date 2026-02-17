import type { Variants, Easing } from 'framer-motion';

// ──────────────────────────────────────────────
// §1  Reveal Header (Badge + H2 + paragraphe)
//     Déclenchement au scroll, une seule fois
// ──────────────────────────────────────────────

/** Stagger container pour le header (badge → titre → texte) */
export const headerStagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1, // 100ms entre chaque enfant
            delayChildren: 0.05,
        },
    },
};

/** Fade-in + montée pour chaque élément du header */
export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 18,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad doux
        },
    },
};

// ──────────────────────────────────────────────
// §2  Reveal Grille Desktop (4 cards)
// ──────────────────────────────────────────────

/** Stagger container pour la grille desktop */
export const gridStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.09, // 90ms entre chaque card
            delayChildren: 0.1,
        },
    },
};

/** Animation d'entrée individuelle pour chaque card */
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
        transition: {
            duration: 0.55,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// ──────────────────────────────────────────────
// §3  Hover Desktop — Cards
// ──────────────────────────────────────────────

/** Hover card : élévation + ombre (pas de rotation/3D) */
export const cardHover = {
    y: -7,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
    transition: { duration: 0.25, ease: 'easeOut' as const },
};

// ──────────────────────────────────────────────
// §4  CTA "Explorer tout le Menu"
// ──────────────────────────────────────────────

/** Reveal CTA au scroll (même style que le header) */
export const ctaReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 16,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

/** Hover flèche : déplacement vers la droite */
export const arrowHover = {
    x: 5,
    transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 20,
    },
};

// ──────────────────────────────────────────────
// §5  Mobile — Emphase slide active
// ──────────────────────────────────────────────

/** Slide active vs inactive */
export const slideActive = {
    scale: 1,
    opacity: 1,
    transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 25,
    },
};

export const slideInactive = {
    scale: 0.94,
    opacity: 0.72,
    transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 25,
    },
};

/** Feedback drag : légère réduction au touch */
export const slideDragging = {
    scale: 0.98,
    transition: { duration: 0.15 },
};

// ──────────────────────────────────────────────
// §6  Mobile — Dots Navigation animés
// ──────────────────────────────────────────────

export const dotActive = {
    width: 32,
    opacity: 1,
    transition: {
        type: 'spring' as const,
        stiffness: 500,
        damping: 28,
    },
};

export const dotInactive = {
    width: 8,
    opacity: 0.4,
    transition: {
        type: 'spring' as const,
        stiffness: 500,
        damping: 28,
    },
};
