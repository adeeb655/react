import react from "react";
class Timer extends react.Component {
    constructor(){
        super()
        this.state={
            count:0

        }
    }
    initiateTimer = () => {
        let timeLeftVar = this.secondsToTime(60);
        this.setState({ timeLeft: timeLeftVar })
      };
    
      startTimer = () => {
        let interval = setInterval(this.timer, 1000);
        this.setState({ interval: interval });
      };
    
      timer = () => {
        if (this.state.timeLeft >0){
          this.setState({ timeLeft: this.state.timeLeft -1 });
        }
        else {
          clearInterval(this.state.interval);
          //this.postToSlack();
        }
      };
    render() { 
        return (
         <>
          </>
        );
    }
}

export default timer;