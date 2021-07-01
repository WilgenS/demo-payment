import { useRouter } from 'next/router';
import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react';

const paymentcard = () => {
    const url = process.env.NEXT_PUBLIC_ShopperResultUrl;
    const router = useRouter();

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_REST_API}/getPaymentOptions`)
            .then((res) => res.json())
            .then((res) => {
                let options = '';
                res.installmentOptions.forEach(function (Option) {
                    options =
                        options +
                        `<option value=${Option.term}>${Option.description}</option>`;
                });

                var numberOfInstallmentsHtml = `<div class="wpwl-label wpwl-label-custom" style="display: inline-block">Diferido</div>
        <div class="wpwl-wrapper wpwl-wraper-custom" style="display:inline-block">
        <select name="recurring.numberOfInstallments">
        ${options}
        </select>
        </div>`;

                let credits = '';
                res.creditTypeOptions.forEach(function (credit) {
                    credits =
                        credits +
                        `<option value="${credit.code}">${credit.description}</option>`;
                });

                var tipoCredito = `<div class="wpwl-wrapper wpwl-wrapper-custom" style="display:inline-block"> Tipo de credito
        <select name="customParameters[SHOPPER_TIPOCREDITO]">
        ${credits} 
        </select>
        </div>`;

                setTimeout(function () {
                    var formCard =
                        document.getElementsByClassName('wpwl-form-card')[0];

                    if (formCard) {
                        var formInner = formCard.innerHTML;
                        var valid = formInner.search(
                            'recurring.numberOfInstallments'
                        );

                        if (valid < 0) {
                            var foo =
                                document.getElementsByClassName(
                                    'wpwl-button-pay'
                                )[0];
                            var parent = foo.parentNode;
                            var helper = document.createElement('div');
                            helper.innerHTML =
                                numberOfInstallmentsHtml + tipoCredito;
                            while (helper.firstChild) {
                                parent.insertBefore(helper.firstChild, foo);
                            }
                        }
                    }
                }, 9000);
            });
    }, [router.query.paymentcard]);

    return (
        <div>
            <Head>
                {router.query.paymentcard && (
                    <script
                        src={`https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${router.query.paymentcard}`}
                    ></script>
                )}
            </Head>
            <Flex height="100vh" alignItems="center" justifyContent="center">
                {
                    <form
                        id="payment"
                        action={url}
                        className="paymentWidgets"
                        data-brands="VISA MASTER DINERS DISCOVER AMEX"
                    ></form>
                }
            </Flex>
        </div>
    );
};

export default paymentcard;

