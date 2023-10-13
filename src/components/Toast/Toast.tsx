import React, {useEffect} from 'react';

import {useToast, useToastService} from '@service';

import {ToastContent} from './components/ToastContent';

const TOAST_DURATION = 3000;

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, toast.duration || TOAST_DURATION);
    }
  }, [hideToast, toast]);

  if (!toast) {
    return null;
  }

  return <ToastContent toast={toast} />;
}
