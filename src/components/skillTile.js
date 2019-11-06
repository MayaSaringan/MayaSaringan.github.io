
import React , {Component} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Link } from "gatsby"

import Image from "./image"
import SEO from "./seo"
import styles from "./layout.module.css"


export default class SkillTile extends Component { 
  constructor(props){
    super(props) //props:style, id, children
  }
  render = () => {
    let style = {minHeight:'100%',...this.props.style,}
    let contentStyle = {display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',minHeight:'100%',maxHeight:'200%',maxWidth:1200, ...this.props.contentStyle}
    return (
      <div style={{margin:4,borderWidth:2,borderColor:'white', borderStyle:'solid',borderRadius:8,padding:12}}><h1 style={{fontFamily:'sans-serif',color:'white'}}>{this.props.title}</h1>
      </div>
        
    
    );
  }
  
}

/*
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}*/

