import {
    Button,
    Flex,
    Heading,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text,
} from '@chakra-ui/react';
import { IoIosCard } from 'react-icons/io';
import { useRouter } from 'next/router';
import { useState } from 'react';

 const Home = () =>{
   
    //Valor del input
    const [value, setValue] = useState({total: '15.00'});

    const router = useRouter();
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex
                direction="column"
                background="gray.300"
                mb={10}
                p={12}
                rounded={10}
            >
                <Heading mb={6}>Demo Payment Cards</Heading>
                <Text fontSize="md">Monto Total</Text>
                <NumberInput
                    name="total"
                    defaultValue={15}
                    precision={2}
                    step={0}
                    mb={3}
                    background="white"
                   
                >
                    <NumberInputField  onChange={(event) => setValue(event.target.value)}/>
                </NumberInput>
                <Button
                    leftIcon={<IoIosCard />}
                    colorScheme="blackAlpha"
                    mb={2}
                    size="md"
                    onClick={() => router.push('/'+ value +'/checkout')}
                >
                    Pagar
                </Button>
            </Flex>
        </Flex>
    );
};

export default Home;
