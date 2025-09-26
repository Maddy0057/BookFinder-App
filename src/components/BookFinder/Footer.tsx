const Footer = () => (
  <footer className="text-center mt-20 py-8 border-t border-slate-800/50">
    <p className="text-sm text-slate-600">
      Powered by the{' '}
      <a 
        href="https://openlibrary.org/developers/api" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gradient font-medium hover:underline transition-all duration-300"
      >
        Open Library API
      </a>
    </p>
    <p className="text-xs text-slate-700 mt-2">
      Made with ❤️ for book lovers everywhere
    </p>
  </footer>
);

export default Footer;