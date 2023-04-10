import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

type LegalFormToProps = {
    legal: string;
    vat: string;
};

export default function LegalForm(props: LegalFormToProps) {
    return (
        <>
            <Stack direction="row" spacing={1} sx={{marginTop: '1rem'}}>
                <Chip label={props.legal} size="small" color="success" />
                <Chip label={props.vat} size="small" color="info" />
            </Stack>
        </>
    )
};