
import React from 'react';
import { 
  Video,
  Sparkles,
  Users,
  Building,
  PartyPopper,
  Mountain
} from 'lucide-react';

export const eventTypes = [
  { 
    title: "Wissenschaftliche Konferenzen", 
    description: "Präzise organisiert, fachlich auf den Punkt",
    details: "Wissenschaftlich präzise, organisatorisch souverän: Wir realisieren Konferenzen mit reibungsloser Teilnehmerkoordination, passender Technik und Gespür für Inhalte."
  },
  { 
    title: "Produktlaunches & Präsentationen", 
    description: "Innovation sichtbar machen – emotional und technisch stark",
    details: "Inszenierte Innovation: Wir bringen Ihre Produkte auf die Bühne – mit technischer Finesse, dramaturgischem Feingefühl und maximaler Markenwirkung."
  },
  { 
    title: "Interaktive Workshops", 
    description: "Kreativ denken, gemeinsam gestalten",
    details: "Wissen wird erlebbar: Unsere Workshops fördern aktives Lernen, kreative Zusammenarbeit und sinnvolle Ergebnisse – individuell gestaltet und klar moderiert."
  },
  { 
    title: "Firmenevents & Mitarbeiterveranstaltungen", 
    description: "Verbindung schaffen, Motivation stärken",
    details: "Events für Verbindung: Wir stärken Teamgeist, feiern gemeinsame Erfolge und schaffen emotionale Momente für Ihre interne Marke – persönlich, klar und motivierend."
  },
  { 
    title: "Galas & exklusive Abendveranstaltungen", 
    description: "Eleganz inszenieren – mit Gespür für Atmosphäre",
    details: "Abende mit Stil: Wir gestalten Galas mit Atmosphäre, passender Dramaturgie und hochwertigen Details – für besondere Anlässe mit bleibendem Eindruck."
  },
  { 
    title: "Outdoor- & Teamevents", 
    description: "Natur erleben. Team stärken.",
    details: "Gemeinsam raus, gemeinsam wachsen: Unsere Outdoorformate verbinden Teamdynamik mit Naturerlebnis – aktivierend, achtsam und verbindend."
  }
];

export const eventTags = [
  ['Fachpublikum', 'Wissenstransfer', 'Präzision'], // Wissenschaftliche Konferenzen
  ['Innovation', 'Markenauftritt', 'Inszenierung'], // Produktlaunches & Präsentationen
  ['Aktivierung', 'Kollaboration', 'Lernerlebnis'], // Interaktive Workshops
  ['Unternehmenskultur', 'Wertschätzung', 'Teambuilding'], // Firmen- & Mitarbeiterevents
  ['Premium', 'Stil', 'Atmosphäre'], // Galas & exklusive Abendveranstaltungen
  ['Natur', 'Herausforderung', 'Zusammenhalt'] // Outdoor- & Teamevents
];

export const eventDescriptions = [
  "Präzise organisiert, fachlich auf den Punkt", // Wissenschaftliche Konferenzen
  "Innovation sichtbar machen – emotional und technisch stark", // Produktlaunches & Präsentationen
  "Kreativ denken, gemeinsam gestalten", // Interaktive Workshops
  "Verbindung schaffen, Motivation stärken", // Firmen- & Mitarbeiterevents
  "Eleganz inszenieren – mit Gespür für Atmosphäre", // Galas & exklusive Abendveranstaltungen
  "Natur erleben. Team stärken." // Outdoor- & Teamevents
];

// Using an array of icon components instead of JSX elements directly
export const eventIconComponents = [
  Video,           // Wissenschaftliche Konferenzen
  Sparkles,        // Produktlaunches & Präsentationen
  Users,           // Interaktive Workshops
  Building,        // Firmen- & Mitarbeiterevents
  PartyPopper,     // Galas & exklusive Abendveranstaltungen
  Mountain         // Outdoor- & Teamevents
];
