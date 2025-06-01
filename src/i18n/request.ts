import { resolveLocale } from '@/utils/locale';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = await resolveLocale();

  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return { locale, messages };
  } catch (error) {
    console.error(`Failed to load messages for locale "${locale}":`, error);
    const fallbackLocale = 'en';
    const fallbackMessages = (
      await import(`../../messages/${fallbackLocale}.json`)
    ).default;

    return { locale: fallbackLocale, messages: fallbackMessages };
  }
});
