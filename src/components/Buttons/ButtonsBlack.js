import "../Buttons/Buttons.css"

export default function ButtonBlack(props){
    
    return(
        <>
            <a className="btn btn-black" href={props.link} >
                {props.text}
            </a>
        </>
    )
}