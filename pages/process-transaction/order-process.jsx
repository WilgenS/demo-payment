import React from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';

async function paymentRequest(id) {
    try {
        const res = await fetch(
            process.env.NEXT_PUBLIC_REST_API + '/paymentPH1/' + id,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
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


    if (router.query.id != undefined) {
        paymentRequest(router.query.id)
            .then(function (result) {
                console.log(result.status.message)
               setmessage(result.status.message.description);
                setcode(result.status.code);
                
                return result;
            })
            .catch(function (error) {
                console.log(
                    'The error is handled, continue normally. ' + error
                );
            });
    }

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
