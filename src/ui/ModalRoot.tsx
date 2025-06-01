import { Dialog, DialogPanel } from '@headlessui/react';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import SignCloud from '@/components/layer2/SignCloud';
import { cn } from '@/utils/cn';

interface IModalRootProps {
  children: React.JSX.Element;
  isOpen: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  cloud?: string;
  isClosable?: boolean;
  className?: string;
}

const ModalRoot: React.FC<IModalRootProps> = ({
  children,
  isOpen,
  close,
  cloud,
  isClosable = true,
  className,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          role='dialog'
          open={isOpen}
          onClose={isClosable ? close : () => {}}
          className='fixed inset-0 z-50'
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 bg-black/50 backdrop-blur-2xl'
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 25,
              duration: 0.3,
            }}
            className='fixed inset-0 z-50 flex flex-col items-center justify-center p-4'
          >
            {cloud && <SignCloud>{cloud}</SignCloud>}
            <DialogPanel className={cn('w-full max-w-lg', className)}>
              {children}
            </DialogPanel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ModalRoot;
