import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            {/* link는 router 안에 있어야 함 */}
            <Link to="/">Home</Link>
            <Link to={{
                pathname: '/about',
                state: {
                    fromNavigation: true
                }
            }}>About</Link>
        </div>
    );
}

export default Navigation;