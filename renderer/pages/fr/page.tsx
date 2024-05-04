import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/fr/navbar'

export default function HomePage() {
  return (
    <React.Fragment>
     
<div className="ctp-mocha relative h-screen bg-ctp-mantle">
                <Navbar />
                <div className='absolute block w-screen h-screen border-[8px] border-ctp-crust pointer-events-none z-50 3xl:opacity-0'></div>
                <div className="fixed top-10 left-0 w-screen h-screen z-10 text-ctp-text 3xl:top-0">
                    <webview src='/changelogs/page' style={{ width: '100%', height: '100%' }} className='px-[8px] 3xl:px-0' id='loader'></webview>
                </div>
            </div>


    </React.Fragment>
  )
}
 