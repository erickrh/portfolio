'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isIntersectingTechStack, setIsIntersectingTechStack] = useState(false);
  const ref = useRef(null);
  const techStackRef = useRef(null);
  const [isPhotoActive, setIsPhotoActive] = useState(false);

  const handleClickPhoto = () => {
    setIsPhotoActive(true);
    setTimeout(() => {
      setIsPhotoActive(false);
    }, 1000);
  };

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const element = techStackRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersectingTechStack(true);
        observer.disconnect();
      }
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.disconnect();
      }
    };
  }, []);

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
      </div>

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <h2 className={`px-5 text-3xl ${playfair.className} text-center antialiased`}>
        Companies with which I have had the pleasure of working
      </h2>

      <div
        ref={ref}
        className={`my-5 flex items-center justify-around ${isIntersecting ? 'animate-fadeIn opacity-100' : 'opacity-0'}`}
      >
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
          <Image
            src={'/tailorsoft.png'}
            alt='Tailorsoft Brand'
            width={110}
            height={110}
            style={{ width: '90%', height: 'auto' }}
          />
        </div>
        <div className='flex items-center justify-center'>
          <Image src={'/valleduparverde.png'} alt='Valledupar Verde Brand' width={75} height={75} />
        </div>
      </div>

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <h2 className={`px-5 text-3xl ${playfair.className} text-center antialiased`}>
        I love working with
      </h2>

      {/* Tech Stack */}
      <div className='m-5 flex flex-wrap gap-2' ref={techStackRef}>
        <div
          className={`group flex h-10 w-[8.2rem] ${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-200 ease-in-out animate-delay-100 animate-once' : 'opacity-0'} cursor-pointer items-center justify-center rounded-lg bg-taupe hover:h-11 hover:w-36 hover:bg-custom-black`}
        >
          <svg
            viewBox='0 0 50 50'
            width='35px'
            height='35px'
            className='duration-200 ease-in group-hover:fill-[#ffd600]'
          >
            <path d='M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z' />
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>Javascript</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-200 ease-in-out animate-delay-200 animate-once' : 'opacity-0'} group flex h-10 w-28 cursor-pointer items-center justify-center rounded-lg bg-second-background-tech hover:h-11 hover:w-32 hover:bg-custom-black`}
        >
          <svg width='32px' height='32px' viewBox='0 0 256 256' preserveAspectRatio='xMidYMid'>
            <g>
              <path
                className='duration-200 ease-in group-hover:fill-slate-100'
                d='M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z'
                fill='#000000'
              ></path>
            </g>
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>Next.js</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-200 ease-in-out animate-delay-300 animate-once' : 'opacity-0'} group flex h-10 w-[7rem] cursor-pointer items-center justify-center rounded-lg bg-taupe hover:h-11 hover:w-32 hover:bg-custom-black`}
        >
          <svg
            width='35px'
            height='35px'
            enableBackground='new 0 0 24 24'
            viewBox='0 0 24 24'
            id='react'
            className='duration-200 ease-in group-hover:fill-[#61DAFB]'
          >
            <path d='M12,9.852c-1.186,0-2.147,0.961-2.147,2.147c0,1.186,0.961,2.147,2.147,2.147s2.147-0.961,2.147-2.147C14.147,10.813,13.186,9.852,12,9.852z'></path>
            <path d='M4.514,15.801c0.211,0.07,0.422,0.141,0.638,0.202c-0.07,0.281-0.131,0.558-0.188,0.844c-0.492,2.602-0.108,4.664,1.12,5.372c1.266,0.731,3.394-0.019,5.466-1.833c0.164-0.145,0.328-0.295,0.492-0.455c0.206,0.202,0.422,0.394,0.637,0.581c2.006,1.725,3.989,2.423,5.213,1.716c1.266-0.731,1.678-2.948,1.144-5.648c-0.042-0.206-0.089-0.417-0.141-0.633c0.15-0.042,0.295-0.089,0.441-0.136C22.041,14.916,24,13.467,24,11.981c0-1.42-1.847-2.798-4.397-3.675V8.305c-0.253-0.084-0.506-0.164-0.759-0.239c0.042-0.173,0.08-0.347,0.117-0.52c0.577-2.794,0.197-5.038-1.083-5.779c-1.233-0.708-3.244,0.028-5.278,1.8c-0.202,0.173-0.398,0.356-0.586,0.539c-0.127-0.122-0.258-0.244-0.389-0.361C9.492,1.851,7.355,1.054,6.075,1.8C4.847,2.513,4.481,4.627,4.997,7.269c0.052,0.263,0.108,0.52,0.173,0.783C4.87,8.136,4.575,8.23,4.298,8.329C1.795,9.196,0,10.565,0,11.981C0,13.444,1.912,14.91,4.514,15.801z M10.889,19.62c-0.773,0.708-1.669,1.27-2.644,1.655c-0.52,0.248-1.12,0.272-1.655,0.061c-0.745-0.431-1.055-2.086-0.633-4.313c0.052-0.262,0.108-0.525,0.173-0.783c1.05,0.225,2.109,0.38,3.183,0.459c0.619,0.877,1.298,1.716,2.025,2.503c-0.15,0.145-0.3,0.286-0.45,0.417L10.889,19.62z M16.842,10.818c-0.22-0.413-0.445-0.825-0.68-1.228c-0.23-0.398-0.469-0.792-0.717-1.181c0.755,0.094,1.477,0.22,2.152,0.375C17.381,9.478,17.128,10.153,16.842,10.818z M16.851,13.152c0.3,0.68,0.563,1.369,0.792,2.077c-0.727,0.164-1.462,0.291-2.203,0.375c0.253-0.394,0.492-0.797,0.727-1.2C16.406,13.991,16.631,13.574,16.851,13.152z M16.309,11.986c-0.314,0.647-0.652,1.284-1.012,1.912c-0.356,0.623-0.736,1.228-1.134,1.828c-0.698,0.052-1.425,0.075-2.161,0.075c-0.736,0-1.448-0.023-2.137-0.066c-0.408-0.595-0.792-1.205-1.153-1.828c-0.361-0.623-0.694-1.256-1.008-1.903H7.702c0.309-0.647,0.647-1.28,1.003-1.903c0.356-0.623,0.741-1.228,1.144-1.823c0.703-0.052,1.42-0.08,2.152-0.08s1.453,0.028,2.152,0.08c0.398,0.591,0.778,1.195,1.139,1.814C15.653,10.711,15.99,11.344,16.309,11.986z M7.832,9.599c-0.23,0.398-0.455,0.805-0.666,1.218c-0.295-0.698-0.544-1.382-0.75-2.043c0.675-0.15,1.392-0.272,2.137-0.366C8.306,8.797,8.062,9.195,7.832,9.599z M7.167,13.189L7.167,13.189c0.216,0.413,0.436,0.821,0.67,1.224c0.239,0.408,0.483,0.816,0.741,1.214c-0.731-0.08-1.458-0.197-2.175-0.352C6.609,14.6,6.867,13.902,7.167,13.189z M12.038,18.48L12.038,18.48c-0.478-0.515-0.956-1.086-1.42-1.701c0.45,0.019,0.914,0.028,1.383,0.028c0.483,0,0.956-0.009,1.425-0.033C12.995,17.369,12.531,17.937,12.038,18.48z M18.165,19.888L18.165,19.888c-0.043,0.571-0.324,1.105-0.774,1.466c-0.745,0.431-2.334-0.131-4.05-1.603c-0.197-0.169-0.394-0.352-0.595-0.539c0.717-0.792,1.378-1.631,1.978-2.512c1.073-0.089,2.142-0.253,3.197-0.492c0.047,0.192,0.089,0.384,0.127,0.572C18.278,17.793,18.315,18.847,18.165,19.888z M18.572,9.032c0.244,0.07,0.478,0.145,0.703,0.22c2.184,0.75,3.717,1.866,3.717,2.719c0,0.919-1.636,2.105-3.975,2.878c-0.131,0.042-0.262,0.084-0.398,0.122c-0.328-1.022-0.731-2.02-1.195-2.991C17.874,11.024,18.254,10.039,18.572,9.032z M13.26,4.326L13.26,4.326c1.745-1.518,3.371-2.113,4.112-1.687c0.792,0.455,1.097,2.292,0.6,4.706c-0.033,0.159-0.066,0.314-0.108,0.469c-1.041-0.234-2.095-0.403-3.155-0.497C14.1,6.444,13.434,5.61,12.712,4.827C12.895,4.654,13.073,4.49,13.26,4.326z M12.01,5.545c0.492,0.534,0.956,1.096,1.387,1.677c-0.928-0.042-1.861-0.042-2.789,0C11.067,6.618,11.541,6.056,12.01,5.545z M6.572,2.672C7.36,2.213,9.108,2.869,10.95,4.5c0.117,0.103,0.234,0.216,0.356,0.328C10.579,5.61,9.909,6.444,9.295,7.316C8.236,7.41,7.186,7.574,6.145,7.804C6.084,7.565,6.033,7.321,5.981,7.077C5.54,4.808,5.831,3.098,6.572,2.672z M4.627,9.28c0.267-0.094,0.539-0.178,0.811-0.258c0.319,1.017,0.703,2.016,1.148,2.981c-0.45,0.98-0.839,1.992-1.162,3.023l-0.001,0.001c-0.197-0.056-0.389-0.117-0.581-0.183c-0.998-0.314-2.133-0.811-2.953-1.462c-0.473-0.328-0.792-0.834-0.881-1.402C1.008,11.122,2.489,10.025,4.627,9.28z'></path>
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>React.js</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-200 ease-in-out animate-delay-[400ms] animate-once' : 'opacity-0'} group flex h-10 w-36 cursor-pointer items-center justify-center rounded-lg bg-second-background-tech hover:h-11 hover:w-40 hover:bg-custom-black`}
        >
          <div className='group-hover:bg-white'>
            <svg width='30px' height='30px' viewBox='0 0 128 128' id='typescript'>
              <path
                className='group-hover:fill-[#007acc]'
                d='M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z'
              ></path>
            </svg>
          </div>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>Typescript</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-300 ease-in-out animate-delay-500 animate-once' : 'opacity-0'} group flex h-10 w-[7rem] cursor-pointer items-center justify-center rounded-lg bg-taupe hover:h-11 hover:w-32 hover:bg-custom-black`}
        >
          <svg
            width='35px'
            height='35px'
            preserveAspectRatio='xMidYMid'
            viewBox='0 0 256 244'
            id='redux'
            className='group-hover:fill-[#764ABC]'
          >
            <path d='M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z'></path>
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>Redux</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-300 ease-in-out animate-delay-[600ms] animate-once' : 'opacity-0'} group flex h-10 w-28 cursor-pointer items-center justify-center rounded-lg bg-second-background-tech hover:h-11 hover:w-32 hover:bg-custom-black`}
        >
          <svg
            className='group-hover:fill-[#E44D26]'
            width='42px'
            height='42px'
            viewBox='0 0 40 40'
            id='html'
          >
            <path d='M9.9 31.2 7.66 6h24.68L30.1 31.2 20 34Zm3.18-10.7H23.8l-.36 4-3.44.94-3.45-.93-.23-2.51h-3.1l.43 4.86L20 28.65l6.33-1.75.84-9.49H15.91l-.28-3.17h11.83l.27-3.09H12.25Z'></path>
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>HTML</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-300 ease-in-out animate-delay-700 animate-once' : 'opacity-0'} group flex h-10 w-20 cursor-pointer items-center justify-center rounded-lg bg-taupe hover:h-11 hover:w-[5.5rem] hover:bg-custom-black`}
        >
          <svg
            className='fill-taupe group-hover:fill-[#FAFAFA]'
            width='32px'
            height='32px'
            viewBox='0 0 16 16'
            id='css'
          >
            <path
              className='fill-custom-black group-hover:fill-[#2196F3]'
              d='m1 0 1.275 14.4L8 16l5.723-1.599L15 0z'
            ></path>
            <path d='m12.274 4.709-.161 1.809-.486 5.423L8 12.944l-.003.001-3.625-1.004-.253-2.836h1.776l.132 1.471 1.971.532.001-.001 1.974-.532.269-2.451-6.208.017-.176-1.676 6.533-.077.132-1.794-6.84.019-.115-1.669h8.864z'></path>
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>CSS</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-300 ease-in-out animate-delay-[800ms] animate-once' : 'opacity-0'} group flex h-10 w-36 cursor-pointer items-center justify-center rounded-lg bg-second-background-tech hover:h-11 hover:w-[9.5rem] hover:bg-custom-black`}
        >
          <svg viewBox='0 0 54 33' width='28px' height='28px'>
            <g clipPath='url(#prefix__clip0)'>
              <path
                className='fill-black group-hover:fill-[#38bdf8]'
                fillRule='evenodd'
                d='M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z'
                clipRule='evenodd'
              />
            </g>
            <defs>
              <clipPath id='prefix__clip0'>
                <path fill='#fff' d='M0 0h54v32.4H0z' />
              </clipPath>
            </defs>
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>TailwindCSS</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-300 ease-in-out animate-delay-[900ms] animate-once' : 'opacity-0'} group flex h-10 w-[7.5rem] cursor-pointer items-center justify-center rounded-lg bg-taupe hover:h-11 hover:w-32 hover:bg-custom-black`}
        >
          <svg width='23px' height='23px' viewBox='0 0 256 263'>
            <defs>
              <linearGradient
                id='logosSupabaseIcon0'
                x1='20.862%'
                x2='63.426%'
                y1='20.687%'
                y2='44.071%'
              >
                <stop offset='0%' stopColor='#249361' />
                <stop offset='100%' stopColor='#3ecf8e' />
              </linearGradient>
              <linearGradient
                id='logosSupabaseIcon1'
                x1='1.991%'
                x2='21.403%'
                y1='-13.158%'
                y2='34.708%'
              >
                <stop offset='0%' />
                <stop offset='100%' stopOpacity='0' />
              </linearGradient>
            </defs>
            <path
              className='group-hover:fill-[url(#logosSupabaseIcon0)]'
              d='M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z'
            />
            <path
              className='group-hover:fill-[url(#logosSupabaseIcon1)]'
              fillOpacity='0.2'
              d='M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z'
            />
            <path
              className='group-hover:fill-[#3ecf8e]'
              d='M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z'
            />
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>Supabase</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 ease-in-out animate-delay-1000 animate-once' : 'opacity-0'} group flex h-10 w-36 cursor-pointer items-center justify-center rounded-lg bg-second-background-tech duration-300 hover:h-11 hover:w-[9.5rem] hover:bg-custom-black`}
        >
          <svg
            width='28px'
            height='28px'
            preserveAspectRatio='xMinYMin meet'
            viewBox='0 0 256 256'
            id='bootstrap'
          >
            <path
              className='group-hover:fill-[#563D7C]'
              d='M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z'
            ></path>
            <path
              className='fill-second-background-tech group-hover:fill-[#FFF]'
              d='M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z'
            ></path>
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>Bootstrap</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-300 ease-in-out animate-delay-[1100ms] animate-once' : 'opacity-0'} group flex h-10 w-20 cursor-pointer items-center justify-center rounded-lg bg-taupe hover:h-11 hover:w-24 hover:bg-custom-black`}
        >
          <svg width='28px' height='28px' viewBox='0 0 128 128' id='git'>
            <path
              className='group-hover:fill-[#F34F29]'
              d='M124.742 58.378l-55.117-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.443 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.462 6.607 2.293 9.993l13.992 13.994c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.049-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-4.088-9.905-.311-13.683.934-.933 1.855-1.638 2.855-2.11v-34.659c-1-.472-1.92-1.172-2.856-2.111-2.861-2.86-3.396-7.06-1.928-10.576l-14.233-14.313-37.754 37.79c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.86-54.858c3.175-3.176 3.178-8.327.004-11.501z'
            ></path>
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>Git</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 ease-in-out animate-delay-[1200ms] animate-once' : 'opacity-0'} group flex h-10 w-28 cursor-pointer items-center justify-center rounded-lg bg-second-background-tech duration-300 hover:h-11 hover:w-32 hover:bg-custom-black`}
        >
          <svg
            className='group-hover:fill-second-background-tech'
            width='32px'
            height='32px'
            viewBox='0 0 24 24'
            id='github'
          >
            <path d='M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z'></path>
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>Github</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-300 ease-in-out animate-delay-[1300ms] animate-once' : 'opacity-0'} group flex h-10 w-36 cursor-pointer items-center justify-center rounded-lg bg-taupe hover:h-11 hover:w-40 hover:bg-custom-black`}
        >
          <svg width='32px' height='32px' preserveAspectRatio='xMidYMid' viewBox='0 0 256 204'>
            <path
              d='m0 110.848v-110.848l96 55.424v36.9493333l-64-36.9493333v73.898667z'
              className='group-hover:fill-[#00b0ff]'
            />
            <path
              d='m96 55.424 96-55.424v110.848l-64 36.949333-32-18.474666 64-36.9493337v-36.9493333l-64 36.9493333z'
              className='group-hover:fill-[#0081cb]'
            />
            <path
              d='m96 129.322667v36.949333l64 36.949333v-36.949333z'
              className='group-hover:fill-[#00b0ff]'
            />
            <path
              d='m160 203.221333 96-55.424v-73.8986663l-32 18.4746666v36.9493337l-64 36.949333zm64-147.797333v-36.9493333l32-18.4746667v36.9493333z'
              className='group-hover:fill-[#0081cb]'
            />
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>Material UI</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-300 ease-in-out animate-delay-[1400ms] animate-once' : 'opacity-0'} group flex h-10 w-28 cursor-pointer items-center justify-center rounded-lg bg-second-background-tech hover:h-11 hover:w-32 hover:bg-custom-black`}
        >
          <svg width='28px' height='28px' viewBox='0 0 410 404'>
            <path
              d='M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z'
              className='group-hover:fill-[url(#paint0_linear)]'
            />
            <path
              d='M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z'
              className='fill-second-background-tech group-hover:fill-[url(#paint1_linear)]'
            />
            <defs>
              <linearGradient
                id='paint0_linear'
                x1='6.00017'
                y1='32.9999'
                x2='235'
                y2='344'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#41D1FF' />
                <stop offset='1' stopColor='#BD34FE' />
              </linearGradient>
              <linearGradient
                id='paint1_linear'
                x1='194.651'
                y1='8.81818'
                x2='236.076'
                y2='292.989'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#FFEA83' />
                <stop offset='0.0833333' stopColor='#FFDD35' />
                <stop offset='1' stopColor='#FFA800' />
              </linearGradient>
            </defs>
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>Vite.js</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-300 ease-in-out animate-delay-[1500ms] animate-once' : 'opacity-0'} group flex h-10 w-36 cursor-pointer items-center justify-center rounded-lg bg-taupe hover:h-11 hover:w-40 hover:bg-custom-black`}
        >
          <svg width='36px' height='36px' viewBox='0 0 24 24' id='linux'>
            <path
              className='fill-second-background-tech group-hover:fill-[#d8d8ff]'
              d='M12.6 6.5c.1.1.2.1.4.2.1 0 .3.1.5.2h.1c.2-.3.3-.6.3-.9.1-.6-.4-1.2-1-1.2-.6.1-1 .7-1 1.3v.1c.2 0 .5.1.7.3zm4.5 8c-.3-.2-.6-.2-1-.3-.2-.9-.5-1.7-.9-2.5-.6-1.2-1.1-2.4-1.4-3.7-.2.3-.5.5-.9.6-.1.1-.3.1-.4.2-.3.2-.7.4-1.1.4h-.1c-.4 0-.7-.2-.9-.4-.1-.1-.2-.2-.3-.2-.1 0-.1-.1-.2-.1-.1 1.5-1 3.2-1.5 4.3-.3.8-.5 1.6-.5 2.4-.8-1.2-.2-2.7.1-3.3.4-.8.4-.9.3-.8-.7 1.1-2.1 3.5-.1 4.8 2.1 1.3 2.2 2.6 1 2.5.1.2.3.4.4.5 1.2 1 2.9 1.1 4.2.3 0-.1.1-.3.1-.4.1-.3.2-.7.2-1 .1-1.1.1-2.2.9-2.6.5-.2 1.2-.1 1.6.2.1.1.2.1.3.2.2.1.4.1.5.1h.6c.3-.4-.1-.8-.9-1.2zm-6.9-7.7.1-.1c.2-.3.5-.4.8-.5V6c0-.6-.4-1.1-.8-1.1-.3.1-.6.6-.6 1.2 0 .3.1.6.3.8.1 0 .2-.1.2-.1z'
            ></path>
            <path
              className='group-hover:fill-[#d8d8ff]'
              d='M8.5 17.4s0 .1 0 0c-.1-.1-.1-.3-.2-.4.1.2.1.3.2.4z'
            ></path>
            <path
              className='group-hover:fill-[#b2b1ff]'
              d='M15.4 22h-.2c-.6-.1-1.1-.4-1.3-1-.2-.7-.2-1.5.2-2.2.1-.3.2-.7.2-1 .1-1.1.1-2.2.9-2.6.5-.2 1.2-.1 1.6.2.1.1.2.1.3.2.2.1.4.1.5.1.4-.1.8 0 1.1.3.3.3.4.6.5 1 0 .2.1.5.2.6.5.5.7 1 .6 1.3-.1.5-.6.7-1.1 1-.5.2-1 .5-1.4.9-.5.7-1.3 1.1-2.1 1.2z'
            ></path>
            <path
              className='group-hover:fill-[#6563ff]'
              d='M17.9 15.9c-.4.5-1 .8-1.6.8-.6-.1-.8-.9-.7-1.5.1-.7.7-.7 1.5-.4.8.3 1.1.7.8 1.1zm-5.3-9.3c.1.1.3.1.4.2.2-.2.2-.4.2-.6 0-.4-.2-.7-.4-.7s-.5.3-.5.7v.3c.1.1.2.1.3.1zm-2.2.2.3-.3v-.3c0-.3-.2-.6-.4-.5-.2 0-.3.3-.3.6.1.3.3.5.4.5z'
            ></path>
            <path
              className='group-hover:fill-[#6563ff]'
              d='M17.3 10.8c-.8-1.3-2-2.1-2-3.7 0-1.9.2-5.4-3.3-5.1-3.5.3-2.5 4-2.6 5.3 0 1.1-.5 2.2-1.3 3.1-.1.1-.2.3-.3.4-.9 1.3-1.9 3-1.8 4.6.2-.1.4-.1.5-.1.8.1 1.2.9 1.7 1.8.1.1.1.3.2.4l.6.9.1.1c1.2.1 1.2-1.2-1-2.5-2-1.3-.6-3.7.1-4.8.1-.1.1 0-.3.8-.3.6-.9 2.1-.1 3.2 0-.8.2-1.6.5-2.4.5-1 1.4-2.8 1.5-4.3-.1-.2-.3-.5-.3-.8 0-.2.1-.4.3-.6.1 0 .2-.1.3-.2-.2-.2-.4-.5-.4-.8 0-.6.3-1.1.7-1.1.4 0 .7.4.8 1.1v.2c.2-.1.5-.1.7 0v-.1c-.1-.6.3-1.2 1-1.3.6.1 1.1.6 1 1.2 0 .3-.1.6-.3.9.3.1.5.4.5.7 0 .2-.1.3-.2.5.4 1.3.8 2.5 1.4 3.7.4.8.7 1.6.9 2.5.3 0 .7.1 1 .3.3.2.6.3.8.5.1.1.1.2.2.2 0 0 0 .1.1.1v.3c.1 0 .3.1.4.2.5-2-.5-3.9-1.4-5.2z'
            ></path>
            <path
              className='group-hover:fill-[#8c8aff]'
              d='M11.4 8.5c-.5 0-1-.3-1.4-.7l-.1-.1c-.1 0-.1 0-.1-.1s.1-.1.1-.1c.1 0 .1.1.3.2.3.4.7.6 1.2.6.5-.1 1-.2 1.4-.5.2-.1.4-.2.7-.3.1 0 .1 0 .1.1s0 .1-.1.1c-.2.1-.4.1-.6.3-.5.3-1 .5-1.5.5z'
            ></path>
            <path
              className='group-hover:fill-[#b2b1ff]'
              d='M13.5 6.9c-.2-.1-.3-.1-.5-.2-.1 0-.3-.1-.4-.2-.6-.6-1.7-.5-2.3.2l-.1.1s-.2.2-.4.3c-.2.2-.3.4-.3.6.1.4.3.7.7.9.1.1.2.2.3.2.2.3.6.4.9.4h.1c.4 0 .8-.1 1.1-.4.1-.1.2-.2.4-.2.5-.1 1-.5 1.1-1.1 0-.2-.3-.5-.6-.6zm-.1.8c-.2.1-.4.1-.6.3-.4.3-.9.5-1.5.6-.5 0-1-.3-1.4-.7l-.1-.1c-.1 0-.1 0-.1-.1s.1-.1.1-.1c.1 0 .1.1.3.2.3.4.7.6 1.2.6.5-.1 1-.2 1.4-.5.2-.1.4-.2.7-.3.1-.1.1-.1 0 .1.1-.1.1 0 0 0zm-5 14.1c-.6 0-1.2-.2-1.7-.5-.5-.2-1-.4-1.6-.4-.7-.1-1.2-.1-1.5-.6-.2-.4-.2-1 0-1.4v-.7c-.1-.4-.1-.7.1-1.1.2-.3.5-.6.9-.7.2 0 .4-.1.5-.3.1-.1.2-.2.2-.3.2-.5.8-.8 1.3-.8.9.1 1.4 1.1 1.9 2.2l.6.9c.5.7 1.1 1.3 1 2 0 .5-.3 1-.8 1.2-.2.4-.6.5-.9.5z'
            ></path>
            <path
              className='group-hover:fill-[#6563ff]'
              d='M13.8 19.4c-1.3.7-3 .6-4.2-.4.1.2.2.3.3.5v.1c.1.3.2.5.2.8 0 .2-.1.3-.1.5.5 0 1.1-.2 2-.3.5 0 1.1.1 1.8.2-.1-.5-.1-1 0-1.4z'
            ></path>
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>GNU / Linux</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-300 ease-in-out animate-delay-[1600ms] animate-once' : 'opacity-0'} group flex h-10 w-28 cursor-pointer items-center justify-center rounded-lg bg-second-background-tech hover:h-11 hover:w-32 hover:bg-custom-black`}
        >
          <svg
            width='25px'
            height='25px'
            preserveAspectRatio='xMinYMin meet'
            viewBox='0 0 256 255'
            id='python'
          >
            <defs>
              <linearGradient id='a' x1='12.959%' x2='79.639%' y1='12.039%' y2='78.201%'>
                <stop offset='0%' stopColor='#387EB8'></stop>
                <stop offset='100%' stopColor='#366994'></stop>
              </linearGradient>
              <linearGradient id='b' x1='19.128%' x2='90.742%' y1='20.579%' y2='88.429%'>
                <stop offset='0%' stopColor='#FFE052'></stop>
                <stop offset='100%' stopColor='#FFC331'></stop>
              </linearGradient>
            </defs>
            <path
              className='group-hover:fill-[url(#a)]'
              d='M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z'
            ></path>
            <path
              className='fill-background-beige group-hover:fill-[url(#b)]'
              d='M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z'
            ></path>
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>Python</p>
        </div>

        <div
          className={`${isIntersectingTechStack ? 'animate-jump-in opacity-100 duration-300 ease-in-out animate-delay-[1700ms] animate-once' : 'opacity-0'} group flex h-10 w-36 cursor-pointer items-center justify-center rounded-lg bg-taupe hover:h-11 hover:w-40 hover:bg-custom-black`}
        >
          <svg
            className='group-hover:fill-[#05A8DA]'
            width='31px'
            height='31px'
            viewBox='0 0 24 24'
            id='wordpress'
          >
            <path d='M12,2a10.00009,10.00009,0,1,0,10,9.99976A10.01117,10.01117,0,0,0,12,2ZM3.00928,11.99976a8.95547,8.95547,0,0,1,.77844-3.659L8.07654,20.09131A8.99123,8.99123,0,0,1,3.00928,11.99976ZM12,20.99121a8.98726,8.98726,0,0,1-2.54-.36633l2.69788-7.83869,2.7633,7.57135a.84386.84386,0,0,0,.06446.12391A8.97138,8.97138,0,0,1,12,20.99121ZM13.239,7.78436c.54126-.02844,1.02906-.08539,1.02906-.08539a.37165.37165,0,0,0-.05738-.741s-1.4563.11432-2.39648.11432c-.8833,0-2.3678-.11432-2.3678-.11432a.37165.37165,0,0,0-.057.741s.4585.05695.943.08539l1.40075,3.838-1.968,5.90087L6.49133,7.78436C7.033,7.75592,7.52026,7.699,7.52026,7.699a.37166.37166,0,0,0-.05749-.741s-1.45593.11432-2.39612.11432c-.1687,0-.36768-.00415-.57861-.01093A8.98815,8.98815,0,0,1,18.07117,5.36957c-.0387-.00238-.07654-.0072-.11634-.0072A1.55669,1.55669,0,0,0,16.445,6.958a4.21016,4.21016,0,0,0,.88317,2.1087,4.73577,4.73577,0,0,1,.74122,2.47955,10.88314,10.88314,0,0,1-.68409,2.9065l-.897,2.99634ZM16.52,19.771l2.74609-7.9397A8.489,8.489,0,0,0,19.94983,8.611a6.9105,6.9105,0,0,0-.06043-.92456A8.99224,8.99224,0,0,1,16.52,19.771Z'></path>
          </svg>
          <p className='ml-1 text-base font-bold group-hover:text-background-beige'>Wordpress</p>
        </div>
      </div>
    </main>
  );
}
