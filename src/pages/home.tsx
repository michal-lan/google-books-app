import { useEffect, useState } from "react";
import getBooks from "../api/get-books";
import BooksList from "../components/BooksList";
import { BookProps } from "../types/components/BookCard/book-card.type";
import { useNavigate, useParams } from "react-router-dom";

export default function HomePage() {
  const { page } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [onlyFreeBooks, setOnlyFreeBooks] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [totalItems, setTotalItems] = useState(0);
  const [books, setBooks] = useState<BookProps[]>([]);

  const handleChange = (event : React.FormEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  const handleClick = async () => {
    setIsLoading(true);
    setError('');
    setBooks([]);

    const config = {
      query: query,
      page: typeof page !== 'undefined' ? parseInt(page) : 0,
      onlyFree: onlyFreeBooks
    }

    const getGoogleBooks = await getBooks(config);

    if ( getGoogleBooks.hasOwnProperty('books') && getGoogleBooks.books.length > 0 ) {
      setBooks(getGoogleBooks.books);
      if ( getGoogleBooks.hasOwnProperty('totalItems') && getGoogleBooks.totalItems > 0 ) {
        setTotalItems(getGoogleBooks.totalItems);
      }
    } else {
      if ( getGoogleBooks.hasOwnProperty('error') && getGoogleBooks.error ) {
        setError(getGoogleBooks.error);
      } else {
        setError('No results found.');
      }
    }

    setIsLoading(false);
  }


  useEffect(() => {
    if ( typeof page !== 'undefined' && parseInt(page) > 0 ) {
      if ( query.length === 0 ) {
        navigate('/');
      } else {
        handleClick();
      }
    } else {
      if ( query.length > 0 ) {
        handleClick();
      }
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const handlePress = (event : React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  const handleOnlyFree = () => {
    setOnlyFreeBooks(!onlyFreeBooks)
  }

  return (
    <div className="grid w-full grid-cols-12">
        <div className="col-span-12 text-center lg:col-span-6 lg:col-start-4">
          <h1 className="mb-4 text-4xl font-extrabold uppercase font-open-sans">Find a book</h1>
          
          <div className="flex flex-col gap-4 md:flex-row">
            <input type="text" id="query" name="query" onChange={handleChange} onKeyDown={handlePress} value={query} className="w-full p-2 text-black border border-gray-600 rounded-lg shadow" placeholder="Type search phrase" />
            <button type="button" onClick={handleClick} className="px-6 py-2 text-lg font-bold uppercase transition duration-300 ease-in-out rounded-full hover:bg-btn-hover font-poppins bg-btn-default">Search</button>
          </div>

          <div className="flex flex-row-reverse justify-end gap-2 my-2">
            <label htmlFor="free">Show only free books</label>
            <input type="checkbox" name="free" id="free" onChange={handleOnlyFree} checked={onlyFreeBooks} />
          </div>
        </div>

        <div className="col-span-12">
          { error && (<p className="m-4 text-center">{error}</p>)}
          { isLoading ? (<p className="m-4 text-center">Loading...</p>) : <BooksList books={books} totalItems={totalItems} /> }
        </div>
    </div>
  )
}