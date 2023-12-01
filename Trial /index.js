const loop = {
    one : ["two" , "threee"],
    two : ["four"  , "five" ]
}

for(const item of Object.keys(loop)  ){

    console.log(item);
}
    // const item = loop[key]