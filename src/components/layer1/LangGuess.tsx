import { Button1 } from '@/ui/Buttons';
import { useTranslations } from 'next-intl';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
];

interface LangGuessProps {
  lang: string;
  language: string;
  handleLanguageChange: (selectedLanguage: string) => void;
  handleLanguageUpdate: () => void;
}

const LangGuess: React.FC<LangGuessProps> = ({
  lang,
  language,
  handleLanguageChange,
  handleLanguageUpdate,
}) => {
  const t = useTranslations('lang_guess');
  return (
    <div className='fixed right-5 bottom-5 z-50 flex justify-center'>
      <div className='flex w-full max-w-md scale-100 transform flex-col items-center space-y-4 rounded-lg bg-white/30 p-6 backdrop-blur-sm transition-transform duration-300 ease-in-out'>
        <p className='text-lg font-medium text-white'>{t('question')}</p>
        <div className='w-full'>
          <label htmlFor='language' className='sr-only'>
            {t('select')}
          </label>
          <select
            id='language'
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className='block w-full rounded-md border border-secondary bg-background p-2 text-foreground focus:ring-2 focus:ring-accent focus:outline-none'
          >
            {LANGUAGES.map((langOption) => (
              <option key={langOption.code} value={langOption.label}>
                {langOption.label}
              </option>
            ))}
          </select>
        </div>
        <Button1 onClick={handleLanguageUpdate} className='w-full'>
          {t('continue')}
        </Button1>
      </div>
    </div>
  );
};

export default LangGuess;
