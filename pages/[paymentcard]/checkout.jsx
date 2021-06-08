import React from 'react';
import { useRouter } from 'next/router';
import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

const paymentcard = () => {
    const url = process.env.NEXT_PUBLIC_ShopperResultUrl;
    const router = useRouter();
    return (
        <div>
            <Head>
                {router.query.paymentcard && <script
                    src={
                        'https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=' +
                        router.query.paymentcard
                    }
                ></script>}
            </Head>
            <Flex height="100vh" alignItems="center" justifyContent="center">
                <form
                    action={url}
                    className="paymentWidgets"
                    data-brands="VISA MASTER DINERS DISCOVER AMEX"
                ></form>
            </Flex>
        </div>
    );
};

export default paymentcard;
