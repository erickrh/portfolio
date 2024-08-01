'use client';

import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TechStack from './components/TechStack';
import Companies from './components/Companies';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Summary from './components/Summary';
import Contact from './components/Contact';

export default function Home() {
  const theme = useTheme();
  const [focusIcon, setFocusIcon] = useState(0);

  return (
    <main>
      <nav>
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
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: '100',
          }}
          className='animate-fade-down animate-delay-300'
        >
          <BottomNavigationAction label='Home' icon={<HomeIcon />} />
          <BottomNavigationAction label='About' icon={<PersonIcon />} />
          <BottomNavigationAction label='Stack' icon={<DataObjectIcon />} />
          <BottomNavigationAction label='Projects' icon={<GitHubIcon />} />
          <BottomNavigationAction label='Contact' icon={<EmailIcon />} />
        </BottomNavigation>
      </nav>

      <Summary />

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <AboutMe />

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <Companies />

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <TechStack />

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <Projects />

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <Contact />
    </main>
  );
}
