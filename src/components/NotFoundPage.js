import React from 'react'
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
    return(
        <div>
            This is a 404 page
            <Link to='/'>Goto homepage</Link>
        </div>
    )
}

export default NotFoundPage;