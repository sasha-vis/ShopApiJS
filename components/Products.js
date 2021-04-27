class Products {
    constructor(){
        this.data = localStorage.getItem('data');
        this.data = JSON.parse(this.data);
    }

    cardAdd(id){
        let dataArr = [];
        
        dataArr = localStorage.getItem('cart');

        if (dataArr != null) dataArr = JSON.parse(dataArr);
        if (dataArr == null) dataArr = [];

        if (dataArr.indexOf(id) == -1) dataArr.push(id);
        else dataArr.splice(dataArr.indexOf(id), 1);

        localStorage.setItem('cart', JSON.stringify(dataArr));

        let counter = document.querySelector('.bin_counter');

        counter.innerHTML = dataArr.length;
    }

    get(){
        const self = this;

        const slider = document.createElement('div');
        slider.classList.add('slider');

        this.data.forEach(function(product, index){
    
            const productElem = document.createElement('div');
            productElem.classList.add('product');
            productElem.innerHTML = `
            <div class="image">
                <img src="${product.image}">
            </div>
            <div class="description">
                <h3>${product.title}</h3>
                ${product.category}
                <div class="cost">$ ${product.price}</div>
            </div>
            `;

            const buttonAdd = document.createElement('button');
            buttonAdd.classList.add('button_add');
            buttonAdd.dataset.id = index;
            
            let dataArr = [];
        
            dataArr = localStorage.getItem('cart');

            if (dataArr != null) dataArr = JSON.parse(dataArr);
            if (dataArr == null) dataArr = [];

            if (dataArr.indexOf(String(index)) == -1) {
                buttonAdd.innerHTML = `
                <div class="button_add_icon1"></div>
                <div class="button_add_icon2"></div>
                `;
            } else {
                buttonAdd.innerHTML = `<div class="button_add_icon1"></div>`;
            }

            buttonAdd.addEventListener('click', function() {
                if (this.dataset.id >= 0) self.cardAdd(this.dataset.id);
                
                let dataArr = [];
        
                dataArr = localStorage.getItem('cart');

                if (dataArr != null) dataArr = JSON.parse(dataArr);
                if (dataArr == null) dataArr = [];

                if (dataArr.indexOf(this.dataset.id) == -1) {
                    buttonAdd.innerHTML = `
                    <div class="button_add_icon1"></div>
                    <div class="button_add_icon2"></div>
                    `;
                } else {
                    buttonAdd.innerHTML = `<div class="button_add_icon1"></div>`;
                }
            });

            productElem.querySelector('.description').appendChild(buttonAdd);
            slider.appendChild(productElem);
        });
        
        return slider;
    }
}

const products = new Products().get();

export default products;