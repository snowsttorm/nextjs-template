import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

type Breakpoint<T> = {
  /** minimum width to satisfy this breakpoint */
  minWidth: number;
  /** minimum height to satisfy this breakpoint */
  minHeight: number;
  /** the value you want to use at or above these dimensions (could be anything) */
  value: T;
};

interface UseResponsiveOptions<T> {
  /** A default value if none of the breakpoints apply */
  defaultValue: T;
  /** Debounce delay in ms */
  debounceDelay?: number;
}

/**
 * A universal hook for returning a value based on viewport size.
 *
 * @param breakpoints - An array of breakpoints specifying minWidth, minHeight, and a corresponding value.
 * @param options - Configuration object with defaultValue and optional debounceDelay.
 * @returns The breakpoint's `value` that matches the current viewport, or the `defaultValue` if none match.
 */

export function useResponsiveValue<T>(
  breakpoints: Breakpoint<T>[],
  options: UseResponsiveOptions<T>
): T {
  const { defaultValue, debounceDelay = 200 } = options;
  const [currentValue, setCurrentValue] = useState<T>(defaultValue);

  const calculateValue = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // breakpoints.sort((a, b) => b.minWidth - a.minWidth);

    for (const bp of breakpoints) {
      if (width >= bp.minWidth && height >= bp.minHeight) {
        return bp.value;
      }
    }

    return defaultValue;
  }, [breakpoints, defaultValue]);

  useEffect(() => {
    const handleResize = debounce(() => {
      setCurrentValue(calculateValue());
    }, debounceDelay);

    // init
    setCurrentValue(calculateValue());

    window.addEventListener('resize', handleResize);

    return () => {
      handleResize.cancel();
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateValue, debounceDelay]);

  return currentValue;
}
