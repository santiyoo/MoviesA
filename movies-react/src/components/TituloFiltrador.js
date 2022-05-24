import React from 'react';

const TituloFiltrador = ({titulo, filtros}) => {

  const categoryTitle = document.querySelectorAll('.category-title');
    const allCategoryPosts = document.querySelectorAll('.all');

    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
    }

    function filterPosts(item){
        changeActivePosition(item);
        for(let i = 0; i < allCategoryPosts.length; i++){
            if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
                allCategoryPosts[i].style.display = "block";
            } else {
                allCategoryPosts[i].style.display = "none";
            }
        }
    }

    function changeActivePosition(activeItem){
        for(let i = 0; i < categoryTitle.length; i++){
            categoryTitle[i].classList.remove('active');
        }
        activeItem.classList.add('active');
    };
    
    return ( 
        <>
          <div className="row">
              <div className="mt-1 mr-5 col-md-2">
                <h2 className="section-title" align="right">{titulo}</h2>
              </div>
              <div className="mt-2 col-md-10">
                <div className="category-head">
                  <ul>
                    {filtros.map((filtro)=>{
                      return(
                        <div className="category-title">
                        <li>{filtro}</li>
                        </div>    
                      )  
                    })}
                  </ul>
                </div>
              </div>
            </div>
        </>
     );
}
 
export default TituloFiltrador;