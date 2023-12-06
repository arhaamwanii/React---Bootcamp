export default function TabButton({buttonInfo , onClick}){

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