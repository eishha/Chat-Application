import { useEffect, useRef, useState } from 'react'
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import Message from './Message'
import SendMessage from './SendMessage'
import { Box } from '@chakra-ui/react'

const ChatBox = () => {
  const [messages, setMessages] = useState([])

  const scroll = useRef(null)
  const scrollToBottom = () => {
    scroll.current.scrollIntoView({ behavior: 'smooth' })
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'))

    const snapShot = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = []
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({
          ...doc.data(),
          id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
        })
      })
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      )
      setMessages(sortedMessages)
    })
    return () => snapShot()
  }, [])

  return (
    <Box backgroundColor={'#0d131f'}>
      <Box p={6} mb={'60px'}>
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={scroll}></div>
      </Box>

      <SendMessage />
    </Box>
  )
}

export default ChatBox
