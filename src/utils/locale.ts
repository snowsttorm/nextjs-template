'use server';

import { cookies, headers } from 'next/headers';

// let localeCache: string | null = null;

/**
 * Resolves the locale to be used based on user preferences and application defaults.
 *
 * @param {string[]} supportedLocales - List of supported locales. (optional)
 * @param {string} defaultLocale - The default locale to fall back to. (optional)
 * @returns {Promise<string>} - The resolved locale.
 */

export const resolveLocale = async (
  supportedLocales: string[] = ['en', 'ru'],
  defaultLocale: string = 'en'
): Promise<string> => {
  // if (localeCache) {
  //   return localeCache;
  // }

  try {
    const cookieStore = cookies();
    const requestHeaders = headers();

    const cookieLocale = (await cookieStore).get('lang')?.value?.toLowerCase();

    const acceptLanguageHeader = (await requestHeaders).get('accept-language');
    const browserLocale = acceptLanguageHeader
      ?.split(',')[0]
      ?.slice(0, 2)
      ?.toLowerCase();

    const locale =
      (cookieLocale &&
        supportedLocales.includes(cookieLocale) &&
        cookieLocale) ||
      (browserLocale &&
        supportedLocales.includes(browserLocale) &&
        browserLocale) ||
      defaultLocale;

    return locale;
  } catch (error) {
    console.error('Error resolving locale:', error);
    return defaultLocale;
  }
};
