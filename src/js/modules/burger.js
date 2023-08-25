const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerSelector);


    burgerElem.addEventListener('click', () => {
        menuElem.classList.add('animated');
        menuElem.classList.toggle('burger-display');
    });
}

export default burger;