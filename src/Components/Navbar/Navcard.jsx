const textStyling = {
    margin:0,
    padding:'0 10px',
    fontWeight:'400'
}

function Navcard(props){
    return(
        <div className="d-flex align-items-center w-100 mt-3 text-black" >
            {props.children}
            <p style={textStyling}>{props.name}</p>
        </div>
    )
}

export default Navcard