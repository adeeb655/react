import React from "react";
import { useState } from "react";
const Basicform =()=>{
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [allEntry , setAllEntry] = useState([]);
    const submitForm =()=>{
        const newEntry = {email:email, password:password}
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry)
    }
    return(
        <>
        <form action="" onSubmit ={submitForm}>
            <div>
                <label htmlfor="email">Email</label>
                <input type="text" name="email" id="email" value ={email}
                onChange={(e) => setemail(e.target.value)}
                />
            </div>

            <div>
                <label htmlfor="password">Pasword</label>
                <input type="password" name="password" id="password" value ={password}
                onChange={(e) => setpassword(e.target.value)}
                />

            </div>
        <button type="submit">Login</button>
        
        </form>
        </>
    );
}
export default  Basicform;