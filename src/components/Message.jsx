import { Box, Image, Text } from '@chakra-ui/react'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
const Message = ({ message }) => {
  const [user] = useAuthState(auth)

  return (
    <Box
      display={'flex'}
      alignItems={'flex-start'}
      mb={5}
      maxWidth="calc(100% - 50px)"
      width={'max-content'}
      p={4}
      boxShadow={'-2px 2px 1px 1px #4c768d'}
      style={{
        marginLeft: message.uid === user.uid ? 'auto' : '0px',
        backgroundColor: message.uid === user.uid ? '#389fa7' : '#0f131a',
        color: message.uid === user.uid ? '#1c2c4c' : '#7cc5d9',
        borderRadius:
          message.uid === user.uid ? '20px 20px 0 20px' : '20px 20px 20px 0',
      }}
    >
      <Image
        src={message.avatar}
        alt="user avatar"
        borderRadius={'full'}
        height={'50px'}
        width={'50px'}
        mr={3}
      />
      <Box>
        <Text fontSize={'12px'}>{message.name}</Text>
        <Text>{message.text}</Text>
      </Box>
    </Box>
  )
}
export default Message
