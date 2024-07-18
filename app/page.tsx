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
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import Link from 'next/link';

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

      <h2 className={`px-5 text-3xl ${playfair.className} text-center antialiased`}>
        Academic Background
      </h2>

      <div className='animate-fade space-y-5 animate-once'>
        <p className='mx-5 mt-5 leading-7'>
          I am characterized by my love of knowledge, which drives me to learn on my own. However, I
          also have official academic recognitions, including:
        </p>

        <div className='mx-5 flex flex-col justify-center space-y-4'>
          <div className='flex h-48 w-full flex-col items-center justify-center rounded-lg border border-gray-300 bg-transparent'>
            <SchoolIcon sx={{ fontSize: '2.8rem', marginBottom: '1.25rem' }} />
            <p className='mx-5 leading-7 text-gray-700'>Universidad Nacional y/a Distancia</p>
            <p className='mx-5 leading-7 text-gray-700'>Systems Engineer</p>
          </div>
          <div className='flex h-48 w-full flex-col items-center justify-center rounded-lg border border-gray-300 bg-transparent'>
            <SchoolIcon sx={{ fontSize: '2.8rem', marginBottom: '1.25rem' }} />
            <p className='mx-5 leading-7 text-gray-700'>Universidad Popular del Cesar</p>
            <p className='mx-5 leading-7 text-gray-700'>Business Administration</p>
          </div>
          <div className='flex h-48 w-full flex-col items-center justify-center rounded-lg border border-gray-300 bg-transparent'>
            <ArticleIcon sx={{ fontSize: '2.8rem', marginBottom: '1.25rem' }} />
            <p className='mx-5 leading-7 text-gray-700'>Cisco Networking Academy</p>
            <p className='mx-5 leading-7 text-gray-700'>NDG Linux Unhatched</p>
          </div>
          <div className='flex h-48 w-full flex-col items-center justify-center rounded-lg border border-gray-300 bg-transparent'>
            <ArticleIcon sx={{ fontSize: '2.8rem', marginBottom: '1.25rem' }} />
            <p className='mx-5 leading-7 text-gray-700'>Cisco Networking Academy</p>
            <p className='mx-5 leading-7 text-gray-700'>NDG Linux Essentials</p>
          </div>
        </div>
      </div>

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <Companies />

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <TechStack />

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>

      <h2 className={`px-5 text-3xl ${playfair.className} text-center antialiased`}>Projects</h2>

      <p className='mx-5 mt-5 leading-7'>
        These are some of the projects in which I have had the pleasure to be a part:
      </p>

      <Link href='https://main.d1aih843z9b9o.amplifyapp.com/' target='_blank'>
        <div className='mt-5 flex flex-col items-center justify-center'>
          <p className='mx-5 text-lg font-bold'>My Own Planner</p>
          <Image
            src='/myown.png'
            alt='My Own Planner'
            width={500}
            height={500}
            className='h-full w-full rounded px-5'
            style={{ width: '100%', height: 'auto' }}
          />
          <p className='mx-5 mt-5 leading-7'>
            It is an application designed to be used worldwide, helping people fulfill their dreams
            and make all activities a reality, such as events by intuitively connecting users and
            providers, as well as providing tools like itineraries, calendars, budgets, and more.
          </p>
        </div>
      </Link>

      <Link href='https://mephi-cats.vercel.app' target='_blank'>
        <div className='mt-5 flex flex-col items-center justify-center'>
          <p className='mx-5 text-lg font-bold'>Mephi Cats</p>
          <Image
            src='/mephi.png'
            alt='Mephi Cats'
            width={500}
            height={500}
            className='h-full w-full rounded px-5'
          />
          <p className='mx-5 mt-5 leading-7'>
            Mephi Cats is a web application built with React.js that displays random cat images
            using TheCatAPI. Users can save their favorite images by double-clicking or
            double-tapping on their screen, which will allow them to easily access them in the
            future.
          </p>
        </div>
      </Link>

      <Link href='https://jelou-book-list.vercel.app/' target='_blank'>
        <div className='mt-5 flex flex-col items-center justify-center'>
          <p className='mx-5 text-lg font-bold'>Jelou Book List</p>
          <Image
            src='/jelou.png'
            alt='Jelou Book List'
            width={500}
            height={500}
            className='h-full w-full rounded px-5'
          />
          <p className='mx-5 mt-5 leading-7'>
            Jelou Book List is a bookstore that is responsible for recommending books to read, and
            you can also save your favorite books in a reading list to read them later. You can also
            filter the books by genre.
          </p>
        </div>
      </Link>

      <p className='mx-5 mt-5 text-lg leading-7'>
        Take a look at more of my projects here:{' '}
        <Link target='_blank' href='https://github.com/erickrh'>
          <u>https://github.com/erickrh</u>
        </Link>
      </p>

      <div className='mx-5 my-10 border-t-[1px] border-solid border-black'></div>
    </main>
  );
}
