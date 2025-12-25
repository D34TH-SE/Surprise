
import React, { useState } from 'react';
import Login from './components/Login';
import GiftBox from './components/GiftBox';
import Letter from './components/Letter';
import Snowfall from './components/Snowfall';
import { HangingLights, CornerDecorations, FloatingSparkles } from './components/FestiveDecorations';

// --- EDIT YOUR PERSONAL CONTENT HERE ---

const PERSONAL_LETTER = `Merry Christmas, Daeeee🎄!

Hi daee, It's been a rough year for both of us, This year has taught so many lessons about life and love for both of us. But still right now we're trying to be back to each other again.

To be honest daee, that time nga nagdate ta, I was so happy on that day like to be able to talked to you, to be able to hug you and do everything that we do every time nga katong kita pa daee.
Everyday, I miss being with you daee. Again Daee "MERRY CHRISTMAS AND MERRY CHRISTMAS with your family" Please do enjoy this day, I know kapoy kaayo kas imong trabaho daee pero don't forget to enjoy this day with your family💗. 
I LOVE YOU SO MUCH DAAAAEEEEE💗. Please always remember that I will wait for you no matter what happens. but please don't hurt me while I'm waiting on you daee. Thank you so much daee. I'm always grateful to have you in my life daee.💟💟💟

Always waiting for you,
[Solano Eduardo Jr.]`;

/**
 * HOW TO CONNECT YOUR LOCAL IMAGES:
 * 1. Place your images in the "public/img" folder of your project.
 * 2. Update the filenames below to match EXACTLY (case-sensitive).
 * 3. On Vercel, files in "public" are served from the root "/".
 *    Example: "public/img/photo.jpg" becomes "/img/photo.jpg"
 */

const MAIN_IMAGE = "/img/box_tee.webp"; // Replace with your file name in public/img/

const GALLERY_IMAGES = [
  "/img/Picture5.jpg", // Replace these with your actual filenames
  "/img/Picture2.jpg",
  "/img/Picture3.jpg",
  "/img/Picture4.jpg",
  "/img/Picture1.jpg",
  "/img/Picture6.jpg"
];

// ---------------------------------------

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGiftOpened, setIsGiftOpened] = useState(false);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-slate-900 via-violet-900 to-slate-900 text-white flex flex-col items-center justify-center p-4">
      <Snowfall />
      <FloatingSparkles />
      
      {!isLoggedIn ? (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <HangingLights />
          <CornerDecorations />
          <div className="w-full max-w-4xl flex flex-col items-center animate-in fade-in duration-1000 py-10 z-10">
            {!isGiftOpened ? (
              <div className="text-center space-y-8 w-full">
                <div className="relative inline-block">
                  <h1 className="text-5xl md:text-7xl font-christmas text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 animate-shimmer drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                    Merry Christmas, Hanny!
                  </h1>
                  <style>{`
                    @keyframes shimmer {
                      0% { background-position: -200% center; }
                      100% { background-position: 200% center; }
                    }
                    .animate-shimmer {
                      background-size: 200% auto;
                      animation: shimmer 5s linear infinite;
                    }
                  `}</style>
                </div>
                
                <p className="text-lg md:text-xl text-violet-100 opacity-90 max-w-md mx-auto leading-relaxed font-light tracking-wide">
                  A magical surprise is waiting for you.<br />
                  <span className="text-sm italic opacity-60">Tap the box to reveal its secrets.</span>
                </p>

                <div className="relative mt-12">
                  {/* Magical Glow Stage */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/20 rounded-full blur-[80px] animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-violet-400/30 rounded-full blur-[60px]"></div>
                  
                  <GiftBox onOpen={() => setIsGiftOpened(true)} />
                </div>
              </div>
            ) : (
              <Letter 
                name="Hanny Jem Zabate/Daeeee/Hanss/Love💟" 
                content={PERSONAL_LETTER} 
                images={GALLERY_IMAGES}
                mainImage={MAIN_IMAGE}
                onClose={() => setIsGiftOpened(false)}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
