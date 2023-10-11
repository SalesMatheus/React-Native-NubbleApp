import React, {createContext, useState} from 'react';

import {Toast, ToastServiceProps} from '../toastTypes';

export const ToastService = createContext<ToastServiceProps>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
});

export function ToastProvider({children}: React.PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastServiceProps['toast']>(null);

  function showToast(_toast: Toast) {
    setToast(_toast);
  }

  function hideToast() {
    setToast(null);
  }

  return (
    <ToastService.Provider value={{toast, showToast, hideToast}}>
      {children}
    </ToastService.Provider>
  );
}
