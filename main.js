
let display = document.querySelector("#screen")
let result = document.getElementById("eval")
let buttons = document.querySelectorAll(".button");
let clear = document.querySelector("#opC")

for (let button of buttons) {
  button.addEventListener ("click", () => {
    if (result /=)
    display.innerText += button.innerText
  })
}

clear.addEventListener ('click',  () => {
    display.innerText = ""
  })

result.addEventListener ('click',  () => {
    display.innerText = result(display.innerText)
  })

  // if statement needed to figure out not eval and eval