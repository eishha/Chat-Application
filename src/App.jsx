import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import { auth } from './firebase'

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Welcome from './components/Welcome'
import ChatBox from './components/Chatbox'

function App() {
  const [user] = useAuthState(auth)

  const SignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  const SignOut = () => {
    auth.signOut()
  }

  return (
    <ChakraProvider>
      <Navbar user={user} SignIn={SignIn} SignOut={SignOut} />
      {!user ? <Welcome SignIn={SignIn} /> : <ChatBox />}
    </ChakraProvider>
  )
}

export default App
