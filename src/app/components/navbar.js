import Link from 'next/link';
import Image from 'next/image';
import { TransitionLink } from './utils/TransitionLink';

export default function Navbar() {
    return (
        <nav className="w-full h-[10vh] items-center justify-center p-5">

            <div className="relative h-[70px] w-auto text-center pt-6">
                <TransitionLink href="/">
                    <p className='logo font-bold text-white text-3xl'>CZOCH</p>
                </TransitionLink>
                <div className='w-full h-16 pt-2 mb-6 flex items-center justify-center'>
                    <TransitionLink href="/o-firmie" className='goto text-white text-[14px] sm:text-[16px] mx-4 sm:mx-8'>O FIRMIE</TransitionLink>
                    <span className='divider w-[2px] bg-white'></span>
                    <TransitionLink href="/realizacje" className='goto text-white text-[14px] sm:text-[16px] mx-4 sm:mx-8'>REALIZACJE</TransitionLink>
                    <span className='divider w-[2px] bg-white'></span>
                    <TransitionLink href="/kontakt" className='goto text-white text-[14px] sm:text-[16px] mx-4 sm:mx-8'>KONTAKT</TransitionLink>
                </div>
            </div>

        </nav>
    );
}
