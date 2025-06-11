
export interface SectionTextBlockProps {
  label: string;
  headlineParts: [string, string, string];
  boldIndex: 0 | 1 | 2;
  subline: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export interface SectionTextBlockSimpleProps {
  label: string;
  line1: string;
  line2: string;
  line3: string;
  subline: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}
