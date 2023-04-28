// Your code here

const cell = document.querySelector("table");
const change = document.querySelector("select")

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

