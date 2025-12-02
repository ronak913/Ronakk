const button = document.querySelectorAll("button")
for (const element of button) {
    element.setAttribute("class", "btn")
}
const p = document.querySelector("p")
button.forEach((val) => {
    val.addEventListener("touchstart", () => {
        p.textContent = val.textContent
        if (p.textContent == "yes") {
            p.textContent = "then msg me"
            p.style.color = "white"
            p.style.backgroundColor = "purple"
        } else {
            p.textContent = confirm("sure you dont like me")
            p.textContent = "sorry there is no rejection"
            p.style.color = "red"
            p.style.backgroundColor = "yellow"
        }

    })

});