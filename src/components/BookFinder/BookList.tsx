import { Book } from './types';
import BookCard from './BookCard';

interface BookListProps {
  books: Book[];
  onBookClick: (book: Book) => void;
}

const BookList = ({ books, onBookClick }: BookListProps) => {
  if (books.length === 0) {
    return (
      <div className="text-center mt-20 animate-fade-in">
        <div className="w-24 h-24 mx-auto mb-4 text-slate-600">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-xl text-slate-400 mb-2">No books found</p>
        <p className="text-slate-600">Try adjusting your search terms</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {books.map((book, index) => (
        <BookCard 
          key={book.id} 
          book={book} 
          onBookClick={onBookClick} 
          style={{ animationDelay: `${index * 80}ms` }} 
        />
      ))}
    </div>
  );
};

export default BookList;