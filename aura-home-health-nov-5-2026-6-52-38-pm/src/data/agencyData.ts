export const AGENCY_CONTACT = {
  name: 'Aura Home Health',
  tagline: 'Professional, compassionate, and quality healthcare in the comfort of your home.',
  address: {
    street: '1250 Rogers St., Suite D',
    city: 'Clearwater',
    state: 'FL',
    zip: '33756',
    full: '1250 Rogers St., Suite D, Clearwater, FL 33756',
    googleMapsUrl: 'https://maps.google.com/?q=1250+Rogers+St+Suite+D+Clearwater+FL+33756',
  },
  phone: {
    display: '(727) 329-7098',
    raw: '+17273297098',
    telLink: 'tel:7273297098',
  },
  fax: {
    display: '(727) 353-3124',
    raw: '+17273533124',
  },
  email: {
    address: 'aurahhfl@gmail.com',
    mailLink: 'mailto:aurahhfl@gmail.com?subject=Aura%20Home%20Health%20Inquiry',
  },
  hours: {
    office: '8:30 AM – 5:00 PM (Monday – Friday)',
    officeEs: '8:30 AM – 5:00 PM (Lunes a Viernes)',
    customerService: '24 hours a day, 7 days a week (24/7)',
    customerServiceEs: '24 horas al día, 7 días a la semana (24/7)',
  },
  accreditation: {
    seal: 'CHAP Accredited',
    sealDescription: 'Seal of Accreditation by Community Health Accreditation Partner (CHAP), Est. 1965',
  },
};

export const LTC_SERVICES = [
  {
    id: 'personal-care',
    titleEn: 'Personal Care',
    titleEs: 'Cuidado Personal',
    descEn:
      'Assistance with everyday personal routines, including bathing, dressing, grooming, and mobility. Designed for individuals who need hands-on support with activities of daily living to maintain comfort, personal dignity, and safety at home.',
    descEs:
      'Asistencia con las rutinas personales cotidianas, incluyendo el baño, vestirse, arreglo personal y movilidad. Diseñado para personas que necesitan apoyo práctico con las actividades de la vida diaria para mantener comodidad, dignidad personal y seguridad en el hogar.',
    highlights: ['Bathing & Grooming', 'Dressing Assistance', 'Hygiene & Toileting', 'Transfer & Mobility Support'],
    highlightsEs: ['Baño y Aseo Personal', 'Ayuda para Vestirse', 'Higiene y Cuidado Personal', 'Apoyo de Movilidad y Traslado'],
  },
  {
    id: 'homemaker-services',
    titleEn: 'Homemaker Services',
    titleEs: 'Servicios del Hogar',
    descEn:
      'Help with light housekeeping, laundry, meal preparation, and maintaining a comfortable home environment. Ideal for seniors and recovering individuals who benefit from assistance keeping their living spaces clean, organized, and functional.',
    descEs:
      'Ayuda con tareas domésticas ligeras, lavado de ropa, preparación de comidas y el mantenimiento de un entorno cómodo en el hogar. Ideal para adultos mayores y personas en recuperación que se benefician de ayuda práctica para mantener sus espacios limpios y funcionales.',
    highlights: ['Light Housekeeping', 'Meal Planning & Prep', 'Linen Change & Laundry', 'Errands & Household Tasks'],
    highlightsEs: ['Tareas Ligeras del Hogar', 'Preparación de Comidas', 'Cambio de Ropa y Lavandería', 'Diligencias y Tareas del Hogar'],
  },
  {
    id: 'companion-services',
    titleEn: 'Companion Services',
    titleEs: 'Servicios de Compañía',
    descEn:
      'Companionship, conversation, social engagement, and assistance with appropriate everyday activities. Beneficial for older adults seeking regular socialization, cognitive engagement, and supportive accompaniment with daily routines or recreational pastimes.',
    descEs:
      'Compañía, conversación, interacción social y asistencia con actividades cotidianas apropiadas. Muy beneficioso para adultos mayores que buscan socialización regular, estimulación cognitiva y acompañamiento cercano en sus rutinas diarias.',
    highlights: ['Social Interaction', 'Companionship', 'Daily Routine Support', 'Friendly Conversation'],
    highlightsEs: ['Interacción Social', 'Compañía Cercana', 'Apoyo en Rutinas Diarias', 'Conversación Agradable'],
  },
  {
    id: 'respite-care',
    titleEn: 'Respite Care',
    titleEs: 'Cuidado de Relevo',
    descEn:
      'Temporary support that gives family members and primary caregivers time to attend to other responsibilities or rest, while ensuring their loved one receives continuous, attentive, and reliable care at home.',
    descEs:
      'Apoyo temporal que brinda a familiares y cuidadores principales tiempo para atender otras responsabilidades o descansar, con la tranquilidad de que su ser querido recibe una atención continua, atenta y confiable en el hogar.',
    highlights: ['Family Caregiver Relief', 'Flexible Scheduling', 'Safe Supervision', 'Peace of Mind for Families'],
    highlightsEs: ['Alivio para Cuidadores Familiares', 'Horarios Flexibles', 'Supervisión Segura', 'Tranquilidad Familiar'],
  },
];

