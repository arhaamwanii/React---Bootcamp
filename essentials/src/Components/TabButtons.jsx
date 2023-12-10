export default function TabButton({buttonInfo , onClick , onSelect , props , children}){
   
    
    function handleClick(params) {
        console.log("Call Back 01")
    }

    return(
        <>
            <li>
                <button onClick={handleClick} >{buttonInfo} {children}</button>
            </li>
        </>

    )
}

//onClick is inbuilt




//onelect is a prop and we set the value to it
//on click here in thsi specific case is an event listner
        //it points it to the function ly it is

        //this is another comment attempt in the data base on an different day with  commmett
