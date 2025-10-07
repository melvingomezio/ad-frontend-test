'use client';

import React, { useEffect } from 'react';
import { Body } from '../../atoms/body/Body';
import { Icon } from '../../atoms/icon/Icon';
import { Button } from '../../atoms/button/Button';
import { AlertProps } from './resources/alert.config';

export const Alert: React.FC<AlertProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible && onClose) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="alert-success fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center justify-between gap-3">      
      <Body variant="text-b2" color="primary000">
        {message}
      </Body>
      {onClose && (
        <div className="w-8 h-8 flex items-center justify-center">
          <Button onClick={onClose}>
            <Icon src="/icons/close.svg" alt="Close" />
          </Button>
        </div>
      )}
    </div>
  );
};