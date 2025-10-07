'use client';

import { useState } from 'react';

export const useAlert = () => {
  const [alert, setAlert] = useState({ message: '', isVisible: false });

  const showAlert = (message: string) => {
    setAlert({ message, isVisible: true });
  };

  const hideAlert = () => {
    setAlert(prev => ({ ...prev, isVisible: false }));
  };

  return { alert, showAlert, hideAlert };
};