import React from 'react'
import { Box,Heading,Text } from '@chakra-ui/react'
import Card from './Card'

function Sushi() {
  return (
    <>
    <Box m={'5% 0% 1% 15%'} display={'flex'} gap={'0.3%'}>
        <Text color={'gray'}>Главная</Text>
        <Text>// Суши</Text>
    </Box>




    <Heading ml={'15%'}>Суши</Heading>
    <Box>
    <Card/>
    </Box>

    </>
  )
}

export default Sushi