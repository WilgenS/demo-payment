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

        fetch(
            process.env.NEXT_PUBLIC_REST_API + '/paymentPH1/' + router.query.id,
            {
                method: 'POST',
            }
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res.status);
                setmessage(res.status.message + '\n');
                setcode(result.status.code);
            })
            .catch(function (error) {
                console.log('The error is handled, continue normally. ', error);
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
                <Heading color={code === "000.100.110" ? 'green' : 'red'} mb={10}>
                    {code === "000.100.110"
                        ? 'Transaccion completada en modo test'
                        : 'Error: ' + message}
                </Heading>
            </Flex>
        </Flex>
    );
};

export default transaction;
