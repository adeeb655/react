import React,{useState} from "react";

const Timer2=()=>{
        let time = new Date().toLocaleTimeString(); 

        const [ctime,setctime] = useState(time);

        const UpdateTime =()=>{
            time = new Date().toLocaleTimeString();
            setctime(time);
        };
        setInterval(UpdateTime,1000);
    return(
        <>
        <h1>{ctime}</h1>
        </>
    );
}

export default Timer2;