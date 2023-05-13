import React,{Component} from "react";
import '../App.css'

class Test extends Component{
    constructor(props){
        super(props);
        this.state={count:0}
    }

    handleAdd= ()=>{
        this.setState({
            count: this.state.count +1
        })
    }

    handleLess= ()=>{
        if(this.state.count > 1)
        
        this.setState({
            count: this.state.count -1
        })
    }

render(){
    return(
        <div className="main-box">
            <h4>
                Contador: {this.props.children}
            </h4>
            <h1>Contador: {this.state.count}</h1>
            <button onClick={this.handleAdd}> + </button>
            <button onClick={this.handleLess}> - </button>
        </div>
    )
}

}

export default Test;