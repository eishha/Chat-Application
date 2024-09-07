import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from '@chakra-ui/react'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BsThreeDots } from 'react-icons/bs'

const Message = ({ message }) => {
  const [user] = useAuthState(auth)

  return (
    <HStack
      gap={6}
      style={{
        flexDirection: message.uid === user.uid ? 'row-reverse' : 'row',
        marginLeft: message.uid === user.uid ? 'auto' : '0px',
      }}
    >
      <Box
        display={'flex'}
        alignItems={'flex-start'}
        mb={5}
        maxWidth="calc(100% - 50px)"
        width={'max-content'}
        p={4}
        boxShadow={'-2px 2px 1px 1px #4c768d'}
        style={{
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
          <HStack p={0} m={0}>
            <Text>{message.text}</Text>
            <MoreButton />
          </HStack>
        </Box>
      </Box>
    </HStack>
  )
}

const MoreButton = () => {
  const btnArray = ['Edit', 'Delete', 'Copy']
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          opacity={0}
          _hover={{ opacity: 1 }}
          aria-label={'more'}
          variant={'ghost'}
          icon={<BsThreeDots />}
        />
      </PopoverTrigger>
      <PopoverContent
        border={'none'}
        backgroundColor={'white'}
        minW={'max-content'}
        width={'100px'}
      >
        <PopoverBody>
          <VStack spacing={4}>
            {btnArray.map((btn, index) => (
              <Button
                key={index}
                color={'black'}
                fontWeight={'400'}
                variant={'link'}
              >
                {btn}
              </Button>
            ))}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
export default Message
