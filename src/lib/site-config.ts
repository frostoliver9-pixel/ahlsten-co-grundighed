/**
 * ─────────────────────────────────────────────────────────────
 *  AHLSTEN & CO. — central indhold og indstillinger
 *  Alt tekst, priser, kontaktoplysninger og ydelser redigeres HER.
 *  Ingen af disse værdier er hardcodet ude i komponenterne.
 * ─────────────────────────────────────────────────────────────
 */

export const company = {
  name: "AHLSTEN & CO.",
  shortName: "Ahlsten & Co.",
  tagline: "Professionel rengøring og service.",
  domain: "ahlstenogco.dk",
  // TODO: udskift placeholders når oplysningerne er klar
  phone: "[TELEFONNUMMER KOMMER SENERE]",
  phoneHref: "", // fx "+4512345678" — når udfyldt bliver telefon klikbar
  email: "[EMAIL KOMMER SENERE]",
  emailHref: "", // fx "kontakt@ahlstenogco.dk"
  area: "[OMRÅDE KOMMER SENERE]",
  openingHours: "[ÅBNINGSTIDER KOMMER SENERE]",
  cvr: "[CVR KOMMER SENERE]",
  social: {
    instagram: "#", // TODO: indsæt Instagram-link
    facebook: "#", // TODO: indsæt Facebook-link
  },
};

export const nav = [
  { label: "Forside", to: "/" },
  { label: "Ydelser", to: "/ydelser" },
  { label: "Priser", to: "/priser" },
  { label: "Om os", to: "/om-os" },
  { label: "Kontakt", to: "/kontakt" },
] as const;

export const hero = {
  titleLine1: "Professionel rengøring.",
  titleLine2: "Ordentligt udført.",
  subtitle:
    "AHLSTEN & CO. leverer grundig og pålidelig rengøring til private og erhverv – med fokus på kvalitet, fleksibilitet og en service, du kan regne med.",
  primaryCta: "Få et tilbud",
  secondaryCta: "Se vores ydelser",
};

export const trustBar = [
  "Grundighed",
  "Fleksible aftaler",
  "Professionel service",
  "Tilfredse kunder",
];

export type ServiceIcon =
  | "home"
  | "building"
  | "sparkles"
  | "boxes"
  | "window"
  | "calendar";

export const services: {
  slug: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  details: string[];
}[] = [
  {
    slug: "privat-rengoering",
    title: "Privat rengøring",
    description:
      "Regelmæssig rengøring af hjemmet, tilpasset dine behov og ønsker.",
    icon: "home",
    details: [
      "Fast aftale med samme faste rutiner hver gang.",
      "Vi aftaler omfang og fokusområder på forhånd.",
      "Frekvens efter dit behov – ugentligt, hver 2. eller hver 4. uge.",
    ],
  },
  {
    slug: "erhvervsrengoering",
    title: "Erhvervsrengøring",
    description:
      "Professionel rengøring af kontorer, butikker og andre erhvervslokaler.",
    icon: "building",
    details: [
      "Rengøring uden for eller inden for åbningstid efter aftale.",
      "Klare aftaler om opgaver, frekvens og kontaktperson.",
      "Løsninger til både mindre kontorer og større lokaler.",
    ],
  },
  {
    slug: "hovedrengoering",
    title: "Hovedrengøring",
    description:
      "En grundigere rengøring, når hjemmet eller virksomheden trænger til det ekstra.",
    icon: "sparkles",
    details: [
      "Vi kommer rundt om detaljerne, der ikke nås til daglig.",
      "Velegnet før højtider, fremvisning eller sæsonskifte.",
      "Omfang aftales, så du ved præcis, hvad der er inkluderet.",
    ],
  },
  {
    slug: "flytterengoering",
    title: "Flytterengøring",
    description: "Grundig rengøring før indflytning eller efter fraflytning.",
    icon: "boxes",
    details: [
      "Rengøring af hele boligen fra top til bund.",
      "Vi tilpasser opgaven til boligens stand og størrelse.",
      "Aftales i god tid omkring overtagelsesdatoen.",
    ],
  },
  {
    slug: "vinduespudsning",
    title: "Vinduespudsning",
    description: "Rene vinduer og et skarpere helhedsindtryk.",
    icon: "window",
    details: [
      "Kan bestilles alene eller som tillæg til en fast aftale.",
      "Både private boliger og erhvervslokaler.",
      "Frekvens efter behov og årstid.",
    ],
  },
  {
    slug: "fleksible-aftaler",
    title: "Fleksible aftaler",
    description:
      "Få en fast rengøringsaftale, der passer til din hverdag og dine behov.",
    icon: "calendar",
    details: [
      "Vi tilpasser omfang og frekvens undervejs.",
      "Tydelige aftaler uden komplicerede vilkår.",
      "Enkelt at justere, hvis dine behov ændrer sig.",
    ],
  },
];

/**
 * PRISER — redigér frit.
 * Brug "Fra XX kr." indtil de endelige priser er fastlagt.
 */
