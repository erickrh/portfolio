import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import { playfair } from '../fonts';

export default function AboutMe() {
  return (
    <>
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
    </>
  );
}
