import * as React from 'react';
import Box from '@mui/material/Box';
import UserDetail from './UserDetail';
import Plan from './Plan';
import PlanModal from './PlanModal';
import Button from '@mui/material/Button';
import data from '../../data.json';
import AddIcon from '@mui/icons-material/Add';

import {PlanType} from './PlanModal';
import Swal from 'sweetalert2';

const Home = () => {
    const [plans, setPlan] = React.useState(data);
    const [open, setOpen] = React.useState<boolean>(false);
    const [modalType, setModalType] = React.useState<string>("create");
    const [index, setIndex] = React.useState<number>(0);
    const [currentValue, setCurrentValue] = React.useState<PlanType>({fileName: "", legalForm: "", toVat: ""})
    const handleOpen = () => setOpen(true);

    const modalHandle = (val: any) => {
        setOpen(val);
    }

    const getValue = (val: any) => {
        const today = new Date();
        const id = modalType === "create" ? plans[plans.length -1].id + 1 : index;
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        if (modalType === "create") {
            const newPlan = {...val, id: id, createdDate: date, updatedDate: date};
            setPlan([...plans, newPlan]);
            Swal.fire({
                icon: 'success',
                title: 'Created!',
                text: 'Financial Plan has been created.',
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            const newPlan = {...val, updatedDate: date};
            let updatedPlans = plans.splice(index, 1, newPlan);
            setPlan(plans);
            Swal.fire({
                icon: 'success',
                title: 'Updated!',
                text: 'Financial Plan has been updated.',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }

    const onDeleteClick = (index: number) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                setPlan(prevPlan => prevPlan.filter((_, i) => i !== index))
      
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: 'Financial Plan has been deleted.',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
        
    }

    const onEditClick = (index:number) => {
        setOpen(true)
        setModalType('update')
        setIndex(index)
        setCurrentValue(plans[index])
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
            <PlanModal
                type={modalType}
                status={open}
                onChange={(e) => modalHandle(e)}
                passValue={(e) => getValue(e)}
                defaultValue={currentValue}
            />
            <section>
                <div className="container-fluid main-container">
                    <ul className="grid-wrapper">
                        <li className="card new-card" onClick={handleOpen}>
                            <AddIcon
                                sx={{
                                    position: 'absolute',
                                    top: '40%',
                                    left: '50%',
                                    fontSize: '4em',
                                    color: 'grey',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '60%',
                                    left: '50%',
                                    fontSize: '1.2em',
                                    fontWeight: '100 !important',
                                    color: 'grey',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                New Plan
                            </Box>
                        </li>
                        {
                            plans.map((plan, index) => {
                                return <>
                                    <li key={plan.id + index} className="card">
                                        <Plan
                                            id={plan.id}
                                            title={plan.fileName}
                                            legalForm={plan.legalForm}
                                            toVat={plan.toVat}
                                            cDate={plan.createdDate}
                                            uDate={plan.updatedDate}
                                            onDeleteClick={() => onDeleteClick(index)}
                                            onEditClick={() => onEditClick(index)}
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
