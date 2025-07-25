// src/hooks/useIsMobile.ts
import { useMediaQuery, useTheme } from '@mui/material';

const useIsMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return isMobile;
};

export default useIsMobile;
