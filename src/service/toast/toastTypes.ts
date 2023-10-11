export interface Toast {
  message: string;
  type?: 'success' | 'error';
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
