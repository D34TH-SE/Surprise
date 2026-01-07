
import React from 'react';

const Letter: React.FC = () => {
  return (
    <div className="relative max-w-3xl mx-auto my-16 group">
      {/* Outer Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative p-1 bg-gradient-to-tr from-amber-200 via-pink-200 to-violet-300 rounded-[3rem] shadow-2xl">
        <div className="relative p-8 md:p-16 bg-white rounded-[2.8rem] overflow-hidden letter-paper">
          
          {/* Floral Corner Top-Left */}
          <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-40 pointer-events-none transform -translate-x-4 -translate-y-4">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 20C60 20 80 40 80 80C80 120 40 140 20 140" stroke="#f472b6" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="80" cy="80" r="8" fill="#fbbf24"/>
              <path d="M20 40C20 60 40 80 80 80C120 80 140 40 140 20" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="40" cy="20" r="5" fill="#f472b6"/>
            </svg>
          </div>

          {/* Floral Corner Bottom-Right */}
          <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-40 pointer-events-none transform translate-x-4 translate-y-4 rotate-180">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 20C60 20 80 40 80 80C80 120 40 140 20 140" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="80" cy="80" r="8" fill="#f472b6"/>
              <path d="M20 40C20 60 40 80 80 80C120 80 140 40 140 20" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="40" cy="20" r="5" fill="#a78bfa"/>
            </svg>
          </div>

          {/* Scattered Glitter/Sparkles Inside Letter */}
          <div className="absolute top-1/4 left-10 text-pink-300 opacity-20 text-2xl animate-pulse">✦</div>
          <div className="absolute bottom-1/4 right-10 text-amber-300 opacity-20 text-3xl animate-pulse delay-700">✧</div>
          <div className="absolute top-1/2 right-4 text-violet-300 opacity-20 text-xl animate-pulse delay-300">✦</div>

          <div className="relative z-10 space-y-10">
            <div className="text-center space-y-4">
              <p className="text-amber-500 font-serif tracking-[0.4em] text-xs uppercase font-bold">A Milestone Celebration</p>
              <h2 className="text-5xl md:text-7xl font-elegant text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 py-2">
                Dear Hanny Jem,
              </h2>
              <div className="flex justify-center items-center gap-3">
                <div className="h-px w-8 bg-amber-200"></div>
                <span className="text-amber-400 text-lg">❦</span>
                <div className="h-px w-8 bg-amber-200"></div>
              </div>
            </div>
            
            <div className="font-serif text-lg md:text-xl text-gray-700 leading-relaxed space-y-8 text-justify px-2 md:px-8 italic">
              <p className="first-letter:text-5xl first-letter:font-elegant first-letter:text-pink-500 first-letter:mr-2 first-letter:float-left">
                Happy 20th Birthday My Love!. I'm so happy that I'll be part on your 20th Birthday My Love, so entering your twenties is a momentous milestone, and I wanted to create something special to celebrate the amazing person you are. This is the start of a whole new chapter, one where you truly begin to define who you want to be.
              </p>
              
              <p>
                You have a way of bringing light into every room you enter. Your <span className="text-pink-500 font-bold">kindness</span>, your <span className="text-violet-500 font-bold">spirit</span>, and your <span className="text-indigo-500 font-bold">smile</span> are truly one of a kind. As you step into this new decade of your life, I hope it brings you endless opportunities, beautiful memories, and the courage to pursue every single one of your dreams.
              </p>

              <div className="relative py-4">
                 <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                 <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-gray-300">⚘</span>
                 </div>
              </div>

              <p>
                The world is a much brighter place with you in it. May this year be filled with laughter that makes your stomach hurt🤣, adventures that broaden your horizons,all the rides you want🏍️, and love that knows no bounds. You deserve all the beauty and happiness this life has to offer.
              </p>
              
              <p>
                Always remember how much you are loved and appreciated. You are capable of incredible things, and I can't wait to see what this year has in store for you. Happy birthday, my love!
              </p>
            </div>

            <div className="pt-16 flex flex-col items-center">
              <div className="space-y-2 text-center">
                <p className="font-cursive text-4xl text-pink-600">With all my love,</p>
                <p className="font-serif text-gray-400 uppercase tracking-widest text-[10px] font-bold">Forever & Always</p>
              </div>
              
              {/* Wax Seal Design */}
              <div className="mt-8 relative flex items-center justify-center">
                <div className="wax-seal w-16 h-16 rounded-full flex items-center justify-center text-white font-serif text-2xl font-bold border-4 border-pink-600 shadow-lg transform hover:scale-110 transition-transform cursor-pointer">
                  H
                </div>
                {/* Decorative Ribbons */}
                <div className="absolute top-1/2 left-full ml-4 w-12 h-0.5 bg-pink-100 hidden md:block"></div>
                <div className="absolute top-1/2 right-full mr-4 w-12 h-0.5 bg-pink-100 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
