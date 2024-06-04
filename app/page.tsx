'use client';

import { useState } from 'react';
import {
  ButtonGroup,
  Button,
  Container,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  const theme = useTheme();
  const [value, setValue] = useState(false);

  return (
    <main className='h-screen bg-background-beige'>
      {/* <Container fixed sx={{ display: 'flex', justifyContent: 'center', paddingTop: { md: 5 } }}>
        <ButtonGroup
          variant='contained'
          aria-label='Basic button group'
          size='small'
          color='primary'
          sx={{ backgroundColor: theme.palette.primary.main, paddingY: { xs: 1 } }}
        >
          <Button
            className='active:text-grayish-yellow'
            sx={{ fontSize: '1em', paddingX: { md: '2em' } }}
          >
            Home
          </Button>
          <Button
            className='active:text-grayish-yellow'
            sx={{ fontSize: '1em', paddingX: { md: '2em' } }}
          >
            About
          </Button>
          <Button
            className='active:text-grayish-yellow'
            sx={{ fontSize: '1em', paddingX: { md: '2em' } }}
          >
            Technologies
          </Button>
          <Button
            className='active:text-grayish-yellow'
            sx={{ fontSize: '1em', paddingX: { md: '2em' } }}
          >
            Projects
          </Button>
          <Button
            className='active:text-grayish-yellow'
            sx={{ fontSize: '1em', paddingX: { md: '2em' } }}
          >
            Contact
          </Button>
        </ButtonGroup>
      </Container> */}

      <BottomNavigation
        // showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          backgroundColor: theme.palette.secondary.main,
          '& .MuiBottomNavigationAction-root': {
            color: 'grey',
          },
        }}
      >
        <BottomNavigationAction label='Home' icon={<HomeIcon />} />
        <BottomNavigationAction label='About' icon={<PersonIcon />} />
        <BottomNavigationAction label='Stack' icon={<DataObjectIcon />} />
        <BottomNavigationAction label='Projects' icon={<GitHubIcon />} />
        <BottomNavigationAction label='Contact' icon={<EmailIcon />} />
      </BottomNavigation>
    </main>
  );
}
