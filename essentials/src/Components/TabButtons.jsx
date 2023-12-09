export default function TabButton({buttonInfo , onClick , onSelect , props , children}){
   
    
    function anything(params) {
        console.log("Call Back 01")
    }

    return(
        <>
            <li>
                <button onClick={anything} >{buttonInfo} {children}</button>
            </li>
        </>

    )
}


//onelect is a prop and we set the value to it
//on click here in thsi specific case is an event listner
        //it points it to the function ly it is