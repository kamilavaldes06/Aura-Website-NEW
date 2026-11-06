import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { AGENCY_CONTACT } from '../data/agencyData';
import {
  PhoneCall,
  HeartHandshake,
  FileText,
  HelpCircle,
  Home,
  AlertCircle,
  ArrowRight,
  Phone,
} from 'lucide-react';

interface LongTermCareProcessProps {
  id?: string;
  className?: string;
}

export const LongTermCareProcess: React.FC<LongTermCareProcessProps> = ({
  id = 'ltc-guidance',
  className = '',
}) => {
  const { language } = useLanguage();

  const steps = [
    {
      number: '01',
      titleEn: 'Step 1 — Contact Aura Home Health',
      titleEs: 'Paso 1 — Comuníquese con Aura Home Health',
      descEn:
        'Reach out to our team to discuss your situation and tell us about the assistance you or your loved one may need.',
      descEs:
        'Póngase en contacto con nuestro equipo para conversar sobre su situación y comentarnos sobre la asistencia que usted o su ser querido puedan necesitar.',
      icon: PhoneCall,
    },
    {
      number: '02',
      titleEn: 'Step 2 — Discuss Your Care Needs',
      titleEs: 'Paso 2 — Converse Sobre Sus Necesidades de Atención',
      descEn:
        "We'll take time to understand your circumstances, discuss available options, and help identify an appropriate approach based on your needs.",
      descEs:
        'Nos tomaremos el tiempo necesario para comprender sus circunstancias, evaluar las opciones disponibles y ayudarle a identificar el enfoque más adecuado según sus necesidades.',
      icon: HeartHandshake,
    },
    {
      number: '03',
      titleEn: 'Step 3 — Understand the Medicaid Long-Term Care Process',
      titleEs: 'Paso 3 — Conozca el Proceso de Medicaid para Cuidado a Largo Plazo',
      descEn:
        'Our team can explain the Florida Medicaid Long-Term Care application and screening process, help you understand where to begin, and guide you in preparing the information that may be required.',
      descEs:
        'Nuestro equipo puede explicarle el proceso de solicitud y evaluación de Cuidado a Largo Plazo de Florida Medicaid, orientarle sobre dónde comenzar y guiarle en la preparación de la información requerida.',
      icon: FileText,
    },
    {
      number: '04',
      titleEn: 'Step 4 — Receive Guidance Throughout the Process',
      titleEs: 'Paso 4 — Reciba Orientación Durante Todo el Proceso',
      descEn:
        'We can help you navigate questions, understand requests for additional information, and stay informed about the next steps as you work through the application and enrollment process.',
      descEs:
        'Podemos ayudarle a resolver dudas, comprender las solicitudes de información adicional y mantenerse informado sobre los próximos pasos mientras avanza en el proceso de solicitud e inscripción.',
      icon: HelpCircle,
    },
    {
      number: '05',
      titleEn: 'Step 5 — Explore Your Home Care Options',
      titleEs: 'Paso 5 — Explore Sus Opciones de Atención en el Hogar',
      descEn:
        "Once eligibility, enrollment, any required service authorizations, and service availability have been established, we'll discuss how Aura Home Health may be able to support your care needs.",
      descEs:
        'Una vez que se hayan determinado la elegibilidad, la inscripción, las autorizaciones de servicio requeridas y la disponibilidad de personal, evaluaremos cómo Aura Home Health puede apoyar sus necesidades de cuidado.',
      icon: Home,
    },
  ];

  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="bg-white rounded-3xl p-7 sm:p-10 lg:p-12 border border-stone-200/90 shadow-xs space-y-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-[11px] font-bold tracking-widest uppercase text-[#0A3D44]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04]" />
            <span>{language === 'en' ? 'Family Guidance & Navigation' : 'Orientación y Acompañamiento Familiar'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans tracking-tight text-[#0A3D44]">
            {language === 'en' ? 'Getting Started with Long-Term Care' : 'Cómo Comenzar con el Cuidado a Largo Plazo'}
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {language === 'en'
              ? 'Finding the right care for yourself or a loved one can feel overwhelming. At Aura Home Health, we help families explore their options, understand the Long-Term Care application process, and navigate the steps toward receiving care at home.'
              : 'Encontrar la atención adecuada para usted o un ser querido puede resultar abrumador. En Aura Home Health, ayudamos a las familias a explorar sus opciones, comprender el proceso de solicitud de Cuidado a Largo Plazo y recorrer los pasos necesarios para recibir atención en el hogar.'}
          </p>
        </div>

        {/* Polished Numbered Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isFullWidthSpan = idx === 4; // Step 5 can span 2 columns on lg screens for balanced layout
            return (
              <div
                key={step.number}
                className={`p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-3.5 flex flex-col justify-between ${
                  isFullWidthSpan ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-sans px-2.5 py-1 rounded-md bg-[#0A3D44] text-white">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border border-stone-200/80 flex items-center justify-center text-[#0A3D44]">
                      <Icon className="w-4 h-4 text-[#E85D04]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-sans text-[#0A3D44] leading-snug">
                    {language === 'en' ? step.titleEn : step.titleEs}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {language === 'en' ? step.descEn : step.descEs}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Disclaimer Notice Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#EFF8F8] border border-teal-200/80 text-slate-800 flex items-start gap-4 shadow-2xs">
          <AlertCircle className="w-5 h-5 text-[#E85D04] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-sm text-[#0A3D44] uppercase tracking-wider block font-sans">
              {language === 'en' ? 'Important Disclaimer' : 'Aviso Importante'}
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {language === 'en'
                ? 'Medicaid eligibility, enrollment, and service authorization are determined by the appropriate state agencies and health plans. Assistance from Aura Home Health does not guarantee approval, enrollment, coverage, or authorization of services.'
                : 'La elegibilidad para Medicaid, la inscripción y la autorización de servicios son determinadas por las agencias estatales y los planes de salud correspondientes. La asistencia de Aura Home Health no garantiza la aprobación, inscripción, cobertura ni autorización de servicios.'}
            </p>
          </div>
        </div>

        {/* Action Button Row */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-stone-100">
          <div className="space-y-0.5">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              {language === 'en' ? 'Questions About Getting Started?' : '¿Preguntas para Comenzar?'}
            </span>
            <p className="text-sm font-bold text-[#0A3D44]">
              {language === 'en'
                ? 'Our care coordinators in Clearwater are ready to help guide your family.'
                : 'Nuestros coordinadores en Clearwater están listos para orientar a su familia.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0A3D44] hover:bg-[#072d32] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs font-sans"
            >
              <span>{language === 'en' ? 'Contact Us to Discuss Your Care Needs' : 'Contáctenos para Evaluar su Atención'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={AGENCY_CONTACT.phone.telLink}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#E85D04] hover:bg-[#D95000] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs font-sans"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>{AGENCY_CONTACT.phone.display}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
