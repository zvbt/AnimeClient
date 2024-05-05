import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Icons } from '../ui/icons';
import Link from 'next/link';

const close = () => {
    window.close();
};

function Navbar() {
    const [webviewReady, setWebviewReady] = useState(false);

    useEffect(() => {
        const webview = document.querySelector("webview");
        if (webview) {
            setWebviewReady(true);
        }
    }, []);

    function forward() {
        if (webviewReady) {
            (document.querySelector("webview") as any).goForward();
        }
    }

    function backward() {
        if (webviewReady) {
            (document.querySelector("webview") as any).goBack();
        }
    }

    function voiranime() {
        if (webviewReady) {
            (document.querySelector("webview") as any).loadURL("https://voiranime.com");
            (document.querySelector("webview") as any).addEventListener("did-finish-load", function () {

            });
        }
    }

    function anilist() {
        if (webviewReady) {
            (document.querySelector("webview") as any).loadURL("https://anilist.co");

        }
    }

    function vostfree() {
        if (webviewReady) {
            (document.querySelector("webview") as any).loadURL("https://vostfree.ws");
        }
    }

    function nekosama() {
        if (webviewReady) {
            (document.querySelector("webview") as any).loadURL("https://neko-sama.fr");
        }
    }

    function ADN() {
        if (webviewReady) {
            (document.querySelector("webview") as any).loadURL("https://animationdigitalnetwork.fr");
        }
    }

    return (
        <nav className='flex items-center fixed top-0 w-full h-11 mb-10 bg-ctp-crust z-50 shadow-ctp-base opacity-100 3xl:opacity-0' style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}>
            <div className="flex items-center mx-5 3xl:opacity-0" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
                <Link href={'/home'}><Image src={"/assets/logo.png"} width={32} height={32} alt='logo' quality={100} className='rounded-full'></Image></Link>
                <div className='ml-5 flex items-center justify-center text-ctp-text'>
                    {/* Anilist */}
                    <img src="/assets/fr/logo/anilist.png" width={20} height={20} className='rounded-md'/>
                    <a href="#" onClick={anilist} className="ml-2 mr-3 hover:text-ctp-blue">Anilist</a> 
                    {/* ADN */}
                    <img src="/assets/fr/logo/adn.png" width={20} height={20} className='rounded-md'/>
                    <a href="#" onClick={ADN} className="ml-2 mr-3 hover:text-ctp-blue">Adn</a> 
                    {/* Neko-sama */}
                    <img src="/assets/fr/logo/neko-sama.png" width={20} height={20} className='rounded-md'/>
                    <a href="#" onClick={nekosama} className="ml-2 mr-3 hover:text-ctp-blue">Neko-sama</a> 
                    {/* Voiranime */}
                    <img src="/assets/fr/logo/voiranime.png" width={20} height={20} className='rounded-md'/>
                    <a href="#" onClick={voiranime} className="ml-2 mr-3 hover:text-ctp-blue">Voiranime</a> 
                    {/* Vostfree */}
                    <img src="/assets/fr/logo/vostfree.png" width={20} height={20} className='rounded-md'/>
                    <a href="#" onClick={vostfree} className="ml-2 hover:text-ctp-blue">Vostfree</a> 
                </div>

            </div>
            <a href="#" onClick={close} style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties} className='absolute top-1/2 mr-5 right-0 transform -translate-y-1/2 w-4'><Icons.close className='fill-current text-ctp-text hover:text-ctp-red'/></a>
            
            <a href="#" onClick={forward} style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties} className='absolute top-1/2 mr-10 right-0 transform -translate-y-1/2 w-4'><Icons.RightArrow className='fill-current text-ctp-text hover:text-ctp-blue'/></a>
            <a href="#" onClick={backward} style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties} className='absolute top-1/2 mr-14 right-0 transform -translate-y-1/2 w-4'><Icons.LeftArrow className='fill-current text-ctp-text hover:text-ctp-blue'/></a>
        </nav>
    );
}

export default Navbar;
