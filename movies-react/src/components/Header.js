import React from 'react';
import Buscador from './buscador';

const Header = ({setFiltro}) => {
    return ( 
        <div className="align-end">
            <div className="justify-content-center">
                <Buscador setFiltro={setFiltro}/>
            </div>            
        </div>
    );
}
 
export default Header;