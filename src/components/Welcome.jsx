import { Button, Heading, HStack, Stack, Text } from '@chakra-ui/react'

const Welcome = ({ SignIn }) => {
  return (
    <Stack
      h={'70vh'}
      justifyContent={'center'}
      alignItems={'center'}
      spacing={4}
    >
      <Heading color="purple.500">Welcome to Chat Room</Heading>
      <HStack spacing={4}>
        {' '}
        <Text>Sign in to start chatting</Text>
        <Button colorScheme="yellow" onClick={SignIn}>
          Sign In
        </Button>
      </HStack>
    </Stack>
  )
}
export default Welcome
