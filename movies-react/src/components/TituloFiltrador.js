import React from 'react';

const TituloFiltrador = () => {

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
              <div className="mt-1 ml-4 mr-4 col-md-2">
                <h2 className="section-title">Popular</h2>
              </div>
              <div className="mt-2 col-md-10">
                <div className="category-head">
                  <ul>
                    <div className="category-title active" id="culture">
                      <li>Streaming</li>
                    </div>
                    <div className="category-title" id="politics">
                      <li>Television</li>
                    </div>
                    <div className="category-title" id="finance">
                      <li>Alquiler</li>
                    </div>
                    <div className="category-title" id="business">
                      <li>Cines</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
        </>
     );
}
 
export default TituloFiltrador