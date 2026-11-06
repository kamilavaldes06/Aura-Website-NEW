import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
}) => {
  const { language, t } = useLanguage();

  return (
    <div className="w-full bg-[#FAF8F5] pt-7 sm:pt-8 lg:pt-9 pb-2 sm:pb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-4xl lg:max-w-5xl">
          {/* Breadcrumb Navigation & Subtle Bilingual Agency Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500">
              <Link to="/" className="hover:text-[#0A3D44] transition-colors">
                {t.nav.home}
              </Link>
              <span className="text-stone-300">/</span>
              <span className="text-slate-700 font-medium truncate">{title}</span>
            </nav>

            {/* Clear, Tasteful Bilingual Agency Badge */}
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0A3D44] bg-[#0A3D44]/5 px-2.5 py-0.5 rounded-full border border-[#0A3D44]/10">
              <Globe className="w-3 h-3 text-[#0A3D44]" />
              <span>
                {language === 'en' ? 'Bilingual Agency · Se Habla Español' : 'Agencia Bilingüe · English & Spanish'}
              </span>
            </div>
          </div>

          {/* Natural Title Case Deep Teal Heading (Angelica-inspired balanced composition) */}
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A3D44] font-sans leading-tight">
            {title}
          </h1>

          {/* Natural, Informative Supporting Description if provided */}
          {subtitle && subtitle.trim() !== '' && (
            <p className="mt-2 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
