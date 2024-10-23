
const colors = {
    light: {
      background: '#F9FAFB',
      text: '#1F2937',
      textHover: '#2563EB',
      button: '#3B82F6',
      buttonHover: '#2563EB',
    },
    dark: {
      background: '#1F2937',
      text: '#E5E7EB',
      textHover: '#2563EB',
      button: '#3B82F6',
      buttonHover: '#2563EB',
    },
  };
  
  export const Theme = (isDarkMode: boolean) => {
    return isDarkMode ? colors.dark : colors.light;
  };
  