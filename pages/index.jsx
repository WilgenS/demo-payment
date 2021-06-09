import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalInfoForm from '../components/personal-info-form';
import Products from '../components/products';
import { useRouter } from 'next/router';

export default function Checkout() {

    const useStyles = makeStyles((theme) => ({
        layout: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        paper: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
                marginTop: theme.spacing(6),
                marginBottom: theme.spacing(6),
                padding: theme.spacing(3),
            },
        },
        stepper: {
            padding: theme.spacing(3, 0, 5),
        },
        buttons: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        button: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(1),
        },
    }));
    
    const router = useRouter();

    const steps = ['Datos Personales', 'Productos'];

    const classes = useStyles();
    
    const [activeStep, setActiveStep] = React.useState(0);
    //personal-info
    const [value, setValue] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        direccion: '',
        tipoDocumento: 1,
        documento: ''
    });

    //Producto
    const [productValue, setProductValue] = useState({
        master: '',
        sfx: '',
        licensePlate: '',
        linea: '',
        precio: ''
    })

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <PersonalInfoForm personalInfo={value} setPersonalInfo={setValue}/>;
            case 1:
                return <Products product={productValue} setProduct={setProductValue}/>;
    
            default:
                console.log('Unknown step');
        }
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const GetcheckOutId = () => {
        console.log("Metodo");
        fetch(process.env.NEXT_PUBLIC_REST_API + '/token_create', {
            body: JSON.stringify({
                amount: productValue.precio,
                amountBase0: 1,
                amountBaseImp: 1,
                amountIVA: 1,
                customer:{
                    documentId: value.documento,
                    documentType: value.tipoDocumento,
                    names: value.nombre,
                    lastname: value.apellido,
                    emailAddress: value.correo,
                    mobileNumber: value.telefono,
                    address: value.direccion
                },
                products: [
                    {
                        master: productValue.master,
                        sfx: productValue.sfx,
                        licensePlate: productValue.licensePlate,
                        businessLine: productValue.linea
                    }
                ]
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("data", res);
                if (res.data != undefined) {
                    router.push('/'+ res.data.checkOutId +'/checkout')
                }
            })
            .catch(function (error) {
                console.log('The error is handled, continue normally. ', error);
            });

    };

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper
                        activeStep={activeStep}
                        className={classes.stepper}
                    >
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <div className={classes.buttons}>
                                {activeStep !== 0 && (
                                    <Button
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={
                                        activeStep === steps.length - 1
                                            ? GetcheckOutId
                                            : handleNext
                                    }
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1
                                        ? 'Realizar Orden'
                                        : 'Siguiente'}
                                </Button>
                            </div>
                        </React.Fragment>
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    );
}
