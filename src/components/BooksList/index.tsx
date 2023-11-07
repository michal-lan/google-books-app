import { BooksListProps } from "../../types/components/BooksList/books-list.type"
import BookCard from "../BookCard"
import Pagination from "../Pagination";

export default function BooksList( {books, totalItems} : BooksListProps ) {
    return (
        <>
            { books.length > 0 && (
                <>
                    <div className="grid grid-cols-12 gap-8 my-12 lg:gap-2">
                        { books.map((book) => (<BookCard key={book.id} book={book} />)) }
                    </div>
                    { totalItems > 0 && (
                        <div className="grid grid-cols-12 gap-8 my-12 lg:gap-2">
                            <Pagination totalItems={totalItems} />
                        </div>
                    ) }
                </>
            ) }
        </>
    )
}