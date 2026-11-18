import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Printer, Clock, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AGENCY_CONTACT } from '../data/agencyData';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A3D44] text-[#E0F2F1] pt-16 pb-12 border-t border-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-teal-800/80">
          {/* Brand & Introduction (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/Gemini_Generated_Image_kjrsaukjrsaukjrs-removebg-preview_4eb72a09.png"
                alt="Aura Home Health"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="text-xl font-bold tracking-tight text-white block font-sans">
                  AURA HOME HEALTH
                </span>
                <span className="text-xs text-orange-400 font-medium">
                  Clearwater, Florida
                </span>
              </div>
            </div>

            <p className="text-sm text-teal-100/85 leading-relaxed pr-4">
              {language === 'en'
                ? 'Providing Long-Term Care and Skilled Home Health services throughout Pinellas and Pasco counties.'
                : 'Servicios de Cuidado a Largo Plazo y Salud en el Hogar Calificada en los condados de Pinellas y Pasco.'}
            </p>

            <div className="pt-2 text-xs text-teal-200/90 space-y-1">
              <p className="font-semibold text-white">
                {t.common.chapAccredited}
              </p>
              <p className="text-teal-300">
                {t.common.chapDescription}
              </p>
            </div>

           {/* Social Media Links */}
<div className="pt-3 border-t border-teal-800/70 space-y-2">
  <span className="text-xs uppercase tracking-wider font-semibold text-teal-200 font-sans">
    {language === 'en' ? 'Connect With Us' : 'Síganos'}
  </span>

  <div className="flex items-center gap-2.5">
    <a
      href="https://www.facebook.com/profile.php?id=61596168185784"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Aura Home Health Facebook"
      className="w-8.5 h-8.5 rounded-lg bg-teal-900/80 hover:bg-[#E85D04] border border-teal-700/60 text-white flex items-center justify-center transition-all shadow-2xs"
    >
      <Facebook className="w-4 h-4" />
    </a>

    <a
      href="https://www.instagram.com/aurahomehealth_/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Aura Home Health Instagram"
      className="w-8.5 h-8.5 rounded-lg bg-teal-900/80 hover:bg-[#E85D04] border border-teal-700/60 text-white flex items-center justify-center transition-all shadow-2xs"
    >
      <Instagram className="w-4 h-4" />
    </a>
  </div>
</div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4 font-sans">
              {t.common.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-teal-200 hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-teal-200 hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-teal-200 hover:text-white transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/insurance" className="text-teal-200 hover:text-white transition-colors">
                  {t.nav.insurance}
                </Link>
              </li>
              <li>
                <Link to="/coverage-areas" className="text-teal-200 hover:text-white transition-colors">
                  {t.nav.coverage}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-teal-200 hover:text-white transition-colors">
                  {t.nav.careers}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-teal-200 hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4 font-sans">
              {language === 'en' ? 'Contact Details' : 'Datos de Contacto'}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <a
                  href={AGENCY_CONTACT.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-100 hover:text-white transition-colors leading-snug"
                >
                  {AGENCY_CONTACT.address.full}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={AGENCY_CONTACT.phone.telLink}
                  className="text-teal-100 hover:text-white font-medium transition-colors tabular-nums"
                >
                  {AGENCY_CONTACT.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Printer className="w-4 h-4 text-teal-300 shrink-0" />
                <span className="text-teal-100 tabular-nums">
                  Fax: {AGENCY_CONTACT.fax.display}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={AGENCY_CONTACT.email.mailLink}
                  className="text-teal-100 hover:text-white transition-colors break-all"
                >
                  {AGENCY_CONTACT.email.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4 font-sans">
              {language === 'en' ? 'Agency Availability' : 'Disponibilidad'}
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-xs font-semibold text-teal-300 uppercase tracking-wide block mb-1">
                  {t.common.hoursLabel}
                </span>
                <p className="text-white font-medium">8:30 AM – 5:00 PM</p>
                <p className="text-xs text-teal-200">
                  {language === 'en' ? 'Monday through Friday' : 'Lunes a Viernes'}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold text-teal-300 uppercase tracking-wide block mb-1">
                  {t.common.service247Label}
                </span>
                <p className="text-white font-medium">24 Hours a Day / 7 Days a Week</p>
                <p className="text-xs text-teal-200">
                  {language === 'en'
                    ? 'Continuous customer care dispatch'
                    : 'Atención continua para pacientes'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-300">
          <p>
            © {currentYear} {AGENCY_CONTACT.name}. {t.common.allRightsReserved}
          </p>
          <div className="flex items-center gap-4 text-teal-200">
            <span>Pinellas County</span>
            <span>·</span>
            <span>Pasco County</span>
            <span>·</span>
            <span>Clearwater, Florida</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
