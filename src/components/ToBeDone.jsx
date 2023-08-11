import { Component } from "react";

class ToBeDone extends Component{
    render(){
        const {name, id, action} = this.props;
        return(
            <div className="tbd-box">
                <div className="tbd">
                    <span className="tbd-text">{name}</span>
                    <button onClick={() => action(id)} className="tbd-btn">Done</button>
                </div>
            </div>
        )
    }
}

export default ToBeDone