import { useTranslation as useI18nTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';

export const useTranslation = (): { t: TFunction; i18n: any } => {
  return useI18nTranslation('common');
};