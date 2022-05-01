import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            style={{ backgroundColor: match ? "#C4DDFF" : "#7FB5FF", padding: '10px', fontSize: '16px', textAlign: 'center' }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
}
export default CustomLink