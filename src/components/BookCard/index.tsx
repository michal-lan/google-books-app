import { BookCardProps } from "../../types/components/BookCard/book-card.type";

export default function BookCard( {book} : BookCardProps ) {
    return (
        <>
            { book ? (
                <div className={`bg-white h-full rounded-lg text-black px-4 py-6 text-center col-span-12 lg:col-span-4 flex flex-col justify-center items-center`}>
                    {book?.volumeInfo?.imageLinks?.thumbnail ? (
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} width="96" height="96" className="object-contain w-24 h-24" />
                    ) : (
                        <div className="flex items-center justify-center w-24 h-24 text-white bg-black texg-sm">EMPTY</div>    
                    ) }
                    
                    {book?.volumeInfo?.title && <span className="mt-4 mb-6 text-base font-semibold font-poppins">{book.volumeInfo.title}</span> }
                    { book?.volumeInfo?.authors && book.volumeInfo.authors.length && (
                        <div className="flex flex-col gap-2 mb-8">
                            <span className="text-xs">Authors:</span>
                            { book.volumeInfo.authors.map((author, key) => (
                                <span key={key} className="p-2 text-xs font-medium border border-black font-poppins">{author}</span>
                            )) }
                        </div>
                    )}
                    {book?.volumeInfo?.previewLink && <a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer" className="mt-auto text-sm font-medium text-link-color font-poppins hover:text-link-color-hover">Show book</a> }
                </div>
            ) : ''}
        </>
    )
}