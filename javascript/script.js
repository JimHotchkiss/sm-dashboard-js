const productElements = document.querySelectorAll('.product-text-chevron')
const productItems = document.querySelectorAll('.product-items')


productElements.forEach(productElement => {
    productElement.addEventListener('click', (e) => {
        rotateChevron(e)
        openProductItems(e)
       
    })

})

function rotateChevron(e){
    e.currentTarget.children[1].classList.toggle('rotate')
}

function openProductItems(e) {
    productItems.forEach(item => {
        if (item.dataset.id === e.currentTarget.dataset.id) {
            item.classList.toggle('open')
        }
    })
}