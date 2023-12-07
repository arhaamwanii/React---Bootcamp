export default function TabButton({buttonInfo , onClick , onSelect}){
   
    
    function handleClick(params) {
        console.log("fonction to be called when a button is clicked")
    }

    return(
        <>
            <li>
                <button onClick={handleClick}>{buttonInfo}</button>
            </li>
        </>

    )
}

//onelect is a prop and we set the value to it