export const SKILLED_SERVICES = [
  {
    id: 'registered-nurse-services',
    titleEn: 'Registered Nurse Services',
    titleEs: 'Servicios de Enfermera Registrada',
    descEn:
      'Clinical care coordinated under physician orders, including comprehensive health assessments, vital sign monitoring, medication management, wound care, and post-hospitalization monitoring to support patient recovery at home.',
    descEs:
      'Atención clínica coordinada bajo indicación médica, incluyendo evaluaciones integrales de salud, control de signos vitales, administración de medicamentos, curación de heridas y seguimiento posthospitalario para apoyar la recuperación en el hogar.',
    highlights: ['Wound & Dressing Care', 'Medication Management', 'Post-Surgical Care', 'Chronic Disease Monitoring'],
    highlightsEs: ['Curación de Heridas', 'Administración de Medicamentos', 'Cuidados Postoperatorios', 'Control de Enfermedades Crónicas'],
  },
  {
    id: 'physical-therapy',
    titleEn: 'Physical Therapy',
    titleEs: 'Fisioterapia',
    descEn:
      'Personalized in-home rehabilitation focused on restoring physical mobility, rebuilding strength, improving balance, and establishing safe transfer techniques to help patients move with greater confidence and reduce fall risk.',
    descEs:
      'Rehabilitación física personalizada en el hogar orientada a restaurar la movilidad, recuperar fuerza muscular, mejorar el equilibrio y practicar transferencias seguras para aumentar la confianza y prevenir caídas.',
    highlights: ['Gait & Balance Training', 'Strengthening Exercises', 'Fall Prevention Strategies', 'Pain Management'],
    highlightsEs: ['Entrenamiento de Marcha y Equilibrio', 'Ejercicios de Fortalecimiento', 'Prevención de Caídas', 'Manejo del Dolor'],
  },
  {
    id: 'occupational-therapy',
    titleEn: 'Occupational Therapy',
    titleEs: 'Terapia Ocupacional',
    descEn:
      'Therapeutic guidance to help patients regain independence with essential daily activities, enhance fine motor coordination, and safely utilize adaptive household tools and mobility aids throughout the home.',
    descEs:
      'Orientación terapéutica para ayudar a los pacientes a recuperar su autonomía en las actividades cotidianas, fortalecer la coordinación motora fina y utilizar equipos adaptativos de manera segura en el hogar.',
    highlights: ['Adaptive Device Training', 'Home Safety Assessment', 'Fine Motor Skills', 'Upper Body Strengthening'],
    highlightsEs: ['Uso de Equipos Adaptativos', 'Evaluación de Seguridad en el Hogar', 'Motricidad Fina', 'Fortalecimiento de Extremidades'],
  },
  {
    id: 'medical-social-work-services',
    titleEn: 'Medical Social Work Services',
    titleEs: 'Servicios de Trabajo Social Médico',
    descEn:
      'Professional counseling, care coordination, family guidance, and assistance navigating community resources, social services, and long-term care options to support emotional well-being and practical needs.',
    descEs:
      'Orientación profesional, coordinación de cuidados, apoyo familiar y asistencia para acceder a recursos comunitarios, servicios sociales y opciones de atención a largo plazo para el bienestar integral del paciente.',
    highlights: ['Community Resources', 'Care Planning & Counseling', 'Family Advocacy', 'Crisis Support'],
    highlightsEs: ['Recursos Comunitarios', 'Planificación de Cuidados', 'Apoyo Familiar', 'Apoyo en Situaciones Críticas'],
  },
  {
    id: 'speech-therapy',
    titleEn: 'Speech Therapy',
    titleEs: 'Terapia del Habla',
    descEn:
      'Targeted clinical evaluation and therapy for speech articulation, language comprehension, cognitive-communication recovery, and safe swallowing techniques (dysphagia management) following illness or injury.',
    descEs:
      'Evaluación y tratamiento clínico especializado para la articulación del habla, comprensión del lenguaje, recuperación cognitivo-comunicativa y técnicas seguras para tragar (manejo de disfagia) tras una enfermedad o lesión.',
    highlights: ['Swallowing Rehabilitation', 'Speech & Articulation', 'Cognitive Recovery', 'Communication Aids'],
    highlightsEs: ['Rehabilitación de la Deglución', 'Habla y Articulación', 'Recuperación Cognitiva', 'Apoyo para la Comunicación'],
  },
  {
    id: 'home-health-aide-services',
    titleEn: 'Home Health Aide Services',
    titleEs: 'Servicios de Asistente de Salud en el Hogar',
    descEn:
      'Hands-on personal care and health monitoring delivered under the supervision of a Registered Nurse, including assistance with bathing, grooming, routine vital sign checks, and supportive comfort care.',
    descEs:
      'Asistencia personalizada y monitoreo básico de salud bajo la supervisión directa de una enfermera registrada, incluyendo apoyo con el baño, aseo personal, revisión de signos vitales y cuidados de bienestar.',
    highlights: ['Vital Sign Checks', 'Direct Personal Hygiene', 'Supervised Care', 'Gentle Exercise Support'],
    highlightsEs: ['Control de Signos Vitales', 'Higiene Personal Directa', 'Atención Supervisada', 'Ejercicios Suaves Asistidos'],
  },
];

