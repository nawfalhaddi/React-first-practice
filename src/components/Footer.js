import React, {Component} from 'react'

class Footer extends Component{
    constructor(props){
        super(props);
        this.state={
            footerText:props.footerText
        }
    }
    render(){
        return(
            <>
                <div>{this.state.footerText}</div>
            </>
        )
    }
}

export default Footer;