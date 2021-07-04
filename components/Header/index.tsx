import {
  Heading, Text, Box, useColorModeValue,
} from '@chakra-ui/react';

const Header = () => {
  const headingColor = useColorModeValue('blue.700', 'blue.400');
  const textColor = useColorModeValue('gray.500', 'gray.300');
  return (

    <Box textAlign="center">
      <Heading color={headingColor}>
        Social Share
      </Heading>
      <Text fontSize="1.2rem" color={textColor}>
        Share all your publications on all networks
      </Text>
    </Box>
  );
};

export default Header;
