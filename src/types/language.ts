export type Language = 
  | 'en' // English
  | 'es' // Spanish 
  | 'ko' // Korean
  | 'ja' // Japanese
  | 'de' // German
  | 'fi' // Finnish
  | 'sv' // Swedish
  | 'da' // Danish
  | 'fr' // French
  | 'nl' // Dutch
  | 'ca'; // Catalan

export type LanguageConfig = {
  name: string;
  nativeName: string;
};