import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import InputLabel from '@mui/material/InputLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type KeepMountedModalPropType = {
    status: boolean;
    onChange: (e: any) => void;
    passValue: (e: any) => void;
};


export default function KeepMountedModal(props: KeepMountedModalPropType) {
    const legalForm = [
        'Company',
        'Freelance',
        'ASBL',
    ];

    const [plan, setPlan] = React.useState({
        'fileName': null,
        'legalForm': null,
        'toVat': null,
    });

    const handleClose = () => {
        props.onChange(false);
    };

    const onChange = (e: any) => {
        setPlan({...plan, [e.target.name]: e.target.value});
    }

    const onSubmit = () => {
        props.passValue(plan);
    }
    console.log(plan)

    return (
        <Modal
            keepMounted
            open={props.status}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <Typography id="keep-mounted-modal-title" variant="h5" component="h2">
                    Create New Financial Plan
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                    <Box
                        sx={{
                            marginBottom: '0.7rem',
                        }}
                    >
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            name="fileName"
                            label="FileName"
                            variant="outlined"
                            size='small'
                            onChange={onChange}
                        />
                    </Box>
                    <Box
                        sx={{
                            marginBottom: '0.7rem',
                        }}
                    >
                        <Select
                            fullWidth
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="Age"
                            name="legalForm"
                            defaultValue="none"
                            size='small'
                            onChange={onChange}
                        >
                            <MenuItem value="none">
                                Select option
                            </MenuItem>
                            {
                                legalForm.map((legal, index) => {
                                    return <MenuItem key={index} value={index}>{legal}</MenuItem>
                                })
                            }
                        </Select>
                    </Box>
                    <Box>
                        <InputLabel id="demo-row-radio-buttons-group-label">Subject to VAT:</InputLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            onChange={onChange}
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </Box>
                    <Box>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Button variant="contained" color="success" onClick={onSubmit}>Create</Button>
                            <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
                        </Grid>
                    </Box>
                </Typography>
            </Box>
        </Modal>
    );
}