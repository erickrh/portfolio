import Link from 'next/link';
import Image from 'next/image';
import { playfair } from '../fonts';

export default function Projects() {
  return (
    <>
      <h2 className={`px-5 text-3xl ${playfair.className} text-center antialiased`}>Projects</h2>

      <p className='mx-5 mt-5 leading-7'>
        These are some of the projects I have had the pleasure of working on:
      </p>

      <div className='mt-5 flex flex-col items-center justify-center'>
        <p className='mx-5 text-lg font-bold'>My Own Planner</p>
        <Link href='https://main.d1aih843z9b9o.amplifyapp.com/' target='_blank'>
          <Image
            src='/myown.png'
            alt='My Own Planner'
            width={500}
            height={500}
            className='h-full w-full rounded px-5'
            style={{ width: '100%', height: 'auto' }}
          />
        </Link>
        <p className='mx-5 mt-5 leading-7'>
          It is an application designed to be used worldwide, helping people fulfill their dreams
          and make all activities a reality, such as events by intuitively connecting users and
          providers, as well as providing tools like itineraries, calendars, budgets, and more.
        </p>
      </div>

      <div className='mt-5 flex flex-col items-center justify-center'>
        <p className='mx-5 text-lg font-bold'>Mephi Cats</p>
        <Link href='https://mephi-cats.vercel.app' target='_blank'>
          <Image
            src='/mephi.png'
            alt='Mephi Cats'
            width={500}
            height={500}
            className='h-full w-full rounded px-5'
          />
        </Link>
        <p className='mx-5 mt-5 leading-7'>
          Mephi Cats is a web application built with React.js that displays random cat images using
          TheCatAPI. Users can save their favorite images by double-clicking or double-tapping on
          their screen, which will allow them to easily access them in the future.
        </p>
      </div>

      <div className='mt-5 flex flex-col items-center justify-center'>
        <p className='mx-5 text-lg font-bold'>Jelou Book List</p>
        <Link href='https://jelou-book-list.vercel.app/' target='_blank'>
          <Image
            src='/jelou.png'
            alt='Jelou Book List'
            width={500}
            height={500}
            className='h-full w-full rounded px-5'
          />
        </Link>
        <p className='mx-5 mt-5 leading-7'>
          Jelou Book List is a bookstore that is responsible for recommending books to read, and you
          can also save your favorite books in a reading list to read them later. You can also
          filter the books by genre.
        </p>
      </div>

      <p className='mx-5 mt-5 text-lg leading-7'>
        Take a look at more of my projects here:
        <Link target='_blank' href='https://github.com/erickrh'>
          <u> https://github.com/erickrh</u>
        </Link>
      </p>
    </>
  );
}
