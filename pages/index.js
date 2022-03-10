import Head from 'next/head'
import Image from 'next/image'
import dog1 from "../public/images/dog1.gif"
import dog2 from "../public/images/dog2.gif"
import dolph from "../public/images/dolph.gif"
import geko from "../public/images/geko.gif"
import seal from "../public/images/seal.gif"


export default function Home() {
  return (
    <div>
      <h1 className='text-5xl mt-10 text-center text-white'>The Smiling Animals App with Tailwind</h1>
      <div className='flex flex-wrap flex-row items-center justify-center w-full h-screen'>
        <div className='relative w-72 h-72 mx-16 overflow-hidden rounded-full ring-8 ring-yellow-300 ring-offset-8'>
          <Image
            objectFit='cover'
            src={dog1}
            alt='dog'
            layout='fill'
            priority
          />
          </div>
          <div className='relative w-72 h-72 mx-16 overflow-hidden rounded-full ring-8 ring-#c1c1c1-300 ring-offset-8'>
          <Image
            objectFit='cover'
            src={seal}
            alt='seal'
            layout='fill'
            priority
          />
          </div>
          <div className='relative w-72 h-72 mx-16 overflow-hidden rounded-full ring-8 ring-yellow-300 ring-offset-8'>
          <Image
            objectFit='cover'
            src={geko}
            alt='geko'
            layout='fill'
            priority
          />
          </div>
          <div className='relative w-72 h-72 mx-16 overflow-hidden rounded-full ring-8 ring-#c1c1c1-300 ring-offset-8'>
          <Image
            objectFit='cover'
            src={dolph}
            alt='dolphin'
            layout='fill'
            priority
          />
          </div>
          <div className='relative w-72 h-72 mx-16 overflow-hidden rounded-full ring-8 ring-yellow-300 ring-offset-8'>
          <Image
            objectFit='cover'
            src={dog2}
            alt='dog'
            layout='fill'
            priority
          />
          </div>
        </div>
    </div>
  )
}