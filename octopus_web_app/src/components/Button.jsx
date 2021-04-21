import React, { Component } from "react";
import "./style.scss";

class Button extends Component {
    render(){
        return(
            <div>
                <button onClick={this.props.handleClick} className="button_request">Click me!</button>
            </div>
        )
    }
}
export default Button;