
const neww = "from this point on new code snippet will be exicuted "

function newSnippet(){
    console.log("")
    console.log("")
    console.log(neww)
    console.log("")
    console.log("")
}


//ONE

const loop = {
    one : ["two" , "threee"],
    two : ["four"  , "five" ]
}

console.log(loop)

for(const item of Object.keys(loop)){
    item2 = loop[item]
    console.log(item2);
}

newSnippet();

//TWO


//function to add the class when it is clicked




const one =document.getElementById("one")
const two =document.getElementById("two")
const three =document.getElementById("three")

one.addEventListener("click" , ()=> {
    one.classList.add("add")   
} )
two.addEventListener("click"  ,  addClass2)
three.addEventListener("click" , addclass3)







