'use client';

interface PremiumDividerProps {
    className?: string;
}

export function PremiumDivider({ className = '' }: PremiumDividerProps) {
    return (
        <div className={`flex items-center justify-center gap-3 w-full opacity-80 ${className}`}>
            {/* Left side tapered dashes */}
            <svg width="120" height="6" viewBox="0 0 120 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                <rect x="0" y="2" width="20" height="2" rx="1" fill="#F97316" fillOpacity="0.8" />
                <rect x="25" y="2" width="15" height="2" rx="1" fill="#F97316" fillOpacity="0.7" />
                <rect x="45" y="2" width="10" height="2" rx="1" fill="#F97316" fillOpacity="0.6" />
                <rect x="60" y="2" width="8" height="2" rx="1" fill="#F97316" fillOpacity="0.5" />
                <rect x="73" y="2" width="6" height="2" rx="1" fill="#F97316" fillOpacity="0.4" />
                <rect x="85" y="2" width="4" height="2" rx="1" fill="#F97316" fillOpacity="0.3" />
                <rect x="95" y="2" width="2" height="2" rx="1" fill="#F97316" fillOpacity="0.2" />
            </svg>

            {/* Small Circle Left */}
            <div className="w-1.5 h-1.5 rounded-full border border-orange-400/60" />

            {/* Center Diamond */}
            <div className="w-3 h-3 bg-gradient-to-br from-orange-300 to-orange-500 rotate-45 shadow-sm" />

            {/* Small Circle Right */}
            <div className="w-1.5 h-1.5 rounded-full border border-orange-400/60" />

            {/* Right side tapered dashes */}
            <svg width="120" height="6" viewBox="0 0 120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="2" width="20" height="2" rx="1" fill="#F97316" fillOpacity="0.8" />
                <rect x="25" y="2" width="15" height="2" rx="1" fill="#F97316" fillOpacity="0.7" />
                <rect x="45" y="2" width="10" height="2" rx="1" fill="#F97316" fillOpacity="0.6" />
                <rect x="60" y="2" width="8" height="2" rx="1" fill="#F97316" fillOpacity="0.5" />
                <rect x="73" y="2" width="6" height="2" rx="1" fill="#F97316" fillOpacity="0.4" />
                <rect x="85" y="2" width="4" height="2" rx="1" fill="#F97316" fillOpacity="0.3" />
                <rect x="95" y="2" width="2" height="2" rx="1" fill="#F97316" fillOpacity="0.2" />
            </svg>
        </div>
    );
}
