/** @type {HTMLElement} */
const scrollContainer = document.querySelector('.s_container')

/** @type {HTMLElement[]} */
const children = Array.from(scrollContainer.children)

let index = 1
const width = children[0].getBoundingClientRect().width

setInterval(swap, 3000)

function swap() {
    scrollContainer.scrollTo({
        left: width * index
    })

    index = (index + 1) % children.length;
}