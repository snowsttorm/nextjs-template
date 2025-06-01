'use client';

import { useTranslations } from 'next-intl';

const Unauthorized = () => {
  const t = useTranslations('common');
  return <div>{t('unauthorized')}</div>;
};

export default Unauthorized;
