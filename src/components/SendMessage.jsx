import { HStack, IconButton, Input, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { auth, db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { BiSend } from 'react-icons/bi'
const SendMessage = () => {
  const [message, setMessage] = useState('')
  const sendMessage = async (event) => {
    event.preventDefault()
    if (message.trim() === '') {
      alert("Can't send an empty message")
      return
    }

    const { uid, displayName, photoURL } = auth.currentUser
    await addDoc(collection(db, 'messages'), {
      text: message,
      avatar: photoURL,
      name: displayName,
      createdAt: serverTimestamp(),
      uid,
    })
    setMessage('')
  }

  return (
    <Stack
      display={'flex'}
      width={'100%'}
      bottom={'0'}
      py={5}
      px={'30px'}
      pos={'fixed'}
    >
      <form
        style={{ backgroundColor: '#4c745d', borderRadius: '10px' }}
        onSubmit={(event) => sendMessage(event)}
      >
        <HStack>
          <Input
            name="message"
            type="text"
            focusBorderColor="#5ee2c5"
            border={'2px solid '}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            _placeholder={{ color: '#ddd' }}
          />
          <IconButton
            variant={'ghost'}
            type="submit"
            icon={<BiSend size={40} color="wheat" />}
            mr={2}
            _hover={{ bg: 'transparent' }}
          />
        </HStack>
      </form>
    </Stack>
  )
}
export default SendMessage
