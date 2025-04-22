import Image from 'next/image';
import TransitionLink from 'next/link'
import React from 'react'


const page = () => {
  return (
<div className='hero w-[96%] max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between relative top-[15vh]' id="o-firmie">
        <div className='text-white w-full md:w-2/5 px-6 md:pl-24 text-[16px] sm:text-[18px] md:text-[24px] text-justify'>
          <p className='text-[24px] sm:text-[28px] md:text-[32px] mb-6 infoh'>Czym się zajmujemy?</p>
          <p className='mb-6 infop'>
            Oferujemy profesjonalne konsultacje i precyzyjne wyceny. Pomożemy Ci zrealizować Twoje marzenia o idealnym domu. Gwarantujemy najwyższą jakość wykonania.
          </p>
          <p className='infop mb-6'>
            <span className='sec_color'> Stal, szkło, drewno </span> – razem możemy stworzyć przestrzeń Twoich marzeń. Ponad <span className='sec_color info'>20</span> lat doświadczenia w branży.
          </p>
          <TransitionLink href="kontakt" className='infop underline hover:text-gray-400'>
            Napisz do nas już teraz!
          </TransitionLink>
        </div>
        <div className='w-full flex justify-center md:w-auto mt-6 md:mt-0 mb-10'>
          <Image
            src="/images/balustrady-min.webp"
            width={550}
            height={400}
            alt="Picture"
            className='w-full md:w-auto'
          />
        </div>
      </div>
  );
}

export default page;