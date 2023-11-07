import { useNavigate, useParams } from "react-router-dom";

export default function Pagination( {totalItems } : {totalItems : number} ) {
    const navigate = useNavigate();
    const { page } = useParams();
    const itemsPerPage = 10; // Number of items to display per page
    const currentPage = typeof page !== 'undefined' ? parseInt(page) : 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            navigate(`/page/${currentPage - 1}`);
        } else {
            navigate(`/`);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            navigate(`/page/${currentPage + 1}`);
        }
    };

    return (
        <>
            { totalPages > 0 && (
                <div className="flex justify-end col-span-12 gap-4">
                    <button className="px-4 py-2 border border-white hover:cursor-pointer" onClick={handlePreviousPage}>Previous</button>
                    <button className="px-4 py-2 border border-white hover:cursor-pointer" onClick={handleNextPage}>Next</button>
                </div>
            ) }
        </>
    )
}