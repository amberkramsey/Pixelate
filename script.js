// Your code here

const cellClick = document.querySelector("table");
const change = document.querySelector("select")

let chosenColor = "red"


cellClick.addEventListener ('click', colorize)

change.addEventListener ("change", function (event){
    chosenColor = event.target.value
})

function colorize(event){
    const target = event.target
    if(event.target.tagName ==="td")
    {
        if (target.className === chosenColor){
            target.className = ""
        } else {
            target.className = chosenColor
        }
    }   
}