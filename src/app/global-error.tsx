'use client';

import { useRouter } from 'next/navigation';
import { Button1, Button2 } from '@/ui/Buttons';
import { useTranslations } from 'next-intl';

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

const GlobalError: React.FC<GlobalErrorProps> = ({ error, reset }) => {
  const router = useRouter();
  const t = useTranslations('error');

  const userMessage =
    (error && typeof error.message === 'string' && error.message) ||
    t('unknown');

  return (
    <main
      role='alert'
      className='flex min-h-screen w-full flex-col items-center justify-center gap-6 px-4 text-center'
    >
      <h1 className='text-3xl font-semibold'>{t('title')}</h1>
      <p className='max-w-md text-base'>{userMessage}</p>

      <div className='flex flex-row gap-4'>
        <Button2 onClick={reset} aria-label={t('retry')}>
          {t('retry')}
        </Button2>

        <Button1
          onClick={() => router.back()}
          aria-label={t('step_back')}
        >
          {t('step_back')}
        </Button1>
      </div>
    </main>
  );
};

export default GlobalError;
