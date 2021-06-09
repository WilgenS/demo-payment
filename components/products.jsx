import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function productsForm({product, setProduct}) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Informacion Personal
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="master"
                        name="master"
                        label="master"
                        value={product.master}
                        onChange={(event) =>
                            setProduct((prevInfo) => ({
                                ...prevInfo,
                                master: event.target.value,
                            }))
                        }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="sfx"
                        name="sfx"
                        label="sfx"
                        value={product.sfx}
                        onChange={(event) =>
                            setProduct((prevInfo) => ({
                                ...prevInfo,
                                sfx: event.target.value,
                            }))
                        }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="licensePlate"
                        name="licensePlate"
                        label="license Plate"
                        value={product.licensePlate}
                        onChange={(event) =>
                            setProduct((prevInfo) => ({
                                ...prevInfo,
                                licensePlate: event.target.value,
                            }))
                        }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="businessLine"
                        name="businessLine"
                        type="number"
                        label="Linea"
                        value={product.linea}
                        onChange={(event) =>
                            setProduct((prevInfo) => ({
                                ...prevInfo,
                                linea: event.target.value,
                            }))
                        }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="price"
                        name="price"
                        label="Precio"
                        type="number"
                        value={product.precio}
                        onChange={(event) =>
                            setProduct((prevInfo) => ({
                                ...prevInfo,
                                precio: event.target.value,
                            }))
                        }
                        fullWidth
                    />
                </Grid>
           
            </Grid>
        </React.Fragment>
    );
}
