import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="ctp-mocha h-screen bg-ctp-mantle text-ctp-text flex justify-center">
        <video 
          src="/assets/videos/6.webm" 
          className='fixed top-0 left-0 w-screen h-screen object-cover z-0'
          autoPlay={true}
          muted={true}
          loop={true}
        ></video>
        {/* <div className='w-full h-full bg-ctp-crust opacity-50 z-10 absolute'></div>
        <div className='mt-5 z-50 justify-center items-center'>
          <h1 className='text-3xl'>Changelogs</h1>
          <ul className='mt-5 list-disc'>
            <li>Now using NextJS & Electron</li>
            <li>Removed Vostfree</li>
          </ul>
        </div> */}
      </div>
    </React.Fragment>
  );
}
