const apparelShow1 = document.getElementById("apparelShow1");
const apparelShow2 = document.getElementById("apparelShow2");
const apparelShow3 = document.getElementById("apparelShow3");
const apparelShow4 = document.getElementById("apparelShow4");
const apparelShow5 = document.getElementById("apparelShow5");
const apparelShow6 = document.getElementById("apparelShow6");
const offers = document.querySelector(".offer img")

const apparels = document.getElementsByClassName("apparels")[0];
const apparels2 = document.getElementsByClassName("apparels2")[0];
const apparels3 = document.getElementsByClassName("apparels3")[0];
const apparels4 = document.getElementsByClassName("apparels4")[0];
const apparels5 = document.getElementsByClassName("apparels5")[0];
const studio = document.getElementsByClassName("studio")[0];
apparelShow1.addEventListener("mouseover", function () {
    apparels.style.display = "inline-block"

})
apparelShow1.addEventListener("mouseleave", function () {
    apparels.style.display = "none"

})
apparelShow2.addEventListener("mouseover", function () {
    apparels2.style.display = "inline-block"

})
apparelShow2.addEventListener("mouseleave", function () {
    apparels2.style.display = "none"

})
apparelShow3.addEventListener("mouseover", function () {
    apparels3.style.display = "inline-block"

})
apparelShow3.addEventListener("mouseleave", function () {
    apparels3.style.display = "none"

})
apparelShow4.addEventListener("mouseover", function () {
    apparels4.style.display = "inline-block"

})
apparelShow4.addEventListener("mouseleave", function () {
    apparels4.style.display = "none"

})
apparelShow5.addEventListener("mouseover", function () {
    apparels5.style.display = "inline-block"

})
apparelShow5.addEventListener("mouseleave", function () {
    apparels5.style.display = "none"

})
apparelShow6.addEventListener("mouseover", function () {
    studio.style.display = "inline-block"

})
apparelShow6.addEventListener("mouseleave", function () {
    studio.style.display = "none"

})
offers.addEventListener("click", slideInOut)


function slideInOut() {
    if (this.style.right === "-366px") {
        this.style.right = "0"
    }
    else if (this.style.right = "0") {
        this.style.right = "-366px"
    }
}
window.addEventListener("load",slideInOut)