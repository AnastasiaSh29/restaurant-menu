const cardsContainer = document.querySelector('.cards__list');

const btnCont = document.querySelector('.menu');

window.addEventListener('DOMContentLoaded', ()=>{
    renderList(menu);
    renderBtns();
})




function renderList(menu) {
    let cardsList = menu.map(function(item){

        return `<li class="cards__item card">
  <img class="cards__img" alt=${item.title} src=${item.link}>
        <div class="cards__info-wrapper">
            <div class="cards__header">
                <h3 class="cards__title">${item.title}</h3>
                <h3 class="cards__price">$ ${item.price}</h3>
            </div>
            <p class="cards__text">${item.description}</p>
        </div>
    </li>`;
    });

    cardsList = cardsList.join("");
    cardsContainer.innerHTML = cardsList;
    
}

function renderBtns(){
    const categories = menu.reduce(function(val ,item){
        if(!val.includes(item.category)){
            val.push(item.category);
        }
        return val;
    }, ['all'])
    

    const categoryBtns = categories.map(function(category){
        let cat = category[0].toUpperCase() + category.slice(1);
return `<button class="menu__button" type="button" data-filter=${category}>${cat}</button>`
    }).join('');

    btnCont.innerHTML = categoryBtns;
    const menuButtons = btnCont.querySelectorAll('.menu__button');
    menuButtons.forEach(function(btn){
        btn.addEventListener('click', function(e){
     
            const category = e.currentTarget.dataset.filter;
            
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                   return menuItem; 
                }
                
            })
            if(category === 'all'){
                renderList(menu);
            }else{
                renderList(menuCategory);
            }
        })
    })
}


