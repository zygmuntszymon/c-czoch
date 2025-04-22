import Image from 'next/image';
import Link from 'next/link';
import { TransitionLink } from './components/utils/TransitionLink';

export default function Home() {
  return (
    <div className='w-full flex justify-center items-start flex-col'>
      <div className='hero w-[96%] h-[70vh] max-w-[1600px] mx-auto flex flex-col items-center justify-center relative top-[10vh] sm:top-[7vh] sm:h-[78vh]'>
        <div className='hero-background absolute top-0 left-0 w-full h-full z-[-1]'></div>
        <div className='hero-text flex items-center justify-center flex-col relative z-10'>
          <div className='flex items-center justify-center flex-col'>
            <p className='text-[20px] sm:text-[40px] md:text-[56px] text-white fadein'>ESTETYKA I FUNKCJONALNOŚĆ</p>
            <p className='text-[20px] sm:text-[40px] md:text-[56px] text-white font-bold fadein'>W KAŻDYM DETALU</p>
            <TransitionLink
              href="/realizacje"
              className='absolute bottom-[-100px] bg-white p-4 transition ease-in-out hover:bg-black hover:text-white fadein_delay text-sm sm:text-base md:text-lg'
            >
              SPRAWDŹ NASZE PROJEKTY
            </TransitionLink>
          </div>
        </div>
      </div>

    </div>
  );
}
