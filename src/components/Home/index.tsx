import * as React from 'react';
import {
    Box,
    Button,
} from '@mui/material';
import Plan from './Plan';
import Swal from 'sweetalert2';
import data from '../../data.json';
import PlanModal from './PlanModal';
import UserDetail from './UserDetail';
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
  type PlanType = {
    fileName: string;
    legalForm: string;
    toVat: string;
  };
      
  const [plans, setPlan] = React.useState(data);
  const [open, setOpen] = React.useState<boolean>(false);
  const [modalType, setModalType] = React.useState<'create' | 'edit'>('create');
  const [index, setIndex] = React.useState<number>(0);
  const [currentValue, setCurrentValue] = React.useState<PlanType>({
    fileName: '',
    legalForm: '',
    toVat: '',
  });
      
  const handleOpen = () => setOpen(true);

  const resetModalState = () => {
    setModalType('create');
    setCurrentValue({ fileName: '', legalForm: '', toVat: '' });
  };
    
  const modalHandle = (val: any) => {
    resetModalState();
    setOpen(val);
  };

  const getValue = (val: any) => {
    const today = new Date();
    const date = today.toISOString().slice(0, 10);
  
    const createPlan = () => {
      const id = plans[plans.length - 1].id + 1;
      const newPlan = { ...val, id, createdDate: date, updatedDate: date };
      setPlan([...plans, newPlan]);
      Swal.fire({
        icon: 'success',
        title: 'Created!',
        text: 'Financial Plan has been created.',
        showConfirmButton: false,
        timer: 1500,
      });
    };
  
    const updatePlan = () => {
      const newPlan = { ...val, updatedDate: date };
      const updatedPlans = [...plans];
      updatedPlans.splice(index, 1, newPlan);
      setPlan(updatedPlans);
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Financial Plan has been updated.',
        showConfirmButton: false,
        timer: 1500,
      });
    };
  
    if (modalType === 'create') {
      createPlan();
    } else {
      updatePlan();
    }
  };
      

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
    setModalType('edit')
    setOpen(true)
    setIndex(index)
    setCurrentValue(plans[index])
  }

  const userData = {
    name: 'John Doe',
    email: 'john.world.it@gmail.com',
    country: 'United Kingdom',
    date: '2023-11-11',
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: '0.5rem 3rem' }}>
          <Button variant="contained" onClick={handleOpen}>
              + New Plan
          </Button>
      </Box>

      <UserDetail
        name={userData.name}
        email={userData.email}
        country={userData.country}
        date={userData.date}
      />

      <PlanModal
        type={modalType}
        status={open}
        onChange={modalHandle}
        passValue={getValue}
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
            {plans.map((plan, index) => (
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
            ))}
          </ul>
        </div>
      </section>
    </>
  )
};

export default Home;
