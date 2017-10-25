import React from 'react';



export default class Menu extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    state = {
        visible: true
    }
    
    handleClick() {
        this.setState({visible:!this.state.visible});
    }
    render(){
        console.log();
        return(
            <nav className="menu-container">
                <div className={this.state.visible ? "switch open" : "switch close"} onClick={this.handleClick}></div>
                {!this.state.visible ? // if it's true = we will see ul
                
                <ul>
                   {this.props.data.map((item, index) => <li key={index}><a href="#">{item}</a></li>)}
                </ul>
                 : null} 
            </nav>
        )
    }
}

