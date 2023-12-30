import { Container, Stack, Flex, List, ListItem, Heading } from '@chakra-ui/react'

const Players = ({item}) => {
    return (
        <>
            <ListItem p="2" borderRadius="md" boxShadow="md" mb="2" textAlign="center" >{item?.name}</ListItem>
        </>
    )
}

export default Players