import React from 'react';

interface NeutralPlaceholderProps {
  className?: string;
  aspectRatioClass?: string;
  title?: string;
  subtitle?: string;
}

export const NeutralPlaceholder: React.FC<NeutralPlaceholderProps> = ({
  className = '',
  aspectRatioClass = 'aspect-[4/3]',
  title = 'Aura Home Health',
  subtitle = 'Clearwater, Florida',
}) => {
  return (
    <div
      className={`w-full ${aspectRatioClass} bg-[#F4F1EA] border border-stone-300/70 rounded-2xl flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
    >
      <div className="space-y-2 max-w-xs">
        <div className="w-10 h-10 mx-auto rounded-full bg-white/80 border border-stone-300/80 flex items-center justify-center text-[#0A3D44]">
          <svg
            className="w-5 h-5 text-[#0A3D44]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
        <p className="font-semibold text-sm text-[#0A3D44] font-sans tracking-wide">
          {title}
        </p>
        <p className="text-xs text-slate-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
