import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { PEDIATRIC_SERVICES } from '../data/agencyData';

export const PediatricBanner: React.FC<{ showCta?: boolean }> = ({ showCta = true }) => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-[#EFF8F8] border border-[#0A3D44]/15 rounded-2xl p-8 sm:p-10 relative overflow-hidden">
      <div className="max-w-4xl space-y-4">
        <span className="text-xs uppercase tracking-wider font-semibold text-[#E85D04] font-sans block">
          {t.common.pediatricBadge}
        </span>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A3D44] font-sans">
          {language === 'en' ? PEDIATRIC_SERVICES.titleEn : PEDIATRIC_SERVICES.titleEs}
        </h3>

        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          {language === 'en' ? PEDIATRIC_SERVICES.summaryEn : PEDIATRIC_SERVICES.summaryEs}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-slate-800">
          <span className="font-semibold text-[#0A3D44]">
            {language === 'en' ? 'Qualifying Plans:' : 'Planes Calificados:'}
          </span>
          <div className="flex flex-wrap gap-4">
            {PEDIATRIC_SERVICES.qualifyingPlans.map((plan) => (
              <span key={plan} className="inline-flex items-center gap-2 font-medium text-slate-800">
                <Check className="w-4 h-4 text-[#0D9488]" />
                <span>{plan}</span>
              </span>
            ))}
          </div>
        </div>

        {showCta && (
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A3D44] hover:bg-[#083339] text-white font-medium text-sm transition-colors"
            >
              <span>{language === 'en' ? 'Contact Us About Pediatric Care' : 'Consultar sobre Atención Pediátrica'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
