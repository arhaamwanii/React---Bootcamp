const loop = {
    one : ["two" , "threee"],
    two : ["four"  , "five" ]
}

console.log(loop)

for(const item of Object.keys(loop)){
    item2 = loop[item]
    console.log(item2);
}
    // const item = loop[key]