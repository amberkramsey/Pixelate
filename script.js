// Your code here

const cell = document.querySelector("table");
const change = document.querySelector("select")
const clear = document.getElementById("clear")
const child = document.querySelectorAll("#grid TD")

let chosenColor = "red"


cell.addEventListener ('click', colorize)


change.addEventListener ("change", function (event){
    chosenColor = event.target.value
})
cell.addEventListener("mousedown", (event)=> {
cell.addEventListener("mouseover", colorize)
})
cell.addEventListener("mouseup", (event) => {
    cell.removeEventListener("mouseover", colorize)

})

clear.addEventListener("click", clearCells)

function colorize(event){
    const target = event.target
    if(target.tagName ==="TD")
    {
        if (target.className === chosenColor){
            target.className = ""
        } else {
            target.className = chosenColor
        }
    }   
}

function clearCells(event){
    let x = child[1].getAttribute("className")
    console.log(x)
  for (let i = 0; i < child.length; i++){
    
  }
}