import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionBadgeProps {
    icon: LucideIcon;
    label: string;
    className?: string;
}

export function SectionBadge({ icon: Icon, label, className }: SectionBadgeProps) {
    return (
        <div className={cn(
            "inline-flex items-center bg-gradient-premium-orange rounded-full p-[2px] pr-6 shadow-md mb-6 hover:shadow-lg transition-all transform hover:scale-105",
            className
        )}>
            <div className="bg-white rounded-full p-2">
                <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold tracking-wide text-white ml-3 text-base">
                {label}
            </span>
        </div>
    );
}
