import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CoustomLink = ({ children, to, ...props }) => {

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });


    return (
        <div>

            <Link
                style={{ color: match ? "#bf9316" : "black", textDecoration: match ? "" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>


        </div>
    );
};

export default CoustomLink;