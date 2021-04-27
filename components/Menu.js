class Menu {
    sort(){
        const products = document.querySelectorAll('.main .slider .product');
        const productsArray = [];
        products.forEach(function(elem){
            productsArray.push(elem);
        });
        productsArray.sort(function(a, b) {
            const priceA = a.querySelector('.description .cost').innerHTML.replace('$ ', '');
            const priceB = b.querySelector('.description .cost').innerHTML.replace('$ ', '');

            return priceA - priceB;
        });

        const order = this.dataset.order;

        if (order == undefined || order == 'desc') this.dataset.order = 'asc';
        if (order == 'asc') {
            productsArray.reverse();

            this.dataset.order = 'desc';
        }

        console.log(order);
        
        const slider = document.querySelector('.main .slider');
        slider.innerHTML = ``;

        productsArray.forEach(function(elem){
            slider.appendChild(elem);
        });
    };

    get(){
        const menu = document.createElement('div');
        menu.classList.add('menu');
        menu.innerHTML = `
        <h1>Best Sellers</h1>
        <div class="menu_list_wrapper">
            
        </div>
        `;

        const buttonSort = document.createElement('button');
        buttonSort.classList.add('menu_list');
        buttonSort.innerHTML = `
        <div class="menu_list_icon1"></div>
        <div class="menu_list_icon2"></div>
        <div class="menu_list_icon3"></div>
        `;

        menu.querySelector('.menu_list_wrapper').appendChild(buttonSort);

        buttonSort.addEventListener('click', this.sort);

        return menu;
    }
}

const menu = new Menu().get();

export default menu;