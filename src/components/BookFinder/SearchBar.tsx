import { RefObject } from 'react';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: (e: React.FormEvent) => void;
  onClear: () => void;
  loading: boolean;
  inputRef: RefObject<HTMLInputElement>;
}

const SearchBar = ({ query, setQuery, onSearch, onClear, loading, inputRef }: SearchBarProps) => (
  <div className="max-w-2xl mx-auto">
    <form onSubmit={onSearch} className="relative">
      <div className="gradient-border hover-lift">
        <div className="gradient-border-inner p-1">
          <div className="flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for books... (e.g., Dune, The Hobbit, Harry Potter)"
              className="w-full px-6 py-4 bg-transparent border-0 focus:outline-none text-lg placeholder-slate-500 text-foreground"
              aria-label="Search for a book"
            />
            <div className="flex items-center space-x-2 pr-2">
              {query && (
                <button
                  type="button"
                  onClick={onClear}
                  className="p-2 text-slate-500 hover:text-white transition-colors duration-200"
                  aria-label="Clear search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 disabled:from-slate-700 disabled:to-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform disabled:scale-100 hover:scale-105 active:scale-95 shadow-lg shadow-cyan-600/25 disabled:shadow-none"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Searching...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Search</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default SearchBar;