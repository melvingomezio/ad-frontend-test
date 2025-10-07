export type AlertProps = {
  message: string;
  isVisible: boolean;
  onClose?: () => void;
};