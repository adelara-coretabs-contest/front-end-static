window.addEventListener('load', ()=> {
    let loader = document.querySelector('#loader');
    loader.classList.add('loaded');
    console.log('loaded', loader)
});


let hamburger = document.querySelector('#hamburger-menu');

hamburger.addEventListener('click', () => {
    console.log(hamburger.children[0]);
});
