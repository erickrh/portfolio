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

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersecting(true);
        console.log('Observable');
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
            priority
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

      <div className='mx-5 my-5 flex space-x-2'>
        <div className='group flex h-10 w-[8.2rem] cursor-pointer items-center justify-center rounded-lg bg-taupe duration-200 ease-in-out hover:h-11 hover:w-40 hover:bg-custom-black'>
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

        <div className='group flex h-10 w-28 cursor-pointer items-center justify-center rounded-lg bg-taupe duration-200 ease-in-out hover:h-11 hover:w-40 hover:bg-custom-black'>
          <svg width='35px' height='35px' viewBox='0 0 256 256' preserveAspectRatio='xMidYMid'>
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
      </div>
    </main>
  );
}
