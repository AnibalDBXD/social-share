import { Box } from '@chakra-ui/react';
import Form from '../components/Form';
import Header from '../components/Header';

const Home = () => (
  <Box
    style={{
      backgroundPositionY: 'center',
      backgroundPositionX: 'right',
    }}
    paddingTop="5"
    height="100vh"
    backgroundRepeat="no-repeat"
    backgroundImage="/images/circule.svg"
  >
    <Header />
    <Form />
  </Box>
);

export default Home;
