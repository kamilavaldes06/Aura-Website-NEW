import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { useLanguage } from '../context/LanguageContext';
import {
  LTC_INSURANCE_PROVIDERS,
  SKILLED_INSURANCE_PROVIDERS,
  AGENCY_CONTACT,
} from '../data/agencyData';
import { Check, AlertCircle, Phone } from 'lucide-react';

export const InsurancePage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-0">
      {/* Visiting Angels Reference Style Curved Header */}
      <PageHeader
        title={t.insurance.pageTitle}
        subtitle={t.insurance.pageSubtitle}
      />

      {/* Main Accepted Insurance Content (Flows naturally below header) */}
      <section className="bg-[#FAF8F5] pt-4 sm:pt-6 pb-14 lg:pb-16 border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 lg:space-y-12">
          {/* Comprehensive Insurance Requirements & Verification Guide */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-300/80 shadow-2xs space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#EFF8F8] text-[#0A3D44] flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 text-[#E85D04]" />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#E85D04] font-sans block">
                  {language === 'en' ? 'Coverage & Authorizations' : 'Coberturas y Autorizaciones'}
                </span>
                <h3 className="font-bold text-xl sm:text-2xl text-[#0A3D44] font-sans">
                  {t.insurance.understandingTitle}
                </h3>
              </div>
            </div>

            <p className="text-base text-slate-700 leading-relaxed">
              {t.insurance.understandingText}
            </p>

            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-2">
              <span className="font-bold text-sm text-[#0A3D44] block font-sans">
                {language === 'en' ? 'Important Coverage Notice:' : 'Aviso Importante de Cobertura:'}
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.insurance.planDisclaimer}
              </p>
            </div>
          </div>

          {/* Category 1: Long-Term Care */}
          <div className="space-y-6">
            <div className="space-y-1.5 pb-4 border-b border-stone-300/70">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#E85D04] font-sans">
                {language === 'en' ? 'Long-Term Care Plans' : 'Planes de Cuidado a Largo Plazo'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3D44] font-sans">
                {t.insurance.ltcHeader}
              </h2>
              <p className="text-base text-slate-700">
                {t.insurance.ltcSub}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {LTC_INSURANCE_PROVIDERS.map((provider) => (
                <div
                  key={provider.name}
                  className="bg-white rounded-xl p-6 border border-[#0A3D44]/10 shadow-2xs space-y-1.5 flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FAF8F5] text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A3D44] text-base font-sans">
                      {provider.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {provider.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 italic">
              {language === 'en'
                ? '* Covers Personal Care, Homemaker Services, Companion Services, and Respite Care.'
                : '* Cubre Cuidado Personal, Servicios del Hogar, Servicios de Compañía y Cuidado de Relevo.'}
            </p>
          </div>

          {/* Category 2: Skilled Home Health */}
          <div className="space-y-6">
            <div className="space-y-1.5 pb-4 border-b border-stone-300/70">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#0D9488] font-sans">
                {language === 'en' ? 'Skilled Home Health Plans' : 'Planes de Salud en el Hogar Calificada'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3D44] font-sans">
                {t.insurance.skilledHeader}
              </h2>
              <p className="text-base text-slate-700">
                {t.insurance.skilledSub}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SKILLED_INSURANCE_PROVIDERS.map((provider) => (
                <div
                  key={provider.name}
                  className="bg-white rounded-xl p-6 border border-[#0A3D44]/10 shadow-2xs space-y-1.5 flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FAF8F5] text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5 border border-stone-200">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A3D44] text-base font-sans">
                      {provider.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {provider.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 italic">
              {language === 'en'
                ? '* Covers Registered Nurse Services, Physical Therapy, Occupational Therapy, Medical Social Work Services, Speech Therapy, and Home Health Aide Services.'
                : '* Cubre Servicios de Enfermera Registrada, Fisioterapia, Terapia Ocupacional, Servicios de Trabajo Social Médico, Terapia del Habla y Servicios de Asistente de Salud en el Hogar.'}
            </p>
          </div>
        </div>
      </section>

      {/* Verification Assistance Callout (Rich Deep Teal) */}
      <section className="bg-[#0A3D44] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-orange-400 font-sans">
                {language === 'en' ? 'Coverage Verification' : 'Verificación de Cobertura'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
                {t.insurance.verificationHelpTitle}
              </h2>
              <p className="text-teal-100/90 text-base sm:text-lg leading-relaxed max-w-2xl">
                {t.insurance.verificationHelpText}
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
