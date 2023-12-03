
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

console.lg(newArray)