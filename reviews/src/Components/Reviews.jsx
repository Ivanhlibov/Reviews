import React, { Component } from "react";

class App extends Component{
    state = {
        good: 0,
        neytral: 0,
        bad:0,
    }
    
handlefeedback = (type) => {
    this.setState(prevState => ({
        [type]: prevState[type] + 1
    }))
}

render(){
    const {good, neytral, bad} = this.state;
    return(
        <div>
        <h1>Відгуки</h1>
        <button onClick={()=> this.handlefeedback('good')} >good</button>
        <button onClick={()=> this.handlefeedback('neytral')} >neytral</button>
        <button onClick={()=> this.handlefeedback('bad')} >bad</button>
        <h2>У тебя все получиться</h2>
        <p>Добре {good}</p>
        <p>Нейтрально {neytral}</p>
        <p>Добре {bad}</p>
        </div>
    )
}
}


export default App;