
//creating a function which takes in an input and displays it in the actually HTML documeny rather than console logging it


// FUNCTION FOR --- OUTPUT

const showOnDocument = (input) => {
    const one = document.getElementById("heading")
    one.innerHTML = input
}


//CODE LEARN

const arary = ["one" , "two" , "three"]



arary.push("four - but it is new")

showOnDocument(arary[3])

arary.pop()

showOnDocument(arary[3])


console.log("one")
//USING MTHODS ON ARRAYS

//".push"
//it is used to push an element in an array 


const two = ["different" , "breed"]

const mapedTwo = two.map((item)=> `${item} !`);

console.log(mapedTwo)


//.map
//array elements to array elements as objects conversion 

const three = ["this", "is" , "crutail"]

const newThree = three.map((arrayElement)=> ({valueOfthatNumberElemetInArray: `${arrayElement}`}))

console.log(newThree)


//DESTRUCTURING AN ARRAY


const [firstName , secondName , thirdName , fourName ]  = ["one " , "two" , "three" , "four"]

showOnDocument(secondName)

console.log(secondName)


//DESTRUCTURING OBJECTS 

const {name , age} = {
    name: "arham",
    age: 17
}

console.log(name)


//SPREAD OPERATOR

const skills = ["arham" , "amin" , " wani"]

const newSkills  = ["dayyan" , "amin" , "wani"]


const mergedSkills = [...skills, ...newSkills]
// this will megre all the values of the arrays and forms a new array --- named mergedSkills

console.log(mergedSkills)



const me = console.log("one two three")




//the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick browm fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over a lazy dog the quick brow nfox jumped right over the lazy dog the quick brown fox juped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brwon fox jumped roght over hte lazy dog the quick brown fox jumped right over the lazy dog the qquik brwon foxx jupped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy doog the quick brown fox jumped right oer the lazy do g the quick brwon fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brwon fox jumped right over the lazy dog  


console.log("")
console.log("")
console.log("")
console.log("")
console.log("")

//NEW SECTION

const array1 = ["first" , "second" , "third"]
const array2 = ["fourth" , "fifth" , "sixth"]

const newArray = [...array1 , ...array2]

console.log(newArray)



//CONTROL STRUCTURES

const variable = 1

// if (variable > 2) {
//     showOnDocument(array1)
// }else if(variable = 10){
//     showOnDocument(array2)
// }else{
//     showOnDocument("it is a very unfortunate")
// }

//we can pass functions as values to other functions
//EX -- SETTIMEOUT

//we dont add () to call the function in this case as in that case it will be called right thee

const delay = "arham amin wani "

setTimeout(() => {
    showOnDocument(delay)
}, 4000);


function greeter(outGreeting){
    console.log("this is the value inside the actuall function")
    outGreeting()
}

greeter(() => {console.log('this is a test message to check the functioning of the function in the callout ')})


//FUCTUIONS AS INPUTS TO OTHER FUNCTUON

console.log("")
console.log("")
console.log("")
console.log("")


function ion(){
    showOnDocument("function in an function test")
    //this sopes the everuthing inside the function to that function --- functuon has a functional scope
}


//RETURN STATEMENT TEST

function returnTest(){
    const  x = 2 + 2
    const y = 3 + 3 

    return x 
    return y 
} 


console.log(returnTest())