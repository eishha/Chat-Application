import { Button, Heading, HStack } from '@chakra-ui/react'
// import { useState } from 'react'

const Navbar = ({ SignIn, SignOut, user }) => {
  return (
    <HStack
      margin={'4'}
      justifyContent="space-between"
      alignItems={'center'}
      p={6}
    >
      <Heading>Chat Room</Heading>
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
    <HStack>
      <Button colorScheme="purple" onClick={SignIn}>
        Sign In
      </Button>

      <Button colorScheme="yellow" variant={'ghost'} onClick={SignIn}>
        Sign Up
      </Button>
    </HStack>
  )
}
export default Navbar
