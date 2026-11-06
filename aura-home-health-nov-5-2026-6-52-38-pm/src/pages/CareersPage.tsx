import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { useLanguage } from '../context/LanguageContext';
import { AGENCY_CONTACT, COVERAGE_AREAS } from '../data/agencyData';
import { CAREERS_FORM_CONFIG } from '../config/careersConfig';
import {
  Check,
  CheckCircle2,
  AlertCircle,
  Copy,
  Mail,
  Phone,
  Briefcase,
  Languages,
  MapPin,
  Clock,
  Send,
  Shield,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';

const POSITIONS = [
  { id: 'hha', labelEn: 'Home Health Aide (HHA)', labelEs: 'Asistente de Salud en el Hogar (HHA)' },
  { id: 'cna', labelEn: 'Certified Nursing Assistant (CNA)', labelEs: 'Asistente de Enfermería Certificado (CNA)' },
  { id: 'rn', labelEn: 'Registered Nurse (RN)', labelEs: 'Enfermera Registrada (RN)' },
];

const LANGUAGES_LIST = [
  { id: 'en', labelEn: 'English', labelEs: 'Inglés' },
  { id: 'es', labelEn: 'Spanish', labelEs: 'Español' },
  { id: 'creole', labelEn: 'Haitian Creole', labelEs: 'Creole Haitiano' },
  { id: 'other', labelEn: 'Other', labelEs: 'Otro' },
];

const AVAILABILITY_OPTIONS = [
  { id: 'weekdays', labelEn: 'Weekdays', labelEs: 'Días de semana' },
  { id: 'weekends', labelEn: 'Weekends', labelEs: 'Fines de semana' },
  { id: 'mornings', labelEn: 'Mornings', labelEs: 'Mañanas' },
  { id: 'afternoons', labelEn: 'Afternoons', labelEs: 'Tardes' },
  { id: 'evenings', labelEn: 'Evenings', labelEs: 'Noches' },
  { id: 'overnight', labelEn: 'Overnight', labelEs: 'Guardias nocturnas' },
  { id: 'flexible', labelEn: 'Flexible', labelEs: 'Horario flexible' },
];

export const CareersPage: React.FC = () => {
  const { language, t } = useLanguage();

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [otherLanguageText, setOtherLanguageText] = useState('');
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [additionalInfo, setAdditionalInfo] = useState('');

  // UI / Status State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  // Pinellas and Pasco county city lists from approved agencyData
  const pinellasCities = COVERAGE_AREAS.find((c) => c.countyEn === 'Pinellas County')?.cities || [];
  const pascoCities = COVERAGE_AREAS.find((c) => c.countyEn === 'Pasco County')?.cities || [];

  // Toggle helpers
  const togglePosition = (id: string) => {
    setSelectedPositions((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
    if (errors.positions) {
      setErrors((prev) => ({ ...prev, positions: '' }));
    }
  };

  const toggleLanguageOption = (id: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );
    if (errors.languages) {
      setErrors((prev) => ({ ...prev, languages: '' }));
    }
  };

  const toggleCity = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
    if (errors.cities) {
      setErrors((prev) => ({ ...prev, cities: '' }));
    }
  };

  const selectAllCountyCities = (cities: string[]) => {
    setSelectedCities((prev) => {
      const combined = new Set([...prev, ...cities]);
      return Array.from(combined);
    });
    if (errors.cities) {
      setErrors((prev) => ({ ...prev, cities: '' }));
    }
  };

  const clearCountyCities = (cities: string[]) => {
    setSelectedCities((prev) => prev.filter((c) => !cities.includes(c)));
  };

  const toggleAvailability = (id: string) => {
    setSelectedAvailability((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  // Basic validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = language === 'en' ? 'Full name is required.' : 'El nombre completo es requerido.';
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!phone.trim()) {
      newErrors.phone = language === 'en' ? 'Phone number is required.' : 'El número de teléfono es requerido.';
    } else if (cleanPhone.length < 10) {
      newErrors.phone =
        language === 'en'
          ? 'Please enter a valid 10-digit phone number.'
          : 'Por favor ingrese un número de teléfono válido de 10 dígitos.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = language === 'en' ? 'Email address is required.' : 'El correo electrónico es requerido.';
    } else if (!emailRegex.test(email)) {
      newErrors.email =
        language === 'en'
          ? 'Please enter a valid email address.'
          : 'Por favor ingrese una dirección de correo electrónico válida.';
    }

    if (selectedPositions.length === 0) {
      newErrors.positions =
        language === 'en'
          ? 'Please select at least one position of interest.'
          : 'Por favor seleccione al menos una posición de interés.';
    }

    if (selectedLanguages.length === 0) {
      newErrors.languages =
        language === 'en'
          ? 'Please select at least one language you speak.'
          : 'Por favor seleccione al menos un idioma que hable.';
    } else if (selectedLanguages.includes('other') && !otherLanguageText.trim()) {
      newErrors.otherLanguage =
        language === 'en'
          ? 'Please specify your other language(s).'
          : 'Por favor especifique su(s) otro(s) idioma(s).';
    }

    if (selectedCities.length === 0) {
      newErrors.cities =
        language === 'en'
          ? 'Please select at least one city where you are available to work.'
          : 'Por favor seleccione al menos una ciudad donde esté disponible para trabajar.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Compile structured summary text
  const getCompiledSummary = (): string => {
    const positionNames = selectedPositions
      .map((id) => POSITIONS.find((p) => p.id === id)?.labelEn)
      .filter(Boolean)
      .join(', ');

    const languageNames = selectedLanguages
      .map((id) => {
        if (id === 'other') return `Other (${otherLanguageText.trim()})`;
        return LANGUAGES_LIST.find((l) => l.id === id)?.labelEn;
      })
      .filter(Boolean)
      .join(', ');

    const pinellasSelected = selectedCities.filter((c) => pinellasCities.includes(c));
    const pascoSelected = selectedCities.filter((c) => pascoCities.includes(c));

    const availabilityNames = selectedAvailability
      .map((id) => AVAILABILITY_OPTIONS.find((a) => a.id === id)?.labelEn)
      .filter(Boolean)
      .join(', ');

    return `AURA HOME HEALTH - EMPLOYMENT INTEREST INQUIRY
--------------------------------------------------
Applicant Name: ${fullName.trim()}
Phone Number:   ${phone.trim()}
Email Address:  ${email.trim()}

Position(s) of Interest:
${positionNames || 'None specified'}

Language(s) Spoken:
${languageNames || 'None specified'}

Preferred Service Areas:
- Pinellas County (${pinellasSelected.length} cities): ${pinellasSelected.join(', ') || 'None'}
- Pasco County (${pascoSelected.length} cities): ${pascoSelected.join(', ') || 'None'}

Availability:
${availabilityNames || 'Not specified (Flexible)'}

Additional Information / Notes:
${additionalInfo.trim() || 'No additional notes provided.'}

Submitted via: Aura Home Health Careers Portal (Clearwater, FL)
Date: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
`;
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!validateForm()) {
      const firstErrorKey = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorKey);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    const positionLabels = selectedPositions
      .map((id) => POSITIONS.find((p) => p.id === id)?.labelEn)
      .filter(Boolean);

    const languageLabels = selectedLanguages.map((id) => {
      if (id === 'other') return `Other (${otherLanguageText.trim()})`;
      return LANGUAGES_LIST.find((l) => l.id === id)?.labelEn || id;
    });

    const availabilityLabels = selectedAvailability.map(
      (id) => AVAILABILITY_OPTIONS.find((a) => a.id === id)?.labelEn || id
    );

    const payload = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      positions: positionLabels,
      languages: languageLabels,
      preferredCities: selectedCities,
      pinellasCities: selectedCities.filter((c) => pinellasCities.includes(c)),
      pascoCities: selectedCities.filter((c) => pascoCities.includes(c)),
      availability: availabilityLabels,
      additionalInfo: additionalInfo.trim(),
      submittedAt: new Date().toISOString(),
      source: 'Aura Home Health Website /careers',
    };

    // Branch: If a live backend submission endpoint has been provided via environment variable
    if (CAREERS_FORM_CONFIG.isConfigured && CAREERS_FORM_CONFIG.submissionEndpoint) {
      try {
        const response = await fetch(CAREERS_FORM_CONFIG.submissionEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Submission returned status ${response.status}`);
        }

        setIsSubmitting(false);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err: unknown) {
        console.error('Submission error:', err);
        setIsSubmitting(false);
        setSubmissionError(
          language === 'en'
            ? 'We were unable to reach the automated submission service. Please use the direct email option below to deliver your application.'
            : 'No pudimos contactar el servicio automatizado de envío. Por favor use la opción de correo directo para enviar su solicitud.'
        );
      }
    } else {
      // Branch: Unconfigured state (default).
      // Dispatches formatted inquiry directly to the official recruitment email without public leaks or local storage.
      const subject = encodeURIComponent(
        `Employment Interest - ${fullName.trim()} - ${positionLabels.join(', ')}`
      );
      const body = encodeURIComponent(getCompiledSummary());
      const mailtoLink = `mailto:${CAREERS_FORM_CONFIG.recipientEmail}?subject=${subject}&body=${body}`;

      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Trigger user's mail client with pre-filled application
      try {
        window.location.href = mailtoLink;
      } catch (err) {
        console.warn('Mail client navigation handled:', err);
      }
    }
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getCompiledSummary());
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  const handleResetForm = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setSelectedPositions([]);
    setSelectedLanguages([]);
    setOtherLanguageText('');
    setSelectedCities([]);
    setSelectedAvailability([]);
    setAdditionalInfo('');
    setErrors({});
    setSubmitted(false);
    setSubmissionError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-0">
      {/* 1. Page Header (Standardized Title Case with Natural Spacing) */}
      <PageHeader
        title={t.careers.pageTitle}
        subtitle={t.careers.pageSubtitle}
      />

      {/* 2. Main Form & Information Section */}
      <section className="bg-[#FAF8F5] pt-4 sm:pt-6 pb-14 lg:pb-20 border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Employment Form (7 cols) */}
            <div className="lg:col-span-8">
              {submitted ? (
                /* Confirmation View */
                <div className="bg-white rounded-2xl p-7 sm:p-10 border border-stone-200/90 shadow-sm space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block font-sans">
                        {language === 'en' ? 'Inquiry Prepared' : 'Solicitud Preparada'}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-sans text-[#0A3D44] tracking-tight">
                        {language === 'en'
                          ? 'Thank You for Your Interest!'
                          : '¡Gracias por su Interés!'}
                      </h2>
                    </div>
                  </div>

                  <p className="text-stone-700 text-base leading-relaxed">
                    {language === 'en' ? (
                      <>
                        Your employment interest form for <strong>{fullName}</strong> has been organized and directed to Aura Home Health's recruitment team at{' '}
                        <a
                          href={`mailto:${CAREERS_FORM_CONFIG.recipientEmail}`}
                          className="font-bold text-[#0A3D44] underline"
                        >
                          {CAREERS_FORM_CONFIG.recipientEmail}
                        </a>
                        . If your email application did not launch automatically, please copy the structured summary below and email it directly to our coordination team.
                      </>
                    ) : (
                      <>
                        Su formulario de interés para <strong>{fullName}</strong> ha sido estructurado y dirigido al equipo de selección de Aura Home Health en{' '}
                        <a
                          href={`mailto:${CAREERS_FORM_CONFIG.recipientEmail}`}
                          className="font-bold text-[#0A3D44] underline"
                        >
                          {CAREERS_FORM_CONFIG.recipientEmail}
                        </a>
                        . Si su programa de correo no se abrió automáticamente, copie el resumen a continuación y envíelo a nuestro equipo.
                      </>
                    )}
                  </p>

                  {/* Summary Box */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs sm:text-sm font-mono text-stone-800 space-y-2 overflow-x-auto whitespace-pre-wrap max-h-72">
                    {getCompiledSummary()}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A3D44] hover:bg-[#072d32] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-xs font-sans cursor-pointer"
                    >
                      {copiedSummary ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>
                        {copiedSummary
                          ? language === 'en'
                            ? 'Summary Copied!'
                            : '¡Resumen Copiado!'
                          : language === 'en'
                          ? 'Copy Application Summary'
                          : 'Copiar Resumen de Solicitud'}
                      </span>
                    </button>

                    <a
                      href={`mailto:${CAREERS_FORM_CONFIG.recipientEmail}?subject=${encodeURIComponent(
                        `Employment Interest - ${fullName} - ${selectedPositions.join(', ')}`
                      )}&body=${encodeURIComponent(getCompiledSummary())}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E85D04] hover:bg-[#D95000] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-xs font-sans"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{language === 'en' ? 'Open in Email Client' : 'Abrir en Correo'}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-stone-300 hover:bg-stone-100 text-stone-700 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                    >
                      <span>{language === 'en' ? 'Submit Another Inquiry' : 'Enviar Otra Solicitud'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white rounded-2xl p-6 sm:p-9 border border-stone-200/90 shadow-2xs space-y-8"
                >
                  {/* Form Header */}
                  <div className="space-y-1.5 pb-4 border-b border-stone-200">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#E85D04] font-sans block">
                      {t.careers.formTitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A3D44] font-sans">
                      {language === 'en' ? 'Candidate Information' : 'Información del Candidato'}
                    </h2>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {t.careers.formSubtitle}
                    </p>
                  </div>

                  {submissionError && (
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <p>{submissionError}</p>
                    </div>
                  )}

                  {/* Contact Fields (Full Name, Phone, Email) */}
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-[#0A3D44] font-sans flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#0A3D44]/10 text-[#0A3D44] text-xs flex items-center justify-center font-bold">
                        1
                      </span>
                      <span>{language === 'en' ? 'Contact Details' : 'Datos de Contacto'}</span>
                      <span className="text-xs font-normal text-stone-500">
                        ({language === 'en' ? 'Required' : 'Requerido'})
                      </span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="md:col-span-2">
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-sans"
                        >
                          {t.careers.fullNameLabel} <span className="text-[#E85D04]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                          }}
                          placeholder={t.careers.fullNamePlaceholder}
                          className={`w-full px-4 py-3 rounded-lg border bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 ${
                            errors.fullName
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-stone-300 focus:ring-[#0A3D44]'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-600 mt-1 font-medium">{errors.fullName}</p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-sans"
                        >
                          {t.careers.phoneLabel} <span className="text-[#E85D04]">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                          }}
                          placeholder={t.careers.phonePlaceholder}
                          className={`w-full px-4 py-3 rounded-lg border bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 ${
                            errors.phone
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-stone-300 focus:ring-[#0A3D44]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-sans"
                        >
                          {t.careers.emailLabel} <span className="text-[#E85D04]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                          }}
                          placeholder={t.careers.emailPlaceholder}
                          className={`w-full px-4 py-3 rounded-lg border bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 ${
                            errors.email
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-stone-300 focus:ring-[#0A3D44]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1 font-medium">{errors.email}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Position of Interest (Multiple selections allowed) */}
                  <div className="space-y-4 pt-4 border-t border-stone-200">
                    <div>
                      <h3 className="text-lg font-bold text-[#0A3D44] font-sans flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#0A3D44]/10 text-[#0A3D44] text-xs flex items-center justify-center font-bold">
                          2
                        </span>
                        <span>{t.careers.positionsTitle}</span>
                        <span className="text-[#E85D04]">*</span>
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {t.careers.positionsSubtitle}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {POSITIONS.map((pos) => {
                        const checked = selectedPositions.includes(pos.id);
                        return (
                          <label
                            key={pos.id}
                            className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                              checked
                                ? 'bg-teal-50/70 border-[#0A3D44] text-[#0A3D44] shadow-2xs'
                                : 'bg-white border-stone-200 hover:border-stone-300 text-stone-700'
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="positions"
                              value={pos.id}
                              checked={checked}
                              onChange={() => togglePosition(pos.id)}
                              className="mt-1 w-4 h-4 rounded text-[#0A3D44] border-stone-300 focus:ring-[#0A3D44] cursor-pointer"
                            />
                            <div className="space-y-0.5">
                              <span className="font-bold text-sm block">
                                {language === 'en' ? pos.labelEn : pos.labelEs}
                              </span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                    {errors.positions && (
                      <p className="text-xs text-red-600 font-medium">{errors.positions}</p>
                    )}
                  </div>

                  {/* Languages Spoken (Multiple selections allowed) */}
                  <div className="space-y-4 pt-4 border-t border-stone-200">
                    <div>
                      <h3 className="text-lg font-bold text-[#0A3D44] font-sans flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#0A3D44]/10 text-[#0A3D44] text-xs flex items-center justify-center font-bold">
                          3
                        </span>
                        <span>{t.careers.languagesTitle}</span>
                        <span className="text-[#E85D04]">*</span>
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {t.careers.languagesSubtitle}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {LANGUAGES_LIST.map((lang) => {
                        const checked = selectedLanguages.includes(lang.id);
                        return (
                          <label
                            key={lang.id}
                            className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                              checked
                                ? 'bg-teal-50/70 border-[#0A3D44] text-[#0A3D44] font-semibold shadow-2xs'
                                : 'bg-white border-stone-200 hover:border-stone-300 text-stone-700'
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="languages"
                              value={lang.id}
                              checked={checked}
                              onChange={() => toggleLanguageOption(lang.id)}
                              className="w-4 h-4 rounded text-[#0A3D44] border-stone-300 focus:ring-[#0A3D44] cursor-pointer"
                            />
                            <span className="text-sm">
                              {language === 'en' ? lang.labelEn : lang.labelEs}
                            </span>
                          </label>
                        );
                      })}
                    </div>

                    {selectedLanguages.includes('other') && (
                      <div className="pt-1">
                        <label
                          htmlFor="otherLanguageText"
                          className="block text-xs font-semibold text-stone-700 mb-1"
                        >
                          {language === 'en'
                            ? 'Please specify other language(s):'
                            : 'Por favor especifique su(s) otro(s) idioma(s):'}
                        </label>
                        <input
                          id="otherLanguageText"
                          type="text"
                          value={otherLanguageText}
                          onChange={(e) => {
                            setOtherLanguageText(e.target.value);
                            if (errors.otherLanguage) {
                              setErrors((prev) => ({ ...prev, otherLanguage: '' }));
                            }
                          }}
                          placeholder={t.careers.otherLanguagePlaceholder}
                          className="w-full px-3.5 py-2 rounded-lg border border-stone-300 bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3D44]"
                        />
                        {errors.otherLanguage && (
                          <p className="text-xs text-red-600 mt-1 font-medium">{errors.otherLanguage}</p>
                        )}
                      </div>
                    )}

                    {errors.languages && (
                      <p className="text-xs text-red-600 font-medium">{errors.languages}</p>
                    )}
                  </div>

                  {/* Preferred Service Areas (Grouped by County, Multiple selections allowed) */}
                  <div className="space-y-5 pt-4 border-t border-stone-200">
                    <div>
                      <h3 className="text-lg font-bold text-[#0A3D44] font-sans flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#0A3D44]/10 text-[#0A3D44] text-xs flex items-center justify-center font-bold">
                          4
                        </span>
                        <span>{t.careers.preferredAreasTitle}</span>
                        <span className="text-[#E85D04]">*</span>
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {t.careers.preferredAreasSubtitle}
                      </p>
                    </div>

                    {errors.cities && (
                      <p className="text-xs text-red-600 font-medium">{errors.cities}</p>
                    )}

                    {/* Pinellas County Group */}
                    <div className="p-4 sm:p-5 rounded-xl bg-stone-50/80 border border-stone-200 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-stone-200">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#E85D04]" />
                          <h4 className="font-bold text-[#0A3D44] text-base font-sans">
                            {t.careers.pinellasCountyTitle}
                          </h4>
                          <span className="text-xs text-stone-500">
                            ({selectedCities.filter((c) => pinellasCities.includes(c)).length}/{pinellasCities.length})
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <button
                            type="button"
                            onClick={() => selectAllCountyCities(pinellasCities)}
                            className="text-[#0A3D44] hover:text-[#E85D04] font-semibold cursor-pointer"
                          >
                            {t.careers.selectAll}
                          </button>
                          <span className="text-stone-300">|</span>
                          <button
                            type="button"
                            onClick={() => clearCountyCities(pinellasCities)}
                            className="text-stone-500 hover:text-stone-700 cursor-pointer"
                          >
                            {t.careers.clearAll}
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                        {pinellasCities.map((city) => {
                          const checked = selectedCities.includes(city);
                          return (
                            <label
                              key={city}
                              className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer text-xs transition-all ${
                                checked
                                  ? 'bg-teal-50 border-[#0A3D44] text-[#0A3D44] font-semibold'
                                  : 'bg-white border-stone-200 hover:border-stone-300 text-stone-700'
                              }`}
                            >
                              <input
                                type="checkbox"
                                value={city}
                                checked={checked}
                                onChange={() => toggleCity(city)}
                                className="w-3.5 h-3.5 rounded text-[#0A3D44] border-stone-300 focus:ring-[#0A3D44] cursor-pointer"
                              />
                              <span className="truncate">{city}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Pasco County Group */}
                    <div className="p-4 sm:p-5 rounded-xl bg-stone-50/80 border border-stone-200 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-stone-200">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#0D9488]" />
                          <h4 className="font-bold text-[#0A3D44] text-base font-sans">
                            {t.careers.pascoCountyTitle}
                          </h4>
                          <span className="text-xs text-stone-500">
                            ({selectedCities.filter((c) => pascoCities.includes(c)).length}/{pascoCities.length})
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <button
                            type="button"
                            onClick={() => selectAllCountyCities(pascoCities)}
                            className="text-[#0A3D44] hover:text-[#E85D04] font-semibold cursor-pointer"
                          >
                            {t.careers.selectAll}
                          </button>
                          <span className="text-stone-300">|</span>
                          <button
                            type="button"
                            onClick={() => clearCountyCities(pascoCities)}
                            className="text-stone-500 hover:text-stone-700 cursor-pointer"
                          >
                            {t.careers.clearAll}
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                        {pascoCities.map((city) => {
                          const checked = selectedCities.includes(city);
                          return (
                            <label
                              key={city}
                              className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer text-xs transition-all ${
                                checked
                                  ? 'bg-teal-50 border-[#0A3D44] text-[#0A3D44] font-semibold'
                                  : 'bg-white border-stone-200 hover:border-stone-300 text-stone-700'
                              }`}
                            >
                              <input
                                type="checkbox"
                                value={city}
                                checked={checked}
                                onChange={() => toggleCity(city)}
                                className="w-3.5 h-3.5 rounded text-[#0A3D44] border-stone-300 focus:ring-[#0A3D44] cursor-pointer"
                              />
                              <span className="truncate">{city}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Optional Availability */}
                  <div className="space-y-4 pt-4 border-t border-stone-200">
                    <div>
                      <h3 className="text-lg font-bold text-[#0A3D44] font-sans flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-700 text-xs flex items-center justify-center font-bold">
                          5
                        </span>
                        <span>{t.careers.availabilityTitle}</span>
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {t.careers.availabilitySubtitle}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {AVAILABILITY_OPTIONS.map((opt) => {
                        const checked = selectedAvailability.includes(opt.id);
                        return (
                          <label
                            key={opt.id}
                            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg border cursor-pointer text-xs transition-all ${
                              checked
                                ? 'bg-[#0A3D44] text-white border-[#0A3D44] font-semibold'
                                : 'bg-white border-stone-200 hover:border-stone-300 text-stone-700'
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="availability"
                              value={opt.id}
                              checked={checked}
                              onChange={() => toggleAvailability(opt.id)}
                              className="w-3.5 h-3.5 rounded text-[#0A3D44] border-stone-300 focus:ring-[#0A3D44] cursor-pointer"
                            />
                            <span>{language === 'en' ? opt.labelEn : opt.labelEs}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Optional Additional Information */}
                  <div className="space-y-3 pt-4 border-t border-stone-200">
                    <div>
                      <h3 className="text-lg font-bold text-[#0A3D44] font-sans flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-700 text-xs flex items-center justify-center font-bold">
                          6
                        </span>
                        <span>{t.careers.additionalInfoLabel}</span>
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {language === 'en'
                          ? 'Share any certifications, years of in-home care experience, or specific questions.'
                          : 'Comparta certificaciones, años de experiencia en el hogar o preguntas específicas.'}
                      </p>
                    </div>

                    <textarea
                      rows={4}
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      placeholder={t.careers.additionalInfoPlaceholder}
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3D44] leading-relaxed"
                    />
                  </div>

                  {/* Privacy Notice */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-600 leading-relaxed">
                    <p>{t.careers.privacyNotice}</p>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#0A3D44] hover:bg-[#072d32] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xs hover:shadow-md cursor-pointer font-sans disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>{t.careers.submittingButton}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-orange-400" />
                          <span>{t.careers.submitButton}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Recruitment Details & Clinical Culture (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Agency Value Card */}
              <div className="bg-[#0A3D44] text-white rounded-2xl p-7 sm:p-8 border border-teal-900 shadow-md space-y-5">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest font-semibold text-orange-400 font-sans">
                    {language === 'en' ? 'Clinical Culture' : 'Cultura Clínica'}
                  </span>
                  <h3 className="text-2xl font-bold font-sans">
                    {language === 'en' ? 'Why Work With Aura' : 'Por Qué Trabajar en Aura'}
                  </h3>
                </div>

                <div className="space-y-4 pt-2 border-t border-teal-800/80 text-sm">
                  <div className="flex items-start gap-3">
                    <HeartHandshake className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">
                        {language === 'en' ? 'Patient-First Mission' : 'Misión Centrada en el Paciente'}
                      </span>
                      <p className="text-xs text-teal-100/80 leading-relaxed mt-0.5">
                        {language === 'en'
                          ? 'We support individuals with dignity, personal respect, and continuity of care in their homes.'
                          : 'Apoyamos a cada persona con dignidad, respeto y continuidad de atención en su hogar.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">
                        {language === 'en' ? 'CHAP Accredited Standards' : 'Estándares Acreditados por CHAP'}
                      </span>
                      <p className="text-xs text-teal-100/80 leading-relaxed mt-0.5">
                        {language === 'en'
                          ? 'Our clinicians operate under the nation’s highest home healthcare quality guidelines.'
                          : 'Operamos bajo los más altos estándares nacionales de acreditación en salud.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">
                        {language === 'en' ? 'Flexible Territory Scheduling' : 'Horarios y Territorio Flexibles'}
                      </span>
                      <p className="text-xs text-teal-100/80 leading-relaxed mt-0.5">
                        {language === 'en'
                          ? 'Choose service areas close to your residence across Pinellas and Pasco counties.'
                          : 'Elija zonas de servicio cercanas a su domicilio en los condados de Pinellas y Pasco.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">
                        {language === 'en' ? 'Responsive Coordination' : 'Coordinación Inmediata'}
                      </span>
                      <p className="text-xs text-teal-100/80 leading-relaxed mt-0.5">
                        {language === 'en'
                          ? 'Clearwater administrative headquarters with round-the-clock coordinator support.'
                          : 'Sede en Clearwater con soporte continuo para nuestro personal de campo.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Recruiter Contact Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-2xs space-y-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#E85D04] font-sans">
                    {language === 'en' ? 'Direct Recruitment Contact' : 'Contacto Directo de Selección'}
                  </span>
                  <h4 className="text-lg font-bold text-[#0A3D44] font-sans">
                    {language === 'en' ? 'Have Questions First?' : '¿Tiene Preguntas Primero?'}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {language === 'en'
                      ? 'Our staffing coordinators in Clearwater are available Monday through Friday to discuss active case openings and caregiver credentials.'
                      : 'Nuestros coordinadores en Clearwater están disponibles de lunes a viernes para responder dudas sobre vacantes y credenciales.'}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-stone-100 text-xs sm:text-sm">
                  <a
                    href={AGENCY_CONTACT.phone.telLink}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 hover:border-[#0A3D44] text-[#0A3D44] font-bold transition-colors tabular-nums font-sans"
                  >
                    <Phone className="w-4 h-4 text-[#E85D04]" />
                    <span>{AGENCY_CONTACT.phone.display}</span>
                  </a>

                  <a
                    href={`mailto:${CAREERS_FORM_CONFIG.recipientEmail}?subject=Employment%20Inquiry%20-%20Aura%20Home%20Health`}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 hover:border-[#0A3D44] text-[#0A3D44] font-semibold transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>{CAREERS_FORM_CONFIG.recipientEmail}</span>
                  </a>

                  <div className="p-2.5 rounded-lg bg-stone-50 text-xs text-stone-600 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#E85D04] shrink-0" />
                    <span>1250 Rogers St., Suite D, Clearwater, FL 33756</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
