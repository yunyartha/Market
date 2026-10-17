export type MarketType = 'perfect_competition' | 'monopoly' | 'oligopoly' | 'monopolistic_competition';

export type Language = 'en' | 'id';

export interface MarketFeature {
  label: { en: string; id: string };
  value: { en: string; id: string };
  detail: { en: string; id: string };
  iconName: string;
}

export interface MarketStructureInfo {
  id: MarketType;
  title: { en: string; id: string };
  subtitle: { en: string; id: string };
  summary: { en: string; id: string };
  imagePath: string;
  imageAlt: string;
  keyStats: {
    numberOfFirms: { en: string; id: string };
    productType: { en: string; id: string };
    entryBarriers: { en: string; id: string };
    pricingPower: { en: string; id: string };
    demandElasticity: { en: string; id: string };
  };
  characteristics: {
    title: { en: string; id: string };
    description: { en: string; id: string };
  }[];
  realExamples: {
    name: { en: string; id: string };
    description: { en: string; id: string };
    badge: { en: string; id: string };
  }[];
  advantages: { en: string; id: string }[];
  disadvantages: { en: string; id: string }[];
  teacherTip: { en: string; id: string };
}

export interface ScenarioCard {
  id: string;
  title: { en: string; id: string };
  business: { en: string; id: string };
  scenario: { en: string; id: string };
  clues: { en: string; id: string }[];
  correctMarket: MarketType;
  explanation: { en: string; id: string };
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizQuestion {
  id: string;
  question: { en: string; id: string };
  options: { en: string; id: string }[];
  correctIndex: number;
  hint: { en: string; id: string };
  explanation: { en: string; id: string };
  conceptTag: { en: string; id: string };
}
