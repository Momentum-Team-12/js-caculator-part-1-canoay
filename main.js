
let display = document.querySelector("#screen")
let results = document.querySelectorAll("#equal")
let buttons = document.querySelectorAll(".button");
let clear = document.querySelectorAll("#opC")

for (let button of buttons) {
  button.addEventListener ("click", () => {
    display.innerText += button.innerText
  })
}

clear.addEventListener ('click',  () => {
    display.innerText = ""
  })

results.addEventListener ('click',  () => {
    display.innerText = eval(display.innerText)
  })
