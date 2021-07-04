import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      position="fixed"
      top="5"
      left="5"
      aria-label={`Change ${colorMode} mode`}
      size="lg"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
};

export default ColorMode;
