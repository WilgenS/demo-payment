import React from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const transaction = () => {
    const router = useRouter();
    const [message, setmessage] = useState('');
    const [code, setcode] = useState('');
    useEffect(() => {
        if (router.query.id === undefined) {
            return;
        }

        fetch(process.env.NEXT_PUBLIC_REST_API + '/paymentPH1/' + id, {
            method: 'POST',
        })
            .then((res) => res.json())
            .then((res) => {
                setmessage(res.status.message);
                setcode(result.status.code);
            })
            .catch(function (error) {
                console.log(
                    'The error is handled, continue normally. ' + error
                );
            });

    }, [router.query.id]);

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
