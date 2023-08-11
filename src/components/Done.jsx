import { Component } from "react";

class Done extends Component{
    render(){
        const {name, id, actionReturn, actionRemove} = this.props;
        return(
            <div className="done-box">
               <div className="done">
                    <span className="done-text">{name}</span>
                    <div className="btn-box">
                        <button onClick={() => actionReturn(id)} className="done-btn">Not Done</button>
                        <button onClick={() => actionRemove(id)} className="done-btn remove">Remove</button>  
                    </div>
               </div>
            </div>
        )
    }
}

export default Done