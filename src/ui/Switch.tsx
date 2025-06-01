'use client';

import { cn } from '@/utils/cn';
import React from 'react';

interface ISwitchProps {
  isOn: boolean | undefined;
  handleToggle: () => void;
  id: string;
}

const Switch: React.FC<ISwitchProps> = ({ isOn, handleToggle, id }) => {
  return (
    <div className='flex items-center space-x-4'>
      <div className='relative'>
        <input
          id={id}
          type='checkbox'
          checked={
            (String(isOn) === String(undefined) ? false : isOn) as boolean
          }
          disabled={String(isOn) === String(undefined)}
          onChange={handleToggle}
          className='peer absolute z-50 h-full w-full cursor-pointer opacity-0'
        />
        <div
          className={cn(
            'shadow-blue-medium h-8 w-16 rounded-md border-2 transition-colors duration-300',
            isOn ? 'border-primary' : 'shadow-neutral-full border-secondary'
          )}
        />
        <div
          className={cn(
            'absolute top-1 left-1 h-6 w-6 rounded-md border-2 bg-primary transition-all duration-300',
            isOn && 'translate-x-8',
            isOn ? 'border-primary' : 'border-secondary bg-primary/0',
            String(isOn) === String(undefined) &&
              'spin-loading-animation translate-x-4'
          )}
        />
      </div>
    </div>
  );
};

export default Switch;