export default function TabButton({buttonInfo , onClick , onSelect , props , children}){
   
    
    function handleClick(params) {
        console.log("Call Back 01")
    }

    return(
        <>
            <li>
                <button onClick={handleClick}>{buttonInfo} {children}</button>
            </li>
        </>

    )
}


//onelect is a prop and we set the value to it