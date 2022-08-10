const productElements = document.querySelectorAll('.product-text-chevron')


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
    console.log(e.currentTarget)

}