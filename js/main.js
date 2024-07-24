let elModalWrapper = document.querySelector(".modal")
let elOpen = document.querySelector(".open-icon")
let elClose = document.querySelector(".close-icon")

function handleMenuIconOpen(){
    elModalWrapper.classList.add("show")
    elClose.classList.add("close-show")
    elOpen.classList.add("hide")
}
function handleMenuIconClose(){
    elModalWrapper.classList.remove("show")
    elClose.classList.remove("close-show")
    elOpen.classList.remove("hide")
}