import { Button, Heading, HStack, Stack } from '@chakra-ui/react'
// import { useState } from 'react'

const Navbar = ({ SignIn, SignOut, user }) => {
  return (
    <HStack
      justifyContent="space-between"
      alignItems={'center'}
      p={6}
      backgroundColor={'#0d131f'}
    >
      <Heading color={'white'}>Chat Room</Heading>
      {user ? (
        <Button onClick={SignOut}>Sign Out</Button>
      ) : (
        <SignInopt SignIn={SignIn} />
      )}
    </HStack>
  )
}
const SignInopt = ({ SignIn }) => {
  return (
    <Stack flexDir={['column', 'row']}>
      <Button colorScheme="purple" onClick={SignIn}>
        Sign In
      </Button>

      <Button colorScheme="yellow" variant={'ghost'} onClick={SignIn}>
        Sign Up
      </Button>
    </Stack>
  )
}
export default Navbar
