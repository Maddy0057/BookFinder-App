const WelcomeMessage = () => (
  <div className="text-center mt-20 animate-fade-in">
    <div className="animate-float mb-8">
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center shadow-2xl">
        <svg className="w-16 h-16 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
          />
        </svg>
      </div>
    </div>
    <h2 className="text-2xl font-bold text-slate-300 mb-4">Welcome to BookFinder</h2>
    <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
      Enter a book title above to discover detailed information, covers, and more from our extensive database.
    </p>
    <div className="mt-8 flex justify-center space-x-4 text-slate-600">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
        <span className="text-sm">Fast Search</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
        <span className="text-sm">Rich Details</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        <span className="text-sm">Beautiful UI</span>
      </div>
    </div>
  </div>
);

export default WelcomeMessage;