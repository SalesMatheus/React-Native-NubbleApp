import {ToastServiceProps} from './toastTypes';
import {useToastServiceZustand, useToastZustand} from './useToastZustand';

export function useToast(): ToastServiceProps['toast'] {
  return useToastZustand();
}

export function useToastService(): Pick<
  ToastServiceProps,
  'showToast' | 'hideToast'
> {
  return useToastServiceZustand();
}
