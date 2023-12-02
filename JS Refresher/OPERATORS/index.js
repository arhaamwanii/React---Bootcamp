// let a = [1 ,3,4,,44,4,2,3,412434,24,234,23,4]

// const one = () => {
//     for (item of a ){
//         newItem = item * 10
//         console.log(newItem)
//     }   
// }

// one()
let htmlH1  = document.getElementById("hone")

const intial = "how are you today"

const call = (hello = "me me me me ") => {
    console.log(` this is the default value -${hello} --- this  is the value from outside here ${intial} `)
    htmlH1.innerHTML = intial
}

const button = document.getElementById("button")
button.addEventListener("click" , call)