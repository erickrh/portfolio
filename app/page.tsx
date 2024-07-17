'use client';

import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { playfair } from './fonts';
import Image from 'next/image';
import TechStack from './components/TechStack';
import Companies from './components/Companies';

export default function Home() {
  const theme = useTheme();
  const [focusIcon, setFocusIcon] = useState(0);
  const [isPhotoActive, setIsPhotoActive] = useState(false);

  const handleClickPhoto = () => {
    setIsPhotoActive(true);
    setTimeout(() => {
      setIsPhotoActive(false);
    }, 1000);
  };

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

      <div className='animate-fade animate-once'>
        <h1 className={`px-5 pt-20 text-3xl ${playfair.className} text-center antialiased`}>
          Improving the world through technology
        </h1>

        <div className='mt-10 flex flex-col items-center space-y-10'>
          <Image
            src={'/profile-rounded.png'}
            alt='profile image'
            width={300}
            height={300}
            className={`${isPhotoActive ? 'animate-rotate-y' : ''} cursor-pointer rounded-md`}
            priority
            onClick={handleClickPhoto}
          />
          <p className='mx-5 leading-7'>
            I am Erick, a front-end developer and systems engineering professional passionate about
            web development, specializing in creating efficient and effective web solutions. My
            experience lies in designing and developing useful and easy to use web applications.
          </p>
        </div>
      </div>

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <div className='animate-fade space-y-5 animate-once'>
        <p className='mx-5 leading-7'>
          Ever since I can remember, I have loved technology. I enjoy participating in and building
          projects that fulfill a need and help improve people&apos;s lives. My journey began by
          creating simple yet intuitive websites and applications that were easy to use.
        </p>
        <p className='mx-5 leading-7'>
          I am passionate about learning and staying up-to-date. Additionally, being part of the IT
          world, I love solving problems, maintaining critical thinking to find the most optimal,
          scalable, and maintainable solutions.
        </p>
        <p className='mx-5 leading-7'>
          As a <em>front-end developer</em>, I strive to contribute as much as possible with my
          knowledge and to help build technology that can improve our environment and make a
          positive impact on our world.
        </p>
        <p className='mx-5 leading-7'>
          My love for technology has driven my career development, culminating in graduating with
          honors in systems engineering. My greatest strengths are a love of learning, perseverance,
          and persistence.
        </p>
      </div>

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <Companies />

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <TechStack />

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>
    </main>
  );
}
