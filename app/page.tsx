'use client';

import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  const theme = useTheme();
  const [focusIcon, setFocusIcon] = useState(0);

  return (
    <main className='h-screen bg-background-beige'>
      <BottomNavigation
        // showLabels
        value={focusIcon}
        onChange={(event, newValue) => {
          setFocusIcon(newValue);
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
