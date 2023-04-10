import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import LegalForm from './BadgeComponent';

const Plan: React.FC<{
    title: string;
    legalForm: string;
    toVat: string;
    id: number;
    cDate: string;
    uDate: string;
}> = ({
    title,
    legalForm,
    toVat,
    id,
    cDate,
    uDate,
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
                        <EditIcon style={{color: '#000'}} className="me-sm-3" data-id={id} />
                        <DeleteIcon style={{color:'#e00606'}} data-id={id} />
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
                        <LegalForm
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
