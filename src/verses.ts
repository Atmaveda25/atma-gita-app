import versesData from './data/raw-verses.json';

export type Verse = {
  chapter: number;
  verse: number;
  quote: string;
  translation: string;
  meaning: string;
};

export const verses: Verse[] = versesData

console.log('✅ Loaded verses:', verses.length);
console.log('👀 Mapped preview:', verses.slice(0, 2));
