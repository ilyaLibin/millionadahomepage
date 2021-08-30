
import React, { useState, useEffect } from 'react';
import './App.css';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  Spacer,
  Button,
  useDisclosure
} from '@chakra-ui/react';

import theme from './helpers/config'
import Matrix from './components/Matrix';
import HowItWorksModal from './components/HowItWorksModal';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleHowItWorksClose = () => {
    localStorage.setItem('pixellord-onboarding-seen', 'yes');
    onClose()
  }
  useEffect(() => {
    const isSeen = localStorage.getItem('pixellord-onboarding-seen');
    if (!isSeen) { onOpen() }
  });

  return (
    <ChakraProvider theme={theme}>
      <Flex pt={5} pb={5} width={1000} style={{ margin: '0 auto'}}>
        <h1>The Million ADA Homepage</h1>
        <Spacer />
        <Box p="2">
          <Link
            textDecoration="underline"
            href="#"
            onClick={onOpen}
            fontSize="3xlg"
            fontWeight="bold"
            justifySelf="flex-start"
            pr={10}>
            How it works
          </Link>
          <Button colorScheme="teal" justifySelf="flex-end">Connect your wallet</Button>
        </Box>
      </Flex>
      <HowItWorksModal isOpen={isOpen} onOpen={onOpen} onClose={handleHowItWorksClose} />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Matrix />
          <VStack spacing={8}>
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
