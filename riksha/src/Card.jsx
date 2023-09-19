import React from 'react'
import { Box, Card,  CardBody, CardFooter, SimpleGrid, Heading, Text, Button, Image } from '@chakra-ui/react'
import {BsInstagram} from "react-icons/bs";
import Sushi1 from './Img/img_sushi1.png'
import Sushi2 from './Img/img_sushi2.png'
import Sushi3 from './Img/img_sushi3.png'
import Button1 from './Img/path22.png'
import Hot from './Img/hot.png'
import Ellipse from './Img/Ellipse 8.svg'
import Baked from './Img/baked.png'

function Cart() {
  return (
    <>
     <SimpleGrid p={{base:"0px", md:'0% 15% 0% 15%'}} mt={'5%'} ml={{ base: "0%", '2xl': "0%" }} height={"479px"} spacing={4} templateColumns='repeat(auto-fill, minmax(392px, 1fr))'>


{/* 1 Card */}


<Card>
    <CardBody>
        <Box >
            <Box>
                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
            </Box>
            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
        </Box>
        
        <Box display={'flex'} gap={'3%'} mb={'1%'}>
            <Text color={'gray'}>200 грамм</Text>
            <Image src={Ellipse} />
            <Text color={'gray'}>130 Ккал</Text>
        </Box>
        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
    </CardBody>
    <CardFooter display={'flex'} gap={'5%'}>
        <Heading size={'lg'}>219₽</Heading>
        <Button size={'lg'}>В корзину</Button>
        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
    </CardFooter>
</Card>

<Card>
    <CardBody>
        <Box >
            <Box>
                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
            </Box>
            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
        </Box>
        
        <Box display={'flex'} gap={'3%'} mb={'1%'}>
            <Text color={'gray'}>200 грамм</Text>
            <Image src={Ellipse} />
            <Text color={'gray'}>130 Ккал</Text>
        </Box>
        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
    </CardBody>
    <CardFooter display={'flex'} gap={'5%'}>
        <Heading size={'lg'}>219₽</Heading>
        <Button size={'lg'}>В корзину</Button>
        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
    </CardFooter>
</Card>

<Card>
    <CardBody>
        <Box >
            <Box>
                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
            </Box>
            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
        </Box>
        
        <Box display={'flex'} gap={'3%'} mb={'1%'}>
            <Text color={'gray'}>200 грамм</Text>
            <Image src={Ellipse} />
            <Text color={'gray'}>130 Ккал</Text>
        </Box>
        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
    </CardBody>
    <CardFooter display={'flex'} gap={'5%'}>
        <Heading size={'lg'}>219₽</Heading>
        <Button size={'lg'}>В корзину</Button>
        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
    </CardFooter>
</Card>

<Card>
    <CardBody>
        <Box >
            <Box>
                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
            </Box>
            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
        </Box>
        
        <Box display={'flex'} gap={'3%'} mb={'1%'}>
            <Text color={'gray'}>200 грамм</Text>
            <Image src={Ellipse} />
            <Text color={'gray'}>130 Ккал</Text>
        </Box>
        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
    </CardBody>
    <CardFooter display={'flex'} gap={'5%'}>
        <Heading size={'lg'}>219₽</Heading>
        <Button size={'lg'}>В корзину</Button>
        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
    </CardFooter>
</Card>

<Card>
    <CardBody>
        <Box >
            <Box>
                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
            </Box>
            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
        </Box>
        
        <Box display={'flex'} gap={'3%'} mb={'1%'}>
            <Text color={'gray'}>200 грамм</Text>
            <Image src={Ellipse} />
            <Text color={'gray'}>130 Ккал</Text>
        </Box>
        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
    </CardBody>
    <CardFooter display={'flex'} gap={'5%'}>
        <Heading size={'lg'}>219₽</Heading>
        <Button size={'lg'}>В корзину</Button>
        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
    </CardFooter>
</Card>

<Card>
    <CardBody>
        <Box >
            <Box>
                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
            </Box>
            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
        </Box>
        
        <Box display={'flex'} gap={'3%'} mb={'1%'}>
            <Text color={'gray'}>200 грамм</Text>
            <Image src={Ellipse} />
            <Text color={'gray'}>130 Ккал</Text>
        </Box>
        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
    </CardBody>
    <CardFooter display={'flex'} gap={'5%'}>
        <Heading size={'lg'}>219₽</Heading>
        <Button size={'lg'}>В корзину</Button>
        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
    </CardFooter>
</Card>

<Card>
    <CardBody>
        <Box >
            <Box>
                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
            </Box>
            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
        </Box>
        
        <Box display={'flex'} gap={'3%'} mb={'1%'}>
            <Text color={'gray'}>200 грамм</Text>
            <Image src={Ellipse} />
            <Text color={'gray'}>130 Ккал</Text>
        </Box>
        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
    </CardBody>
    <CardFooter display={'flex'} gap={'5%'}>
        <Heading size={'lg'}>219₽</Heading>
        <Button size={'lg'}>В корзину</Button>
        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
    </CardFooter>
</Card>


{/* 2 Card */}


<Card>
    <CardBody>
        <Box >
            <Box>
                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
            </Box>
            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
        </Box>
        <Box display={'flex'} gap={'3%'} mb={'1%'}>
            <Text color={'gray'}>200 грамм</Text>
            <Image src={Ellipse} />
            <Text color={'gray'}>130 Ккал</Text>
        </Box>
        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
    </CardBody>
    <CardFooter display={'flex'} gap={'5%'}>
        <Heading size={'lg'}>219₽</Heading>
        <Button size={'lg'}>В корзину</Button>
        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
    </CardFooter>
</Card>

{/* 3 Card */}

<Card>
    <CardBody>
        <Box >
            <Box>
                <Image src={Hot} mb={'1%'} width={"13%"} position={'relative'} />
                <Image src={Baked} width={"13%"} height={"50px"} position={'relative'} />
            </Box>
            <Image src={Sushi1} position={'relative'} bottom={'50px'} />
        </Box>
        <Box display={'flex'} gap={'3%'} mb={'1%'}>
            <Text color={'gray'}>200 грамм</Text>
            <Image src={Ellipse} />
            <Text color={'gray'}>130 Ккал</Text>
        </Box>
        <Heading size={'md'} mb={'1%'}>Ролл "Филадельфия"</Heading>
        <Text>Лосось, сыр "Филадельфия", огурец, авокадо </Text>
    </CardBody>
    <CardFooter display={'flex'} gap={'5%'}>
        <Heading size={'lg'}>219₽</Heading>
        <Button size={'lg'}>В корзину</Button>
        <Button size={'lg'} bgImage={Button1} colorScheme='orange'>В корзину</Button>
    </CardFooter>
</Card>
</SimpleGrid>
    </>
  )
}

export default Cart