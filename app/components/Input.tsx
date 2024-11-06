import React from "react";

interface InputProps {
  type: string; 
  placeholder?: string; 
  value: string | number; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  className?: string;
  label?: string; 
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className = "",
  label,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium mb-2">{label}</label>
      )}
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
