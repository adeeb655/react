import { Button,Counter,Timer2 } from "../components/index";
const Dashboard =()=>{
    return(
       <>
            <h1>Welcome to the Dasboard</h1>
            <Button buttonText ="Dont click" buttonClass="Variant"/>
            <Button buttonText ="Dont Touch"/>
            <Button buttonText ="Dont see"/>
            <Button buttonText ="Dont code"/>
            <Counter/>
            <Timer2/>
            </>
      
    );
}

export default Dashboard;