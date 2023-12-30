import { Container, Stack, Flex, List, ListItem, Heading } from '@chakra-ui/react'
import { useDrag } from 'react-dnd'

const Players = ({item, type,index,onDropPlayer}) => {
    const [{isDragging}, dragRef] = useDrag({
        type: type,
        item: () => ({ ...item,index}),
        end: (item, monitor) =>{
            const dropResult = monitor.getDropResult();

            if(dropResult && item){
                onDropPlayer(item)
            }
        },
        collect: (monitor) =>({
            isDragging: monitor.isDragging()
        })
    })
    return (
      
            <ListItem color={isDragging ? "white": 'black'} bg={isDragging ? ( type === "player" ? "yellow.600" : "teal.400") : "white" } ref={dragRef} p="2" borderRadius="md" boxShadow="md" mb="2" textAlign="center" >{item?.name}</ListItem>
     
    )
}

export default Players