
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
    description: "Experten vernetzen & Wissen teilen",
    details: "Von der Keynote bis zum Posterslam: Wir organisieren Fachkonferenzen mit präziser Teilnehmerbetreuung, simultaner Übersetzung und intelligentem Raum- und Zeitmanagement."
  },
  { 
    title: "Produktlaunches & Präsentationen", 
    description: "Begeisterung für Innovationen schaffen",
    details: "Der große Auftritt für Ihr Produkt: Mit spektakulärer Inszenierung, technischer Perfektion und emotionalem Storytelling machen wir Ihren Launch unvergesslich."
  },
  { 
    title: "Interaktive Workshops", 
    description: "Lernen durch Erleben",
    details: "Partizipative Formate mit kreativem Setup, durchdachter Moderation und inspirierenden Methoden, die Wissen aktivieren und Teilnehmer zu aktiven Gestaltern machen."
  },
  { 
    title: "Firmenevents & Mitarbeiterveranstaltungen", 
    description: "Teamgeist & Unternehmenswerte stärken",
    details: "Corporate Culture erleben: Von der Jahreskonferenz bis zum Sommerfest – wir schaffen Veranstaltungen, die Ihre Unternehmenskultur prägen und Mitarbeiter begeistern."
  },
  { 
    title: "Galas & exklusive Abendveranstaltungen", 
    description: "Stilvolle Inszenierungen mit besonderem Flair",
    details: "Exquisite Locations, durchdachte Dramaturgie und erstklassiges Catering – unsere Abendveranstaltungen verbinden festlichen Glanz mit unvergesslichen Momenten."
  },
  { 
    title: "Outdoor- & Teamevents", 
    description: "Erlebnisse, die zusammenschweißen",
    details: "Gemeinsam wachsen: Mit herausfordernden Aktivitäten und inspirierenden Naturerlebnissen schaffen wir Teamevents, die verbinden und motivieren."
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
  "Fachpublikum erreichen, Wissen vermitteln", // Wissenschaftliche Konferenzen
  "Innovationen inszenieren und begeistern", // Produktlaunches & Präsentationen
  "Wissen aktivieren, Kollaboration fördern", // Interaktive Workshops
  "Teamgeist und Unternehmenskultur stärken", // Firmen- & Mitarbeiterevents
  "Stilvolle Highlights mit besonderem Flair", // Galas & exklusive Abendveranstaltungen
  "Gemeinsam wachsen, Natur erleben" // Outdoor- & Teamevents
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
