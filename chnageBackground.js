const element = document.createElement('button')
element.textContent = "Press me"
element.style.padding = "20px"
let color = ["red","green","yellow","purple"]
let body = document.getElementById('body')
const head = document.getElementById("col")
body.appendChild(element)
element.addEventListener("click", () => {
    const randomCol = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    document.body.style.backgroundColor=randomCol
})