import { Grid, Box } from '@mui/material';
import Card from '@mui/material/Card';
import EditIcon from '@mui/icons-material/Edit';
import CardContent from '@mui/material/CardContent';
const cardStyle = {
    backgroundColor: 'rgb(233 254 252)',
    width: '92%',
}

const UserDetail: React.FC<{ name:string; email:string; country:string; date:string; }> = ({ name, email, country, date}) => {
    return (
        <>
            <Card>
                <CardContent>
                    <Box>
                        <Grid
                            container
                            sx={{
                                position: 'relative',
                                width: '80%',
                                boxShadow: '1px 2px 1px #9f9f9f40',
                                backgroundColor: '#e8f9ff',
                                margin: '0.5rem auto',
                                padding: '2rem 3rem 1rem 3rem',
                                borderRadius: '10px',
                            }}
                        >
                            <EditIcon
                                sx={{
                                    position: 'absolute',
                                    right: '0.5em',
                                    top: '0.5em',
                                    cursor: 'pointer',
                                }}
                            />
                            <Grid
                                item
                                xs={6}
                            >
                                <p>UserName: <b> { name }</b></p>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <p>Email: <b> { email }</b></p>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <p>Country: <b> { country }</b></p>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <p>Created Date: <b> { date }</b></p>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
            {/* <div className="container-fluid mx-sm-6 p-4 mt-3" style={ cardStyle }>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <p>UserName: <b> { name }</b></p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <p>Email: <b> { email }</b></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <p>Country: <b> { country }</b></p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <p>Created Date: <b> { date }</b></p>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default UserDetail;
