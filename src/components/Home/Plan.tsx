import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Container,
  Grid,
} from '@mui/material';

import BadgeComponent from './BadgeComponent';

type PlanPropTypes = {
  title: string;
  legalForm: string;
  toVat: string;
  id: number;
  cDate: string;
  uDate: string;
  onDeleteClick: () => void;
  onEditClick: () => void;
}

const Plan: React.FC<PlanPropTypes> = ({
  title,
  legalForm,
  toVat,
  id,
  cDate,
  uDate,
  onDeleteClick,
  onEditClick
}) => {
  return (
    <>
      <Box>
        <Container>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '10px',
            }}
          >
            <EditIcon
              style={{color: '#000', cursor: 'pointer'}}
              className="me-sm-3"
              onClick={onEditClick}
            />
            <DeleteIcon
              style={{color:'#e00606', cursor: 'pointer'}}
              onClick={onDeleteClick}
            />
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
          <Grid
            item
            className="card-body"
            sx={{
              textAlign: 'left',
              paddingTop: '1rem',
            }}
            xs={12}
          >
            <h3>{ title }</h3>
            <p>Created Date: <b>{ cDate }</b></p>
            <p>Updated Date: <b>{ uDate }</b></p>
            <BadgeComponent
              legal={ legalForm }
              vat={ toVat }                       
            />
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Plan;