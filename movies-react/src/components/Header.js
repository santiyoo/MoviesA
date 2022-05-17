import React from 'react';
import Buscador from './buscador';
import Navbar from './Navbar';

const Header = () => {
    return ( 
        <div className="col-md-8 align-end">
            <Navbar />        
            <div className="justify-content-center">
                <Buscador/>
            </div>            
        </div>
    );
}
 
export default Header;