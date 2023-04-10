import * as React from 'react';
import Box from '@mui/material/Box';
import UserDetail from './UserDetail';
import Plan from './Plan';
import CreateModal from './CreateModal';
import Button from '@mui/material/Button';
import data from '../../data.json';

const Home = () => {
    const plans = data;
    const [plan, setPlan] = React.useState(plans);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const modalHandle = (event: any) => {
        setOpen(event);
    }

    const getValue = (val: any) => {
        console.log(val, "This is ")
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    margin: '0.5rem 3rem',
                }}
            >
                <Button variant="contained" onClick={handleOpen}>+ New Plan</Button>
            </Box>
            <UserDetail
                name="Cristiano Ronaldo"
                email="ronaldo.cris@gmail.com"
                country="Estonia"
                date="2023-04-14"
            />
            <CreateModal
                status={open}
                onChange={(e) => modalHandle(e)}
                passValue={(e) => getValue(e)}
            />
            <section>
                <div className="container-fluid main-container">
                    <ul className="grid-wrapper">
                        {
                            plans.map((plan: any) => {
                                return <>
                                    <li key={plan.id} className="card">
                                        <Plan
                                            id={plan.id}
                                            title={plan.fileName}
                                            legalForm={plan.legalForm}
                                            toVat={plan.toVat}
                                            cDate={plan.createdDate}
                                            uDate={plan.updatedDate}
                                        />
                                    </li>
                                </>
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Home;
