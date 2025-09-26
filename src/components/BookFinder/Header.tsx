const Header = () => (
  <header className="text-center mb-12">
    <div className="animate-float mb-6">
      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
          />
        </svg>
      </div>
    </div>
    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gradient mb-4">
      BookFinder
    </h1>
    <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed">
      Discover your next great read with our intelligent book search
    </p>
  </header>
);

export default Header;