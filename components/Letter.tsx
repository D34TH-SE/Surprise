
import React, { useState } from 'react';
import { X, Heart, Star, Camera } from 'lucide-react';

interface LetterProps {
  name: string;
  content: string;
  images: string[];
  mainImage: string | null;
  onClose: () => void;
}

const ImageWithFallback: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // If a local image fails, we fall back to a beautiful holiday placeholder
      setImgSrc("https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&q=80&w=400");
    }
  };

  return (
    <div className={`${className} bg-slate-200 relative flex items-center justify-center overflow-hidden`}>
      <img 
        src={imgSrc} 
        alt={alt} 
        onError={handleError} 
        className="w-full h-full object-cover transition-opacity duration-500" 
      />
      {hasError && (
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
           <span className="text-[8px] text-white/50 uppercase tracking-tighter">Image Loading...</span>
        </div>
      )}
    </div>
  );
};

const Letter: React.FC<LetterProps> = ({ name, content, images, mainImage, onClose }) => {
  return (
    <div className="z-20 w-full max-w-4xl animate-in slide-in-from-bottom-20 duration-1000">
      <div className="relative bg-[#fdfaf1] p-6 md:p-12 rounded-lg shadow-2xl border-2 border-violet-800/20 text-slate-800 overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-violet-600 transition-colors z-30"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Wax Seal Decor */}
        <div className="absolute -bottom-6 right-10 w-16 h-16 bg-violet-700 rounded-full flex items-center justify-center shadow-lg border-4 border-violet-800 rotate-12 z-20">
            <Heart className="text-yellow-400 w-8 h-8 fill-yellow-400" />
        </div>

        <div className="mb-8 flex items-center space-x-2 text-violet-700">
            <Star className="w-5 h-5 fill-violet-700" />
            <span className="font-christmas text-xl">A Christmas Message</span>
            <Star className="w-5 h-5 fill-violet-700" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Text Section */}
          <div className="flex flex-col">
            <div className="font-handwriting text-2xl md:text-3xl mb-6 text-violet-800 border-b border-violet-100 pb-2">
                Dearest {name},
            </div>

            <div className="space-y-4 font-serif leading-relaxed text-lg min-h-[300px]">
              <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
                {/* Main Featured Image within the text */}
                {mainImage && (
                  <div className="float-right ml-4 mb-4 w-32 h-32 md:w-40 md:h-40 border-4 border-white shadow-lg rotate-3 overflow-hidden rounded-sm transition-transform hover:scale-105">
                    <ImageWithFallback src={mainImage} alt="Main featured holiday memory" className="w-full h-full" />
                  </div>
                )}
                <div className="whitespace-pre-wrap">
                  {content}
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-violet-100 flex justify-between items-end">
              <div className="font-handwriting text-2xl text-violet-800">
                With all my love,<br />
                Always yours💟
              </div>
              <div className="text-xs text-slate-400 italic">
                December 2025
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-violet-600 mb-4">
              <Camera className="w-5 h-5" />
              <span className="font-handwriting text-xl">Tops of Cebu Snapshots</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {images.map((src, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-white p-2 pb-6 shadow-xl border border-slate-200 transform transition-transform hover:scale-110 hover:z-10"
                  style={{ 
                    transform: `rotate(${(idx % 2 === 0 ? 1 : -1) * (idx + 1) * 2}deg)`,
                  }}
                >
                  <ImageWithFallback src={src} alt={`Holiday memory ${idx + 1}`} className="aspect-square w-full" />
                  <div className="mt-2 text-[10px] text-center font-handwriting text-slate-400 italic">
                    Magic Moment #{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Holly leaves */}
      <div className="absolute -top-4 -left-4 w-12 h-12 text-green-700 -rotate-12">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C12,2 10,7 6,8C2,9 2,12 2,12C2,12 7,12 8,16C9,20 12,22 12,22C12,22 15,20 16,16C17,12 22,12 22,12C22,12 22,9 18,8C14,7 12,2 12,2Z"/></svg>
      </div>
    </div>
  );
};

export default Letter;
