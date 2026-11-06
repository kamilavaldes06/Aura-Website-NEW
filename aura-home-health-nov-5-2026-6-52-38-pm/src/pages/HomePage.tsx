import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Check, MapPin, Clock, ShieldCheck, Heart, Activity, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  AGENCY_CONTACT,
  LTC_SERVICES,
  SKILLED_SERVICES,
  LTC_INSURANCE_PROVIDERS,
  SKILLED_INSURANCE_PROVIDERS,
} from '../data/agencyData';
import { PediatricBanner } from '../components/PediatricBanner';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION (Warm Ivory Background with Editorial Serif Typography & Clean Visual Card) */}
      <section className="bg-gradient-to-b from-[#FAF8F5] via-[#F7F4EE] to-[#F1ECE2] py-12 lg:py-20 border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Editorial Pill Kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-stone-300/80 bg-white/80 text-[11px] font-bold tracking-widest uppercase text-[#0A3D44] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9653B]" />
                <span>{language === 'en' ? 'Licensed & CHAP Accredited · Clearwater, FL' : 'Acreditada por CHAP y Licenciada · Clearwater, FL'}</span>
              </div>

              {/* Hero Headline with Clean Sans-Serif Typography */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-bold font-sans tracking-tight text-[#0A3D44] leading-[1.12] text-balance">
                {language === 'en' ? (
                  <>
                    Professional{' '}
                    <span className="text-[#C9653B]">Home Health Care</span>{' '}
                    Services
                  </>
                ) : (
                  <>
                    Servicios Profesionales de{' '}
                    <span className="text-[#C9653B]">Salud en el Hogar</span>
                  </>
                )}
              </h1>

              {/* Exact Supporting Text */}
              <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl">
                {t.home.heroSubheadline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#0A3D44] hover:bg-[#072d32] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xs font-sans"
                >
                  <span>{t.home.heroCtaServices}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#C9653B] hover:bg-[#b0552f] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xs font-sans"
                >
                  <span>{t.home.heroCtaContact}</span>
                </Link>
              </div>

              {/* Direct Availability Note */}
              <div className="pt-4 border-t border-stone-300/70 flex flex-wrap items-center gap-6 text-sm text-stone-700">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C9653B]" />
                  <span>{language === 'en' ? 'Office: 8:30 AM – 5:00 PM' : 'Oficina: 8:30 AM – 5:00 PM'}</span>
                </span>
                <span className="text-stone-300">·</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                  <span>{language === 'en' ? 'Customer Service 24/7' : 'Atención al Cliente 24/7'}</span>
                </span>
              </div>
            </div>

            {/* Right Column: High-Craft Agency Credentials Showcase Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 sm:p-9 border border-stone-200/90 shadow-sm space-y-6 relative overflow-hidden">
                {/* Decorative subtle accent gradient in corner */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-[#0D9488]/10 via-[#C9653B]/5 to-transparent rounded-bl-full pointer-events-none" />

                <div className="space-y-2 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF8F8] text-[11px] font-bold tracking-wider uppercase text-[#0A3D44]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>{AGENCY_CONTACT.accreditation.seal}</span>
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-[#0A3D44] tracking-tight">
                    Aura Home Health
                  </h3>
                  <p className="text-xs text-stone-500 font-medium">
                    {language === 'en'
                      ? 'Clearwater, FL · Serving Pinellas & Pasco Counties'
                      : 'Clearwater, FL · Sirviendo los Condados de Pinellas y Pasco'}
                  </p>
                </div>

                <div className="space-y-3.5 pt-2 border-t border-stone-100 relative z-10 text-sm">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200/60">
                    <Heart className="w-5 h-5 text-[#C9653B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0A3D44] block">
                        {language === 'en' ? 'Long-Term Care' : 'Cuidado a Largo Plazo'}
                      </span>
                      <span className="text-xs text-stone-600">
                        {language === 'en'
                          ? 'Personal Care, Homemaker Services, Companion Services, Respite Care'
                          : 'Cuidado Personal, Tareas del Hogar, Compañía y Cuidado de Relevo'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#EFF8F8] border border-teal-200/60">
                    <Activity className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0A3D44] block">
                        {language === 'en' ? 'Skilled Home Health' : 'Salud en el Hogar Calificada'}
                      </span>
                      <span className="text-xs text-stone-600">
                        {language === 'en'
                          ? 'RN Services, PT, OT, Speech Therapy, Medical Social Work & HHA'
                          : 'Servicios de RN, PT, OT, Terapia del Habla, Trabajo Social Médico y HHA'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200/60">
                    <Sparkles className="w-5 h-5 text-[#C9653B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0A3D44] block">
                        {language === 'en' ? 'Pediatric Services' : 'Servicios Pediátricos'}
                      </span>
                      <span className="text-xs text-stone-600">
                        {language === 'en'
                          ? 'Home Health Aide for Molina & Simply Healthcare plans'
                          : 'Home Health Aide para planes de Molina y Simply Healthcare'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between relative z-10 text-xs">
                  <span className="font-medium text-stone-500">
                    {language === 'en' ? 'Call 24/7 Intake:' : 'Línea de Admisión 24/7:'}
                  </span>
                  <a
                    href={AGENCY_CONTACT.phone.telLink}
                    className="font-bold text-[#C9653B] hover:text-[#b0552f] text-sm tabular-nums"
                  >
                    {AGENCY_CONTACT.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION (Warm Off-White Background) */}
      <section className="bg-[#FAF8F5] py-14 lg:py-18 border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="bg-[#0A3D44] text-white rounded-3xl p-8 sm:p-10 shadow-md space-y-6 relative overflow-hidden">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-widest uppercase text-orange-400">
                    {language === 'en' ? 'Our Commitment' : 'Nuestro Compromiso'}
                  </span>
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-white">
                    {language === 'en' ? 'Compassionate In-Home Care' : 'Atención Compasiva en el Hogar'}
                  </h3>
                </div>
                <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed">
                  {language === 'en'
                    ? 'We believe that health, independence, and peace of mind flourish best in the familiar surroundings of home. Our dedicated caregivers and clinicians coordinate every visit with personal respect and professional clinical excellence.'
                    : 'Creemos que la salud, la independencia y la tranquilidad prosperan mejor en el entorno familiar del hogar. Nuestros dedicados cuidadores y profesionales clínicos coordinan cada visita con respeto personal y excelencia clínica profesional.'}
                </p>
                <div className="pt-4 border-t border-teal-700/60 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#0D9488]" />
                  <span className="text-xs text-teal-100 font-medium">
                    {language === 'en' ? 'Accredited by CHAP since establishment' : 'Acreditada por CHAP desde su fundación'}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/70 text-[11px] font-bold tracking-widest uppercase text-[#0A3D44]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9653B]" />
                <span>{language === 'en' ? 'Clearwater, Florida Headquarters' : 'Sede en Clearwater, Florida'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-[#0A3D44]">
                {t.home.introTitle}
              </h2>

              <p className="text-xl text-[#0A3D44] font-medium leading-snug">
                {t.home.introLead}
              </p>

              <p className="text-stone-600 leading-relaxed text-base">
                {t.home.introBody}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0A3D44] hover:text-[#C9653B] transition-colors"
                >
                  <span>{language === 'en' ? 'Learn more about our agency' : 'Conozca más sobre nuestra agencia'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES OVERVIEW (Matching Angelica Prestige Cards) */}
      <section className="bg-[#EFF8F8] py-14 lg:py-18 border-b border-[#0A3D44]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-[11px] font-bold tracking-widest uppercase text-[#0A3D44]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              <span>{language === 'en' ? 'Two Comprehensive Care Programs' : 'Dos Programas Integrales de Atención'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-[#0A3D44]">
              {t.home.carePillarsTitle}
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              {t.home.carePillarsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Long-Term Care */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-wider text-[#C9653B] uppercase block">
                  {language === 'en' ? 'Program 1 · Non-Medical Support' : 'Programa 1 · Asistencia Personal'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#0A3D44]">
                  {t.common.ltcTitle}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {t.common.ltcSubtitle}
                </p>

                <div className="pt-4 space-y-3 border-t border-stone-100">
                  {LTC_SERVICES.map((s) => (
                    <div key={s.id} className="space-y-0.5">
                      <span className="font-bold text-[#0A3D44] text-sm block font-sans">
                        {language === 'en' ? s.titleEn : s.titleEs}
                      </span>
                      <span className="text-xs text-stone-600 block">
                        {language === 'en' ? s.descEn : s.descEs}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0A3D44] hover:text-[#C9653B] transition-colors"
                >
                  <span>{language === 'en' ? 'Explore Long-Term Care Details' : 'Ver Detalles de Cuidado a Largo Plazo'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Skilled Home Health */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-wider text-[#0D9488] uppercase block">
                  {language === 'en' ? 'Program 2 · Clinical Care' : 'Programa 2 · Atención Clínica'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#0A3D44]">
                  {t.common.skilledTitle}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {t.common.skilledSubtitle}
                </p>

                <div className="pt-4 space-y-3 border-t border-stone-100">
                  {SKILLED_SERVICES.map((s) => (
                    <div key={s.id} className="space-y-0.5">
                      <span className="font-bold text-[#0A3D44] text-sm block font-sans">
                        {language === 'en' ? s.titleEn : s.titleEs}
                      </span>
                      <span className="text-xs text-stone-600 block">
                        {language === 'en' ? s.descEn : s.descEs}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0A3D44] hover:text-[#C9653B] transition-colors"
                >
                  <span>{language === 'en' ? 'Explore Skilled Home Health Details' : 'Ver Detalles de Servicios Calificados'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pediatric Care Notice */}
          <PediatricBanner />
        </div>
      </section>

      {/* 3B. GUIDANCE BEYOND HOME CARE (Dedicated Section Helping Families Navigate Care Options) */}
      <section className="bg-[#FAF8F5] py-14 lg:py-18 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF8F8] text-[11px] font-bold tracking-widest uppercase text-[#0A3D44]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9653B]" />
                  <span>{t.home.guidanceKicker}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-[#0A3D44]">
                  {t.home.guidanceTitle}
                </h2>

                <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                  {t.home.guidanceDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/70 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C9653B] block">
                      {language === 'en' ? 'Step-by-Step' : 'Paso a Paso'}
                    </span>
                    <h4 className="font-bold text-[#0A3D44] text-sm font-sans">
                      {language === 'en' ? 'LTC Process Assistance' : 'Orientación en Medicaid'}
                    </h4>
                    <p className="text-xs text-stone-600">
                      {language === 'en'
                        ? 'Explaining assessments and state coordination'
                        : 'Explicación de evaluaciones y trámites estatales'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/70 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] block">
                      {language === 'en' ? 'Personalized' : 'Personalizado'}
                    </span>
                    <h4 className="font-bold text-[#0A3D44] text-sm font-sans">
                      {language === 'en' ? 'Care Needs Assessment' : 'Evaluación de Necesidades'}
                    </h4>
                    <p className="text-xs text-stone-600">
                      {language === 'en'
                        ? 'Aligning schedules with approved authorizations'
                        : 'Horarios alineados a horas autorizadas'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/70 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0A3D44] block">
                      {language === 'en' ? 'Clearwater Team' : 'Equipo Local'}
                    </span>
                    <h4 className="font-bold text-[#0A3D44] text-sm font-sans">
                      {language === 'en' ? 'Direct Communication' : 'Comunicación Directa'}
                    </h4>
                    <p className="text-xs text-stone-600">
                      {language === 'en'
                        ? 'Ongoing support for families and care teams'
                        : 'Apoyo continuo a familias y médicos'}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    to="/services#ltc-guidance"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0A3D44] hover:bg-[#072d32] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xs font-sans"
                  >
                    <span>{t.home.guidanceCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-stone-300 hover:bg-stone-50 text-[#0A3D44] font-semibold text-sm transition-colors font-sans"
                  >
                    <span>{language === 'en' ? 'Speak with a Care Coordinator' : 'Hablar con un Coordinador'}</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#EFF8F8] rounded-2xl p-7 sm:p-8 border border-teal-200/60 space-y-5">
                <span className="text-xs uppercase tracking-widest font-bold text-[#C9653B] font-sans block">
                  {language === 'en' ? 'Navigating Care in Florida' : 'Navegando el Cuidado en Florida'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#0A3D44] leading-snug">
                  {language === 'en'
                    ? 'Helping Families Make Informed Decisions'
                    : 'Ayudando a las Familias a Tomar Decisiones Informadas'}
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {language === 'en'
                    ? 'Every care journey starts with understanding available options. Whether exploring Long-Term Care for non-medical assistance or Skilled Home Health under physician orders, our Clearwater coordinators guide you through each requirement.'
                    : 'Cada proceso de atención comienza con la comprensión de las opciones disponibles. Ya sea que explore Cuidado a Largo Plazo para asistencia no médica o Salud Calificada bajo órdenes médicas, nuestros coordinadores le guían en cada requisito.'}
                </p>
                <div className="pt-3 border-t border-teal-300/60 flex items-center justify-between text-xs font-semibold text-[#0A3D44]">
                  <span>{language === 'en' ? 'Direct Intake Line:' : 'Línea de Admisión:'}</span>
                  <a
                    href={AGENCY_CONTACT.phone.telLink}
                    className="text-sm font-bold text-[#C9653B] hover:text-[#b0552f] tabular-nums"
                  >
                    {AGENCY_CONTACT.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE AURA (Angelica High-Contrast Deep Teal Section) */}
      <section className="bg-[#0A3D44] text-white py-16 lg:py-20 border-b border-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-orange-400">
              {language === 'en' ? 'Agency Standards' : 'Estándares de la Agencia'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-white">
              {t.home.whyChooseTitle}
            </h2>
            <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed">
              {t.home.whyChooseSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3 border-t border-teal-700/60 pt-6">
              <span className="text-3xl font-bold font-sans text-orange-400 block">01</span>
              <h3 className="text-xl font-bold font-sans text-white">
                {t.about.val1Title}
              </h3>
              <p className="text-sm text-teal-100/80 leading-relaxed">
                {t.about.val1Desc}
              </p>
            </div>

            <div className="space-y-3 border-t border-teal-700/60 pt-6">
              <span className="text-3xl font-bold font-sans text-orange-400 block">02</span>
              <h3 className="text-xl font-bold font-sans text-white">
                {t.about.val2Title}
              </h3>
              <p className="text-sm text-teal-100/80 leading-relaxed">
                {t.about.val2Desc}
              </p>
            </div>

            <div className="space-y-3 border-t border-teal-700/60 pt-6">
              <span className="text-3xl font-bold font-sans text-orange-400 block">03</span>
              <h3 className="text-xl font-bold font-sans text-white">
                {t.about.val3Title}
              </h3>
              <p className="text-sm text-teal-100/80 leading-relaxed">
                {t.about.val3Desc}
              </p>
            </div>

            <div className="space-y-3 border-t border-teal-700/60 pt-6">
              <span className="text-3xl font-bold font-sans text-orange-400 block">04</span>
              <h3 className="text-xl font-bold font-sans text-white">
                {t.about.val4Title}
              </h3>
              <p className="text-sm text-teal-100/80 leading-relaxed">
                {t.about.val4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSURANCE SECTION (Warm Neutral Background) */}
      <section className="bg-[#F7F5F0] py-14 lg:py-18 border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-[#C9653B]">
                {language === 'en' ? 'Insurance' : 'Seguros'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-[#0A3D44]">
                {t.home.insuranceBannerTitle}
              </h2>
              <p className="text-base text-stone-600 leading-relaxed">
                {t.home.insuranceBannerSubtitle}
              </p>
            </div>

            <Link
              to="/insurance"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A3D44] hover:bg-[#072d32] text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 font-sans"
            >
              <span>{language === 'en' ? 'View All Accepted Plans' : 'Ver Todos los Seguros'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LTC Plans Preview */}
            <div className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-2xs space-y-4">
              <span className="text-xs font-bold text-[#C9653B] tracking-wider uppercase block">
                {language === 'en' ? 'Long-Term Care Plans' : 'Planes de Cuidado a Largo Plazo'}
              </span>
              <h3 className="text-xl font-bold font-sans text-[#0A3D44]">
                {t.insurance.ltcHeader}
              </h3>
              <ul className="space-y-2.5 pt-2 text-sm text-stone-700">
                {LTC_INSURANCE_PROVIDERS.map((provider) => (
                  <li key={provider.name} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span className="font-medium text-stone-800">{provider.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skilled Plans Preview */}
            <div className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-2xs space-y-4">
              <span className="text-xs font-bold text-[#0D9488] tracking-wider uppercase block">
                {language === 'en' ? 'Skilled Care Plans' : 'Planes de Salud Calificada'}
              </span>
              <h3 className="text-xl font-bold font-sans text-[#0A3D44]">
                {t.insurance.skilledHeader}
              </h3>
              <ul className="space-y-2.5 pt-2 text-sm text-stone-700">
                {SKILLED_INSURANCE_PROVIDERS.slice(0, 5).map((provider) => (
                  <li key={provider.name} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span className="font-medium text-stone-800">{provider.name}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  to="/insurance"
                  className="text-xs font-bold text-[#0A3D44] hover:text-[#C9653B] transition-colors"
                >
                  {language === 'en' ? '+ View remaining skilled plans' : '+ Ver planes calificados restantes'} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COVERAGE AREAS PREVIEW (Clean Warm Neutral) */}
      <section className="bg-[#FAF8F5] py-14 lg:py-18 border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-[#C9653B]">
                {language === 'en' ? 'Coverage Areas' : 'Áreas de Cobertura'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-[#0A3D44]">
                {t.home.coverageBannerTitle}
              </h2>
              <p className="text-base text-stone-600 leading-relaxed">
                {t.home.coverageBannerSubtitle}
              </p>
            </div>

            <Link
              to="/coverage-areas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A3D44] hover:bg-[#072d32] text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 font-sans"
            >
              <span>{language === 'en' ? 'View All 19 Cities' : 'Ver Todas las 19 Ciudades'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-2xs space-y-4">
              <h3 className="text-xl font-bold font-sans text-[#0A3D44]">
                {language === 'en' ? 'Pinellas County' : 'Condado de Pinellas'}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Clearwater, Largo, Dunedin, Palm Harbor, Safety Harbor, Tarpon Springs, St. Petersburg, Seminole, Pinellas Park, Oldsmar, Belleair, Gulfport.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-2xs space-y-4">
              <h3 className="text-xl font-bold font-sans text-[#0A3D44]">
                {language === 'en' ? 'Pasco County' : 'Condado de Pasco'}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                New Port Richey, Holiday, Trinity, Wesley Chapel, Land O' Lakes, Zephyrhills, Dade City.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT CALL TO ACTION (Contrasting Deep Background) */}
      <section className="bg-[#083339] text-white py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-orange-400 font-sans">
                {language === 'en' ? 'Get In Touch' : 'Comuníquese con Nosotros'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-white">
                {language === 'en'
                  ? 'Contact Our Clearwater Care Coordinators'
                  : 'Comuníquese con Nuestros Coordinadores en Clearwater'}
              </h2>
              <p className="text-teal-100/90 text-base sm:text-lg leading-relaxed max-w-2xl">
                {language === 'en'
                  ? 'Our team is ready to answer questions regarding home healthcare services, verify your insurance eligibility, or assist with a physician referral.'
                  : 'Nuestro equipo está disponible para responder sus preguntas sobre servicios en el hogar, verificar su seguro o coordinar una remisión médica.'}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-teal-200">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>1250 Rogers St., Suite D, Clearwater, FL 33756</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={AGENCY_CONTACT.phone.telLink}
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-[#C9653B] hover:bg-[#b0552f] text-white font-bold text-lg text-center transition-colors shadow-md tabular-nums font-sans"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>{AGENCY_CONTACT.phone.display}</span>
              </a>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-sm text-center transition-colors border border-white/20 font-sans"
              >
                <span>{language === 'en' ? 'View Contact Information' : 'Ver Información de Contacto'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
