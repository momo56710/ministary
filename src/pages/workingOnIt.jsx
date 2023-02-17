import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import NavBar from '../components/nav';
export default function workingOnIt() {
  return (
    <>
      <NavBar email={'momo'} d={'none'}></NavBar>
      <Box>
        <Center>
          <Box w="80vw" h="100%" borderWidth="1px" borderRadius="lg">
            <Box
              w="100%"
              h="100%"
              borderTopLeftRadius="lg"
              borderTopRightRadius="lg"
              p={4}
            >
             Comming Soon....
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
}
