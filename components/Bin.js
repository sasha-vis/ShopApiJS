class Bin {
    constructor(){

        this.counter = 0;
        let dataArr = [];
        
        dataArr = localStorage.getItem('cart');

        if (dataArr != null) dataArr = JSON.parse(dataArr);
        if (dataArr == null) dataArr = [];
        if (dataArr.length > 0) this.counter = dataArr.length;
    }

    get(){
        const bin = document.createElement('button');
        bin.classList.add('bin');
        bin.innerHTML = `
        <div class="bin_icon1"></div>
        <div class="bin_icon2"></div>
        <div class="bin_counter">${this.counter}</div>
        `;
        return bin;
    }
}

const bin = new Bin().get();

export default bin;