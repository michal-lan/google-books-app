import { BookProps } from "../components/BookCard/book-card.type";

export type getBookProps = {
    query : string; 
    page ?: number; 
    onlyFree ?: boolean;
  }

export type getBookResultProps = {
    books: BookProps[],
    totalItems: number,
    error: string,
}