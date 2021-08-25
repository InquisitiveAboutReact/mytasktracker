import React from 'react' ; 
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
        <h2> HTTP 404 not found </h2>
        <p>Sorry the page you're trying to search is not found</p>
        <Link to="/">Go to Home</Link>
        </div>
    )
}

export default NotFoundPage;