window.onload = () => {
    let indexPage = document.querySelector('#index-page')
    indexPage.innerHTML = '<i class="ri-home-fill"></i>'

    let main = document.querySelector('.main')
    let header = document.querySelector('.header')
    let footer = document.querySelector('.footer')
    main.style.margin = `${header.offsetHeight}px 0 ${header.offsetHeight}px 0`


}