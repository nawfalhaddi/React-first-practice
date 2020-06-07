import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import './styles/style.css'
import JSON from './db.json'
import NewsList from './components/NewsList'
import Footer from './components/Footer.js'

class App extends Component{
    constructor(){
        super()
        this.state={
            news:JSON,
            footerText:'This is the MAIN FOOTER',
            filtred:[]
        }
        
    }
    getKeywords(event){
        let keywords=event.target.value;
        let filtred= this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1;
        })
        
        this.setState({
            filtred:filtred
        })
    }
render(){
    const state=this.state
    return (
        <>
            <Header keywords={this.getKeywords.bind(this)}/>
            <NewsList 
                news={state.filtred.length===0?state.news:state.filtred}
            />
            <Footer footerText={state.footerText}/>
        </>
    )
}
}
ReactDOM.render(<App />, document.getElementById('root'))