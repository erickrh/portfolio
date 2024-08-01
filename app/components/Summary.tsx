import Image from 'next/image';
import { useState } from 'react';
import { playfair } from '../fonts';

export default function Summary() {
  const [isPhotoActive, setIsPhotoActive] = useState(false);

  const handleClickPhoto = () => {
    setIsPhotoActive(true);
    setTimeout(() => {
      setIsPhotoActive(false);
    }, 1000);
  };

  return (
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
  );
}
