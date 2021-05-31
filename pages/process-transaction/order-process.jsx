import React from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

async function paymentRequest(id) {
    try {
        const res = await fetch(
            process.env.NEXT_PUBLIC_REST_API + '/paymentPH1/' + id,
            {
            
                method: 'POST',
            }
        );
        const result = await res.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

const transaction = () => {
    const router = useRouter();
    const [message, setmessage] = useState('');
    const [code, setcode] = useState('') ;
    useEffect(() => {
        if (router.query.id === undefined) {
            return;
        }

        paymentRequest(router.query.id)
        .then(function (result) {
            console.log("Entra al metodo ")
           setmessage(result.status.message.description);
            setcode(result.status.code);
            
            return result;
        })
        .catch(function (error) {
            console.log(
                'The error is handled, continue normally. ' + error
            );
        });
    }, [router.query.id])

  

    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex
                direction="column"
                background="gray.100"
                mb={10}
                p={12}
                rounded={10}
            >
                <Heading mb={6}>{message}</Heading>
            </Flex>
        </Flex>
    );
};

export default transaction;