export const PEDIATRIC_SERVICES = {
  titleEn: 'Pediatric Home Health Aide Services',
  titleEs: 'Servicios de Asistente de Salud en el Hogar Pediátrico',
  summaryEn:
    'Aura Home Health provides dedicated Pediatric Home Health Aide Services designed to support children who require non-clinical daily living assistance, personal care support, and attentive supervision in the familiar comfort of their family home. Services are available to qualifying children with coverage through Molina Healthcare and Simply Healthcare.',
  summaryEs:
    'Aura Home Health brinda Servicios de Asistente de Salud en el Hogar Pediátrico diseñados para apoyar a niños que requieren asistencia con actividades diarias, cuidado personal y supervisión atenta en la comodidad de su hogar familiar. Servicios disponibles para niños con cobertura elegible a través de Molina Healthcare y Simply Healthcare.',
  qualifyingPlans: ['Molina Healthcare', 'Simply Healthcare'],
  serviceType: 'Pediatric Home Health Aide Services',
};

export const LTC_INSURANCE_PROVIDERS = [
  { name: 'Sunshine Health', note: 'Medicaid Long-Term Care' },
  { name: 'Molina Healthcare', note: 'Long-Term Care Managed Care' },
  { name: 'Simply Healthcare', note: 'Long-Term Care Plan' },
  { name: 'Florida Community Care', note: 'Long-Term Care Managed Care' },
  { name: 'Aetna', note: 'Long-Term Care Coverage' },
];

export const SKILLED_INSURANCE_PROVIDERS = [
  { name: 'Original Medicare', note: 'Part A & Part B Coverage' },
  { name: 'Sunshine Health', note: 'Skilled Care Network' },
  { name: 'Ambetter', note: 'Health Exchange / Marketplace' },
  { name: 'Simply Healthcare', note: 'Medicaid & Medicare Plans' },
  { name: 'CarePlus', note: 'Medicare Advantage Plans' },
  { name: 'Molina Healthcare', note: 'Skilled Nursing & Therapy Network' },
  { name: 'Florida Blue', note: 'Commercial & Medicare Blue Plans' },
  { name: 'Aetna', note: 'Skilled Home Health Network' },
  { name: 'Humana', note: 'Medicare Advantage & Commercial Plans' },
];

export const COVERAGE_AREAS = [
  {
    countyEn: 'Pinellas County',
    countyEs: 'Condado de Pinellas',
    descriptionEn: 'Serving coastal and inland communities across Pinellas County from our Clearwater headquarters.',
    descriptionEs: 'Sirviendo a las comunidades costeras y urbanas del condado de Pinellas desde nuestra sede en Clearwater.',
    cities: [
      'Clearwater',
      'Largo',
      'Dunedin',
      'Palm Harbor',
      'Safety Harbor',
      'Tarpon Springs',
      'St. Petersburg',
      'Seminole',
      'Pinellas Park',
      'Oldsmar',
      'Belleair',
      'Gulfport',
    ],
  },
  {
    countyEn: 'Pasco County',
    countyEs: 'Condado de Pasco',
    descriptionEn: 'Providing skilled medical care and long-term companion services throughout west and central Pasco.',
    descriptionEs: 'Brindando atención médica calificada y servicios de apoyo en todo el oeste y centro del condado de Pasco.',
    cities: [
      'New Port Richey',
      'Holiday',
      'Trinity',
      'Wesley Chapel',
      'Land O\' Lakes',
      'Zephyrhills',
      'Dade City',
    ],
  },
];
