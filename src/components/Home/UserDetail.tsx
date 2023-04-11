import * as React from 'react';
import { Grid, Box } from '@mui/material';
import Card from '@mui/material/Card';
import EditIcon from '@mui/icons-material/Edit';
import CardContent from '@mui/material/CardContent';

interface UserDetailProps {
  name: string;
  email: string;
  country: string;
  date: string;
}

const UserDetail: React.FC<UserDetailProps> = ({ name, email, country, date }) => {
  return (
    <Card>
      <CardContent>
        <Box>
          <Grid container sx={styles.gridContainer}>
            <EditIcon sx={styles.editIcon} />
            <Grid item xs={6} className="user-detail">
              <p>
                UserName: <b>{name}</b>
              </p>
            </Grid>
            <Grid item xs={6} className="user-detail">
              <p>
                Email: <b>{email}</b>
              </p>
            </Grid>
            <Grid item xs={6} className="user-detail">
              <p>
                Country: <b>{country}</b>
              </p>
            </Grid>
            <Grid item xs={6} className="user-detail">
              <p>
                Created Date: <b>{date}</b>
              </p>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

const styles = {
  gridContainer: {
    position: 'relative',
    width: '80%',
    boxShadow: '1px 2px 1px #9f9f9f40',
    backgroundColor: '#e8f9ff',
    margin: '0.5rem auto',
    padding: '2rem 3rem 1rem 3rem',
    borderRadius: '10px',
  },
  editIcon: {
    position: 'absolute',
    right: '0.5em',
    top: '0.5em',
    cursor: 'pointer',
  },
};

export default UserDetail;