export const pricing = {
  title: "En enkel og fair pris",
  subtitle:
    "Vi tror på gennemsigtige priser og løsninger, der giver mening for dig.",
  disclaimer:
    "Den endelige pris afhænger blandt andet af boligens størrelse, opgavens omfang og rengøringsfrekvens.",
  plans: [
    {
      name: "Fast rengøring",
      price: "Fra XX kr.",
      unit: "pr. besøg",
      description: "Regelmæssig rengøring efter aftalt frekvens.",
      includes: ["Faste rutiner", "Samme aftalte omfang", "Fleksibel frekvens"],
    },
    {
      name: "Hovedrengøring",
      price: "Fra XX kr.",
      unit: "pr. opgave",
      description: "Den grundige gennemgang, når der er behov for mere.",
      includes: ["Udvidet omfang", "Detaljer og hjørner", "Aftalt tjekliste"],
      highlighted: true,
    },
    {
      name: "Flytterengøring",
      price: "Fra XX kr.",
      unit: "pr. opgave",
      description: "Grundig rengøring før indflytning eller efter fraflytning.",
      includes: ["Hele boligen", "Tilpasset boligens stand", "Aftalt dato"],
    },
    {
      name: "Erhverv",
      price: "Kontakt os for tilbud",
      unit: "",
      description: "Løsninger til kontorer, butikker og erhvervslokaler.",
      includes: ["Individuel vurdering", "Fast kontaktperson", "Klare aftaler"],
    },
  ],
};

export const about = {
  title: "Ordentlig service fra start til slut",
  paragraphs: [
    "AHLSTEN & CO. er skabt med et enkelt mål: at levere rengøring og service, som man selv ville forvente at modtage.",
    "Vi lægger vægt på grundighed, stabilitet og god kommunikation. Derfor arbejder vi med klare aftaler og fokus på den enkelte kundes behov.",
    "Vi ønsker ikke bare at gøre rent. Vi ønsker at gøre det nemt at få en renere og mere indbydende hverdag.",
  ],
};

export const futureSection = {
  title: "Vi bygger mere end rengøring",
  text: "AHLSTEN & CO. udvikler sig løbende og har ambitioner om at samle flere professionelle serviceydelser under ét brand.",
};

export const whyUs = [
  {
    title: "Grundighed",
    text: "Vi arbejder systematisk og går efter et resultat, der holder.",
  },
  {
    title: "Pålidelighed",
    text: "Aftaler bliver overholdt – både tid og omfang.",
  },
  {
    title: "Fleksibilitet",
    text: "Løsningen tilpasses din hverdag og dine behov.",
  },
  {
    title: "Professionel kommunikation",
    text: "Klar dialog før, under og efter opgaven.",
  },
  { title: "Fair priser", text: "Gennemsigtige priser uden skjulte tillæg." },
  {
    title: "Fokus på kunden",
    text: "Vi lytter og justerer, så aftalen passer til dig.",
  },
];

/**
 * TESTIMONIALS — ⚠️ PLACEHOLDERS.
 * Disse er IKKE rigtige anmeldelser. Udskift teksten og navnene
 * med rigtige kundeanmeldelser, før siden markedsføres.
 */
export const testimonialPlaceholders = [
  { quote: "Her kommer en kundeanmeldelse.", author: "Kundenavn" },
  { quote: "Her kommer en kundeanmeldelse.", author: "Kundenavn" },
  { quote: "Her kommer en kundeanmeldelse.", author: "Kundenavn" },
];

export const faq = [
  {
    q: "Hvor ofte kan jeg få rengøring?",
    a: "Vi tilbyder rengøring efter aftale – typisk ugentligt, hver 2. uge, hver 4. uge eller efter behov. Vi finder en frekvens sammen med dig ud fra opgavens omfang.",
  },
  {
    q: "Hvad koster rengøring?",
    a: "Prisen afhænger af boligens eller lokalets størrelse, opgavens omfang og frekvensen. Du er velkommen til at anmode om et uforpligtende tilbud, så vender vi tilbage med et prisniveau.",
  },
  {
    q: "Tilbyder I faste aftaler?",
    a: "Ja. Vi kan lave en fast aftale med en aftalt frekvens og et aftalt omfang, som kan justeres, hvis dine behov ændrer sig.",
  },
  {
    q: "Arbejder I både for private og virksomheder?",
    a: "Ja. Vi løser opgaver for private hjem såvel som kontorer, butikker og andre erhvervslokaler.",
  },
  {
    q: "Skal jeg være hjemme under rengøringen?",
    a: "Det er ikke et krav. Mange kunder foretrækker en adgangsaftale, mens andre er hjemme. Vi aftaler det, der passer dig bedst.",
  },
  {
    q: "Hvad er inkluderet i en almindelig rengøring?",
    a: "Omfanget aftales altid på forhånd, så det er tydeligt, hvad der er inkluderet. En almindelig rengøring dækker typisk de daglige opholdsrum, køkken og bad efter en fast rutine.",
  },
  {
    q: "Kan jeg få en enkelt rengøring?",
    a: "Ja. Du kan bestille en enkelt rengøring uden fast aftale – for eksempel en hovedrengøring eller flytterengøring.",
  },
  {
    q: "Hvordan får jeg et tilbud?",
    a: "Udfyld tilbudsformularen med et par oplysninger om opgaven. Vi gennemgår forespørgslen og vender tilbage hurtigst muligt.",
  },
];

export const quoteFormOptions = {
  propertyTypes: [
    "Lejlighed",
    "Rækkehus",
    "Villa",
    "Kontor",
    "Butik",
    "Andet",
  ],
  frequencies: [
    "Én gang",
    "Hver uge",
    "Hver 2. uge",
    "Hver 4. uge",
    "Efter behov",
  ],
  serviceOptions: services.map((s) => s.title),
};

export const confirmation = {
  title: "Tak for din forespørgsel.",
  text: "Vi har modtaget dine oplysninger og vender tilbage hurtigst muligt.",
};
