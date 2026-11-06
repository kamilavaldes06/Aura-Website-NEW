import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AGENCY_CONTACT } from '../data/agencyData';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/insurance', label: t.nav.insurance },
    { to: '/coverage-areas', label: t.nav.coverage },
    { to: '/careers', label: t.nav.careers },
    { to: '/contact', label: t.nav.contact },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#0A3D44]/10 shadow-2xs font-sans">
      {/* Top Utility Bar */}
      <div className="bg-[#0A3D44] text-[#E0F2F1] text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[13px]">
            <span className="font-medium text-white/90">
              {t.nav.officeHours}
            </span>
            <span className="hidden md:inline-block text-teal-300/40">|</span>
            <span className="hidden md:inline-block text-teal-200">
              {t.nav.support247}
            </span>
            <span className="hidden lg:inline-block text-teal-300/40">|</span>
            <span className="hidden lg:inline-block text-teal-200">
              Clearwater, FL
            </span>
            <span className="hidden sm:inline-block text-teal-300/40">|</span>
            <span className="hidden sm:inline-block text-orange-300 font-semibold">
              {language === 'en' ? 'Bilingual Agency · Se Habla Español' : 'Agencia Bilingüe · English & Spanish'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 text-white/90 hover:text-white px-2 py-0.5 rounded transition-colors cursor-pointer text-xs font-semibold"
              title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-orange-400" />
              <span>{language === 'en' ? 'Español' : 'English'}</span>
            </button>

            {/* Direct Phone */}
            <a
              href={AGENCY_CONTACT.phone.telLink}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-orange-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-orange-400 fill-orange-400" />
              <span className="tabular-nums">{AGENCY_CONTACT.phone.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between gap-6 h-22">
          {/* Natural Logo Presentation (Zero artificial framing, borders, or container boxes) */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group shrink-0 focus-visible:outline-teal-800"
          >
            <img
              src="/assets/aistudio/Gemini_Generated_Image_kjrsaukjrsaukjrs-removebg-preview_4eb72a09.png"
              alt="Aura Home Health"
              className="h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A3D44] group-hover:text-teal-900 transition-colors font-sans">
                AURA HOME HEALTH
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-[#E85D04] uppercase">
                {language === 'en' ? 'Home Healthcare · Clearwater, FL' : 'Salud en el Hogar · Clearwater, FL'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-[14px] xl:text-[15px] font-medium text-slate-700">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`whitespace-nowrap transition-colors py-1 relative ${
                    active
                      ? 'text-[#0A3D44] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#E85D04]'
                      : 'text-slate-600 hover:text-[#0A3D44]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E85D04] hover:bg-[#D95000] text-white font-semibold text-sm transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>{t.nav.contact}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:text-[#0A3D44] hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    active
                      ? 'bg-teal-900/10 text-[#0A3D44] font-semibold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-200/80 flex flex-col gap-3">
            <a
              href={AGENCY_CONTACT.phone.telLink}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#E85D04] text-white font-semibold text-center"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>{t.nav.callNowLabel}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
