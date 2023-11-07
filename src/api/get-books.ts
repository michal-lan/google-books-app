import axios from 'axios';
import { API_GOOGLE_BOOKS_URL } from '../config/constants';
import { getBookProps, getBookResultProps } from '../types/api/get-books.type';

/**
 * Function that should return data from Google Books API
 * 
 * @returns object with books, totalItems and error
 */
async function getBooks( config : getBookProps ): Promise<getBookResultProps> {
  const result = {
    books: [],
    totalItems: 0,
    error: '',
  };

  try {
    const params : any = {};
    const { query, page, onlyFree } = config;
    const apiCallUrl = `${API_GOOGLE_BOOKS_URL}?q=${query}`;

    if ( page && page > 0 ) { params.startIndex = page*10; }
    if ( onlyFree ) { params.filter = 'free-ebooks'; }
  
    const response = await axios.get(apiCallUrl, {
      params: params
    });

    if ( response.status === 200 ) {
      if ( Array.isArray(response.data.items) ) {
        result.books = response.data.items;
        result.totalItems = response.data.totalItems;
      }
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      result.error = error?.response?.data?.error?.message;
    }
  }

  return result;
}

export default getBooks;