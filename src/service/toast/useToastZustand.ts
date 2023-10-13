import {create} from 'zustand';

import {ToastServiceProps} from './toastTypes';

const useToastStore = create<ToastServiceProps>(set => ({
  toast: null,
  showToast: toast => set({toast}),
  hideToast: () => set({toast: null}),
}));

export function useToastZustand(): ToastServiceProps['toast'] {
  const toast = useToastStore(state => state.toast);

  return toast;
}

export function useToastServiceZustand(): Pick<
  ToastServiceProps,
  'showToast' | 'hideToast'
> {
  const showToast = useToastStore(state => state.showToast);
  const hideToast = useToastStore(state => state.hideToast);

  return {
    showToast,
    hideToast,
  };
}
