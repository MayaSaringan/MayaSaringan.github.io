/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React , {Component} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Link } from "gatsby"

import Image from "./image"
import SEO from "./seo"
import styles from "./layout.module.css"

console.log(styles);
export default class Layout extends Component { 
  constructor(props){
    super(props) //props:style, id, children
  }
  render = () => {
    let style = {display:"flex",flex:1,minHeight:'100vh',width:'100%',...this.props.style,}
    let contentStyle = {display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',minHeight:'100%',maxHeight:'200%',maxWidth:1200, ...this.props.contentStyle}
    return (
      <div className={styles.test} style={style} id ={this.props.id}>
        <div style={contentStyle}>{this.props.children}</div>
      </div>
        
    
    );
  }
  
}

/*
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}*/

