class Arrows {
    nextSlide(dir){
        const slider = document.body.querySelector('.slider');
        const list = slider.querySelectorAll('.product');

        const firstProduct = list[0];

        const styleFirstProduct = window.getComputedStyle(firstProduct);
        const styleSlider = window.getComputedStyle(slider);

        let widthFirstProduct = parseFloat(styleFirstProduct.width);
        const mrFirstProduct = parseFloat(styleFirstProduct.marginRight);

        if (mrFirstProduct > 0) widthFirstProduct += mrFirstProduct;

        const countProducts = list.length;
        const widthSlider = parseFloat(styleSlider.width);
        
        const maxCountSlider = Math.ceil(widthSlider / widthFirstProduct);

        const maxMl = (widthFirstProduct * 20) - (maxCountSlider * widthFirstProduct) + widthFirstProduct;
        
        let mlFirstProduct = Math.abs(parseFloat(firstProduct.style.marginLeft)) || 0;

        if (mlFirstProduct > 0 && dir == undefined) widthFirstProduct += mlFirstProduct;
        if (mlFirstProduct > 0 && dir == 'left') widthFirstProduct = mlFirstProduct - widthFirstProduct;

        if (widthFirstProduct < maxMl && dir == undefined) firstProduct.style.marginLeft = `-${widthFirstProduct}px`;
        if (dir == 'left' && mlFirstProduct > 0) firstProduct.style.marginLeft = `-${widthFirstProduct}px`;
    }

    get(){
        const arrows = document.createElement('div');
        arrows.classList.add('arrows');
    
        const arrowLeft = document.createElement('button');
        arrowLeft.classList.add('arrow_left');
        arrowLeft.innerHTML = `
            <div class="arrow_left_icon1"></div>
            <div class="arrow_left_icon2"></div>
            <div class="arrow_left_icon3"></div>
        `;
        const arrowRight = document.createElement('button');
        arrowRight.classList.add('arrow_right');
        arrowRight.innerHTML = `
            <div class="arrow_right_icon1"></div>
            <div class="arrow_right_icon2"></div>
            <div class="arrow_right_icon3"></div>
        `;
        arrows.appendChild(arrowLeft);
        arrows.appendChild(arrowRight);

        arrowLeft.addEventListener('click', _=>{
            this.nextSlide('left');
        });

        arrowRight.addEventListener('click', _=> {
            this.nextSlide();
        });

        return arrows;
    }
}

const arrows = new Arrows().get();

export default arrows;