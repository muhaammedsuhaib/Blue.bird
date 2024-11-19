import React from "react";

interface InputProps {
  required?:boolean;
  id?:string,
  type?: string; 
  placeholder?: string; 
  value?: string | number; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  className?: string;
  label?: string; 
  accept?:string;
}

const Input: React.FC<InputProps> = ({
  required,
  id,
  type,
  accept,
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
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={`${className}`}
        accept={accept}
      />
    </div>
  );
};

export default Input;
