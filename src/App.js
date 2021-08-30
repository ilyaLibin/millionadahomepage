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

const toastConfigs = {
  duration: null, isClosable: false, title: "Account created.", position: "bottom", };


const Btn = () => (<Button colorScheme="teal"
  bgGradient="linear(to-r, teal.500,green.500)"
  _hover={{
    bgGradient: "linear(to-r, red.500, yellow.500)",
  }}>Purchase</Button>)

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
      // updateToast(amountOfSelectedItems)
    }
  }

  // const toast = useToast()
  // const toastIdRef = React.useRef()

  // function updateToast(amount) {
  //   const adaPrice = (amount * 100).toLocaleString('en', { useGrouping: true })
  //   const description = {
  //     render: () => (
  //       <Box color="white" p={5}>
  //         {'₳' + adaPrice}
  //         <Alert status="info">
  //           <AlertTitle> A new version is available! </AlertTitle>
  //           <Button onClick={() => {}}> Reload </Button>
  //         </Alert>
  //       </Box>
  //     ),
  //   }

  //   if (toastIdRef.current) {
  //     toast.update(toastIdRef.current, { ...description, ...toastConfigs })
  //   } else {
  //     toastIdRef.current = toast({ ...description, ...toastConfigs  })
  //   }
  // }

  useEffect(() => {
    // handle onboarding flow - how it works modal
    const isSeen = localStorage.getItem('pixellord-onboarding-seen');
    if (!isSeen) { onOpen() }
  });

  useEffect(() => {

  });

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
            justifySelf="flex-end">Connect your wallet</Button>
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
      <PurchaseDialog amount={state.selectedItems.length}/>
    </ChakraProvider>
  );
}

export default App;
