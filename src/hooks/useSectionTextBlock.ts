
import { SectionTextBlockProps } from '@/components/ui/section-text-block';

type SectionTextBlockConfig = Omit<SectionTextBlockProps, 'className'>;

export const useSectionTextBlock = () => {
  const createTextBlock = (config: SectionTextBlockConfig) => config;
  
  return { createTextBlock };
};

// Pre-defined common configurations
export const sectionTextBlocks = {
  aboutUs: {
    label: "ÜBER UNS",
    headlineParts: ["Wir gestalten", "ERLEBNISSE,", "die verbinden."] as [string, string, string],
    boldIndex: 1 as const,
    subline: "Ob Change-Prozess, Produktlaunch oder Kongress – wir inszenieren Ihre Botschaft so, dass sie Menschen berührt und Marken stärkt."
  },
  
  services: {
    label: "Was wir bieten",
    headlineParts: ["Unsere Leistungen –", "ganzheitlich gedacht,", "präzise umgesetzt."] as [string, string, string],
    boldIndex: 1 as const,
    subline: "Von der Idee bis zur Wirkung begleiten wir Sie mit Strategie, Hingabe und Erfahrung.",
    description: "Ob Fachkonferenz, Kick-off oder hybride und virtuelle Formate – wir denken ganzheitlich und gestalten Events, die wirken."
  },
  
  expertise: {
    label: "Unsere Expertise",
    headlineParts: ["Verstehen, was zählt –", "für Events", "mit Wirkung"] as [string, string, string],
    boldIndex: 1 as const,
    subline: "Jede Branche spricht ihre eigene Sprache. Wir kennen die Unterschiede – und wissen, worauf es wirklich ankommt.",
    description: "Ob Pharma, Finanzen, Bildung oder Industrie: Wir denken uns in Ihre Welt ein und schaffen Erlebnisse, die Inhalte transportieren – und Vertrauen schaffen."
  }
};
