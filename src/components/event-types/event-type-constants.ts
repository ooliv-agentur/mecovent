
import { Users, Calendar, GraduationCap, Presentation, Briefcase, Landmark, Mic, Globe, MapPin } from 'lucide-react';

export const eventTypes = [
  {
    title: "Incentives und Teamevents",
    details: "Natur erleben. Team stärken. Mitarbeitende motivieren.",
  },
  {
    title: "Tagungen & Kongresse",
    details: "Wissen teilen. Austausch fördern. Mehrwert schaffen.",
  },
  {
    title: "Weiterbildung & Schulung",
    details: "Inhalte vermitteln. Skills aufbauen. Erfolge sichern.",
  },
  {
    title: "Produktpräsentationen",
    details: "Innovation erlebbar machen. Begeisterung wecken. Markenwert steigern.",
  },
  {
    title: "Business Events",
    details: "Austausch fördern. Netzwerk stärken. Geschäfte anbahnen.",
  },
  {
    title: "Mitarbeiterevents",
    details: "Verbindung schaffen. Kultur erleben. Identifikation steigern.",
  },
  {
    title: "Messeauftritte",
    details: "Aufmerksamkeit erzeugen. Gespräche initiieren. Leads generieren.",
  },
  {
    title: "Hybride und virtuelle Formate",
    details: "Reichweite erhöhen. Flexibilität gewinnen. Zeit- und ortsunabhängig agieren.",
  },
  {
    title: "Location Scouting",
    details: "Inspiration finden. Rahmen setzen. Wirkung verstärken.",
  },
];

export const eventDescriptions = [
  "Wir schaffen unvergessliche Erlebnisse, die Teams verbinden und motivieren – ob in der Natur, in der Stadt oder an außergewöhnlichen Orten.",
  "Wir organisieren hochwertige Veranstaltungen für Wissenstransfer und Vernetzung – mit durchdachter Architektur und inspirierendem Rahmen.",
  "Wir gestalten lernfördernde Umgebungen mit kreativen Methoden und nachhaltiger Wirkung – für bleibende Skills und messbaren Erfolg.",
  "Wir inszenieren Ihre Produkte und Innovationen mit Wow-Effekt und schaffen multisensorische Erlebnisse, die in Erinnerung bleiben.",
  "Wir konzipieren professionelle Business-Events mit klarem ROI – für neue Kontakte, gestärkte Beziehungen und konkrete Ergebnisse.",
  "Wir entwickeln Formate, die Mitarbeitende begeistern, Kultur erlebbar machen und die Identifikation mit dem Unternehmen stärken.",
  "Wir realisieren aufmerksamkeitsstarke Messeauftritte mit strategischer Besucherführung und nachhaltiger Lead-Generierung.",
  "Wir verbinden physische und digitale Eventwelten – für mehr Reichweite, Flexibilität und standortunabhängige Teilhabe.",
  "Wir finden die perfekten Locations für Ihre Veranstaltung – mit dem richtigen Ambiente, der passenden Infrastruktur und Ihrem Budget entsprechend."
];

export const eventTags = [
  ["Teambuilding", "Outdoor", "Erlebnis"],
  ["Wissensaustausch", "Networking", "Fachexperten"],
  ["Lernen", "Entwicklung", "Kompetenzen"],
  ["Innovation", "Markteinführung", "Emotion"],
  ["B2B", "Networking", "Geschäftsbeziehungen"],
  ["Kultur", "Teamgeist", "Employer Branding"],
  ["Markenauftritt", "Leadgenerierung", "ROI"],
  ["Digital", "Reichweite", "Flexibilität"],
  ["Ambiente", "Infrastruktur", "Logistik"]
];

export const eventIconComponents = [
  Users,       // Incentives und Teamevents
  Calendar,    // Tagungen & Kongresse
  GraduationCap, // Weiterbildung & Schulung
  Presentation, // Produktpräsentationen
  Briefcase,   // Business Events
  Landmark,    // Mitarbeiterevents
  Mic,         // Messeauftritte
  Globe,       // Hybride und virtuelle Formate
  MapPin       // Location Scouting
];
