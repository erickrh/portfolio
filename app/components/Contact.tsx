import Link from 'next/link';
import { playfair } from '../fonts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  return (
    <section className='mb-16'>
      <h2 className={`px-5 text-3xl ${playfair.className} text-center antialiased`}>Contact Me</h2>

      <p className='mx-5 mt-5 leading-7'>Do you have a project in mind? Feel free to contact me:</p>

      <ul className='mx-5 mt-5 space-y-2'>
        <li>
          <Link href='mailto:123erickrh@gmail.com' className='flex gap-2' target='_blank'>
            <EmailIcon />
            <p>123erickrh@gmail.com</p>
          </Link>
        </li>
        <li>
          <Link
            href='https://www.linkedin.com/in/erickrian/'
            className='flex gap-2'
            target='_blank'
          >
            <LinkedInIcon />
            <p>LinkedIn</p>
          </Link>
        </li>
        <li>
          <Link href='https://github.com/erickrh' className='flex gap-2' target='_blank'>
            <GitHubIcon />
            <p>GitHub</p>
          </Link>
        </li>
      </ul>
    </section>
  );
}
