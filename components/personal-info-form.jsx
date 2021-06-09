import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

export default function PersonalInfoForm({ personalInfo, setPersonalInfo }) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Informacion Personal
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Nombres"
                        value={personalInfo.nombre}
                        onChange={(event) =>
                            setPersonalInfo((prevInfo) => ({
                                ...prevInfo,
                                nombre: event.target.value,
                            }))
                        }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Apellidos"
                        value={personalInfo.apellido}
                        onChange={(event) =>
                            setPersonalInfo((prevInfo) => ({
                                ...prevInfo,
                                apellido: event.target.value,
                            }))
                        }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        label="Correo electronico"
                        value={personalInfo.correo}
                        onChange={(event) =>
                            setPersonalInfo((prevInfo) => ({
                                ...prevInfo,
                                correo: event.target.value,
                            }))
                        }
                        fullWidth
                        
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="Número telefónico"
                        value={personalInfo.telefono}
                        onChange={(event) =>
                            setPersonalInfo((prevInfo) => ({
                                ...prevInfo,
                                telefono: event.target.value,
                            }))
                        }
                        fullWidth
                        
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address"
                        name="address"
                        label="Dirección"
                        value={personalInfo.direccion}
                        onChange={(event) =>
                            setPersonalInfo((prevInfo) => ({
                                ...prevInfo,
                                direccion: event.target.value,
                            }))
                        }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel id="select-label">Documento</InputLabel>
                    <Select
                        labelId="select-label"
                        id="select"
                        name="selected"
                        fullWidth
                        value={personalInfo.tipoDocumento}
                        onChange={(event) =>
                            setPersonalInfo((prevInfo) => ({
                                ...prevInfo,
                                tipoDocumento: event.target.value,
                            }))
                        }
                    >
                        <MenuItem value={1}>Cedula</MenuItem>
                        <MenuItem value={2}>Pasaporte</MenuItem>
                        <MenuItem value={3}>RUC</MenuItem>
                    </Select>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="document"
                        name="document"
                        label="Identificación"
                        value={personalInfo.documento}
                        onChange={(event) =>
                            setPersonalInfo((prevInfo) => ({
                                ...prevInfo,
                                documento: event.target.value,
                            }))
                        }
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
