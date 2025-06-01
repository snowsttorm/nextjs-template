export const getDeviceInfo = () => {
  return {
    userAgent: navigator.userAgent || null,
    language: navigator.language || null,
    languages: navigator.languages || null,
    cookieEnabled: navigator.cookieEnabled || null,
    doNotTrack: navigator.doNotTrack || null,
    hardwareConcurrency: navigator.hardwareConcurrency || null,
    touchSupport:
      'ontouchstart' in window || navigator.maxTouchPoints > 0 || null,
    colorDepth: window.screen.colorDepth || null,
    screenResolution: `${window.screen.width}x${window.screen.height}` || null,
    screenResolutionAvailable:
      `${window.screen.availWidth}x${window.screen.availHeight}` || null,
  };
};
