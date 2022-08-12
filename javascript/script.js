const productElements = document.querySelectorAll('.product-text-chevron')
const productItems = document.querySelectorAll('.product-items')
const contentHomeDiv = document.querySelector('#content-home-id')

// Content Home Div - Close all Product Items and Chevrons
contentHomeDiv.addEventListener('click', () => {
    closeAllChevrons()
    CloseAllProductItems()
} )

function closeAllChevrons() {
    productElements.forEach(productElement => {
        console.log(productElement.children[1])
        if (productElement.children[1].classList.contains('rotate')) {
            productElement.children[1].classList.remove('rotate')
        }
    })
}

function CloseAllProductItems() {
    productItems.forEach(productItem => {
        if(productItem.classList.contains('open')) {
            productItem.classList.remove('open')
        }
    })
}


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