import React from 'react';
import Buscador from './buscador';

const Header = () => {
    return ( 
        <div className="align-end">
            <div className="justify-content-center">
                <Buscador/>
            </div>            
        </div>
    );
}
 
export default Header;