import { Box, Button, Container, Text } from '@chakra-ui/react'
import React from 'react'
import Typewriter from 'typewriter-effect';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';


function HomePage() {
  return <Container>
    <Box fontSize={'6xl'}>  
      <Text as={'b'}>SafeNotes</Text>
    <Typewriter
      options={{
        strings: ['Fast','Safe', 'Secure'],
        autoStart: true,
        loop: true,
      }}
    />
    <Link to={'/login'}>
    <Button>Get Started <span style={{marginLeft:'10px'}}><ArrowForwardIcon/></span></Button>
    </Link>
    </Box>
  </Container>
}

export default HomePage