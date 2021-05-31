import React from 'react';
import { useRouter } from 'next/router';
import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';

//Metodo Post para obtener el checkout Id
async function checkoutValue() {
    try {
        const router = useRouter();
        const res = await fetch(
            process.env.NEXT_PUBLIC_REST_API + '/token_create',
            {
                body: JSON.stringify({
                    amount: router.query.paymentcard,
                    amountBase0: 1,
                    amountBaseImp: 1,
                    amountIVA: 1,
                }),
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

const paymentcard = () => {
    const url = process.env.NEXT_PUBLIC_ShopperResultUrl;
    const [checkout, setcheckout] = useState({ checkOutId: '' });

    //Resolviendo la promise
    checkoutValue().then(function (result) {
        if (result.data != undefined) {
            setcheckout(result.data.checkOutId);
        }
        return result.data;
    }).catch(function(error) {

        console.log("The error is handled, continue normally. " + error);
      
      });

    return (
        <div>
            <Head>
                <script
                    src={
                        'https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=' +
                        checkout
                    }
                ></script>
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
