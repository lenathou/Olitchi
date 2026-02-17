'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { Menu, Phone, ChevronRight, X } from 'lucide-react';
import { mainNavigation } from '@/constants/navigation';
import { PremiumDivider } from '@/components/ui/PremiumDivider';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

// Icon mapping matching the design
const iconMap = {
    'menu': '/images/icons/menu.webp',
    'a-propos': '/images/icons/about.webp',
    'localisation': '/images/icons/local-2.webp',
    'contact': '/images/icons/mail.webp',
} as const;

// ── Animation variants ──────────────────────────

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.15,
        },
    },
};

const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const dividerVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
        opacity: 1,
        scaleX: 1,
        transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const navItemVariants: Variants = {
    hidden: { opacity: 0, x: 24 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const footerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.4, delay: 0.1 },
    },
};

export function MobileNavPremium() {
    const [isOpen, setIsOpen] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    // Build nav items array (Home + filtered mainNavigation)
    const allNavItems = [
        { id: 'accueil', href: '/', label: 'Accueil', iconPath: '/images/icons/home.webp' },
        ...mainNavigation
            .filter(item => item.id !== 'accueil')
            .map(item => ({
                ...item,
                iconPath: iconMap[item.id as keyof typeof iconMap] || '/images/icons/menu.webp',
            })),
    ];

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-foreground hover:bg-transparent">
                    <Menu className="h-8 w-8" />
                    <span className="sr-only">Ouvrir le menu</span>
                </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="w-full sm:w-[400px] p-0 border-l border-[#E5D5C5] overflow-y-auto [&>button]:hidden"
            >
                <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
                {/* Background Image */}
                <div className="absolute inset-0 bg-[url('/images/hero-bg-test.webp')] bg-cover bg-center pointer-events-none" />

                {/* Decorative Top/Bottom Borders */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 opacity-50 z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 opacity-50 z-10" />

                {/* ── Animated content container ── */}
                <motion.div
                    className="relative h-full flex flex-col px-6 py-4 z-10"
                    variants={shouldReduceMotion ? undefined : containerVariants}
                    initial={shouldReduceMotion ? undefined : 'hidden'}
                    animate={shouldReduceMotion ? undefined : 'visible'}
                >

                    {/* Header with Logo Centered & Close Button */}
                    <motion.div
                        className="relative flex items-center justify-center mb-4 shrink-0"
                        variants={shouldReduceMotion ? undefined : logoVariants}
                    >
                        <div className="relative w-48 h-20">
                            <Image
                                src="/olitchy-logo.svg"
                                alt="O'Litchy"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <SheetClose asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-md w-10 h-10"
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </SheetClose>
                    </motion.div>

                    {/* Decorative Divider */}
                    <motion.div
                        className="mb-4 shrink-0"
                        variants={shouldReduceMotion ? undefined : dividerVariants}
                    >
                        <PremiumDivider />
                    </motion.div>

                    {/* ── Main Navigation ── */}
                    <nav className="flex-1 flex flex-col justify-center space-y-1 min-h-0 mb-4 overflow-y-auto">
                        {allNavItems.map((item) => (
                            <motion.div
                                key={item.href}
                                variants={shouldReduceMotion ? undefined : navItemVariants}
                                whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between p-2 rounded-xl hover:bg-orange-500/5 transition-colors group shrink-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 flex items-center justify-center">
                                            <div className="relative w-8 h-8">
                                                <Image
                                                    src={item.iconPath}
                                                    alt=""
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                        <span className="font-serif text-lg text-foreground font-medium">{item.label}</span>
                                    </div>
                                    <ChevronRight className="h-5 w-5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* ── CTAs Section ── */}
                    <div className="space-y-3 shrink-0">
                        {/* Commandes CTA */}
                        <motion.div
                            variants={shouldReduceMotion ? undefined : ctaVariants}
                            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        >
                            <Button
                                asChild
                                className="w-full bg-gradient-premium-orange hover:shadow-lg text-white font-bold text-lg h-12 rounded-full shadow-md transition-all group"
                            >
                                <Link href="/menu" onClick={() => setIsOpen(false)}>
                                    <Phone className="mr-2 h-5 w-5 fill-white" />
                                    Commandes
                                    <ChevronRight className="ml-auto h-5 w-5 opacity-80" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Contact Info Box */}
                        <motion.div
                            className="bg-white/50 backdrop-blur-sm border border-orange-200 rounded-3xl p-3 flex items-center gap-4 shadow-sm"
                            variants={shouldReduceMotion ? undefined : ctaVariants}
                        >
                            <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-foreground">+33 6 12 34 56 78</span>
                                <span className="text-sm text-muted-foreground">contact@olitchy.fr</span>
                            </div>
                        </motion.div>

                        {/* Contact Form CTA */}
                        <motion.div
                            variants={shouldReduceMotion ? undefined : ctaVariants}
                            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        >
                            <Button
                                asChild
                                className="w-full bg-orange-500 hover:bg-orange-600/90 text-white font-medium text-base h-10 rounded-full shadow-sm transition-all"
                            >
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    Formulaire de contact
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* ── Footer ── */}
                    <motion.div
                        className="mt-4 text-center space-y-1 shrink-0"
                        variants={shouldReduceMotion ? undefined : footerVariants}
                    >
                        <div className="flex justify-center gap-4 opacity-40">
                            <Image src="/images/icons/palm.webp" alt="" width={32} height={32} className="w-8 grayscale" />
                        </div>
                        <p className="text-[10px] text-muted-foreground">
                            © 2026 O&apos;Litchy. Tous droits réservés.
                        </p>
                        <div className="flex justify-center gap-2 text-[10px] text-muted-foreground/80">
                            <Link href="/privacy" className="hover:underline">Politique de confidentialité</Link>
                            <span>•</span>
                            <Link href="/legal" className="hover:underline">Mentions légales</Link>
                        </div>
                    </motion.div>

                </motion.div>
            </SheetContent>
        </Sheet>
    );
}
