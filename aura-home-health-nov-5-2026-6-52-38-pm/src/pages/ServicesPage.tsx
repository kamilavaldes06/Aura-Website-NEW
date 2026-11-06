import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { useLanguage } from '../context/LanguageContext';
import { LTC_SERVICES, SKILLED_SERVICES, AGENCY_CONTACT, PEDIATRIC_SERVICES } from '../data/agencyData';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { LongTermCareProcess } from '../components/LongTermCareProcess';
import { Check, Phone, ArrowRight, Baby } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-0">
      {/* 1. Page Header (Natural title-case deep teal heading with natural spacing and supporting description) */}
      <PageHeader
        title={t.services.pageTitle}
        subtitle={t.services.pageSubtitle}
      />

      {/* 2. Long-Term Care Section (Begins close to page title with no awkward blank gaps) */}
      <section className="bg-[#FAF8F5] pt-4 sm:pt-6 pb-12 lg:pb-14 border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          {/* Section Introduction & Photo Placeholder 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#E85D04] font-sans">
                {language === 'en' ? 'Everyday Living Support' : 'Asistencia para la Vida Cotidiana'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A3D44] font-sans">
                {t.services.ltcHeader}
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {t.services.ltcSub}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                {language === 'en'
                  ? 'Our trained caregivers assist with daily routines, light household duties, and companionship—promoting independence while offering families peace of mind.'
                  : 'Nuestros cuidadores asisten con las rutinas diarias, labores del hogar y compañía, promoviendo la independencia y brindando tranquilidad a las familias.'}
              </p>
            </div>

            <div className="lg:col-span-5">
              {/* Placeholder 2: Services - Caregiver Assisting with Everyday Activities */}
              <PhotoPlaceholder
                label={language === 'en' ? 'Image Placeholder' : 'Marcador de Fotografía'}
                suggestedPhoto={
                  language === 'en'
                    ? 'Caregiver assisting someone with everyday activities at home.'
                    : 'Cuidador asistiendo a una persona con actividades cotidianas en el hogar.'
                }
                aspectRatioClass="aspect-[4/3]"
              />
            </div>
          </div>

          {/* Clean, Balanced Two-Column Service Offerings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LTC_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 sm:p-7 border border-stone-200/80 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0A3D44] font-sans">
                    {language === 'en' ? service.titleEn : service.titleEs}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {language === 'en' ? service.descEn : service.descEs}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                  {(language === 'en' ? service.highlights : (service.highlightsEs || service.highlights)).map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-stone-50 px-2.5 py-1 rounded-md border border-stone-200/60"
                    >
                      <Check className="w-3 h-3 text-[#0D9488]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Complete 5-Step Getting Started with Long-Term Care Application Guidance */}
          <LongTermCareProcess id="ltc-guidance" className="pt-4" />
        </div>
      </section>

      {/* 3. Skilled Home Health Services Section (Consistent clean structure without empty placeholders) */}
      <section className="bg-[#EFF8F8] py-12 lg:py-14 border-b border-[#0A3D44]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6 sm:space-y-8">
          {/* Section Introduction */}
          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0D9488] font-sans">
              {language === 'en' ? 'Clinical Care & Rehabilitation' : 'Atención Clínica y Rehabilitación'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A3D44] font-sans">
              {language === 'en' ? 'Skilled Home Health Services' : 'Servicios de Salud en el Hogar Calificada'}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {t.services.skilledSub}
            </p>
          </div>

          {/* 6 Skilled Disciplines in Balanced Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLED_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 border border-[#0A3D44]/10 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0A3D44] font-sans">
                    {language === 'en' ? service.titleEn : service.titleEs}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {language === 'en' ? service.descEn : service.descEs}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {(language === 'en' ? service.highlights : (service.highlightsEs || service.highlights)).map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pediatric Home Health Services (Visually Consistent) */}
      <section className="bg-[#FAF8F5] py-10 lg:py-12 border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-white border border-stone-200/80 rounded-xl p-7 sm:p-8 shadow-2xs space-y-4">
            <div className="flex items-center gap-2">
              <Baby className="w-5 h-5 text-[#E85D04]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-[#E85D04] font-sans">
                {language === 'en' ? 'Specialized Care' : 'Atención Especializada'}
              </span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[#0A3D44] font-sans">
              {language === 'en' ? 'Pediatric Home Health Aide Services' : 'Servicios Pediátricos de Asistente de Salud en el Hogar'}
            </h3>

            <p className="text-slate-700 text-base leading-relaxed max-w-3xl">
              {language === 'en' ? PEDIATRIC_SERVICES.summaryEn : PEDIATRIC_SERVICES.summaryEs}
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-6 text-sm text-slate-800">
              <span className="font-semibold text-[#0A3D44]">
                {language === 'en' ? 'Accepted Pediatric Insurance:' : 'Seguros Pediátricos Aceptados:'}
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

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A3D44] hover:bg-[#083339] text-white font-medium text-sm transition-colors"
              >
                <span>{language === 'en' ? 'Contact Us About Pediatric Care' : 'Consultar sobre Atención Pediátrica'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Consultation & Referral CTA (Rich Deep Teal) */}
      <section className="bg-[#0A3D44] text-white py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-orange-400 font-sans">
                {language === 'en' ? 'Coordinate Care' : 'Coordinar Atención'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
                {language === 'en'
                  ? 'Coordinate Services with Aura Home Health'
                  : 'Coordine sus Servicios con Aura Home Health'}
              </h2>
              <p className="text-teal-100/90 text-base leading-relaxed max-w-2xl">
                {language === 'en'
                  ? 'Our clinical team reviews doctor orders, coordinates personalized schedules, and confirms accepted insurance coverage.'
                  : 'Nuestro equipo clínico revisa órdenes médicas, coordina horarios personalizados y confirma la cobertura de su seguro.'}
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
                to="/insurance"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-sm text-center transition-colors border border-white/20 font-sans"
              >
                <span>{language === 'en' ? 'Check Accepted Insurance' : 'Ver Seguros Aceptados'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
