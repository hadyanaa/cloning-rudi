// import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import './App.css';
import coin from './coin.png';
import beer from './beer.png';
import telegram from './telegram.png';
import twitter from './twitter.png';
import tokenomics from './tokenomics.jpg';
import roadmap from './roadmap.jpg';
import beer2 from './coke_corona_beerus_1.png';


function App() {
   const textRef = useRef(null);
   const [copied, setCopied] = useState(false);
   let CA = '0xfeF888afa1fBd75CF9f6264b54fe1aa99aDB1aE9';

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
         <div className="flex flex-col bg text-simpsons w-full h-full relative">
            {/* header */}
            <div className="flex justify-between h-20 md:h-24 w-full p-4 items-center text-black-outline-thin absolute top-0 z-10">
               <div className='flex justify-start items-center w-1/3 md:w-1/5'>
                  <img src={coin} alt="coin" className='w-16 h-auto' />   
               </div>
               <div className="w-1/3 md:hidden text-5xl text-center mt-2 font-semibold"> Duff </div>
               <div className='hidden md:flex gap-x-8 w-4/5 justify-center items-center h-full'>
                  <a href='#home-section' className='navButton'> Home </a>
                  <a href='#about-section' className='navButton'> Why Duff? </a>
                  <a href='#tokenomics-section' className='navButton'> Tokenomics </a>
                  <a href='#roadmap-section' className='navButton'> Roadmap </a>
               </div>

               <div className="w-1/3 md:w-1/5 flex justify-end items-center">
                  <div className="flex flex-col items-center pt-2 cursor-pointer" href="">
                     <img className="w-10 lg:w-12" src={beer} alt="beer" />
                     {/* <a className="text-black text-sm lg:text-lg" >Buy Now</a> */}
                     <h2>Buy Now</h2>
                  </div>
               </div>
            </div>

            {/* hero */}
            <div className='w-screen pb-20 md:pb-0 flex items-center lg:h-screen justify-center px-8 flex-col relative text-[rgb(253,203,0)]'>
               <div className='md:-mt-16 mt-20 w-full flex flex-col md:flex-row'>
                  <div className='w-full md:w-1/2 items-center flex justify-center h-full'> 
                     <img className='max-w-40 h-auto' src={beer2} alt="beer muter"/>
                     {/* <div className="w-full h-[300px] lg:h-[500px]">
                        <canvas data-engine="three.js r158" width="684" height="500" style={{display: 'block', width: '684px', height: '500px',}}></canvas>
                     </div> */}
                  </div>
                  <div className='w-full md:w-2/3 flex flex-col h-full justify-center items-center lg:items-start mt-10 md:mt-0 lg:pl-12'>
                     <div className="text-5xl md:text-[90px] lg:mt-4 font-bold text-black-outline"> DUFF COIN </div>
                     <div className="text-black-outline font-bold text-xl lg:text-3xl mt-4 lg:mb-2 text-black text-center lg:text-start"> "CAN'T GET ENOUGH OF <br/>THAT WONDERFULL DUFF!" </div>
                     <div className="w-full flex flex-col items-center lg:items-start mt-4 text-black">
                        <div className="items-center justify-center w-full text-xl">
                           <div className="flex items-center justify-center lg:justify-start text-xs lg:text-2xl w-full">
                              <div ref={textRef} className="mr-2">{copied ? 'Copied!' : 'CA:' + CA}</div>
                              {!copied && <button className='w-6 rounded' onClick={handleCopyClick}>
                                 <svg class="svg-inline--fa fa-copy -mt-1 cursor-pointer" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path class="" fill="currentColor" d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"></path>
                                 </svg>
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
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bottom-2 absolute text-black text-lg flex flex-col items-center justify-center">
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
               className='w-screen min-h-screen py-16 md:py-32 h-auto flex flex-col md:flex-row px-8 md:px-32 border-y-4 border-black relative text-white'
               style={{background: "-webkit-radial-gradient(center, circle cover, rgb(251, 182, 0), rgb(218, 89, 0))"}}
            >
               <canvas id="bgCanvas"></canvas>
               <div id="foam_1"></div>
               <div id="foam_2"></div>
               <div id="foam_3"></div>
               <div id="foam_4"></div>
               <div className="w-ful lg:w-1/2 flex justify-center"><img className="w-2/3 h-full object-contain animate-pulse" src={coin} alt="coin" /></div>
               <div className="w-full md:w-1/2 flex flex-col mt-12 md:mt-0 justify-center">
                  <div className="text-4xl md:text-6xl text-black-outline"> Da Fuck is DUFF? </div>
                  <div className="mt-4 md:mt-8 pl-1 only:pr-20 text-base md:text-xl"> 
                     Homer slept on last Simpson meme coin, thought it wouldn't moon and FOMO aped at ATH. <br/><br/> 
                     He is now depressed and getting drunk over his $DUFF. Marge wants to break up with him, his sons hate him and he can't pay his morgage bills. <br/><br/> 
                     Don't be like Homer, be like Duffman: chad launching his own memecoin $DUFF to create generational wealth and start banging all Springfield chicks <br/><br/> 
                     Ape in, create generational wealth with the next million-mcap-breaking memecoin and help Homer pay for his morgage bills. 
                  </div>
               </div>
            </div>

            {/* tokenomics */}
            <div id='tokenomics-section' className='w-screen py-16 md:py-32 h-auto flex flex-col md:flex-row items-center justify-center px-8 md:px-32'>
               <div className='md:w-1/2 flex justify-start'>
                  <img className="w-full md:w-3/4 Duff-gif" src={tokenomics} alt='tokenomics' />
               </div>
               <div className="w-full md:w-1/2 flex flex-col mt-12 md:mt-0">
                  <div className="text-4xl md:text-6xl font-semibold text-black-outline-thin"> Beer 'O' Nomics </div>
                  <div className="mt-4 md:mt-8 pl-1 only:pr-20 text-base md:text-lg text-black"> 
                     Tax's are 0/0 no bullshit here. <br/><br/> 
                     Total Supply: 123,456,789 KEK <br/><br/> 
                     93.1% To LP, LOCKED for 369 days. <br/><br/>
                     6.9% Multisig Marketing &amp; CEX Wallet 
                  </div>
               </div>
            </div>

            {/* roadmap */}
            <div id="roadmap-section" className="w-screen py-16 md:pt-32 h-auto flex flex-col md:flex-row items-center justify-center px-8 md:px-32">
               <div className="w-full md:w-1/2 flex flex-col">
                  <div className="text-4xl md:text-6xl font-semibold text-black-outline-thin"> Bar Crawl Route </div>
                  <div className="mt-4 md:mt-8 pl-1 md:pr-8 text-base md:text-lg text-black"> 
                     Don't be like Homer, be like Duffman: <br/><br/> 
                     chad launching his own memecoin $DUFF to create generational wealth and get banging all Springfield chicks. 
                  </div>
               </div>
               <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center"><img className="w-full md:w-3/4 Duff-gif" src={roadmap} alt='roadmap' /></div>
            </div>

            {/* foot */}
            <div className="flex items-center justify-center flex-col mb-8">
               <div className="flex items-center gap-x-6 mt-4">
                  <a href="https://x.com/duffoneth" className="">
                     <img className="w-10 h-10 z-10" src={twitter} alt="" />
                  </a>
                  <a href="https://t.me/duffportal">
                     <img className="w-10 h-10 z-10" src={telegram} alt="" />
                  </a>
               </div>
               <a href="https://duff-coin.xyz" className="mt-4 text-3xl font-bold text-black-outline-thin">duff-coin.xyz</a>
            </div>
         </div>
      </div>
   );
}

export default App;
