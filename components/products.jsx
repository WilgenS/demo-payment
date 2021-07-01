import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function productsForm({ product, setProduct }) {
    const useStyles = makeStyles((theme) => ({
        buttons: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        button: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(1),
        },
    }));

    const classes = useStyles();

    //Producto
    const [productInfoValue, setProductInfoValue] = useState({
        master: '',
        sfx: '',
        licensePlate: '',
        businessLine: '',
        price: 0,
        quantity: 0,
    });
    const productsAdd = () => {
        setProduct((prevInfo) => {
            return [...prevInfo, productInfoValue];
        });
        return setProductInfoValue({
            master: '',
            sfx: '',
            licensePlate: '',
            businessLine: '',
            price: 0,
            quantity: 0,
        });
    };

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
                        value={productInfoValue.master}
                        onChange={(event) =>
                            setProductInfoValue((prevInfo) => ({
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
                        value={productInfoValue.sfx}
                        onChange={(event) =>
                            setProductInfoValue((prevInfo) => ({
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
                        value={productInfoValue.licensePlate}
                        onChange={(event) =>
                            setProductInfoValue((prevInfo) => ({
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
                        label="Linea"
                        value={productInfoValue.businessLine}
                        onChange={(event) =>
                            setProductInfoValue((prevInfo) => ({
                                ...prevInfo,
                                businessLine: event.target.value,
                            }))
                        }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="price"
                        name="price"
                        label="Precio"
                        type="number"
                        value={productInfoValue.price}
                        onChange={(event) =>
                            setProductInfoValue((prevInfo) => ({
                                ...prevInfo,
                                price: event.target.value,
                            }))
                        }
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        id="quantity"
                        name="quantity"
                        label="cantidad"
                        type="number"
                        value={productInfoValue.quantity}
                        onChange={(event) =>
                            setProductInfoValue((prevInfo) => ({
                                ...prevInfo,
                                quantity: event.target.value,
                            }))
                        }
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
                    <div className={classes.buttons}>
                        <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                            className={classes.button}
                            onClick={productsAdd}
                        >
                            <AddCircleIcon />
                        </IconButton>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table
                            className={classes.table}
                            size="small"
                            aria-label="a dense table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>master</TableCell>
                                    <TableCell >sfx</TableCell>
                                    <TableCell >
                                        license Plate
                                    </TableCell>
                                    <TableCell align="right">Linea</TableCell>
                                    <TableCell align="right">Precio</TableCell>
                                    <TableCell align="right">
                                        cantidad
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {product.map((row) => (
                                    <TableRow key={row.master}>
                                        <TableCell component="th" scope="row">
                                            {row.master}
                                        </TableCell>
                                        <TableCell>
                                            {row.sfx}
                                        </TableCell>
                                        <TableCell >
                                            {row.licensePlate}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.businessLine}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.price}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.quantity}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
              </Grid>
        </React.Fragment>
    );
}
