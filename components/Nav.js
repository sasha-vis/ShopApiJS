import navSearch from './NavSearch.js';
import bin from './Bin.js';
import menu from './Menu.js';
import arrows from './Arrows.js';

class Nav {
    get(){
        const nav = document.createElement('nav');
        nav.classList.add('nav');
        nav.innerHTML = `
        <div class="container">

            <div class="nav_left">
                <div class="logo">
                    Ladies
                    <img src="./images/diamond.png" alt="Logo">
                </div>

            </div>

            <div class="nav_right">
                <div class="search_bin">

                </div>
            </div>
        
        </div>
        `;
        nav.querySelector('.search_bin').appendChild(navSearch);
        nav.querySelector('.nav_left').appendChild(menu);
        nav.querySelector('.search_bin').appendChild(bin);
        nav.querySelector('.nav_right').appendChild(arrows);
        return nav;
    }
}

const nav = new Nav().get();
export default nav;