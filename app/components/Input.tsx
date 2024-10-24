import React from 'react';

interface InputProps {
  type: string; // Input type, e.g., text, password, etc.
  placeholder?: string; // Placeholder text
  value: string | number; // Value of the input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // onChange handler
  className?: string; // Additional custom classes for styling
  label?: string; // Optional label for the input field
}

const Input: React.FC<InputProps> = ({ 
  type, 
  placeholder, 
  value, 
  onChange, 
  className = '', 
  label 
}) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium mb-2">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border border-gray-300 rounded ${className}`}
      />
    </div>
  );
};

export default Input;
