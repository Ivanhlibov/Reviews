
import React, { Component } from "react";

class App extends Component{
    state = {
        good: 0,
        neytral: 0,
        bad: 0,
    }

    handleFeedBack = (type) => {
        this.setState(preState => ({
            [type]: preState[type] + 1
        }) )
    }
    render(){
        const {good, neytral, bad} = this.state;
        return(
            <div>
                <h1>Відгуки</h1>
                <button onClick={()=> this.handleFeedBack('good') } >Good</button>
                <button onClick={()=> this.handleFeedBack('Neytral') } >Neytral</button>
                <button onClick={()=> this.handleFeedBack('bad') } >Bad</button>
                <h2>Все буде Good</h2>
                <p>Good:{good}</p>
                <p>Neytral:{neytral}</p>
                <p>Bad:{bad}</p>
            </div>
        )
    }
}

export default App