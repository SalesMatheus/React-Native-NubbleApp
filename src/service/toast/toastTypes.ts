export type ToastType = 'success' | 'error';
export type ToastPosition = 'top' | 'bottom';

export interface Toast {
  message: string;
  type?: ToastType;
  position?: ToastPosition;
  duration?: number;
  action?: {
    title: string;
    onPress: () => void;
  };
}

export interface ToastServiceProps {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hideToast: () => void;
}
