import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { useLanguage } from '../context/LanguageContext';
import { AGENCY_CONTACT } from '../data/agencyData';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import {
  Phone,
  Mail,
  MapPin,
  Printer,
  Clock,
  Check,
  Copy,
  ExternalLink,
  Users,
  Stethoscope,
  Briefcase,
  Send,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Quick inquiry form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState('General Inquiry');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Prepare mailto link as fallback
    const subject = encodeURIComponent(`${inquiryType} - Aura Home Health Website`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:aurahhfl@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-0">
      {/* Page Header (Natural title-case deep teal heading with natural spacing) */}
      <PageHeader
        title={t.contact.pageTitle}
        subtitle={t.contact.pageSubtitle}
      />

      {/* 1. Direct Office Contact Section (Flows naturally below header) */}
      <section className="bg-[#FAF8F5] pt-4 sm:pt-6 pb-12 lg:pb-16 border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#E85D04] font-sans">
                  {language === 'en' ? 'Direct Communication' : 'Comunicación Directa'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A3D44] font-sans">
                  {t.contact.officeDetailsTitle}
                </h2>
                <p className="text-base text-slate-700 leading-relaxed">
                  {language === 'en'
                    ? 'Connect directly with our care coordinators by phone, email, or fax. We are available to answer your questions and assist with service planning.'
                    : 'Comuníquese directamente con nuestros coordinadores por teléfono, correo o fax. Estamos a su disposición para responder sus preguntas.'}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Telephone */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EFF8F8] text-[#0A3D44] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#E85D04]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                        {t.contact.callUsTitle}
                      </span>
                      <a
                        href={AGENCY_CONTACT.phone.telLink}
                        className="text-xl sm:text-2xl font-bold text-[#0A3D44] hover:text-[#E85D04] transition-colors tabular-nums font-sans"
                      >
                        {AGENCY_CONTACT.phone.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={AGENCY_CONTACT.phone.telLink}
                      className="px-4 py-2 rounded-lg bg-[#E85D04] hover:bg-[#D95000] text-white text-xs font-semibold transition-colors"
                    >
                      {language === 'en' ? 'Call Now' : 'Llamar'}
                    </a>
                    <button
                      onClick={() => handleCopy('(727) 329-7098', 'phone')}
                      type="button"
                      className="p-2 rounded-lg border border-stone-200 text-slate-700 hover:bg-stone-50 transition-colors cursor-pointer"
                      title="Copy phone"
                      aria-label="Copy phone number"
                    >
                      {copiedField === 'phone' ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EFF8F8] text-[#0A3D44] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#0A3D44]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                        {t.contact.emailUsTitle}
                      </span>
                      <a
                        href={AGENCY_CONTACT.email.mailLink}
                        className="text-base sm:text-lg font-bold text-[#0A3D44] hover:text-[#0D9488] transition-colors break-all"
                      >
                        {AGENCY_CONTACT.email.address}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={AGENCY_CONTACT.email.mailLink}
                      className="px-4 py-2 rounded-lg bg-[#0A3D44] hover:bg-[#083339] text-white text-xs font-semibold transition-colors"
                    >
                      {language === 'en' ? 'Send Email' : 'Enviar Correo'}
                    </a>
                    <button
                      onClick={() => handleCopy('aurahhfl@gmail.com', 'email')}
                      type="button"
                      className="p-2 rounded-lg border border-stone-200 text-slate-700 hover:bg-stone-50 transition-colors cursor-pointer"
                      title="Copy email"
                      aria-label="Copy email address"
                    >
                      {copiedField === 'email' ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Fax */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EFF8F8] text-slate-700 flex items-center justify-center shrink-0">
                      <Printer className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                        {t.contact.faxTitle}
                      </span>
                      <span className="text-lg font-bold text-slate-800 tabular-nums">
                        {AGENCY_CONTACT.fax.display}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy('(727) 353-3124', 'fax')}
                    type="button"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-stone-200 text-slate-700 hover:bg-stone-50 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copiedField === 'fax' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{language === 'en' ? 'Copied' : 'Copiado'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{language === 'en' ? 'Copy Fax' : 'Copiar Fax'}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Office Physical Address */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EFF8F8] text-[#E85D04] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#E85D04]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                        {t.contact.visitUsTitle}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-slate-800 block">
                        {AGENCY_CONTACT.address.full}
                      </span>
                    </div>
                  </div>

                  <a
                    href={AGENCY_CONTACT.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-stone-200 text-[#0A3D44] hover:bg-stone-50 text-xs font-semibold transition-colors shrink-0"
                  >
                    <span>{t.contact.directionsCta}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Schedule & Availability (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Hours Box */}
              <div className="bg-[#0A3D44] text-white rounded-2xl p-7 sm:p-8 border border-teal-900 shadow-md space-y-6">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest font-semibold text-orange-400 font-sans">
                    {language === 'en' ? 'Availability' : 'Disponibilidad'}
                  </span>
                  <h3 className="text-2xl font-bold font-sans">
                    {language === 'en' ? 'Office & Service Hours' : 'Horarios de Atención'}
                  </h3>
                </div>

                <div className="space-y-4 pt-2 border-t border-teal-800">
                  <div>
                    <span className="text-xs font-semibold text-teal-300 uppercase tracking-wide block mb-1">
                      {t.contact.hoursTitle}
                    </span>
                    <p className="text-lg font-bold text-white">8:30 AM – 5:00 PM</p>
                    <p className="text-xs text-teal-200">
                      {language === 'en' ? 'Monday through Friday' : 'Lunes a Viernes'}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-teal-800/60">
                    <span className="text-xs font-semibold text-teal-300 uppercase tracking-wide block mb-1">
                      {t.contact.supportTitle}
                    </span>
                    <p className="text-lg font-bold text-white">24 Hours / 7 Days</p>
                    <p className="text-xs text-teal-200">
                      {language === 'en'
                        ? 'Customer service and urgent care coordination'
                        : 'Atención continua para coordinación y emergencias'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Long-Term Care & Care Options Guidance Section */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-2xs space-y-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#E85D04] font-sans block">
                    {language === 'en' ? 'Long-Term Care Guidance' : 'Orientación en Cuidado a Largo Plazo'}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-[#0A3D44] font-sans">
                    {t.contact.guidanceSectionTitle}
                  </h4>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.contact.guidanceSectionText}
                </p>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-2.5">
                  <span className="text-xs font-bold text-[#0A3D44] uppercase tracking-wide block font-sans">
                    {t.contact.guidanceBulletsTitle}
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04] mt-1.5 shrink-0" />
                      <span>{t.contact.guidanceBullet1}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-1.5 shrink-0" />
                      <span>{t.contact.guidanceBullet2}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A3D44] mt-1.5 shrink-0" />
                      <span>{t.contact.guidanceBullet3}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04] mt-1.5 shrink-0" />
                      <span>{t.contact.guidanceBullet4}</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={AGENCY_CONTACT.phone.telLink}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0A3D44] hover:bg-[#072d32] text-white text-xs font-semibold transition-colors font-sans"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>(727) 329-7098</span>
                  </a>

                  <a
                    href={AGENCY_CONTACT.email.mailLink}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-stone-300 hover:bg-stone-50 text-slate-800 text-xs font-semibold transition-colors font-sans"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#0A3D44]" />
                    <span>Email Coordinators</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Specialized Assistance For Different Audiences (With Placeholder 3) */}
      <section className="bg-[#EFF8F8] py-12 lg:py-16 border-b border-[#0A3D44]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E85D04] font-sans">
              {language === 'en' ? 'Tailored Inquiries' : 'Consultas Específicas'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A3D44] font-sans">
              {language === 'en' ? 'How We Can Assist You' : 'Cómo Podemos Ayudarle'}
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {language === 'en'
                ? 'Whether you are a patient, family caregiver, healthcare provider, or clinical professional, our team is ready to guide you.'
                : 'Ya sea un paciente, cuidador familiar, médico o profesional clínico, nuestro equipo está listo para orientarle.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Audience Cards (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Audience 1: Patients & Families */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF8F8] text-[#0A3D44] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-[#E85D04]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D44] font-sans">
                    {t.contact.patientsHeading}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {t.contact.patientsDescription}
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={AGENCY_CONTACT.phone.telLink}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0A3D44] hover:bg-[#083339] text-white text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call (727) 329-7098</span>
                  </a>
                  <a
                    href="mailto:aurahhfl@gmail.com?subject=Care%20Inquiry%20-%20Aura%20Home%20Health"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-stone-300 text-slate-700 hover:bg-stone-50 text-xs font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Email Care Coordinators' : 'Escribir a Coordinación'}</span>
                  </a>
                </div>
              </div>

              {/* Audience 2: Physician & Professional Referrals */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF8F8] text-[#0D9488] flex items-center justify-center shrink-0">
                    <Stethoscope className="w-5 h-5 text-[#0D9488]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D44] font-sans">
                    {t.contact.referralsHeading}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {t.contact.referralsDescription}
                </p>
                <div className="pt-2 p-3.5 rounded-lg bg-[#FAF8F5] border border-stone-200/60 text-xs text-slate-700 space-y-1">
                  <p className="font-semibold text-[#0A3D44]">
                    {language === 'en' ? 'Referral Transmission Details:' : 'Detalles de Envío de Remisiones:'}
                  </p>
                  <p>Fax: <span className="font-bold text-slate-800">{AGENCY_CONTACT.fax.display}</span> · Email: <span className="font-bold text-slate-800">{AGENCY_CONTACT.email.address}</span></p>
                </div>
              </div>

              {/* Audience 3: Employment & Career Inquiries */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF8F8] text-[#E85D04] flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-[#E85D04]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D44] font-sans">
                    {t.contact.careersHeading}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {t.contact.careersDescription}
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    to="/careers"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A3D44] hover:bg-[#072d32] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs font-sans"
                  >
                    <Briefcase className="w-4 h-4 text-orange-400" />
                    <span>{language === 'en' ? 'View Career Opportunities' : 'Ver Oportunidades de Empleo'}</span>
                  </Link>

                  <a
                    href="mailto:aurahhfl@gmail.com?subject=Employment%20Opportunity%20Inquiry%20-%20Aura%20Home%20Health"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E85D04] hover:bg-[#D95000] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{t.contact.careersCta}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Placeholder 3 & General Inquiry Form (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Placeholder 3: Contact Us - Professional Healthcare Worker Interaction */}
              <PhotoPlaceholder
                label={language === 'en' ? 'Image Placeholder' : 'Marcador de Fotografía'}
                suggestedPhoto={
                  language === 'en'
                    ? 'Friendly, professional interaction between a healthcare worker and an individual or family.'
                    : 'Interacción profesional y cordial entre un trabajador de la salud y un paciente o familia.'
                }
                aspectRatioClass="aspect-[4/3]"
              />

              {/* Quick Inquiry Form with Dropdown (Non-sensitive general inquiries only) */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-2xs space-y-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#E85D04] font-sans">
                    {language === 'en' ? 'Direct Message' : 'Mensaje Directo'}
                  </span>
                  <h3 className="text-lg font-bold text-[#0A3D44] font-sans">
                    {language === 'en' ? 'Send a Message' : 'Envíenos un Mensaje'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {language === 'en'
                      ? 'For non-urgent general questions. Please do not submit confidential medical records.'
                      : 'Para consultas generales. Por favor no envíe registros médicos confidenciales.'}
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 space-y-2 text-sm">
                    <div className="flex items-center gap-2 font-bold text-[#0A3D44]">
                      <Check className="w-5 h-5 text-emerald-600" />
                      <span>{language === 'en' ? 'Message Sent' : 'Mensaje Enviado'}</span>
                    </div>
                    <p className="text-xs text-slate-700">
                      {language === 'en'
                        ? 'Thank you for contacting Aura Home Health. Our coordination team will review your inquiry and follow up promptly.'
                        : 'Gracias por comunicarse con Aura Home Health. Nuestro equipo revisará su consulta y le responderá a la brevedad.'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs sm:text-sm">
                    {/* Inquiry Type Dropdown */}
                    <div>
                      <label htmlFor="inquiryType" className="block font-semibold text-slate-700 mb-1 text-xs">
                        {language === 'en' ? 'Inquiry Type' : 'Tipo de Consulta'}
                      </label>
                      <select
                        id="inquiryType"
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#0A3D44]"
                      >
                        <option value="General Inquiry">
                          {language === 'en' ? 'General Inquiry' : 'Consulta General'}
                        </option>
                        <option value="Services & Care Information">
                          {language === 'en' ? 'Services & Care Information' : 'Información sobre Servicios y Cuidados'}
                        </option>
                        <option value="Physician / Professional Referral">
                          {language === 'en' ? 'Physician / Professional Referral' : 'Remisión Médica o Profesional'}
                        </option>
                        <option value="Employment Inquiry">
                          {language === 'en' ? 'Employment Inquiry' : 'Oportunidades de Empleo'}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contactName" className="block font-semibold text-slate-700 mb-1 text-xs">
                        {language === 'en' ? 'Your Name' : 'Su Nombre'} *
                      </label>
                      <input
                        id="contactName"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#0A3D44]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="contactEmail" className="block font-semibold text-slate-700 mb-1 text-xs">
                          {language === 'en' ? 'Email Address' : 'Correo Electrónico'} *
                        </label>
                        <input
                          id="contactEmail"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="example@mail.com"
                          className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#0A3D44]"
                        />
                      </div>

                      <div>
                        <label htmlFor="contactPhone" className="block font-semibold text-slate-700 mb-1 text-xs">
                          {language === 'en' ? 'Telephone' : 'Teléfono'}
                        </label>
                        <input
                          id="contactPhone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(727) 000-0000"
                          className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#0A3D44]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contactMessage" className="block font-semibold text-slate-700 mb-1 text-xs">
                        {language === 'en' ? 'Message' : 'Mensaje'} *
                      </label>
                      <textarea
                        id="contactMessage"
                        required
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={language === 'en' ? 'How can we help you?' : '¿En qué podemos ayudarle?'}
                        className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#0A3D44]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0A3D44] hover:bg-[#083339] text-white font-semibold text-xs transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Submit Inquiry' : 'Enviar Consulta'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
