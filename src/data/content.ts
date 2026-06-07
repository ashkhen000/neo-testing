// All website content. Multi-language. No hardcoded strings inside components.

export type Lang = "en" | "es";

export const uiContent = {
  en: {
    nav: { home: "Home", services: "Services", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "Window & Door Systems",
      title: "Light, comfort and design for every home.",
      subtitle:
        "Neocristal designs and installs reliable window and door systems for modern, everyday homes.",
      cta: "Explore Services",
    },
    gallery: { title: "Inspiration", subtitle: "Real spaces, real homes." },
    servicesPreview: {
      title: "What we do",
      subtitle: "Two specialties, designed and installed with care.",
      cta: "View details",
    },
    aboutPreview: { cta: "Learn more about us" },
    contact: {
      title: "Get in touch",
      subtitle: "Tell us about your project — we'll reply within 24h.",
      name: "Name",
      surname: "Surname",
      phone: "Phone",
      userType: "I am a…",
      individual: "Individual",
      business: "Business",
      message: "Message (optional)",
      send: "Send message",
      sent: "Thanks! We'll get back to you shortly.",
      address: "Address",
      hours: "Opening hours",
    },
    service: {
      systemsTitle: "Systems we offer",
      benefitsTitle: "Benefits",
      processTitle: "Our process",
      galleryTitle: "Project gallery",
      backToServices: "← All services",
      ctaContact: "Request a quote",
    },
    footer: {
      tagline: "Designed openings for everyday living.",
      rights: "All rights reserved.",
    },
    loading: "Loading",
  },
  es: {
    nav: { home: "Inicio", services: "Servicios", about: "Nosotros", contact: "Contacto" },
    hero: {
      eyebrow: "Sistemas de Ventanas y Puertas",
      title: "Luz, confort y diseño para cada hogar.",
      subtitle:
        "Neocristal diseña e instala sistemas fiables de ventanas y puertas para hogares modernos.",
      cta: "Ver Servicios",
    },
    gallery: { title: "Inspiración", subtitle: "Espacios reales, hogares reales." },
    servicesPreview: {
      title: "Qué hacemos",
      subtitle: "Dos especialidades, diseñadas e instaladas con cuidado.",
      cta: "Ver detalles",
    },
    aboutPreview: { cta: "Conócenos mejor" },
    contact: {
      title: "Contáctanos",
      subtitle: "Cuéntanos sobre tu proyecto — respondemos en menos de 24 h.",
      name: "Nombre",
      surname: "Apellido",
      phone: "Teléfono",
      userType: "Soy…",
      individual: "Particular",
      business: "Empresa",
      message: "Mensaje (opcional)",
      send: "Enviar mensaje",
      sent: "¡Gracias! Te contactaremos en breve.",
      address: "Dirección",
      hours: "Horario",
    },
    service: {
      systemsTitle: "Sistemas que ofrecemos",
      benefitsTitle: "Beneficios",
      processTitle: "Nuestro proceso",
      galleryTitle: "Galería del proyecto",
      backToServices: "← Todos los servicios",
      ctaContact: "Solicitar presupuesto",
    },
    footer: {
      tagline: "Aberturas diseñadas para el día a día.",
      rights: "Todos los derechos reservados.",
    },
    loading: "Cargando",
  },
} as const;

export const aboutData = {
  en: {
    title: "About Neocristal",
    description:
      "Neocristal is a provider and installer of high-quality glazing systems, pergolas, and roofing solutions.",
    values: ["Professional expertise", "High-quality materials", "Efficiency", "Customer satisfaction"],
  },
  es: {
    title: "Sobre Neocristal",
    description:
      "Neocristal es proveedor e instalador de sistemas de acristalamiento de alta calidad.",
    values: ["Profesionalidad", "Materiales de calidad", "Eficiencia", "Satisfacción del cliente"],
  },
} as const;

export const contactData = {
  en: {
    address: "Calle del Asteroide, 26, Alicante",
    phone: "(+34) 642 806 026",
    email: "info@neocristal.com",
    hours: "Monday – Friday: 09:00 – 19:00",
  },
  es: {
    address: "Calle del Asteroide, 26, Alicante",
    phone: "(+34) 642 806 026",
    email: "info@neocristal.com",
    hours: "Lunes – Viernes: 09:00 – 19:00",
  },
} as const;

