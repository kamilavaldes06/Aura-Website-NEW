import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PhotoPlaceholderProps {
  label?: string;
  suggestedPhoto: string;
  aspectRatioClass?: string;
  className?: string;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  label,
  suggestedPhoto,
  aspectRatioClass = 'aspect-[4/3]',
  className = '',
}) => {
  const { language } = useLanguage();

  const defaultLabel = language === 'en' ? 'Image Placeholder' : 'Marcador de Fotografía';
  const displayLabel = label || defaultLabel;

  return (
    <div
      className={`relative w-full ${aspectRatioClass} rounded-2xl overflow-hidden bg-gradient-to-br from-stone-100 via-[#FAF8F5] to-stone-200/70 border border-stone-200/90 shadow-2xs flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
      aria-label={`Photo Placeholder: ${displayLabel}`}
    >
      {/* Subtle background texture effect */}
      <div className="w-10 h-10 rounded-full bg-white/80 border border-stone-200/80 shadow-2xs flex items-center justify-center text-[#0A3D44]/60 mb-3">
        <ImageIcon className="w-5 h-5" />
      </div>

      <span className="text-xs font-semibold uppercase tracking-wider text-[#0A3D44]/80 font-sans block">
        {displayLabel}
      </span>

      <p className="text-xs text-slate-500 max-w-xs mt-1.5 leading-relaxed">
        {suggestedPhoto}
      </p>

      <span className="inline-block mt-3 text-[11px] font-medium text-[#E85D04]/90 bg-orange-50/80 border border-orange-200/50 px-2.5 py-0.5 rounded-full">
        {language === 'en' ? 'Photo Placement Reserved' : 'Espacio Reservado para Fotografía'}
      </span>
    </div>
  );
};
