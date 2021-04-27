import nav from './components/Nav.js';

class App {
    constructor(){
        this.getData()
        .then((data) => {
            localStorage.setItem('data', JSON.stringify(data));

            this.init();
        });
    }

    init(){
        const app = document.createElement('div');
        app.classList.add('app');

        import('./components/Main.js')
        .then(module => {
            app.appendChild(module.default);
        });

        app.appendChild(nav);
        document.body.appendChild(app);
    }

    async getData(){
        const url = 'https://fakestoreapi.com/products';

        return fetch(url)
        .then(function(response){
            return response.json();
        });
    }
}

new App();