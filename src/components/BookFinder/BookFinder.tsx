import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Book } from './types';
import Header from './Header';
import SearchBar from './SearchBar';
import BookList from './BookList';
import LoaderSkeleton from './LoaderSkeleton';
import ErrorMessage from './ErrorMessage';
import WelcomeMessage from './WelcomeMessage';
import Footer from './Footer';
import BookDetail from './BookDetail';

const BookFinder = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const fetchBooks = useCallback(async () => {
    if (!query.trim()) {
      setBooks([]);
      setSearched(false);
      return;
    }
    setLoading(true);
    setError(null);
    setSearched(true);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Network response was not ok.');
      const data = await response.json();
      const formattedBooks: Book[] = data.docs.slice(0, 24).map((doc: any) => ({
        id: doc.key,
        title: doc.title,
        author: doc.author_name ? doc.author_name.join(', ') : 'Unknown Author',
        publishYear: doc.first_publish_year || 'N/A',
        coverUrl: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg` : 'https://placehold.co/300x450/0f172a/64748b?text=No+Cover',
        publisher: doc.publisher ? doc.publisher.slice(0, 3).join(', ') : 'N/A',
        pages: doc.number_of_pages_median || 'N/A',
        isbn: doc.isbn ? doc.isbn[0] : 'N/A',
        subjects: doc.subject ? doc.subject.slice(0, 6) : [],
      }));
      setBooks(formattedBooks);
    } catch (err) {
      setError((err as Error).message || 'Failed to fetch books. Please try again.');
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchBooks();
  };

  const clearSearch = () => {
    setQuery('');
    setBooks([]);
    setSearched(false);
    setError(null);
    searchInputRef.current?.focus();
  };

  return (
    <div className="bg-background text-foreground min-h-screen font-sans p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-teal-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <Header />
        <SearchBar 
          query={query} 
          setQuery={setQuery} 
          onSearch={handleSearch}
          onClear={clearSearch}
          loading={loading}
          inputRef={searchInputRef}
        />
        <main className="mt-12">
          {loading && <LoaderSkeleton />}
          {error && <ErrorMessage message={error} onRetry={fetchBooks} />}
          {!loading && !error && searched && <BookList books={books} onBookClick={setSelectedBook} />}
          {!loading && !error && !searched && <WelcomeMessage />}
        </main>
        <Footer />
        {selectedBook && <BookDetail book={selectedBook} onClose={() => setSelectedBook(null)} />}
      </div>
    </div>
  );
};

export default BookFinder;