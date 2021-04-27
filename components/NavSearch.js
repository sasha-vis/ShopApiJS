class NavSearch {
    filter(){
        const products = document.querySelectorAll('.main .slider .product');

        products.forEach(function(elem){
            elem.removeAttribute('style');
        });

        if (this.value.length < 3) return;

        let inputValue = this.value;
        
        const productsH3 = document.querySelectorAll('.main .slider .product .description h3');

        productsH3.forEach(function(elem, index){
            if (elem.innerHTML.indexOf(inputValue) == -1) products[index].style.display = 'none';
        });
    }

    get(){
        const searchField = document.createElement('div');
        searchField.classList.add('search_field');
        searchField.innerHTML = `
        <input type="text" placeholder="Search">

        <button class="search_button">
            <div class="search_button_icon1"></div>
            <div class="search_button_icon2"></div>
        </button>
        `;

        searchField.querySelector('input').addEventListener('keyup', this.filter);

        return searchField;
    }
}

const searchField = new NavSearch().get();

export default searchField;