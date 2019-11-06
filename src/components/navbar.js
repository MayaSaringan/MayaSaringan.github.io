import React, { Component } from 'react'
import { Link, withPrefix } from 'gatsby'
import './navbar.css'
import { faBars,faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faBars,faTimes)
export default class Navbar extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            mobileMenuExpanded:false
        }

        if (typeof window !== "undefined") {
            // eslint-disable-next-line global-require
            require("smooth-scroll")('a[href*="#"]')
          }
    }

    expandMobileBurger = () => {
        this.setState({mobileMenuExpanded:true})
    }

    unExpandMobileBurger = () =>{
        this.setState({mobileMenuExpanded:false})
    }

    renderMobile  = () => {
        return <button onClick={this.expandMobileBurger}><FontAwesomeIcon icon={faBars} style={{color:"white",margin:3,fontSize:50}} /></button>
    }

    renderExpandedMobile = () =>{
        return (
            <div style = {{flexDirection:'row',width:'100%',display:'flex',justifyContent:'flex-end',backgroundColor:'rgb(12,12,13)'}}>
                <div style = {{flexDirection:'column',width:'100%',display:'flex',justifyContent:'flex-end'}}>
                    <Link style={{padding:15, color:'white', fontSize:20}} to="/#home">HOME</Link>
                    <Link style={{padding:15, color:'white', fontSize:20}} to="/#about">ABOUT</Link>
                    <Link style={{padding:15, color:'white', fontSize:20}} to="/#projects">PROJECT</Link>
                </div>
            <div style = {{flexDirection:'column',width:'100%',display:'flex',justifyContent:'flex-start',alignItems:'flex-end'}}>
                <button style={{backgroundColor:'none',border:'none'}} onClick={this.unExpandMobileBurger}><FontAwesomeIcon icon={faTimes} style={{color:"white",margin:3,fontSize:50}} /></button></div>
            </div>)
    }
    renderNonMobile = () => {
        return (
            <div style = {{flexDirection:'row',width:'100%',display:'flex',justifyContent:'flex-end'}}>
                <Link style={{padding:15, color:'white', fontSize:20}} to="/#home">HOME</Link>
                <Link style={{padding:15, color:'white', fontSize:20}} to="/#about">ABOUT</Link>
                <Link style={{padding:15, color:'white', fontSize:20}} to="/#projects">PROJECT</Link>
            </div>
        );
    }
    renderLinks = () => {
        return this.props.mobile ? (this.state.mobileMenuExpanded? this.renderExpandedMobile() : this.renderMobile() ): this.renderNonMobile()
    }
    render = () => {
        console.log(this.props)
       let  color= this.props.offset < 200? null : 'rgb(12,12,13)'
        let bB = this.props.offset < 200 ? 'none': '1px solid #04152f'
       // let style = {backgroundColor: 
       let s  = { transition: 'top 0.3s',position:'fixed',flexDirection:'row',borderBottom:bB,top:0,right:0,width:'100%',display:'flex',zIndex:99,alignItems:'center',justifyContent:'flex-end'};
       s['backgroundColor']=color;
        return (
            <div style={s}>
               { this.renderLinks()}
            </div>
        )
        
    }
}