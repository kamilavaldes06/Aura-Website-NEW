import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  aspectRatioClass?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
  aspectRatioClass = 'aspect-[4/3]',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full ${aspectRatioClass} bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 rounded-2xl flex flex-col items-center justify-center p-8 text-center text-white relative overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-2 max-w-sm">
          <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-3">
            <svg
              className="w-6 h-6 text-orange-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-lg text-white font-sans">
            {fallbackTitle || 'Aura Home Health Care'}
          </h4>
          <p className="text-xs text-teal-200 leading-relaxed">
            {fallbackSubtitle || 'Professional in-home care across Pinellas & Pasco counties'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {!isLoaded && (
        <div className={`absolute inset-0 bg-slate-200 animate-pulse ${aspectRatioClass}`} />
      )}
      <img
        src={src}
        alt={alt || 'Aura Home Health'}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
