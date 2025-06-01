import plugin from 'tailwindcss/plugin';

const animationDelayValues = {
  100: '100ms',
  200: '200ms',
  300: '300ms',
  400: '400ms',
  500: '500ms',
  600: '600ms',
  700: '700ms',
  800: '800ms',
  900: '900ms',
  1000: '1000ms',
};

const animationDelay = plugin(function ({ matchUtilities }) {
  matchUtilities(
    {
      'animation-delay': (value) => {
        return {
          animationDelay: value,
        };
      },
    },
    {
      values: animationDelayValues,
    }
  );
});

module.exports = animationDelay;
