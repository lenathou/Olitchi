/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import Link from 'next/link';

import { mainNavigation, type NavItem } from '@/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

/**
 * Navigation responsive selon les règles O'Litchi
 * - Base: CSS responsive via container queries
 * - Swap de composants: useMediaQuery côté client
 * - Préfixe Mobile pour variantes dédiées
 */

// Composant de navigation mobile dédié
function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <nav className="flex flex-col space-y-4 mt-8">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

// Composant de navigation desktop
function DesktopNav({ items }: { items: readonly NavItem[] }) {
  return (
    <nav className="hidden md:flex md:items-center md:space-x-6">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

// Composant principal avec gestion responsive
export function ResponsiveNav() {
  
  // Approche hybride selon les règles:
  // 1. CSS responsive par défaut (hidden/block classes)
  // 2. Hook media query pour logique conditionnelle si nécessaire
  
  return (
    <div className="flex items-center justify-between w-full">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold text-xl text-primary-orange">
          O'Litchi
        </span>
      </Link>

      {/* Navigation responsive */}
      <div className="flex items-center space-x-4">
        {/* Navigation desktop - masquée sur mobile via CSS */}
        <DesktopNav items={mainNavigation} />
        
        {/* Navigation mobile - masquée sur desktop via CSS */}
        <MobileNav items={mainNavigation} />
        
        {/* Bouton CTA toujours visible */}
        <Button 
          asChild 
          className="bg-primary-orange hover:bg-primary-orangeDark"
        >
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
}

// Export des sous-composants pour réutilisation
export { MobileNav, DesktopNav };