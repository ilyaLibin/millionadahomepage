import {
  Box,
  Text,
  Button,
  Center,
  Badge,
  StarIcon,
  Kbd
} from '@chakra-ui/react';
import classNames from 'classnames';

function PurchaseDialog({amount}) {
  const adaPrice = (amount * 100).toLocaleString('en', { useGrouping: true })

  const dialogClassnames = classNames({
    'purchase-dialog': true,
    hidden: amount === 0
  })
  return (
    <div className={dialogClassnames}>
      <Center bg="pink.100" w="200" p={2} borderRadius="xl">
        <Box p="2">
          <Box d="flex" alignItems="baseline">
            <Box fontSize="2xl">
              <Text>{'₳' + adaPrice}</Text>
            </Box>
            <Box
              as="button"
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              <Button colorScheme="teal"
                bgGradient="linear(to-r, teal.500,green.500)"
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
                justifySelf="flex-end">Purchase</Button>
            </Box>
          </Box>

          <Box
            mt="1"
            lineHeight="tight"
            isTruncated
          >
            or press <Kbd>Esc</Kbd> to deselect all
          </Box>
        </Box>
      </Center>
    </div>
  )
}

export default PurchaseDialog;
