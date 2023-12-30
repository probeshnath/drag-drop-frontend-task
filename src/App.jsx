import React, { useState } from 'react'
import { Container, Stack, Flex, List, ListItem, Heading } from '@chakra-ui/react'
import Players from './components/Players'


const App = () => {
  const [player, setPlayer] = useState([
    { name: "probesh 1" },
    { name: "probesh 2" },
    { name: "probesh 3" },
    { name: "probesh 4" },
    { name: "probesh 5" },
  ])

  const [team, setTeam] = useState([])

  return (
    <Container maxW="800px">
      <Flex justify="space-between" height="90vh" align="center">
        <Stack w="300px">
          <Heading fontSize="3xl" color="yellow.800" textAlign="center" >Player</Heading>
          <List p="4" minH="70vh" boxShadow="xl" borderRadius="md">
            {
              player.map((ply,i) => (
                <Players key={ply?.name} item={ply} />
              ))
            }
          </List>
        </Stack>
        <Stack w="300px">
          <Heading fontSize="3xl" color="yellow.800" textAlign="center" >Main Section</Heading>
          <List p="4" minH="70vh" boxShadow="xl" borderRadius="md">
            <Players />
          </List>
        </Stack>
      </Flex>
    </Container>
  )
}

export default App