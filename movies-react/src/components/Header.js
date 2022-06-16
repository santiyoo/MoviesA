import React from 'react';
import Buscador from './buscador';
import Titulo from './Titulo';

const Header = ({setFiltro}) => {
    return ( 
        <div>
            <div>
                <Titulo/>
                <Buscador setFiltro={setFiltro} />
            </div>            
        </div>
    );
}
 
export default Header;