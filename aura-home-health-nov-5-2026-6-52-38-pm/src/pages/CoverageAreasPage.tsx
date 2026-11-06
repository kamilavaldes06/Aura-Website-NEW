import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { useLanguage } from '../context/LanguageContext';
import { COVERAGE_AREAS, AGENCY_CONTACT } from '../data/agencyData';
import { MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CoverageAreasPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-0">
      {/* Visiting Angels Reference Style Curved Header */}
      <PageHeader
        title={t.coverage.pageTitle}
        subtitle={t.coverage.pageSubtitle}
      />

      {/* Main Coverage Territory & County Details (Flows naturally below header) */}
      <section className="bg-[#FAF8F5] pt-4 sm:pt-6 pb-14 lg:pb-16 border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 lg:space-y-12">
          {/* Overview Intro */}
          <div className="max-w-4xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E85D04] font-sans">
              {language === 'en' ? 'Florida Service Territory' : 'Territorio de Cobertura'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3D44] font-sans">
              {language === 'en'
                ? 'Serving Communities Throughout Pinellas & Pasco Counties'
                : 'Atención a Comunidades en los Condados de Pinellas y Pasco'}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {t.coverage.introText}
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {language === 'en'
                ? 'From our headquarters in Clearwater, Florida, Aura Home Health coordinates licensed caregivers and clinicians directly to private residences, assisted living communities, and family homes. We partner with patients, families, and local physicians across both counties to ensure seamless, personalized care.'
                : 'Desde nuestra sede en Clearwater, Florida, Aura Home Health coordina cuidadores y profesionales clínicos directamente a residencias particulares, comunidades de vida asistida y hogares familiares. Colaboramos estrechamente con pacientes, familias y médicos locales para asegurar una atención continua y personalizada.'}
            </p>
          </div>

          {/* Counties Sections */}
          <div className="space-y-8">
            {COVERAGE_AREAS.map((countyArea) => (
              <div
                key={countyArea.countyEn}
                className="bg-white rounded-2xl p-7 sm:p-9 border border-[#0A3D44]/10 shadow-2xs space-y-6"
              >
                <div className="space-y-1.5 pb-4 border-b border-stone-200/80">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#E85D04]" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0A3D44] font-sans">
                      {language === 'en' ? countyArea.countyEn : countyArea.countyEs}
                    </h3>
                  </div>
                  <p className="text-base text-slate-600">
                    {language === 'en' ? countyArea.descriptionEn : countyArea.descriptionEs}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold text-[#0A3D44] uppercase tracking-wider block mb-4">
                    {language === 'en' ? 'Cities & Municipalities Served:' : 'Ciudades y Municipios Atendidos:'}
                  </span>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {countyArea.cities.map((city) => (
                      <div
                        key={city}
                        className="p-3.5 rounded-lg bg-[#FAF8F5] border border-stone-200/80 text-slate-800 font-medium text-sm flex items-center gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04]" />
                        <span>{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Helpful Closing Statement */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-bold text-[#0A3D44] text-base block font-sans">
                {language === 'en' ? 'Confirm Service in Your Community' : 'Confirme el Servicio en su Comunidad'}
              </span>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.coverage.closingText}
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#0A3D44] hover:bg-[#083339] text-white font-medium text-sm transition-colors shrink-0 font-sans"
            >
              <span>{language === 'en' ? 'Contact Office' : 'Contactar Oficina'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Adjacent Community Inquiries (Rich Deep Teal) */}
      <section className="bg-[#0A3D44] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-orange-400 font-sans">
                {language === 'en' ? 'Regional Dispatch' : 'Despacho Regional'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
                {language === 'en' ? 'Adjacent Community Inquiries' : 'Consultas para Zonas Circundantes'}
              </h2>
              <p className="text-teal-100/90 text-base sm:text-lg leading-relaxed max-w-2xl">
                {t.coverage.dispatchNotice}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={AGENCY_CONTACT.phone.telLink}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#E85D04] hover:bg-[#D95000] text-white font-bold text-lg text-center transition-colors shadow-md tabular-nums font-sans"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>{AGENCY_CONTACT.phone.display}</span>
              </a>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-sm text-center transition-colors border border-white/20 font-sans"
              >
                <span>{language === 'en' ? 'Contact Our Team' : 'Contactar a Nuestro Equipo'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
