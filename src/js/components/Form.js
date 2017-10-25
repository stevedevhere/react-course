import React from 'react'

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnSubmit(event){
        
        console.log(this.refs)
        for(let key in this.refs){
            if(this.refs[key].value == ""){
                event.preventDefault();
                alert("fill in the form");
                this.refs[key].focus();
                break;
            }
            else{
                if(this.refs.passwordInput.value != this.refs.passwordInput2.value){
                    event.preventDefault();
                    alert("Wrong Password");
                    this.refs.passwordInput.focus()
                }
            }
        }
        

    }
    componentDidMount(){
        this.refs.emailInput.focus();
        
    }
    handleKeyPress(keyEvent){

    }
    render(){
        return(
            <form className="enter-form" onSubmit={this.handleOnSubmit} onKeyDown= {this.handleKeyPress}>
                <input type="email" ref="emailInput" placeholder="Enter email address"  /> 
                <input type="login" ref="loginInput" placeholder="Enter your login"  />
                <input type="password" ref="passwordInput" placeholder="Enter password"  />
                <input type="password" ref="passwordInput2" placeholder="Enter password again"  />
                <input type="submit" value= "Submit"  />
            </form>
        )
    }

}