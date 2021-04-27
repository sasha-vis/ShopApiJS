import products from './Products.js';

class Main {
    get(){
        const main = document.createElement('main');
        main.classList.add('main');
        main.innerHTML = `
        <div class="container">   

        </div>
        `;

        main.querySelector('.container').appendChild(products);

        return main;
    }
}

const main = new Main().get();

export default main;