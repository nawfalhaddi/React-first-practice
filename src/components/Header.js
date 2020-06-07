import React, { Component } from 'react'


// let styles = {
//     header: { background: '#03a9f4', marginLeft: '0' },
//     logo: {
//         fontSize: '30px',
//         color: '#fff',
//         textAlign:'center'
//     }
// }

class Header extends Component {

    state={
        keywords:'',
        active:'blue',
        class:false
    }
    logoClicked(){
        console.log("Im clicked")
    }
    textChanged(e){
        const value=e.target.value?'red':'blue';
        this.setState({
            active:value,
            keywords:e.target.value
        })
    }
    
  
    render() {
        
        return (
            <>
                <header className={this.state.class?'nawfal':'haddi'} style={{ background:this.state.active }} >
                    <div 
                    className="logo"
                    onClick={this.logoClicked}>Logo</div>
                    <input onChange={
                        //this.textChanged.bind(this)
                        this.props.keywords.bind(this)
                        } />
                    
                </header>

            </>
        )
    }
}
export default Header;