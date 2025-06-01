import { useRef } from 'react';

/**
 * Custom hook that validates and parses a URL string only once on mount.
 *
 * It optionally accepts a base URL to support relative URLs.
 * The URL is computed on the component's initial mount and will not
 * update even if `url` or `base` change afterward. It will be recalculated
 * only if the page refreshes and the component remounts.
 *
 * @param {string} url - The URL string to validate and parse.
 * @param {string} [base] - An optional base URL to resolve relative URLs.
 * @returns {string | null} The parsed URL string if valid; otherwise, null.
 *
 * @example
 * // For an absolute URL:
 * const parsedUrl = useValidUrl('https://example.com');
 *
 * @example
 * // For a relative URL with a base:
 * const parsedUrl = useValidUrl('/path', 'https://example.com');
 */
export const useValidUrl = (
  url: string | undefined,
  base?: string
): string | null => {
  const validUrlRef = useRef<string | null>(null);
  if (url === undefined) return null;

  if (validUrlRef.current === null) {
    const trimmedUrl = url?.trim();

    if (!trimmedUrl) {
      validUrlRef.current = null;
    } else {
      try {
        validUrlRef.current = base
          ? new URL(trimmedUrl, base).toString()
          : new URL(trimmedUrl).toString();
      } catch {
        validUrlRef.current = null;
      }
    }
  }

  return validUrlRef.current;
};
