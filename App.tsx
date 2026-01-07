
import React, { useState } from 'react';
import { AppStep } from './types';
import ConfettiEffect from './components/Confetti';
import Letter from './components/Letter';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.LOGIN);
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim().toLowerCase() === 'hanny jem zabate') {
      setError('');
      setStep(AppStep.AGE_GATE);
    } else {
      setError('Hmm, that doesn\'t look like the right name. Try again! ❤️');
    }
  };

  const handleAgeVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (ageInput === '20') {
      setError('');
      setStep(AppStep.SURPRISE);
    } else {
      setError('Wait, are you sure that\'s the special age today? 🎂');
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4 overflow-hidden">
      
      {/* Dynamic Background Elements - A Richer Palette */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Colorful Blurs */}
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-pink-200 rounded-full blur-[120px] opacity-30 animate-drift"></div>
        <div className="absolute bottom-[0%] right-[5%] w-[400px] h-[400px] bg-amber-100 rounded-full blur-[100px] opacity-40 animate-drift" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] bg-indigo-100 rounded-full blur-[80px] opacity-20 animate-drift" style={{ animationDelay: '-8s' }}></div>
        
        {/* Floating Design Elements */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-float opacity-20 text-3xl select-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {['✨', '🌸', '💖', '⭐', '🎈', '🍬'][i % 6]}
          </div>
        ))}
        
        {/* Decorative Grid Orbs */}
        <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-pink-400 opacity-20"></div>
        <div className="absolute bottom-40 left-10 w-6 h-6 rounded-full bg-amber-400 opacity-20"></div>
      </div>

      {step === AppStep.LOGIN && (
        <div className="w-full max-w-md glass p-10 rounded-[2.5rem] shadow-2xl text-center space-y-10 animate-in fade-in zoom-in duration-700 relative z-10 border-t-4 border-pink-400">
          <div className="space-y-4">
            <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-pink-100 shadow-inner">
               <span className="text-4xl">🔐</span>
            </div>
            <h1 className="text-4xl font-serif font-bold text-gray-800">Verification</h1>
            <p className="text-pink-500 font-medium italic">"Only for my birthday girl"</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Hanny Jem Zabate"
              className="w-full px-6 py-5 rounded-2xl border-2 border-pink-50 focus:border-pink-300 focus:ring-4 focus:ring-pink-50 outline-none transition-all text-center text-xl font-medium bg-white/80"
              autoFocus
            />
            {error && <p className="text-rose-500 text-sm font-semibold animate-pulse">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-pink-200 transition-all active:scale-95 text-lg"
            >
              Confirm Name ➔
            </button>
          </form>
        </div>
      )}

      {step === AppStep.AGE_GATE && (
        <div className="w-full max-w-md glass p-10 rounded-[2.5rem] shadow-2xl text-center space-y-10 animate-in slide-in-from-right duration-700 relative z-10 border-t-4 border-amber-400">
          <div className="space-y-4">
             <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-100 shadow-inner">
               <span className="text-4xl">🎂</span>
            </div>
            <h1 className="text-4xl font-serif font-bold text-gray-800">Milestone</h1>
            <p className="text-amber-600 font-medium italic">"How old are you my queen?"</p>
          </div>
          <form onSubmit={handleAgeVerify} className="space-y-6">
            <input
              type="number"
              value={ageInput}
              onChange={(e) => setAgeInput(e.target.value)}
              placeholder="Your special age..."
              className="w-full px-6 py-5 rounded-2xl border-2 border-amber-50 focus:border-amber-300 focus:ring-4 focus:ring-amber-50 outline-none transition-all text-center text-3xl font-bold bg-white/80"
              autoFocus
            />
            {error && <p className="text-rose-500 text-sm font-semibold animate-pulse">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-amber-200 transition-all active:scale-95 text-lg"
            >
              Open Your Letter 🔓
            </button>
          </form>
        </div>
      )}

      {step === AppStep.SURPRISE && (
        <div className="w-full max-w-5xl space-y-16 animate-in fade-in duration-1000 py-16 relative z-10">
          <ConfettiEffect />
          
          <header className="text-center space-y-8">
            <div className="inline-flex items-center gap-4 px-8 py-3 bg-white/60 glass rounded-full font-bold text-sm tracking-[0.2em] uppercase text-pink-600 shadow-sm border border-pink-100">
               <span className="animate-spin-slow">⭐</span>
               Happy 20th Birthday
               <span className="animate-spin-slow">⭐</span>
            </div>
            
            <div className="relative inline-block">
                <h1 className="text-8xl md:text-9xl font-elegant text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-amber-500 drop-shadow-md py-4">
                  Hanny Jem Zabate
                </h1>
                <div className="absolute -top-6 -right-12 text-6xl animate-bounce">👑</div>
            </div>

            <div className="flex justify-center gap-10 text-5xl animate-float">
              <span>🎆</span>
              <span className="text-amber-400">✨</span>
              <span>🎂</span>
              <span className="text-pink-400">✨</span>
              <span>🎆</span>
            </div>
          </header>

          <main className="space-y-24">
            <Letter />

            {/* Design Elements Section */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
              {[
                { icon: "🎨", label: "Creative", color: "from-blue-400 to-cyan-500" },
                { icon: "💖", label: "Kind", color: "from-pink-400 to-rose-500" },
                { icon: "🌟", label: "Bright", color: "from-amber-400 to-yellow-500" },
                { icon: "🎶", label: "Harmonious", color: "from-violet-400 to-purple-500" }
              ].map((item, i) => (
                <div key={i} className="group glass p-8 rounded-[2rem] text-center space-y-4 hover:-translate-y-3 transition-all duration-500 cursor-default">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h4 className="font-serif font-bold text-gray-800 text-xl">{item.label}</h4>
                </div>
              ))}
            </section>

            <footer className="text-center pb-24 pt-10">
              <div className="inline-flex flex-col items-center space-y-4 glass px-12 py-8 rounded-[2.5rem] border border-pink-100">
                <div className="flex items-center gap-4 text-gray-700 font-elegant text-4xl">
                  <span>Always be your</span>
                  <span className="text-pink-500 animate-pulse drop-shadow-sm">Self</span>
                </div>
                <div className="flex gap-2">
                   {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-xs">★</span>)}
                </div>
                <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold">Twenty Years of Living</p>
              </div>
            </footer>
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
