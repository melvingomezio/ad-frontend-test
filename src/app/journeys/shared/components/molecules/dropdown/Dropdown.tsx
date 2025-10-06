'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Input } from '../../atoms/input/Input';
import { Icon } from '../../atoms/icon/Icon';
import { DropdownProps } from './resources/dropdown.config';
import { colorMap } from '@/app/journeys/shared/utils/theme-maps';

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = 'Select an option',
  onChange,
  disabled,
  backgroundColor,
  borderColor,
  color,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selected = options.find(option => option.value === value);
    setSelectedLabel(selected?.label || '');
  }, [value, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (option: { value: string; label: string }) => {
    setSelectedLabel(option.label);
    setIsOpen(false);
    onChange?.(option.value);
  };

  const customStyles = {
    ...(backgroundColor && { backgroundColor: colorMap[backgroundColor] }),
    ...(borderColor && { borderColor: colorMap[borderColor] }),
    ...(color && { color: colorMap[color] }),
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-input-container" onClick={handleToggle}>
        <Input
          type="text"
          value={selectedLabel}
          placeholder={placeholder}
          disabled={disabled}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          color={color}
          readOnly
        />
        <div className="dropdown-icon">
          <Icon 
            src={isOpen ? "/icons/chevron-up.svg" : "/icons/chevron-down.svg"} 
            alt={isOpen ? "Collapse" : "Expand"} 
          />
        </div>
      </div>
      
      {isOpen && (
        <div className="dropdown-options" style={customStyles}>
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};