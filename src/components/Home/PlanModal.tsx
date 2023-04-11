import * as React from 'react';
import {
    Box,
    Grid,
    Modal,
    Button,
    Select,
    MenuItem,
    Radio,
    InputLabel,
    RadioGroup,
    FormControlLabel,
    Typography,
    TextField,
    Stack,
    Alert,
    AlertTitle,
} from '@mui/material';

import { SelectChangeEvent } from '@mui/material/Select';

import { planValidation } from '../../validation';

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

type PlanType = {
  fileName: string;
  legalForm: string;
  toVat: string
}

type KeepMountedModalPropType = {
  type: string;
  status: boolean;
  fileName?: string;
  legalForm?: string;
  toVat?: string;
  defaultValue?: PlanType;
  onChange: (e: any) => void;
  passValue: (e: any) => void;
};


const KeepMountedModal:React.FC<KeepMountedModalPropType> = (props) => {
  const legalForm = ['Company', 'Freelance', 'ASBL'];
  const [plan, setPlan] = React.useState<PlanType>({
    fileName: "",
    legalForm: "",
    toVat: ""
  });

  const [error, setError] = React.useState<string[]>([]);

  React.useEffect(() => {
    props.defaultValue && setPlan(props.defaultValue)
  }, [props.defaultValue]);

  const handleClose = () => {
    props.onChange(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    setPlan({...plan, [e.target.name as string]: e.target.value});
  }

  const onSubmit = () => {
    const errors = planValidation(plan);
    if(errors.length > 0) {
      return setError(errors);
    }
    props.passValue(plan);
    setPlan({
      fileName: '',
      legalForm: '',
      toVat: '',
    });
    setError([]);
    props.onChange(false);
  }

  return (
    <Modal
      keepMounted
      open={props.status}
      onClose={handleClose}
    >
      <Box sx={style}>
        <Stack sx={{ width: '100%' }} spacing={2}>
          {error.map((err, index) => {
            return (<Alert key={index + err} severity="error">{err}</Alert>);
          })}
        </Stack>
        <Typography id="keep-mounted-modal-title" variant="h5" component="h2">
          {props.type === "create" ? 'Create New Financial Plan' : 'Update Financial Plan'}
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
                value={plan.fileName}
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
                size='small'
                onChange={onChange}
                value={plan.legalForm}
              >
                <MenuItem value="none">
                  Select option
                </MenuItem>
                {
                  legalForm.map((legal, index) => {
                    return <MenuItem key={legal + index} value={legal}>{legal}</MenuItem>
                  })
                }
              </Select>
            </Box>
            <Box>
              <InputLabel id="demo-row-radio-buttons-group-label">Subject to VAT:</InputLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="toVat"
                onChange={onChange}
                value={plan.toVat}
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
                <Button variant="contained" color="success" onClick={onSubmit}>
                  {props.type === 'create' ? 'Create' : 'Save'}
                </Button>
                <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
              </Grid>
            </Box>
          </Typography>
      </Box>
    </Modal>
  );
}

export default KeepMountedModal