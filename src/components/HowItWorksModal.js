import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react"

const HowItWorksModal = (props) => {
  const {
    isOpen = true,
    onClose
  } = props;

  return (
    <Modal onClose={onClose} size='xl' isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody>
          <h1>Welcome to MillionADAHomepage!</h1>
          <h2>Here you can buy virtual property (measured in pixels) with your ADA</h2>
          <p>
            There are only 1,000,000 pixels.<br />
            1 Pixel = 1 ADA sold in 10x10 squares.<br />
            Your ownership is secured with NFT on Cardano blockchain.<br />
            <img src={process.env.PUBLIC_URL + '/img/Drag_select-1s.gif'} alt="drag select" width="30%" />
          </p>

          <h2>What can I do with my pixels?</h2>
          <p>
            <b>Your pixels - your rules!</b><br />
            You can hold your pixels forever<br />
            Flip it for a higher price! $$$$<br />
            You can decorate your are with any visuals <br />
            Link your website and write a caption <br />

          </p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Start exploring!</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default HowItWorksModal;
