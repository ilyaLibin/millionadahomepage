import { RiWallet3Line } from 'react-icons/ri';
import React, { useEffect, useState } from 'react';
import './App.css';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Grid,
  Flex,
  Spacer,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

import components from './components';
import theme from './helpers/config'

const {
  HowItWorksModal, Matrix, SocialLinks, PurchaseDialog
} = components;

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [ state, setState ] = useState({
    isCheckoutOpen: false,
    selectedItems: []
  });

  const handleHowItWorksClose = () => {
    localStorage.setItem('pixellord-onboarding-seen', 'yes');
    onClose()
  }
  
  const handleSelection = (items) => {
    setState({...state, selectedItems: items })
    const amountOfSelectedItems = state.selectedItems.length;
    if (amountOfSelectedItems > 0) {

    }
  }

  useEffect(() => {
    // handle onboarding flow - how it works modal
    const isSeen = localStorage.getItem('pixellord-onboarding-seen');
    if (!isSeen) { onOpen() }
  });

  useEffect(() => {

  });
  const amount = state.selectedItems.reduce((sum, item) => {
    const price = (item.node && item.node.dataset.price) || 100;
    sum += parseInt(price);
    return sum;
  }, 0) 
  return (
    <ChakraProvider theme={theme}>
      <Flex pt={5} pb={5} width={1000} style={{ margin: '0 auto'}}>
        <h1>The Million ADA Homepage</h1>
        <Spacer />
        <Box p={2} fontSize="3xl" textAlign="center"><SocialLinks /></Box>
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
          <Button colorScheme="teal"
            bgGradient="linear(to-r, teal.500,green.500)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
            leftIcon={<RiWallet3Line />}
            justifySelf="flex-end" onClick={window.weareonit}>Connect your wallet</Button>
        </Box>
      </Flex>

      <HowItWorksModal isOpen={isOpen} onOpen={onOpen} onClose={handleHowItWorksClose} />

      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Matrix onSelectionFinish={handleSelection} duringSelection={handleSelection}/>

          <VStack spacing={8}>
            <Text fontSize="3xl"></Text>
          </VStack>
        </Grid>
      </Box>
      <PurchaseDialog amount={amount}/>
    </ChakraProvider>
  );
}

export default App;
