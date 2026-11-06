import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { useLanguage } from '../context/LanguageContext';
import { AGENCY_CONTACT } from '../data/agencyData';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { Phone, Clock, ShieldCheck, MapPin, Heart, MessageSquare, Compass, FileText, UserCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-0">
      <PageHeader
        title={t.about.pageTitle}
        subtitle={t.about.pageSubtitle}
      />

      {/* Main Agency Overview (Flows naturally below header) */}
      <section className="bg-[#FAF8F5] pt-4 sm:pt-6 pb-12 lg:pb-16 border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#E85D04] font-sans">
                {language === 'en' ? 'Clearwater, Florida' : 'Clearwater, Florida'}
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A3D44] font-sans">
                {t.about.introTitle}
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                {t.about.introParagraph1}
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                {t.about.introParagraph2}
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                {t.about.introParagraph3}
              </p>

              <div className="pt-2 border-t border-stone-200/80 space-y-1">
                <span className="font-semibold text-[#0A3D44] text-sm block">
                  {t.common.chapAccredited}
                </span>
                <p className="text-xs sm:text-sm text-slate-600">
                  {AGENCY_CONTACT.accreditation.sealDescription}.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Placeholder 1: About Us - Home Healthcare Professional & Older Adult */}
              <PhotoPlaceholder
                label={language === 'en' ? 'Image Placeholder' : 'Marcador de Fotografía'}
                suggestedPhoto={
                  language === 'en'
                    ? 'Home healthcare professional interacting with an older adult in a comfortable home environment.'
                    : 'Profesional de salud en el hogar interactuando con un adulto mayor en un ambiente hogareño cómodo.'
                }
                aspectRatioClass="aspect-[4/3]"
              />

              <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-2xs space-y-4">
                <div className="space-y-0.5">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#E85D04] font-sans">
                    {language === 'en' ? 'Agency Credentials' : 'Credenciales de la Agencia'}
                  </span>
                  <h3 className="text-lg font-bold text-[#0A3D44] font-sans">
                    {language === 'en' ? 'Quality & Standards' : 'Calidad y Normas'}
                  </h3>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF8F5] border border-stone-200/60">
                    <ShieldCheck className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0A3D44] block">
                        {language === 'en' ? 'CHAP Accredited' : 'Acreditada por CHAP'}
                      </span>
                      <span className="text-xs text-slate-600">
                        {language === 'en'
                          ? 'Community Health Accreditation Partner (CHAP, Est. 1965)'
                          : 'Community Health Accreditation Partner (CHAP, Fundada en 1965)'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF8F5] border border-stone-200/60">
                    <MapPin className="w-4 h-4 text-[#E85D04] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0A3D44] block">
                        {language === 'en' ? 'Clearwater Headquarters' : 'Sede Principal en Clearwater'}
                      </span>
                      <span className="text-xs text-slate-600">1250 Rogers St., Suite D, Clearwater, FL 33756</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF8F5] border border-stone-200/60">
                    <Clock className="w-4 h-4 text-[#0A3D44] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0A3D44] block">
                        {language === 'en' ? 'Dedicated Support' : 'Atención Dedicada'}
                      </span>
                      <span className="text-xs text-slate-600">
                        {language === 'en'
                          ? 'Office: 8:30 AM – 5:00 PM · 24/7 Phone Support'
                          : 'Oficina: 8:30 AM – 5:00 PM · Soporte Telefónico 24/7'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach to Care (Expanded Content on Independence, Needs, Communication, Guidance) */}
      <section className="bg-white py-14 lg:py-18 border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E85D04] font-sans">
              {language === 'en' ? 'Our Approach to Care' : 'Nuestro Enfoque de Atención'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A3D44] font-sans">
              {t.about.approachTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {t.about.approachSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#E85D04] flex items-center justify-center border border-stone-200/60">
                <Heart className="w-5 h-5 text-[#E85D04]" />
              </div>
              <h3 className="text-lg font-bold text-[#0A3D44] font-sans">
                {t.about.approachPillar1Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.approachPillar1Desc}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0D9488] flex items-center justify-center border border-stone-200/60">
                <UserCheck className="w-5 h-5 text-[#0D9488]" />
              </div>
              <h3 className="text-lg font-bold text-[#0A3D44] font-sans">
                {t.about.approachPillar2Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.approachPillar2Desc}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0A3D44] flex items-center justify-center border border-stone-200/60">
                <Compass className="w-5 h-5 text-[#0A3D44]" />
              </div>
              <h3 className="text-lg font-bold text-[#0A3D44] font-sans">
                {t.about.approachPillar3Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.approachPillar3Desc}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0D9488] flex items-center justify-center border border-stone-200/60">
                <MessageSquare className="w-5 h-5 text-[#0D9488]" />
              </div>
              <h3 className="text-lg font-bold text-[#0A3D44] font-sans">
                {t.about.approachPillar4Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.approachPillar4Desc}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#E85D04] flex items-center justify-center border border-stone-200/60">
                <FileText className="w-5 h-5 text-[#E85D04]" />
              </div>
              <h3 className="text-lg font-bold text-[#0A3D44] font-sans">
                {t.about.approachPillar5Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.approachPillar5Desc}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0A3D44] flex items-center justify-center border border-stone-200/60">
                <MapPin className="w-5 h-5 text-[#0A3D44]" />
              </div>
              <h3 className="text-lg font-bold text-[#0A3D44] font-sans">
                {t.about.approachPillar6Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.approachPillar6Desc}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#EFF8F8] border border-teal-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-bold text-[#0A3D44] text-base font-sans">
                {language === 'en' ? 'Looking to Learn More About Available Services?' : '¿Desea Conocer Más Sobre Nuestros Servicios?'}
              </h4>
              <p className="text-sm text-slate-700">
                {language === 'en'
                  ? 'Explore our comprehensive Long-Term Care and Skilled Home Health programs or contact our Clearwater office.'
                  : 'Explore nuestros programas de Cuidado a Largo Plazo y Salud Calificada o comuníquese con nuestra oficina en Clearwater.'}
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A3D44] hover:bg-[#083339] text-white text-xs font-semibold transition-colors shrink-0 font-sans"
            >
              <span>{language === 'en' ? 'View Services' : 'Ver Servicios'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Operating Standards (Soft Aqua Background) */}
      <section className="bg-[#EFF8F8] py-12 lg:py-16 border-b border-[#0A3D44]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E85D04] font-sans">
              {language === 'en' ? 'Standards of Care' : 'Normas de Atención'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A3D44] font-sans">
              {t.about.valuesTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-700">
              {t.about.valuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-[#0A3D44]/10 shadow-xs space-y-2.5">
              <span className="text-xs font-semibold text-[#E85D04] tracking-wider uppercase block">
                01
              </span>
              <h3 className="text-xl font-bold text-[#0A3D44] font-sans">
                {t.about.val1Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.val1Desc}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#0A3D44]/10 shadow-xs space-y-2.5">
              <span className="text-xs font-semibold text-[#E85D04] tracking-wider uppercase block">
                02
              </span>
              <h3 className="text-xl font-bold text-[#0A3D44] font-sans">
                {t.about.val2Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.val2Desc}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#0A3D44]/10 shadow-xs space-y-2.5">
              <span className="text-xs font-semibold text-[#E85D04] tracking-wider uppercase block">
                03
              </span>
              <h3 className="text-xl font-bold text-[#0A3D44] font-sans">
                {t.about.val3Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.val3Desc}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#0A3D44]/10 shadow-xs space-y-2.5">
              <span className="text-xs font-semibold text-[#E85D04] tracking-wider uppercase block">
                04
              </span>
              <h3 className="text-xl font-bold text-[#0A3D44] font-sans">
                {t.about.val4Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.val4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office & Customer Care Hours (Rich Deep Teal) */}
      <section className="bg-[#0A3D44] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-orange-400 font-sans">
                {language === 'en' ? 'Availability' : 'Disponibilidad'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                {t.about.hoursNoticeTitle}
              </h2>
              <p className="text-teal-100/90 text-base sm:text-lg leading-relaxed max-w-2xl">
                {t.about.hoursNoticeText}
              </p>
              <div className="pt-2 flex flex-wrap gap-6 text-sm text-teal-200">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>{language === 'en' ? 'Office: 8:30 AM – 5:00 PM' : 'Oficina: 8:30 AM – 5:00 PM'}</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-300" />
                  <span>{language === 'en' ? 'Customer Service 24/7' : 'Atención al Cliente 24/7'}</span>
                </span>
              </div>
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
                <span>{language === 'en' ? 'Contact Our Office' : 'Contactar a Nuestra Oficina'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
