import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    insurance: string;
    coverage: string;
    careers: string;
    contact: string;
    callNow: string;
    callNowLabel: string;
    officeHours: string;
    support247: string;
    toggleLanguage: string;
  };
  common: {
    agencyName: string;
    agencyTagline: string;
    phoneLabel: string;
    faxLabel: string;
    emailLabel: string;
    addressLabel: string;
    hoursLabel: string;
    service247Label: string;
    viewAllServices: string;
    contactUsToday: string;
    verifyCoverage: string;
    exploreAreas: string;
    pediatricTitle: string;
    pediatricBadge: string;
    pediatricDescription: string;
    ltcTitle: string;
    ltcSubtitle: string;
    skilledTitle: string;
    skilledSubtitle: string;
    chapAccredited: string;
    chapDescription: string;
    quickLinks: string;
    allRightsReserved: string;
  };
  home: {
    heroKicker: string;
    heroHeadline: string;
    heroSubheadline: string;
    heroCtaServices: string;
    heroCtaContact: string;
    introTitle: string;
    introLead: string;
    introBody: string;
    carePillarsTitle: string;
    carePillarsSubtitle: string;
    whyChooseTitle: string;
    whyChooseSubtitle: string;
    guidanceKicker: string;
    guidanceTitle: string;
    guidanceDescription: string;
    guidanceCta: string;
    insuranceBannerTitle: string;
    insuranceBannerSubtitle: string;
    coverageBannerTitle: string;
    coverageBannerSubtitle: string;
  };
  about: {
    pageTitle: string;
    pageSubtitle: string;
    introTitle: string;
    introParagraph1: string;
    introParagraph2: string;
    introParagraph3: string;
    approachTitle: string;
    approachSubtitle: string;
    approachPillar1Title: string;
    approachPillar1Desc: string;
    approachPillar2Title: string;
    approachPillar2Desc: string;
    approachPillar3Title: string;
    approachPillar3Desc: string;
    approachPillar4Title: string;
    approachPillar4Desc: string;
    approachPillar5Title: string;
    approachPillar5Desc: string;
    approachPillar6Title: string;
    approachPillar6Desc: string;
    valuesTitle: string;
    valuesSubtitle: string;
    val1Title: string;
    val1Desc: string;
    val2Title: string;
    val2Desc: string;
    val3Title: string;
    val3Desc: string;
    val4Title: string;
    val4Desc: string;
    hoursNoticeTitle: string;
    hoursNoticeText: string;
  };
  services: {
    pageTitle: string;
    pageSubtitle: string;
    ltcHeader: string;
    ltcSub: string;
    skilledHeader: string;
    skilledSub: string;
    pediatricNoticeHeader: string;
    pediatricNoticeText: string;
  };
  insurance: {
    pageTitle: string;
    pageSubtitle: string;
    disclaimer: string;
    coverageExplanation: string;
    understandingTitle: string;
    understandingText: string;
    planDisclaimer: string;
    ltcHeader: string;
    ltcSub: string;
    skilledHeader: string;
    skilledSub: string;
    verificationHelpTitle: string;
    verificationHelpText: string;
    callToVerify: string;
  };
  coverage: {
    pageTitle: string;
    pageSubtitle: string;
    introText: string;
    closingText: string;
    pinellasTitle: string;
    pinellasSub: string;
    pascoTitle: string;
    pascoSub: string;
    dispatchNotice: string;
  };
  contact: {
    pageTitle: string;
    pageSubtitle: string;
    officeDetailsTitle: string;
    callUsTitle: string;
    emailUsTitle: string;
    faxTitle: string;
    visitUsTitle: string;
    hoursTitle: string;
    supportTitle: string;
    directionsCta: string;
    callCta: string;
    emailCta: string;
    patientsHeading: string;
    patientsDescription: string;
    referralsHeading: string;
    referralsDescription: string;
    careersHeading: string;
    careersDescription: string;
    careersCta: string;
    guidanceSectionTitle: string;
    guidanceSectionText: string;
    guidanceBulletsTitle: string;
    guidanceBullet1: string;
    guidanceBullet2: string;
    guidanceBullet3: string;
    guidanceBullet4: string;
  };
  careers: {
    pageTitle: string;
    pageSubtitle: string;
    introLead: string;
    formTitle: string;
    formSubtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    positionsTitle: string;
    positionsSubtitle: string;
    languagesTitle: string;
    languagesSubtitle: string;
    otherLanguagePlaceholder: string;
    preferredAreasTitle: string;
    preferredAreasSubtitle: string;
    pinellasCountyTitle: string;
    pascoCountyTitle: string;
    selectAll: string;
    clearAll: string;
    availabilityTitle: string;
    availabilitySubtitle: string;
    additionalInfoLabel: string;
    additionalInfoPlaceholder: string;
    submitButton: string;
    submittingButton: string;
    privacyNotice: string;
    gatewayStatusLabel: string;
    gatewayPendingNotice: string;
    gatewayConnectedNotice: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      insurance: 'Insurance Accepted',
      coverage: 'Coverage Areas',
      careers: 'Careers',
      contact: 'Contact Us',
      callNow: '(727) 329-7098',
      callNowLabel: 'Call (727) 329-7098',
      officeHours: 'Mon – Fri: 8:30 AM – 5:00 PM',
      support247: 'Customer Service 24/7',
      toggleLanguage: 'Español',
    },
    common: {
      agencyName: 'Aura Home Health',
      agencyTagline: 'Professional home healthcare in Clearwater, Florida.',
      phoneLabel: 'Phone',
      faxLabel: 'Fax',
      emailLabel: 'Email',
      addressLabel: 'Office Address',
      hoursLabel: 'Office Hours',
      service247Label: 'Customer Service',
      viewAllServices: 'Our Services',
      contactUsToday: 'Contact Us',
      verifyCoverage: 'Insurance Plans We Accept',
      exploreAreas: 'Areas We Serve',
      pediatricTitle: 'Pediatric Home Health Aide Services',
      pediatricBadge: 'Pediatric Care',
      pediatricDescription:
        'Aura Home Health offers Pediatric Home Health Aide Services to children with Molina Healthcare and Simply Healthcare insurance.',
      ltcTitle: 'Long-Term Care',
      ltcSubtitle: 'Assistance with personal care and daily living activities to support comfort and independence at home.',
      skilledTitle: 'Skilled Home Health',
      skilledSubtitle: 'Medical and rehabilitative care delivered by licensed nurses and therapists in the home.',
      chapAccredited: 'CHAP Accreditation',
      chapDescription: 'Accredited by Community Health Accreditation Partner (CHAP), established in 1965.',
      quickLinks: 'Quick Links',
      allRightsReserved: 'All rights reserved.',
    },
    home: {
      heroKicker: 'Clearwater, Florida',
      heroHeadline: 'Professional Home Health Care Services',
      heroSubheadline:
        'Aura Home Health provides Long-Term Care and Skilled Home Health services to individuals and families throughout Pinellas and Pasco counties, Florida.',
      heroCtaServices: 'Our Services',
      heroCtaContact: 'Contact Us',
      introTitle: 'About Aura Home Health',
      introLead:
        'Based in Clearwater, Florida, Aura Home Health delivers reliable in-home medical and personal care services.',
      introBody:
        'We work closely with physicians, hospital discharge coordinators, patients, and their families to coordinate individualized home care plans. Our approach focuses on understanding each person’s unique needs, supporting independence at home, and providing clear, compassionate guidance through every stage of care—from Long-Term Care assistance to skilled clinical rehabilitation in Pinellas and Pasco counties.',
      carePillarsTitle: 'Our Home Health Services',
      carePillarsSubtitle:
        'We offer two distinct care programs: Long-Term Care for non-medical assistance and Skilled Home Health for clinical rehabilitation.',
      whyChooseTitle: 'Why Families & Physicians Choose Aura',
      whyChooseSubtitle:
        'Providing dependable clinical care, personalized support, and prompt communication.',
      guidanceKicker: 'Comprehensive Guidance',
      guidanceTitle: 'Guidance Beyond Home Care',
      guidanceDescription:
        'Navigating long-term care options, Medicaid programs, and personalized support schedules can feel overwhelming. Beyond providing experienced caregivers and nurses, our Clearwater team assists families with understanding the process, exploring available care options, and finding the right path for their loved ones.',
      guidanceCta: 'Learn About Long-Term Care',
      insuranceBannerTitle: 'Accepted Insurance',
      insuranceBannerSubtitle:
        'We accept a wide range of insurance plans including Original Medicare, Sunshine Health, Molina, Simply Healthcare, Aetna, Humana, and Florida Blue.',
      coverageBannerTitle: 'Areas We Serve',
      coverageBannerSubtitle:
        'Serving communities across Pinellas County and Pasco County with prompt dispatch from our Clearwater office.',
    },
    about: {
      pageTitle: 'About Aura Home Health',
      pageSubtitle:
        'A licensed home health agency based in Clearwater, Florida, serving Pinellas and Pasco counties.',
      introTitle: 'Dedicated In-Home Care',
      introParagraph1:
        'Aura Home Health is a home health agency based in Clearwater, Florida, serving individuals and families throughout Pinellas and Pasco counties. We provide Long-Term Care and Skilled Home Health services designed to support individuals who need assistance in the comfort of their own homes.',
      introParagraph2:
        'Our approach emphasizes individualized support, clear communication, and respect for each person\'s needs and preferences. Whether someone requires assistance with daily activities or skilled healthcare services, our goal is to help patients and families better understand their care options.',
      introParagraph3:
        'From our Clearwater office at 1250 Rogers St., Suite D, our administrative and clinical teams coordinate closely with patients, primary physicians, hospital discharge planners, and family caregivers. We prioritize personal comfort, dignity, and independence, ensuring continuous customer service available 24 hours a day, 7 days a week.',
      approachTitle: 'Our Approach to Care',
      approachSubtitle:
        'Supporting comfort, dignity, and independence in the familiar surroundings of home.',
      approachPillar1Title: 'Supporting Independence at Home',
      approachPillar1Desc:
        'We assist individuals with everyday personal care and daily living activities so they can safely and comfortably remain in their homes.',
      approachPillar2Title: 'Understanding Individual Care Needs',
      approachPillar2Desc:
        'Every patient is unique. We take the time to listen, evaluate routines, and tailor care plans to personal preferences and schedules.',
      approachPillar3Title: 'Exploring Care Options',
      approachPillar3Desc:
        'From daily homemaking and companion support to skilled nursing and therapy, we help families evaluate the right combination of services.',
      approachPillar4Title: 'Open Communication',
      approachPillar4Desc:
        'We maintain clear, timely communication with patients, family members, physicians, and care managers to keep everyone aligned.',
      approachPillar5Title: 'Guiding Long-Term Care Inquiries',
      approachPillar5Desc:
        'Our coordination team assists families with understanding the steps involved in Medicaid Long-Term Care and health plan authorizations.',
      approachPillar6Title: 'Local Pinellas & Pasco Commitment',
      approachPillar6Desc:
        'Based in Clearwater, Florida, our coordinators and caregivers are rooted in the communities we serve with prompt local dispatch.',
      valuesTitle: 'Our Operating Principles',
      valuesSubtitle: 'Core standards that guide our clinical staff and caregivers.',
      val1Title: 'Personal Dignity & Respect',
      val1Desc: 'We prioritize individual comfort, privacy, and independence in every care interaction.',
      val2Title: 'Clinical Standards',
      val2Desc: 'Care is coordinated under physician orders and delivered according to CHAP accreditation standards.',
      val3Title: '24/7 Availability',
      val3Desc: 'Administrative offices operate Monday through Friday, with customer service accessible round-the-clock.',
      val4Title: 'Local Focus',
      val4Desc: 'Headquartered in Clearwater, we serve patients throughout Pinellas and Pasco counties.',
      hoursNoticeTitle: 'Office & Customer Service Hours',
      hoursNoticeText:
        'Our administrative offices are open Monday through Friday from 8:30 AM to 5:00 PM. Customer service is available 24 hours a day, 7 days a week to support patient needs and provider inquiries.',
    },
    services: {
      pageTitle: 'Our Services',
      pageSubtitle:
        'Aura Home Health offers a range of Long-Term Care and Skilled Home Health services to support individuals and families with their healthcare and everyday care needs at home.',
      ltcHeader: 'Long-Term Care',
      ltcSub:
        'Our Long-Term Care services provide assistance with everyday activities, helping individuals maintain comfort and independence at home.',
      skilledHeader: 'Skilled Home Health',
      skilledSub:
        'Clinical care, rehabilitative therapies, and medical management delivered by licensed healthcare professionals.',
      pediatricNoticeHeader: 'Pediatric Home Health Aide Services',
      pediatricNoticeText:
        'Aura Home Health offers Pediatric Home Health Aide Services to children with Molina Healthcare and Simply Healthcare insurance.',
    },
    insurance: {
      pageTitle: 'Accepted Insurance',
      pageSubtitle:
        'We work with major insurance providers across Florida to provide accessible home health care.',
      disclaimer:
        'Insurance coverage and benefits depend on individual plan guidelines and physician orders. Our team will verify your benefits directly with your insurance provider prior to beginning services.',
      coverageExplanation:
        'Insurance coverage and eligibility may vary depending on the plan, requested services, and applicable authorization requirements. Contact Aura Home Health to discuss your insurance information and learn more about available care options.',
      understandingTitle: 'Understanding Insurance Requirements & Authorizations',
      understandingText:
        'Understanding insurance requirements is an essential part of arranging home healthcare. At Aura Home Health, we assist families with navigating questions about Medicaid Long-Term Care programs, commercial health plans, and required authorizations. Because coverage, benefit limits, and authorizations depend on individual plan guidelines and physician orders, not all plans cover every service. We encourage you to contact our Clearwater office for personal verification of your benefits.',
      planDisclaimer:
        'Coverage, eligibility, and service authorizations depend on individual health plan guidelines, Medicaid status, and physician orders. Listed insurance plans do not automatically guarantee coverage for every service. Please contact Aura Home Health for direct benefits verification.',
      ltcHeader: 'Long-Term Care',
      ltcSub:
        'Accepted insurance plans for personal care, homemaking, companion, and respite care services.',
      skilledHeader: 'Skilled Home Health',
      skilledSub:
        'Accepted insurance plans for skilled nursing, physical therapy, speech therapy, and clinical rehabilitation.',
      verificationHelpTitle: 'Insurance Verification Assistance',
      verificationHelpText:
        'Contact our Clearwater office to verify coverage, discuss authorized visits, and confirm plan eligibility.',
      callToVerify: 'Call (727) 329-7098 for Coverage Verification',
    },
    coverage: {
      pageTitle: 'Areas We Serve',
      pageSubtitle:
        'Providing professional home healthcare across Pinellas County and Pasco County in Florida.',
      introText:
        'Aura Home Health serves individuals and families throughout Pinellas and Pasco counties, Florida. Whether you or a loved one requires daily non-medical assistance through Long-Term Care or clinical rehabilitation through Skilled Home Health, our coordinated teams deliver reliable care directly to your residence across 19 local municipalities.',
      closingText:
        'Not sure whether your location is within our service area? Contact our office to confirm service availability in your community.',
      pinellasTitle: 'Pinellas County',
      pinellasSub: 'Clearwater headquarters and surrounding Pinellas communities',
      pascoTitle: 'Pasco County',
      pascoSub: 'West and central Pasco County communities',
      dispatchNotice:
        'If you reside in an adjacent community in the Tampa Bay area, contact our office at (727) 329-7098 to confirm caregiver availability in your area.',
    },
    contact: {
      pageTitle: 'Contact Us',
      pageSubtitle:
        'Connect with our care coordinators in Clearwater for service inquiries, insurance verification, and physician referrals.',
      officeDetailsTitle: 'Clearwater Office',
      callUsTitle: 'Telephone',
      emailUsTitle: 'Email',
      faxTitle: 'Fax',
      visitUsTitle: 'Office Address',
      hoursTitle: 'Office Hours',
      supportTitle: 'Customer Service',
      directionsCta: 'Directions in Google Maps',
      callCta: 'Call (727) 329-7098',
      emailCta: 'Email aurahhfl@gmail.com',
      patientsHeading: 'Looking for Home Healthcare Services?',
      patientsDescription:
        'Whether you\'re exploring home healthcare options for yourself or a loved one, our team can answer general questions about our services, accepted insurance plans, and coverage areas. Contact our office to learn more about the next steps.',
      referralsHeading: 'Physician & Professional Referrals',
      referralsDescription:
        'We welcome inquiries from physicians, healthcare providers, case managers, discharge planners, and other professionals seeking home healthcare services for their patients or clients. Contact our office to discuss referral procedures, service availability, and the information needed to begin the process.',
      careersHeading: 'Interested in Joining Our Team?',
      careersDescription:
        'Are you a Home Health Aide, Certified Nursing Assistant, Registered Nurse, therapist, or other healthcare professional interested in home healthcare opportunities? We welcome inquiries from qualified individuals who would like to learn more about working with Aura Home Health.',
      careersCta: 'Contact Us About Employment Opportunities',
      guidanceSectionTitle: 'Questions About Long-Term Care or Getting Started?',
      guidanceSectionText:
        'Navigating home healthcare options and Medicaid Long-Term Care can feel complex. Our Clearwater coordination team is always available to answer questions about the Medicaid LTC process, discuss individual care requirements, explore service options, and verify insurance benefits.',
      guidanceBulletsTitle: 'How Our Team Can Guide You:',
      guidanceBullet1: 'Questions about Long-Term Care services and daily living support',
      guidanceBullet2: 'Understanding the Medicaid Long-Term Care process and requirements',
      guidanceBullet3: 'Exploring appropriate home care options and clinician specialties',
      guidanceBullet4: 'Verifying accepted insurance plans and service authorizations',
    },
    careers: {
      pageTitle: 'Join Our Team',
      pageSubtitle:
        "Interested in working with Aura Home Health? We're always happy to hear from healthcare professionals interested in providing quality home care services throughout Pinellas and Pasco counties. Complete the form below to introduce yourself and tell us where you're available to work.",
      introLead:
        'Providing rewarding career opportunities for compassionate caregivers and licensed clinicians across Pinellas & Pasco counties.',
      formTitle: 'Employment Interest Form',
      formSubtitle:
        'Please complete this form to share your qualifications, language capabilities, and preferred service areas.',
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'Enter your full name',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '(727) 000-0000',
      emailLabel: 'Email Address',
      emailPlaceholder: 'name@example.com',
      positionsTitle: 'Position of Interest',
      positionsSubtitle: 'Select all positions you are qualified for and interested in (multiple selections allowed):',
      languagesTitle: 'Languages Spoken',
      languagesSubtitle: 'Select all languages you speak comfortably (multiple selections allowed):',
      otherLanguagePlaceholder: 'Please specify other language(s)...',
      preferredAreasTitle: 'Preferred Service Areas',
      preferredAreasSubtitle: 'Select all cities where you are willing to work across Pinellas & Pasco counties:',
      pinellasCountyTitle: 'Pinellas County',
      pascoCountyTitle: 'Pasco County',
      selectAll: 'Select All',
      clearAll: 'Clear',
      availabilityTitle: 'Availability',
      availabilitySubtitle: 'Select your preferred shift and schedule availability (optional):',
      additionalInfoLabel: 'Additional Information',
      additionalInfoPlaceholder: 'Share relevant experience, certifications, schedule preferences, or other general information...',
      submitButton: 'Submit Employment Interest',
      submittingButton: 'Submitting Inquiry...',
      privacyNotice:
        'Privacy Notice: Submitted information will be used exclusively to respond to your employment inquiry. Aura Home Health does not collect Social Security numbers, identification documents, medical records, or other sensitive information on this form.',
      gatewayStatusLabel: 'Submission Service Status',
      gatewayPendingNotice: 'Ready for Direct Email Dispatch (Awaiting Live Gateway Endpoint)',
      gatewayConnectedNotice: 'Live Backend Gateway Connected & Ready',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      insurance: 'Seguros Aceptados',
      coverage: 'Áreas de Cobertura',
      careers: 'Empleo',
      contact: 'Contáctenos',
      callNow: '(727) 329-7098',
      callNowLabel: 'Llamar (727) 329-7098',
      officeHours: 'Lun – Vie: 8:30 AM – 5:00 PM',
      support247: 'Atención 24/7',
      toggleLanguage: 'English',
    },
    common: {
      agencyName: 'Aura Home Health',
      agencyTagline: 'Atención médica profesional en el hogar en Clearwater, Florida.',
      phoneLabel: 'Teléfono',
      faxLabel: 'Fax',
      emailLabel: 'Correo Electrónico',
      addressLabel: 'Dirección de Oficina',
      hoursLabel: 'Horario de Oficina',
      service247Label: 'Atención al Cliente',
      viewAllServices: 'Nuestros Servicios',
      contactUsToday: 'Contáctenos',
      verifyCoverage: 'Seguros Que Aceptamos',
      exploreAreas: 'Áreas Que Servimos',
      pediatricTitle: 'Servicios de Asistente de Salud en el Hogar Pediátrico',
      pediatricBadge: 'Atención Pediátrica',
      pediatricDescription:
        'Aura Home Health ofrece Servicios de Asistente de Salud en el Hogar Pediátrico a niños con los seguros de Molina Healthcare y Simply Healthcare.',
      ltcTitle: 'Cuidado a Largo Plazo',
      ltcSubtitle: 'Asistencia con el cuidado personal y las actividades de la vida diaria para apoyar la independencia en el hogar.',
      skilledTitle: 'Servicios Médicos Calificados',
      skilledSubtitle: 'Atención médica y terapias de rehabilitación brindadas por enfermeras y terapeutas licenciados.',
      chapAccredited: 'Acreditación CHAP',
      chapDescription: 'Acreditada por Community Health Accreditation Partner (CHAP), fundada en 1965.',
      quickLinks: 'Enlaces Rápidos',
      allRightsReserved: 'Todos los derechos reservados.',
    },
    home: {
      heroKicker: 'Clearwater, Florida',
      heroHeadline: 'Servicios Profesionales de Salud en el Hogar',
      heroSubheadline:
        'Aura Home Health brinda servicios de Cuidado a Largo Plazo y Salud en el Hogar Calificada a personas y familias en los condados de Pinellas y Pasco, Florida.',
      heroCtaServices: 'Nuestros Servicios',
      heroCtaContact: 'Contáctenos',
      introTitle: 'Acerca de Aura Home Health',
      introLead:
        'Con sede en Clearwater, Florida, Aura Home Health brinda servicios confiables de atención médica y apoyo personal en el hogar.',
      introBody:
        'Trabajamos estrechamente con médicos, coordinadores de altas hospitalarias, pacientes y sus familias para planificar una atención individualizada. Nuestro enfoque se centra en comprender las necesidades únicas de cada persona, apoyar la independencia en el hogar y brindar una orientación clara y compasiva en cada etapa de la atención, desde el cuidado a largo plazo hasta la rehabilitación clínica calificada en los condados de Pinellas y Pasco.',
      carePillarsTitle: 'Nuestros Servicios de Salud en el Hogar',
      carePillarsSubtitle:
        'Ofrecemos dos programas bien diferenciados: Cuidado a Largo Plazo para asistencia diaria y Servicios Calificados para rehabilitación clínica.',
      whyChooseTitle: 'Por Qué Médicos y Familias Eligen Aura',
      whyChooseSubtitle:
        'Atención clínica responsable, apoyo humano y comunicación oportuna para cada paciente.',
      guidanceKicker: 'Orientación Integral',
      guidanceTitle: 'Orientación Más Allá del Cuidado en el Hogar',
      guidanceDescription:
        'Navegar por las opciones de cuidado a largo plazo, los programas de Medicaid y la planificación de horarios puede ser abrumador. Más allá de brindar cuidadores experimentados y enfermeras, nuestro equipo en Clearwater ayuda a las familias a comprender el proceso, explorar las opciones de atención disponibles y encontrar el camino adecuado para sus seres queridos.',
      guidanceCta: 'Conozca Más Sobre Cuidado a Largo Plazo',
      insuranceBannerTitle: 'Seguros Aceptados',
      insuranceBannerSubtitle:
        'Aceptamos una amplia variedad de planes médicos, incluidos Medicare Original, Sunshine Health, Molina, Simply Healthcare, Aetna, Humana y Florida Blue.',
      coverageBannerTitle: 'Áreas Que Servimos',
      coverageBannerSubtitle:
        'Atención en comunidades de los condados de Pinellas y Pasco con despacho directo desde nuestra oficina en Clearwater.',
    },
    about: {
      pageTitle: 'Acerca de Aura Home Health',
      pageSubtitle:
        'Agencia de salud en el hogar con sede en Clearwater, Florida, al servicio de los condados de Pinellas y Pasco.',
      introTitle: 'Atención Dedicada en el Hogar',
      introParagraph1:
        'Aura Home Health es una agencia de salud en el hogar con sede en Clearwater, Florida, que atiende a personas y familias en los condados de Pinellas y Pasco. Ofrecemos servicios de Cuidado a Largo Plazo y Salud en el Hogar Calificada diseñados para brindar apoyo a quienes necesitan asistencia en la comodidad de su propio hogar.',
      introParagraph2:
        'Nuestro enfoque prioriza el apoyo individualizado, la comunicación clara y el respeto por las necesidades y preferencias de cada persona. Ya sea que alguien requiera ayuda con las actividades cotidianas o atención médica calificada, nuestro objetivo es ayudar a los pacientes y sus familias a comprender mejor sus opciones de cuidado.',
      introParagraph3:
        'Desde nuestra oficina en Clearwater en 1250 Rogers St., Suite D, nuestros equipos administrativos y clínicos coordinan de cerca con pacientes, médicos primarios, coordinadores hospitalarios y familiares. Priorizamos la comodidad personal, la dignidad y la independencia, con atención continua disponible las 24 horas del día, los 7 días de la semana.',
      approachTitle: 'Nuestro Enfoque de Atención',
      approachSubtitle:
        'Apoyo compasivo e individualizado diseñado para fomentar la dignidad, la comodidad y la independencia en el hogar.',
      approachPillar1Title: 'Apoyo a la Independencia en el Hogar',
      approachPillar1Desc:
        'Ayudamos a las personas con el cuidado personal y las actividades cotidianas para que puedan permanecer de manera segura y cómoda en sus hogares.',
      approachPillar2Title: 'Comprensión de Necesidades Individuales',
      approachPillar2Desc:
        'Cada paciente es único. Nos tomamos el tiempo para escuchar, evaluar rutinas y adaptar los planes de atención a las preferencias y horarios personales.',
      approachPillar3Title: 'Exploración de Opciones de Atención',
      approachPillar3Desc:
        'Desde tareas del hogar y compañía diaria hasta enfermería calificada y terapias, ayudamos a las familias a evaluar la combinación adecuada de servicios.',
      approachPillar4Title: 'Comunicación Abierta y Continua',
      approachPillar4Desc:
        'Mantenemos una comunicación clara y oportuna con pacientes, familiares, médicos y administradores de casos para mantener a todos alineados.',
      approachPillar5Title: 'Orientación en Cuidado a Largo Plazo',
      approachPillar5Desc:
        'Nuestro equipo de coordinación asiste a las familias a comprender los pasos involucrados en el programa de Medicaid Long-Term Care y autorizaciones de planes.',
      approachPillar6Title: 'Compromiso Local en Pinellas y Pasco',
      approachPillar6Desc:
        'Con sede en Clearwater, Florida, nuestros coordinadores y cuidadores están profundamente arraigados en las comunidades que servimos.',
      valuesTitle: 'Nuestros Principios de Operación',
      valuesSubtitle: 'Normas fundamentales que guían a nuestro personal clínico.',
      val1Title: 'Dignidad y Respeto',
      val1Desc: 'Priorizamos la comodidad personal, la privacidad y la autonomía en cada visita de atención.',
      val2Title: 'Normas Clínicas',
      val2Desc: 'La atención se coordina bajo prescripción médica y sigue las normas de acreditación CHAP.',
      val3Title: 'Disponibilidad 24/7',
      val3Desc: 'Oficinas de lunes a viernes y atención telefónica continua las 24 horas los 7 días de la semana.',
      val4Title: 'Enfoque Local',
      val4Desc: 'Con sede en Clearwater, atendemos a pacientes de los condados de Pinellas y Pasco.',
      hoursNoticeTitle: 'Horario de Oficina y Atención al Cliente',
      hoursNoticeText:
        'Nuestras oficinas administrativas están abiertas de lunes a viernes de 8:30 AM a 5:00 PM. La atención al cliente está disponible las 24 horas del día, los 7 días de la semana para atender emergencias y solicitudes de atención.',
    },
    services: {
      pageTitle: 'Nuestros Servicios',
      pageSubtitle:
        'Aura Home Health ofrece una variedad de servicios de Cuidado a Largo Plazo y Salud en el Hogar Calificada para apoyar a personas y familias con sus necesidades médicas y de cuidado diario en el hogar.',
      ltcHeader: 'Cuidado a Largo Plazo',
      ltcSub:
        'Nuestros servicios de Cuidado a Largo Plazo brindan asistencia con las actividades cotidianas, ayudando a las personas a mantener la comodidad y la independencia en el hogar.',
      skilledHeader: 'Salud en el Hogar Calificada',
      skilledSub:
        'Atención médica, terapias de rehabilitación y control clínico administrados por profesionales licenciados.',
      pediatricNoticeHeader: 'Servicios Pediátricos de Asistente de Salud en el Hogar',
      pediatricNoticeText:
        'Aura Home Health ofrece servicios de Home Health Aide (HHA) a niños con los seguros de Molina Healthcare y Simply Healthcare.',
    },
    insurance: {
      pageTitle: 'Seguros Aceptados',
      pageSubtitle:
        'Trabajamos con las principales aseguradoras de Florida para facilitar el acceso a la atención médica en el hogar.',
      disclaimer:
        'La cobertura y los beneficios dependen de la póliza de cada paciente y de las órdenes del médico. Nuestro equipo verificará sus beneficios directamente con su aseguradora antes de iniciar los servicios.',
      coverageExplanation:
        'La cobertura y la elegibilidad del seguro pueden variar según el plan, los servicios solicitados y los requisitos de autorización aplicables. Comuníquese con Aura Home Health para revisar la información de su seguro y conocer las opciones de atención disponibles.',
      understandingTitle: 'Comprensión de Requisitos de Seguro y Autorizaciones',
      understandingText:
        'Comprender los requisitos del seguro es una parte esencial al organizar la atención médica en el hogar. En Aura Home Health, ayudamos a las familias con preguntas sobre los programas de Medicaid Long-Term Care, planes de salud comerciales y las autorizaciones requeridas. Debido a que la cobertura, los límites de beneficios y las autorizaciones dependen de las directrices individuales del plan y las órdenes médicas, no todos los planes cubren todos los servicios. Le invitamos a comunicarse con nuestra oficina en Clearwater para una verificación personalizada de sus beneficios.',
      planDisclaimer:
        'La cobertura, la elegibilidad y las autorizaciones de servicios dependen de las directrices individuales del plan médico, el estado de Medicaid y las órdenes médicas. Los planes de seguro listados no garantizan automáticamente la cobertura de todos los servicios. Comuníquese con Aura Home Health para la verificación directa de beneficios.',
      ltcHeader: 'Cuidado a Largo Plazo',
      ltcSub:
        'Planes de seguro aceptados para cuidado personal, tareas del hogar, compañía y cuidado de relevo.',
      skilledHeader: 'Salud en el Hogar Calificada',
      skilledSub:
        'Planes de seguro aceptados para enfermería calificada, fisioterapia, terapia del habla y rehabilitación clínica.',
      verificationHelpTitle: 'Asistencia para Verificación de Seguro',
      verificationHelpText:
        'Comuníquese con nuestra oficina en Clearwater para verificar su cobertura y confirmar la elegibilidad de su plan.',
      callToVerify: 'Llamar al (727) 329-7098 para Verificar Cobertura',
    },
    coverage: {
      pageTitle: 'Áreas Que Servimos',
      pageSubtitle:
        'Servicios de salud en el hogar en los condados de Pinellas y Pasco en Florida.',
      introText:
        'Aura Home Health atiende a personas y familias en los condados de Pinellas y Pasco, Florida. Ya sea que usted o un ser querido requiera asistencia diaria no médica mediante Cuidado a Largo Plazo o rehabilitación clínica mediante Salud en el Hogar Calificada, nuestros equipos coordinados brindan atención confiable directamente en su residencia en 19 municipios locales.',
      closingText:
        '¿No está seguro si su ubicación está dentro de nuestra área de servicio? Comuníquese con nuestra oficina para confirmar la disponibilidad en su comunidad.',
      pinellasTitle: 'Condado de Pinellas',
      pinellasSub: 'Sede en Clearwater y comunidades costeras circundantes',
      pascoTitle: 'Condado de Pasco',
      pascoSub: 'Comunidades del oeste y centro del condado de Pasco',
      dispatchNotice:
        'Si reside en una comunidad adyacente en el área de Tampa Bay, comuníquese con nuestra oficina al (727) 329-7098 para confirmar la disponibilidad de personal.',
    },
    contact: {
      pageTitle: 'Contáctenos',
      pageSubtitle:
        'Comuníquese con nuestros coordinadores en Clearwater para consultas sobre servicios, verificación de seguros y remisiones médicas.',
      officeDetailsTitle: 'Oficina en Clearwater',
      callUsTitle: 'Teléfono',
      emailUsTitle: 'Correo Electrónico',
      faxTitle: 'Fax',
      visitUsTitle: 'Dirección de Oficina',
      hoursTitle: 'Horario de Oficina',
      supportTitle: 'Atención al Cliente',
      directionsCta: 'Direcciones en Google Maps',
      callCta: 'Llamar al (727) 329-7098',
      emailCta: 'Escribir a aurahhfl@gmail.com',
      patientsHeading: '¿Busca Servicios de Salud en el Hogar?',
      patientsDescription:
        'Ya sea que esté explorando opciones de atención para usted o un ser querido, nuestro equipo puede responder preguntas generales sobre nuestros servicios, planes de seguro aceptados y áreas de cobertura. Comuníquese con nuestra oficina para conocer los siguientes pasos.',
      referralsHeading: 'Remisiones Médicas y Profesionales',
      referralsDescription:
        'Recibimos consultas de médicos, proveedores de atención médica, administradores de casos, planificadores de alta y otros profesionales que buscan servicios de salud en el hogar para sus pacientes. Comuníquese con nuestra oficina para consultar los procedimientos de remisión y la información necesaria.',
      careersHeading: '¿Interesado en Unirse a Nuestro Equipo?',
      careersDescription:
        '¿Es usted Asistente de Salud en el Hogar, CNA, Enfermera Registrada, terapeuta u otro profesional de la salud interesado en oportunidades de atención médica en el hogar? Agradecemos las consultas de personas calificadas que deseen conocer más sobre trabajar con Aura Home Health.',
      careersCta: 'Consultar sobre Oportunidades de Empleo',
      guidanceSectionTitle: 'Orientación sobre Cuidado a Largo Plazo y Opciones de Atención',
      guidanceSectionText:
        'Si usted o un ser querido está explorando asistencia en el hogar o tiene preguntas sobre el programa de Medicaid Long-Term Care, nuestros coordinadores de atención están a su disposición. Comuníquese con nuestra oficina en Clearwater para conversar sobre su situación:',
      guidanceBulletsTitle: 'Cómo Puede Guiarle Nuestro Equipo:',
      guidanceBullet1: 'Preguntas sobre servicios de Cuidado a Largo Plazo y asistencia en la vida diaria',
      guidanceBullet2: 'Comprensión del proceso y los requisitos de Medicaid Long-Term Care',
      guidanceBullet3: 'Exploración de opciones de atención en el hogar y especialidades clínicas',
      guidanceBullet4: 'Verificación de planes de seguro aceptados y autorizaciones de servicio',
    },
    careers: {
      pageTitle: 'Únase a Nuestro Equipo',
      pageSubtitle:
        '¿Interesado en trabajar con Aura Home Health? Siempre nos complace escuchar a profesionales de la salud interesados en brindar servicios de atención domiciliaria de calidad en los condados de Pinellas y Pasco. Complete el formulario a continuación para presentarse e indicarnos dónde está disponible para trabajar.',
      introLead:
        'Oportunidades profesionales enriquecedoras para cuidadores compasivos y profesionales clínicos en los condados de Pinellas y Pasco.',
      formTitle: 'Formulario de Interés de Empleo',
      formSubtitle:
        'Complete este formulario para compartir sus cualificaciones, idiomas y áreas de servicio preferidas.',
      fullNameLabel: 'Nombre Completo',
      fullNamePlaceholder: 'Ingrese su nombre completo',
      phoneLabel: 'Número de Teléfono',
      phonePlaceholder: '(727) 000-0000',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'correo@ejemplo.com',
      positionsTitle: 'Posición de Interés',
      positionsSubtitle: 'Seleccione todas las posiciones para las que esté calificado e interesado (permite selección múltiple):',
      languagesTitle: 'Idiomas Que Domina',
      languagesSubtitle: 'Seleccione todos los idiomas que habla con fluidez (permite selección múltiple):',
      otherLanguagePlaceholder: 'Especifique otro(s) idioma(s)...',
      preferredAreasTitle: 'Áreas de Servicio Preferidas',
      preferredAreasSubtitle: 'Seleccione todas las ciudades donde esté dispuesto a trabajar en Pinellas y Pasco:',
      pinellasCountyTitle: 'Condado de Pinellas',
      pascoCountyTitle: 'Condado de Pasco',
      selectAll: 'Seleccionar Todos',
      clearAll: 'Limpiar',
      availabilityTitle: 'Disponibilidad',
      availabilitySubtitle: 'Seleccione sus preferencias de turno y horario (opcional):',
      additionalInfoLabel: 'Información Adicional',
      additionalInfoPlaceholder: 'Comparta experiencia relevante, certificaciones, preferencias de horario u otra información general...',
      submitButton: 'Enviar Interés de Empleo',
      submittingButton: 'Enviando Solicitud...',
      privacyNotice:
        'Aviso de Privacidad: La información enviada se utilizará exclusivamente para responder a su consulta de empleo. Aura Home Health no recopila números de Seguro Social, documentos de identidad, registros médicos ni otra información confidencial en este formulario.',
      gatewayStatusLabel: 'Estado del Servicio de Envío',
      gatewayPendingNotice: 'Listo para Envío Directo por Correo (En espera de endpoint activo)',
      gatewayConnectedNotice: 'Pasarela de Envío Conectada y Lista',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('aura_lang');
    return saved === 'es' ? 'es' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('aura_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
