import React, {Component} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import '../components/styles.css'
import ProjectTile from "../components/projectTile"
import SkillTile from "../components/skillTile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars,faEnvelopeSquare, faFileAlt, faLightbulb} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faBars, faEnvelopeSquare,faLightbulb)
/*
===============

WIP



================




*/
export default class IndexPage extends Component {
  constructor(props){
    super(props)
    this.state={
      topOffset: 0,
      mobile:false,
      projectTileWidth:'33.33%',
      layoutWidth:1200,
    }
    
    if (typeof window !== "undefined") {
      window.onscroll = () => this.setState({topOffset:window.pageYOffset})
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount = () =>  {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () =>  {
    console.log(window.innerWidth);
    if (window.innerWidth<700 && !this.state.mobile) this.setState({mobile:true})
    else if ( window.innerWidth>=700  &&this.state.mobile) this.setState({mobile:false})

    if (window.innerWidth<600) this.setState({projectTileWidth:'100%', layoutWidth:'100%'})
    else if (window.innerWidth<1200) this.setState({projectTileWidth:'49.99%', layoutWidth:'100%'})
    else this.setState({projectTileWidth:'33.33%',layoutWidth:1200})
  }
  
  render () {
    
    return(
      <div style={{flexDirection:'column', backgroundColor:'blue', minHeight:'100%',minWidth:'100vw',width:'100%',backgroundColor:'black'}}>
        <Navbar mobile={this.state.mobile} offset={this.state.topOffset}></Navbar>
        <Layout id ="home" >
          <SEO title="Home" />
          <video loop autoPlay style={{objectFit:'fill',position:'absolute',backgroundColor:'black',width:'100%',minHeight:'100vh',zIndex:1}}>
            <source src={require("../assets/tech.mp4")} type="video/mp4" />
          </video>
          <div style={{display:'flex',flexDirection:'column',zIndex:2,alignItems:'center',justifyContent:'center'}}>
            <h1 style={{color:'white'}}>Maya Saringan</h1>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'center'}}><Image src={"youi"}/><p style={{color:'white',alignSelf:'center',margin:0}}>Software Developer</p></div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
              <button style={{backgroundColor:'none',border:'2px white solid',borderRadius:10,padding:10,margin:5}} ><Link style={{color:'white', fontSize:15,textAlign:'center',display:'flex',flexDirection:'row',alignItems:'center'}} to="/#projects">
                  <FontAwesomeIcon icon={faLightbulb} style={{color:"white",margin:3,fontSize:20}} />View my projects</Link></button>
              <button style={{backgroundColor:'none',border:'2px white solid',borderRadius:10,padding:10,margin:5,display:'flex',flexDirection:'row',alignItems:'center'}} >
                <Link style={{color:'white', fontSize:15,textAlign:'center',display:'flex',flexDirection:'row',alignItems:'center'}} to="/#projects">
                  <FontAwesomeIcon icon={faFileAlt} style={{color:"white",margin:3,fontSize:20}} />My Resume</Link></button>
              </div>
          </div>
        </Layout>
        <Layout id ="about" style={{borderTop:'1px black solid',padding:50}}  >
          <SEO title="About" />
          <div style={{flexDirection:'column',display:'flex', alignItems:'center',justifyContent:'center', width:'100%' }}>
            <div style={{flexDirection:'row',display:'flex', width:'100%',alignItems:'center',justifyContent:'center' }}>
              <div style = {{padding:40}}><Image src={"desktopImage"}/></div>
              <div style ={{padding:40,borderLeftWidth:1,borderLeftStyle:'dashed',borderLeftColor:'orange'}}>
                <h1 style={{color:'white'}}>About me</h1>
                <p style={{color:'white'}}>Software Developer at You.i TV! Graduated from Carleton University with a Bachelors in Computer Science. In my free time, you'll usually find me playing games, or watching Netflix.</p>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <FontAwesomeIcon icon={["fab", "github"]} style={{color:"white",margin:3,fontSize:75}} />
                  <FontAwesomeIcon icon={["fab", "linkedin"]} style={{color:"white",margin:3,fontSize:75}} />
                  <FontAwesomeIcon icon={faEnvelopeSquare} style={{color:"white",margin:3,fontSize:75}} />
                  </div>
              </div>
            </div>
          </div>
          <div style={{flexDirection:'column',padding:100,display:'flex', alignItems:'center' }}>
            <h1 style={{marginBottom:25,color:'white'}}>Languages</h1>
            <div style={{flexDirection:'row',display:'flex', alignItems:'center' }}>
              <SkillTile title="React"/>
              <SkillTile title="C++"/>
              <SkillTile title="JS"/>
              <SkillTile title="Python"/>
              <SkillTile title="Java"/>
            </div>
          </div>   
        </Layout>
        <Layout id ="projects"  style={{backgroundColor:'white'}} contentStyle={{minWidth:this.state.layoutWidth}} >
        <SEO title="Projects" />
        <div style={{flexDirection:'column',display:'flex', alignItems:'center', width:'100%',marginTop:100,marginBottom:100,padding:20,minHeight:'100%' }}>
        <h1>Projects</h1>
        <div style={{flexDirection:'row',alignContent:'center',flexWrap:'Wrap',display:'flex', alignItems:'center', width:'100%',minHeight:'100%'}}>
          <ProjectTile mW={this.state.projectTileWidth} project={'browserbuddies'}/><ProjectTile mW={this.state.projectTileWidth} project={'batterymanager'}/><ProjectTile mW={this.state.projectTileWidth} project={'passwordgenerator'}/>
          </div>
          </div>
        </Layout>
        <Layout style={{minHeight:200}}>
            <p style={{color:'white'}}>Thanks for visiting my online portfolio! Built with <a style={{color:'white'}} href="https://www.gatsbyjs.org">GatsbyJS</a></p>
        </Layout>
      </div>
    )
  }
  }

