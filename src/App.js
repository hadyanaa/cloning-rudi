// import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import './App.css';
import logo from './images/logo_brand.png';
import buynow from './images/button_buy.png';
import telegram from './images/icon_telegram.png';
import twitter from './images/icon_twitter.png';
import ether from './images/icon_etherscan.png';
import dex from './images/icon_dextools.png';
import telegramBlue from './images/telegram_icon_blue.png';
import twitterBlue from './images/twitter_icon_blue.png';
import etherBlue from './images/ethersaan_icon_blue.png';
import dexBlue from './images/dextoolas_icon_blue.png';
import tokenomics from './images/tokenomics_corona_project.png';
import roadmap from './images/phase_corona_projects.png';
import beer2 from './images/coke_corona.png';
import copy from './images/icon_copy.png';
import corona from './images/corona_vs_beer.png';


function App() {
   const textRef = useRef(null);
   const [copied, setCopied] = useState(false);
   let CA = '0x0000000000000000000000';

    // Fungsi untuk menyalin teks ke clipboard
   const handleCopyClick = () => {
      // Mendapatkan teks dari elemen div
      const textToCopy = CA;

      // Buat elemen textarea sementara untuk menyalin teks
      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = textToCopy;
      document.body.appendChild(tempTextarea);

      // Pilih teks di dalam elemen textarea
      tempTextarea.select();
      // Salin teks ke clipboard
      document.execCommand('copy');

      // Hapus elemen textarea sementara
      document.body.removeChild(tempTextarea);

      setCopied(true);
      setTimeout(() => {
         setCopied(false);
      }, 3000);
   };  
   return (
      <div className='w-full flex-col relative font-simpsons overflow-x-hidden'>
         <div className="flex flex-col text-simpsons w-full h-full relative">
            {/* header */}
            <div className="flex bg-header justify-between h-20 md:h-24 w-full p-4 items-center text-black-outline-thin absolute top-0 z-10">
               <div className='flex justify-end pr-4 items-center w-1/3 md:w-1/5'>
                  <img src={logo} alt="logo" className='w-32 h-auto' />   
               </div>
               <div className="w-1/3 md:hidden text-5xl text-center mt-2 font-semibold"> Duff </div>
               <div className='hidden font-sans md:flex gap-x-8 w-4/5 justify-center items-center h-full'>
                  <a href='#home-section' className='navButton'> HOME </a>
                  <a href='#about-section' className='navButton'> WHY $CORONA? </a>
                  <a href='#tokenomics-section' className='navButton'> TOKENOMICS </a>
                  <a href='#roadmap-section' className='navButton'> ROADMAP </a>
               </div>

               <div className="w-1/3 md:w-1/5 flex justify-start pl-4 items-center">
                  <div className="flex flex-col items-center pt-2 cursor-pointer" href="">
                     <img className="w-32 h-auto" src={buynow} alt="buynow" />
                  </div>
               </div>
            </div>

            {/* hero */}
            <div className='w-screen bg pb-20 md:pb-0 flex items-center lg:h-screen justify-center px-8 flex-col relative text-[rgb(253,203,0)]'>
               <div className='md:-mt-16 mt-20 w-full flex flex-col md:flex-row'>
                  <div className='w-full mt-24 md:w-1/2 items-center flex justify-center h-full'> 
                     <img className='max-w-96 h-auto' src={beer2} alt="beer muter"/>
                  </div>
                  <div className='w-full md:w-2/3 flex flex-col h-full justify-center items-center lg:items-start mt-10 md:mt-0 lg:pl-12'>
                     <div className="text-5xl text-white md:text-[90px] lg:mt-4 font-medium"> Corona Beerus </div>
                     <div className="text-black-outline text-white font-bold text-xl lg:text-3xl mt-4 lg:mb-2 font-sans text-black text-center lg:text-start"> "CAN'T GET ENOUGH OF <br/>THAT WONDERFULL CORONA BEERUS!" </div>
                     <hr className='w-24 mt-2 border-white border-2'/>
                     <div className="w-full flex flex-col items-center lg:items-start mt-4 text-black">
                        <div className="items-center justify-center w-full text-xl">
                           <div className="flex items-center justify-center lg:justify-start text-xs lg:text-2xl w-full">
                              <div ref={textRef} className="mr-2 font-sans text-[#FFA500]">{copied ? 'Copied!' : 'CA:' + CA}</div>
                              {!copied && <button className='w-6 rounded' onClick={handleCopyClick}>
                                 <img src={copy} alt="copy" />
                              </button>}
                           </div>
                        </div>
                        <div className="flex items-center gap-x-6 mt-4">
                           <a className="" href="https://x.com/duffoneth">
                              <img className="w-10 h-10 z-10" src={twitter} alt="twitter" />
                           </a>
                           <a href="https://t.me/duffportal">
                              <img className="w-10 h-10 z-10" href="https://t.me/duffportal" src={telegram} alt="telegram" />
                           </a>
                           <a href="https://t.me/duffportal">
                              <img className="w-10 h-10 z-10" href="https://t.me/duffportal" src={ether} alt="etherscan" />
                           </a>
                           <a href="https://t.me/duffportal">
                              <img className="w-10 h-10 z-10" href="https://t.me/duffportal" src={dex} alt="dextools" />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bottom-2 text-white absolute text-black text-lg flex flex-col items-center justify-center">
                  <div>Scroll Anon</div>
                  <div className='w-6'>
                     <svg className="svg-inline--fa fa-chevron-down" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path class fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                     </svg>
                  </div>
               </div>
            </div>

            {/* about */}
            <div 
               id='about-section' 
               className='w-screen bg-about min-h-screen py-16 md:py-32 h-auto flex flex-col md:flex-row px-8 md:px-32 border-y-4 border-black relative'
            >
               <canvas id="bgCanvas"></canvas>
               <div id="foam_1"></div>
               <div id="foam_2"></div>
               <div id="foam_3"></div>
               <div id="foam_4"></div>
               <div className="w-ful lg:w-1/2 flex justify-center"><img className="w-2/3 h-full object-contain animate-pulse" src={corona} alt="corona" /></div>
               <div className="w-full md:w-1/2 flex flex-col mt-12 md:mt-0 justify-center">
                  <div className="text-4xl md:text-6xl text-black-outline"> Da Fuck is Corona Beerus? </div>
                  <hr className='w-24 mt-2 border-black border-2'/>
                  <div className="mt-4 font-sans md:mt-8 pl-1 only:pr-20 text-base md:text-xl"> 
                     Homer slept on last Simpson meme coin, thought it wouldn't moon and FOMO aped at ATH. <br/><br/> 
                     He is now depressed and getting drunk over his $CORONA. Marge wants to break up with him, his sons hate him and he can't pay his morgage bills. <br/><br/> 
                     Don't be like Homer, be like Coronaman: chad launching his own memecoin $CORONA to create generational wealth and start banging all Springfield chicks <br/><br/> 
                     Ape in, create generational wealth with the next million-mcap-breaking memecoin and help Homer pay for his morgage bills. 
                  </div>
               </div>
            </div>

            {/* tokenomics */}
            <div id='tokenomics-section' className='w-screen bg-tokenomics py-16 md:py-32 h-auto flex flex-col md:flex-row items-center justify-center px-8 md:px-32'>
               <div className='md:w-1/2 flex justify-start'>
                  <img className="w-full md:w-3/4 Duff-gif" src={tokenomics} alt='tokenomics' />
               </div>
               <div className="w-full md:w-1/2 flex flex-col mt-12 md:mt-0">
                  <div className="text-4xl md:text-6xl font-normal text-white"> Corona Nomics </div>
                  <hr className='w-24 mt-2 border-white border-2'/>
                  <div className="mt-4 font-sans md:mt-8 pl-1 only:pr-20 text-base text-white md:text-lg text-black"> 
                     Tax's are 0/0 no bullshit here. <br/><br/> 
                     Total Supply: 123,456,789 KEK <br/><br/> 
                     93.1% To LP, LOCKED for 369 days. <br/><br/>
                     6.9% Multisig Marketing &amp; CEX Wallet 
                  </div>
               </div>
            </div>

            {/* join */}
            <div className="flex items-center justify-center flex-col"
            style={{background: "-webkit-radial-gradient(center, circle cover, #fad046, #dfaa4e)"}}>
               <div className="flex py-8 font-semibold items-center text-5xl gap-x-6 mt-4">
                  Join Our Community Now!
               </div>
            </div>

            {/* roadmap */}
            <div id="roadmap-section" className="w-screen bg-roadmap py-16 md:pt-32 h-auto flex flex-col md:flex-row items-center justify-center px-8 md:px-32">
               <div className="w-full md:w-1/2 flex flex-col">
                  <div className="text-4xl md:text-6xl font-normal text-white"> Bar Crawl Route </div>
                  <hr className='w-24 mt-2 border-white border-2'/>
                  <div className="mt-4 font-sans md:mt-8 pl-1 md:pr-8 text-base text-white md:text-lg text-black"> 
                     Don't be like Homer, be like Coronaman: <br/><br/> 
                     chad launching his own memecoin $CORONA to create generational wealth and get banging all Springfield chicks. 
                  </div>
               </div>
               <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center"><img className="w-full md:w-3/4 Duff-gif" src={roadmap} alt='roadmap' /></div>
            </div>

            {/* foot */}
            <div className="flex items-center justify-center flex-col mb-0 pb-4"
            style={{background: "-webkit-radial-gradient(center, circle cover, #fad046, #dfaa4e)"}}>
               <div className="flex items-center gap-x-4 mt-6">
                  <a href="https://t.me/duffportal">
                     <img className="w-6 h-6 z-10" href="https://t.me/duffportal" src={telegramBlue} alt="telegram" />
                  </a>
                  <a className="" href="https://x.com/duffoneth">
                     <img className="w-6 h-6 z-10" src={twitterBlue} alt="twitter" />
                  </a>
                  <a href="https://t.me/duffportal">
                     <img className="w-6 h-6 z-10" href="https://t.me/duffportal" src={etherBlue} alt="etherscan" />
                  </a>
                  <a href="https://t.me/duffportal">
                     <img className="w-6 h-6 z-10" href="https://t.me/duffportal" src={dexBlue} alt="dextools" />
                  </a>
               </div>
               <a href="https://duff-coin.xyz" className="mt-4 font-sans text-lg font-semibold">&copy;Copyright 2024 all reserved - $CORONA</a>
            </div>
         </div>
      </div>
   );
}

export default App;
