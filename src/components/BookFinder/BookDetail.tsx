import { useEffect, useRef } from 'react';
import { Book } from './types';

interface BookDetailProps {
  book: Book;
  onClose: () => void;
}

const BookDetail = ({ book, onClose }: BookDetailProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    // Add focus trap
    const focusableElements = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;
    
    const handleTab = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    modalRef.current?.addEventListener('keydown', handleTab);
    firstElement?.focus();

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
      modalRef.current?.removeEventListener('keydown', handleTab);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-lg flex justify-center items-center z-50 p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="bg-slate-800/90 glass-effect rounded-2xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-y-auto flex flex-col md:flex-row gap-8 p-8 relative animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 z-10 bg-slate-900/50 rounded-full p-2"
          aria-label="Close details"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex-shrink-0">
          <div className="gradient-border rounded-xl">
            <div className="gradient-border-inner rounded-lg overflow-hidden">
              <img 
                src={book.coverUrl}
                alt={`Cover of ${book.title}`} 
                className="w-full md:w-80 h-auto object-cover shadow-2xl"
                onError={(e) => { 
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = 'https://placehold.co/400x600/0f172a/64748b?text=No+Cover'; 
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="flex-grow min-w-0">
          <h2 id="modal-title" className="text-4xl font-bold text-white mb-3 leading-tight">
            {book.title}
          </h2>
          <p className="text-xl text-cyan-400 mb-4 font-medium">by {book.author}</p>
          <p className="text-lg text-slate-400 mb-8 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            First published in {book.publishYear}
          </p>
          
          <div className="space-y-5 mb-8">
            {book.publisher !== 'N/A' && (
              <div className="flex items-center">
                <span className="font-semibold text-slate-400 w-32 flex-shrink-0">Publisher:</span>
                <span className="text-slate-300">{book.publisher}</span>
              </div>
            )}
            {book.pages !== 'N/A' && (
              <div className="flex items-center">
                <span className="font-semibold text-slate-400 w-32 flex-shrink-0">Pages:</span>
                <span className="text-slate-300">{book.pages} pages</span>
              </div>
            )}
            {book.isbn !== 'N/A' && (
              <div className="flex items-center">
                <span className="font-semibold text-slate-400 w-32 flex-shrink-0">ISBN:</span>
                <span className="text-slate-300 font-mono">{book.isbn}</span>
              </div>
            )}
          </div>

          {book.subjects && book.subjects.length > 0 && (
            <div className="mt-8 pt-8 border-t border-slate-700/50">
              <h4 className="font-semibold text-slate-400 mb-4 text-lg flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Subjects & Topics
              </h4>
              <div className="flex flex-wrap gap-3">
                {book.subjects.map((subject, index) => (
                  <span 
                    key={index} 
                    className="bg-gradient-to-r from-cyan-600/20 to-teal-600/20 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;