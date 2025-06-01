'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';

const Home = () => {
  const colors = [
    {
      name: 'primary',
      shades: ['bg-primary-light', 'bg-primary', 'bg-primary-dark'],
    },
    {
      name: 'secondary',
      shades: ['bg-secondary-light', 'bg-secondary', 'bg-secondary-dark'],
    },
    {
      name: 'accent',
      shades: ['bg-accent-light', 'bg-accent', 'bg-accent-dark'],
    },
    {
      name: 'highlight',
      shades: ['bg-highlight-light', 'bg-highlight', 'bg-highlight-dark'],
    },
    { name: 'info', shades: ['bg-info-light', 'bg-info', 'bg-info-dark'] },
    {
      name: 'success',
      shades: ['bg-success-light', 'bg-success', 'bg-success-dark'],
    },
    {
      name: 'warning',
      shades: ['bg-warning-light', 'bg-warning', 'bg-warning-dark'],
    },
    {
      name: 'danger',
      shades: ['bg-danger-light', 'bg-danger', 'bg-danger-dark'],
    },
  ];

  return (
    <main className='flex h-screen w-full flex-col items-center justify-center gap-12 p-8'>
      <div className='text-center'>
        <h1 className='text-5xl'>
          basic next template by&nbsp;
          <Link
            className={cn(
              'text-primary-dark decoration-double underline-offset-2',
              'hover:underline',
            )}
            target='_blank'
            rel='noopener noreferrer'
            href={'https://github.com/snowsttorm'}
          >
            snowsttorm
          </Link>
        </h1>
      </div>
      <div className='grid grid-cols-2 gap-x-12 gap-y-6 md:grid-cols-4'>
        {colors.map((color) => (
          <div key={color.name} className='flex flex-col items-center gap-2'>
            <h3 className='text-foreground text-lg font-semibold'>
              {color.name}
            </h3>
            <div className='flex gap-3'>
              {color.shades.map((shade) => (
                <div
                  key={shade}
                  className={cn(
                    'h-12 w-12 rounded-md border-2 border-neutral-900 ring-2 ring-white',
                    shade,
                  )}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
