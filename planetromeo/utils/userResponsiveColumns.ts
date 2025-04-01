import { useWindowDimensions } from 'react-native';

export function useResponsiveColumns() {
  const { width } = useWindowDimensions();

  if (width >= 1200) return 5;
  if (width >= 992) return 4;
  if (width >= 768) return 3;
  return 2;
}