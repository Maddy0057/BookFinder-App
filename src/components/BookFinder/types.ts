export interface Book {
  id: string;
  title: string;
  author: string;
  publishYear: string | number;
  coverUrl: string;
  publisher: string;
  pages: string | number;
  isbn: string;
  subjects: string[];
}