// Generic services overview (used on /services index)
export const servicesData = {
  en: {
    title: "Windows and Doors",
    subtitle: "Design, light, and comfort in every opening",
    description:
      "At Neocristal, we understand that a window or a door is more than just a functional element. It's light, insulation, everyday comfort, and an essential part of your home's design.",
    systems: [
      "Casement windows",
      "Tilt & turn windows",
      "Sliding windows",
      "Large-format sliding doors",
      "Manual and motorized doors",
    ],
    benefits: [
      "High thermal insulation → lower energy consumption",
      "Acoustic insulation → more peace and quiet",
      "Durable profiles",
      "High-performance glazing",
      "Elegant finishes",
    ],
    process: ["Measurement", "Design", "Manufacturing", "Installation"],
  },
  es: {
    title: "Ventanas y Puertas",
    subtitle: "Diseño, luz y confort en cada apertura",
    description:
      "En Neocristal, entendemos que una ventana o una puerta no es solo un elemento funcional. Es luz, aislamiento, comodidad diaria y parte esencial del diseño.",
    systems: [
      "Ventanas abatibles",
      "Ventanas oscilobatientes",
      "Ventanas correderas",
      "Puertas correderas de gran formato",
      "Puertas manuales y motorizadas",
    ],
    benefits: [
      "Alto aislamiento térmico",
      "Aislamiento acústico",
      "Perfilería resistente",
      "Vidrios de alto rendimiento",
      "Acabados elegantes",
    ],
    process: ["Medición", "Diseño", "Fabricación", "Instalación"],
  },
} as const;

// Distinct content per individual service page
export const windowsData = {
  en: {
    title: "Windows",
    subtitle: "Natural light, quiet rooms, lower bills.",
    description:
      "Our window systems combine thermal performance, acoustic comfort and clean design. Whether you're renovating an apartment or building a new home, we help you choose the right opening type, profile and glazing for your everyday life.",
    systems: [
      "Casement windows",
      "Tilt & turn windows",
      "Sliding windows",
      "Fixed picture windows",
      "Practicable balcony windows",
    ],
    benefits: [
      "Up to 40% less energy loss thanks to thermal break profiles",
      "Acoustic insulation that softens street noise",
      "Reinforced security with multi-point locking",
      "Low-maintenance aluminium and PVC profiles",
      "Wide range of finishes that match modern interiors",
    ],
    process: [
      "On-site measurement and lighting analysis",
      "System and finish selection with a technician",
      "In-house manufacturing to your exact dimensions",
      "Clean installation by our certified team",
    ],
  },
  es: {
    title: "Ventanas",
    subtitle: "Luz natural, habitaciones tranquilas, menos gasto.",
    description:
      "Nuestros sistemas de ventanas combinan rendimiento térmico, confort acústico y diseño limpio. Tanto si reformas un piso como si construyes una casa, te ayudamos a elegir el tipo de apertura, perfil y vidrio adecuados.",
    systems: [
      "Ventanas abatibles",
      "Ventanas oscilobatientes",
      "Ventanas correderas",
      "Ventanas fijas panorámicas",
      "Ventanas practicables de balcón",
    ],
    benefits: [
      "Hasta un 40% menos de pérdida energética con perfiles de rotura de puente térmico",
      "Aislamiento acústico que suaviza el ruido de la calle",
      "Seguridad reforzada con cierre multipunto",
      "Perfiles de aluminio y PVC de bajo mantenimiento",
      "Amplia gama de acabados para interiores modernos",
    ],
    process: [
      "Medición en obra y análisis de iluminación",
      "Selección de sistema y acabado con un técnico",
      "Fabricación propia a tus medidas exactas",
      "Instalación limpia por nuestro equipo certificado",
    ],
  },
} as const;

export const doorsData = {
  en: {
    title: "Doors",
    subtitle: "Generous openings between inside and out.",
    description:
      "From large-format sliding doors that connect your living room to the terrace, to motorized entrances for a smoother daily routine — our door systems are built for comfort, durability and design.",
    systems: [
      "Large-format sliding doors",
      "Lift-and-slide doors",
      "Folding (bi-fold) doors",
      "Manual entrance doors",
      "Motorized doors with remote control",
    ],
    benefits: [
      "Wide thresholds with smooth sliding mechanisms",
      "High thermal and weather insulation",
      "Anti-burglar reinforcements as standard",
      "Slim profiles that maximise glass surface",
      "Optional motorisation for easy daily use",
    ],
    process: [
      "Site visit and structural assessment",
      "Tailored design with opening simulation",
      "Manufacturing and quality control",
      "Installation, sealing and final adjustment",
    ],
  },
  es: {
    title: "Puertas",
    subtitle: "Aberturas generosas entre interior y exterior.",
    description:
      "Desde puertas correderas de gran formato que conectan el salón con la terraza, hasta entradas motorizadas para un día a día más cómodo — nuestros sistemas de puertas están pensados para confort, durabilidad y diseño.",
    systems: [
      "Puertas correderas de gran formato",
      "Puertas elevables y deslizantes",
      "Puertas plegables",
      "Puertas de entrada manuales",
      "Puertas motorizadas con mando",
    ],
    benefits: [
      "Umbrales amplios con mecanismos de deslizamiento suave",
      "Alto aislamiento térmico y a la intemperie",
      "Refuerzos antirrobo de serie",
      "Perfiles slim que maximizan la superficie de vidrio",
      "Motorización opcional para uso diario sencillo",
    ],
    process: [
      "Visita técnica y evaluación estructural",
      "Diseño a medida con simulación de aperturas",
      "Fabricación y control de calidad",
      "Instalación, sellado y ajuste final",
    ],
  },
} as const;
