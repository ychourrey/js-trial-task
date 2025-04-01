import { Dimensions } from 'react-native';

export const useResponsiveColumns = () => {
  const width = Dimensions.get('window').width;

  if (width < 500) return 2;     // Phones
  if (width < 800) return 3;     // Tablets
  if (width < 1200) return 4;    // Desktop
  return 6;
};