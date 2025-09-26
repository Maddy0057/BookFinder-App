interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => (
  <div className="max-w-md mx-auto text-center animate-fade-in">
    <div className="bg-red-900/20 border border-red-800/50 rounded-2xl p-6 glass-effect">
      <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-red-400 mb-2">Oops! Something went wrong</h3>
      <p className="text-slate-400 text-sm mb-4">{message}</p>
      <button 
        onClick={onRetry}
        className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
      >
        Try Again
      </button>
    </div>
  </div>
);

export default ErrorMessage;