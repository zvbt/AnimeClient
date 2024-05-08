'use client'
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/fr/navbar";

export default function Home() {
  return (
    <main>
<div className="ctp-mocha h-screen bg-ctp-mantle text-ctp-text flex justify-center">
        <video 
          src="/assets/videos/6.webm" 
          className='fixed top-0 left-0 w-screen h-screen object-cover z-0'
          autoPlay={true}
          muted={true}
          loop={true}
        ></video>
        <div className='w-full h-full bg-ctp-crust opacity-50 z-10 absolute'></div>
        <div className='mt-5 z-50 justify-center items-center'>
          <h1 className='text-3xl'>Changelogs</h1>
          <ul className='mt-5 list-disc'>
            <li>Now using <a href="#" className="text-ctp-blue">Nextron</a></li>
            <li>Changed UI color palette (<a href="#" className="text-ctp-blue">Catpuccin</a>)</li>
            <li>Fixed ads blocking</li>
            <li>Disabled hardware acceleration (Enable screenshare in Discord)</li>
            <li>Removed darkmode for Voiranime,Vostfree</li>
            <li>Removed app size limit</li>
          </ul>
        </div>
      </div>
    </main>
  );
}