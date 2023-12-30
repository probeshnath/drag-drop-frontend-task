import React, { useState } from 'react'
import { Container, Stack, Flex, List, ListItem, Heading } from '@chakra-ui/react'
import Players from './components/Players'
import { useDrop } from 'react-dnd'


const App = () => {
  const [player, setPlayer] = useState([
    { name: "probesh 1" },
    { name: "probesh 2" },
    { name: "probesh 3" },
    { name: "probesh 4" },
    { name: "probesh 5" },
  ])

  const [team, setTeam] = useState([])

  const [{isOver}, addToTeamRef] = useDrop({
    accept: "player",
    collect: (monitor) => ({isOver: !!monitor.isOver()})
  })

  const [{isOver: isPlayerOver}, removeFromTeamRef] = useDrop({
    accept: "team",
    collect: (monitor) => ({isOver: !!monitor.isOver()})
  })

  const movePlayerToTeam = (item) =>{
    console.log(item)
    setPlayer((prev) => prev.filter((_,i)=>  i !== item.index))
    setTeam((prev) => [...prev, item])
  }
  const removePlayerFromTeam = (item) =>{
    console.log(item)
    setTeam((prev) => prev.filter((_,i)=>  i !== item.index))
    setPlayer((prev) => [...prev, item])
  }

  return (
    <Container maxW="800px">
      <Heading p="2" align="center" color="GrayText">Drag and Drop</Heading>
      <Flex justify="space-between" height="90vh" align="center">
        <Stack w="300px">
          <Heading fontSize="3xl" color="yellow.800" textAlign="center" >Player</Heading>
          <List p="4" minH="70vh" boxShadow="xl" borderRadius="md" ref={removeFromTeamRef} bgGradient={
            isPlayerOver ? "linear(to-b, yellow.300, yellow.500)" : "linear(to-b, yellow.100, yellow.200)"
          } >
            {
              player.map((ply,i) => (
                <Players key={ply?.name} item={ply}  type="player" index={i} onDropPlayer={movePlayerToTeam} />
              ))
            }
          </List>
        </Stack>
        <Stack w="300px">
          <Heading fontSize="3xl" color="yellow.800" textAlign="center" >Main Section</Heading>
          <List p="4" minH="70vh" boxShadow="xl" borderRadius="md" ref={addToTeamRef} bgGradient={
            isPlayerOver ? "linear(to-b, teal.300, teal.500)" : "linear(to-b, teal.100, teal.200)"
          }>
          {
              team?.map((ply,i) => (
                <Players key={ply?.name} item={ply}  type="team" index={i} onDropPlayer={removePlayerFromTeam} />
              ))
            }
          </List>
        </Stack>
      </Flex>
    </Container>
  )
}

export default App