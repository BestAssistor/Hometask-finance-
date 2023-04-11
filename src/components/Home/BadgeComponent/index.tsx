import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React from 'react';

type LegalFormToProps = {
  legal: string;
  vat: string;
};

const LegalForm: React.FC<LegalFormToProps> = (props) => {
  const {legal, vat} = props

  return (
    <>
      <Stack direction="row" spacing={1} sx={{marginTop: '1rem'}}>
        <Chip label={legal} size="small" color="success" />
        <Chip label={vat} size="small" color="info" />
      </Stack>
    </>
  )
};

export default LegalForm