import React from 'react'
import { Container, Stack, Flex, List, ListItem,Heading } from '@chakra-ui/react'


const App = () => {
  
  return (
    <Container maxW="800px">
      <Flex justify="space-between" height="90vh" align="center">
        <Stack w="300px">
          <Heading fontSize="3xl" color="yellow.800" textAlign="center" >Player</Heading>
          <List p="4" minH="70vh" boxShadow="xl" borderRadius="md">
            <ListItem>Player</ListItem>
          </List>
        </Stack>
        <Stack w="300px">
        <Heading fontSize="3xl" color="yellow.800" textAlign="center" >Main Section</Heading>
          <List p="4" minH="70vh" boxShadow="xl" borderRadius="md">
            <ListItem>Player</ListItem>
          </List>
        </Stack>
      </Flex>
    </Container>
  )
}

export default App