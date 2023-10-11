import {ToastServiceProps} from './toastTypes';
import {useToastContext} from './useToastContext';

export function useToast(): ToastServiceProps {
  return useToastContext();
}
