'use client';

import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { playfair, montserrat } from './fonts';
import Image from 'next/image';

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
          }}
        >
          <BottomNavigationAction label='Home' icon={<HomeIcon />} />
          <BottomNavigationAction label='About' icon={<PersonIcon />} />
          <BottomNavigationAction label='Stack' icon={<DataObjectIcon />} />
          <BottomNavigationAction label='Projects' icon={<GitHubIcon />} />
          <BottomNavigationAction label='Contact' icon={<EmailIcon />} />
        </BottomNavigation>
      </nav>

      <div>
        <h1 className={`px-5 pt-20 text-3xl ${playfair.className} text-center antialiased`}>
          Improving the world through technology
        </h1>

        <div className='mt-10 flex flex-col items-center space-y-10'>
          <Image
            src={'/profile-rounded.png'}
            alt='profile image'
            width={300}
            height={300}
            className='rounded-md'
          />
          <p className='mx-5 leading-7'>
            I am Erick, a front-end developer and systems engineering professional passionate about
            web development, specializing in creating efficient and effective web solutions. My
            experience lies in designing and developing useful and easy to use web applications.
          </p>
        </div>
      </div>

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <div className='space-y-5'>
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
      </div>

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <h2 className={`px-5 text-3xl ${playfair.className} text-center antialiased`}>
        Companies with which I have had the pleasure of working
      </h2>

      <div className='my-5 flex items-center justify-around'>
        <div className='flex flex-col items-center justify-center'>
          <svg className='h-12 w-12 fill-current text-[#0000A3]' viewBox='0 0 43 30'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M27.7421 15.2428C27.7932 15.1739 27.826 15.0904 27.826 14.9998C27.826 14.9091 27.7932 14.8256 27.7385 14.7603C27.7323 14.7541 27.7265 14.748 27.7208 14.7419C27.7099 14.7302 27.6994 14.7191 27.6874 14.7095L18.558 5.62627H18.5543L13.1416 0.239416L13.0978 0.195886C13.0955 0.193588 13.0932 0.190928 13.0908 0.188134C13.0855 0.182103 13.0798 0.175451 13.0723 0.170493C12.941 0.0652952 12.7732 0 12.5872 0H0.37933C0.171428 0 0 0.170493 0 0.377261C0 0.471576 0.0328266 0.555009 0.0875376 0.620304C0.0971508 0.632255 0.108348 0.642631 0.120084 0.653508C0.12616 0.659138 0.132381 0.664903 0.138601 0.671089L14.2504 14.7059C14.2624 14.7155 14.2728 14.7266 14.2838 14.7383C14.2894 14.7443 14.2952 14.7505 14.3015 14.7567C14.3525 14.822 14.3853 14.9054 14.3853 14.9961C14.3853 15.0868 14.3562 15.1702 14.3015 15.2392L14.2504 15.29L0.138601 29.3284C0.120364 29.3429 0.102127 29.3611 0.0875376 29.3792C0.0328266 29.4445 0 29.5279 0 29.6186C0 29.829 0.171428 29.9995 0.37933 29.9995H0.382977L12.5471 29.9959H12.62C12.817 29.9886 12.992 29.9052 13.1197 29.7782L13.1233 29.7746L18.558 24.3732L27.7421 15.2428ZM42.529 0.380895C42.529 0.471584 42.4961 0.555018 42.4414 0.623942C42.4318 0.635895 42.4206 0.646272 42.4089 0.657151C42.4028 0.66278 42.3966 0.668543 42.3904 0.674728L33.9319 9.08344C33.9223 9.09539 33.9111 9.10577 33.8993 9.11665C33.8933 9.12227 33.8871 9.12804 33.8808 9.13422C33.8152 9.18863 33.7313 9.21765 33.6401 9.21765C33.5489 9.21765 33.465 9.18501 33.3957 9.13422L24.8862 0.667473C24.8742 0.657917 24.8638 0.646787 24.8528 0.63512L24.8528 0.635096C24.8471 0.629055 24.8414 0.622871 24.8351 0.616687C24.7804 0.551391 24.7512 0.467956 24.7512 0.377267C24.7512 0.166868 24.919 0 25.1306 0H25.1342L42.1496 0.00362757C42.3575 0.00362757 42.529 0.170496 42.529 0.380895ZM42.529 29.6188C42.529 29.8292 42.3612 29.996 42.1496 29.996H42.146H25.1306C24.9227 29.996 24.7512 29.8255 24.7512 29.6188C24.7512 29.5281 24.7841 29.4446 24.8388 29.3757C24.8484 29.3638 24.8596 29.3534 24.8713 29.3425C24.8742 29.3399 24.877 29.3372 24.8799 29.3345C24.8832 29.3314 24.8865 29.3282 24.8898 29.3249L33.3447 20.9162C33.3543 20.9043 33.3655 20.8939 33.3772 20.883C33.3833 20.8774 33.3895 20.8716 33.3957 20.8654C33.4614 20.811 33.5453 20.782 33.6365 20.782C33.7276 20.782 33.8115 20.8146 33.8808 20.8654L33.9319 20.9162L42.3904 29.3285C42.4024 29.3381 42.4128 29.3492 42.4238 29.3609C42.4294 29.367 42.4352 29.3731 42.4414 29.3793C42.4961 29.4483 42.529 29.5281 42.529 29.6188Z'
            />
          </svg>
          <p className='-mt-1'>Axiacore</p>
        </div>
        <div className='flex h-12 items-end justify-center rounded-md bg-slate-50'>
          <Image src={'/tailorsoft.png'} alt='Tailorsoft Brand' width={110} height={110} />
        </div>
        <div className='flex items-center justify-center'>
          <Image src={'/valleduparverde.png'} alt='Valledupar Verde Brand' width={75} height={75} />
        </div>
      </div>
    </main>
  );
}
