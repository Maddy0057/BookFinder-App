import { Book } from './types';

interface BookCardProps {
  book: Book;
  onBookClick: (book: Book) => void;
  style?: React.CSSProperties;
}

const BookCard = ({ book, onBookClick, style }: BookCardProps) => (
  <div 
    className="group cursor-pointer animate-card-enter hover-lift"
    style={style}
    onClick={() => onBookClick(book)}
    onKeyPress={(e) => e.key === 'Enter' && onBookClick(book)}
    tabIndex={0}
    role="button"
    aria-label={`View details for ${book.title}`}
  >
    <div className="relative overflow-hidden rounded-xl bg-slate-800/50 glass-effect shadow-xl">
      <div className="relative overflow-hidden aspect-[2/3]">
        <img 
          src={book.coverUrl} 
          alt={`Cover of ${book.title}`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { 
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src = 'https://placehold.co/300x450/0f172a/64748b?text=No+Cover'; 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-sm leading-tight mb-1 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-200" title={book.title}>
          {book.title}
        </h3>
        <p className="text-xs text-slate-400 mb-1 truncate" title={book.author}>
          {book.author}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-slate-500 bg-slate-700/50 px-2 py-1 rounded-full">
            {book.publishYear}
          </span>
          <div className="w-2 h-2 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  </div>
);

export default BookCard;