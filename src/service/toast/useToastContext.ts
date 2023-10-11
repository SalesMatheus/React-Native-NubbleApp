import {useContext} from 'react';

import {ToastService} from './Providers/ToastProvider';
import {ToastServiceProps} from './toastTypes';

export function useToastContext(): ToastServiceProps {
  const context = useContext(ToastService);

  if (!context) {
    throw new Error('Toast context must be used within a ToastProvider');
  }

  return context;
}
