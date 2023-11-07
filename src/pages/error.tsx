import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div id="error-page" className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Oops!</h1>
            <p>Sorry, an unexpected error has occurred - please try again later</p>
            <Link to="/" className="px-6 py-2 mt-12 text-lg font-bold uppercase transition duration-300 ease-in-out rounded-full hover:bg-btn-hover font-poppins bg-btn-default">Try again!</Link>
        </div>
    );
}

export default ErrorPage;