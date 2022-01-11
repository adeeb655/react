import react  from "react";
class Counter extends react.Component {
    constructor(){
        super()
        this.state={
            count:0

        }
    }
    incrementFun(){
        this.setState({count:this.state.count+1})
        console.log("hello")
    }
    decrementFun(){
        this.setState({count:this.state.count-1})
        console.log("bye")
    }
    resetFun(){
        this.setState({count:this.state.count=0})
        console.log("Clear")
    }
    render() { 
        return (
            <> 
            <button onClick={()=>this.incrementFun()}>Add</button>
            <span>{this.state.count}</span>
            <button onClick={()=>this.decrementFun()}>Delete</button>
            <button onClick={()=>this.resetFun()}>Reset</button>
            </>
        )
    }
}

export default Counter;