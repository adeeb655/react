const Button =(props)=>{
    console.log(props);
    return(
        <>
        <button className={props.buttonClass}>{props.buttonText}</button>
       </>
    );
}

export default Button;