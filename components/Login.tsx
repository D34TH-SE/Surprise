
import React, { useState } from 'react';
import { User, Sparkles } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate only based on the full name
    if (fullName.trim() === 'Hanny Jem Zabate') {
      onLoginSuccess();
    } else {
      setError('Incorrect name. Please enter your full name correctly.');
      setTimeout(() => setError(''), 3000);
    }
  };

  const autoFill = () => {
    setFullName('Hanny Jem Zabate');
  };

  return (
    <div className="z-10 w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl animate-in zoom-in-95 duration-700">
      <div className="text-center mb-8">
        <div className="inline-block p-4 bg-violet-600 rounded-full mb-4 shadow-lg animate-bounce">
          <Sparkles className="w-8 h-8 text-yellow-300" />
        </div>
        <h2 className="text-3xl font-christmas text-white mb-2">Welcome Back</h2>
        <p className="text-violet-100/70">Please enter your magic name</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="relative">
          <User className="absolute left-3 top-3.5 w-5 h-5 text-violet-200" />
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-violet-200/50 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
            autoFocus
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center animate-pulse">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 rounded-xl shadow-lg transform active:scale-95 transition-all duration-200"
        >
          Login to See Your Surprise
        </button>
      </form>

      <div className="mt-8 text-center">
        <button 
          onClick={autoFill}
          className="text-xs text-violet-200/50 hover:text-violet-200 underline transition-colors"
        >
          (Hint: Use Your Full Name)
        </button>
      </div>
    </div>
  );
};

export default Login;
