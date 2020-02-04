import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import Particles from 'react-particles-js';
import * as particlesConfig from './particlesjs-config.json'
import "typeface-poppins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, animateScroll as scroll } from "react-scroll";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown,faEnvelope, faFileAlt, faLightbulb} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
function MyNavbar(){
	return (
		<Navbar fixed="top"  variant="dark"  collapseOnSelect expand="lg"  className="Navbar sticky">
			<Navbar.Brand href="#home">
			<img
				src="/favicon.png"
				width="25"
				height="25"
				className="d-inline-block align-center"
				alt="React Bootstrap logo"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="mr-auto">
				<Nav.Link href="#home">WELCOME</Nav.Link>
			</Nav>
			<Nav>
				<Nav.Link href="#about">ABOUT</Nav.Link>
				<Nav.Link href="#projects">PROJECTS</Nav.Link>
			</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
class IconContainer extends Component{
	constructor(props){
		super(props)
	}
	render = () =>{
		return(
			<a target="_blank"  href={this.props.link}>
			<div className="icon" >
				<FontAwesomeIcon icon={this.props.icon} style={{color:"black",fontSize:35}} />
			</div>
			</a>
		)
	}
}
class Landing extends Component{
	constructor(props){
		super(props);
	}
	renderDesc = () =>{
		if (this.props.mobile){
			return (<div style={{zIndex:2,}} className="landing-description">
						
						<div className={`landing-description-text landing-description-text-expansion`}>
							<div className="row-flex row-left-center">
								<img src="/me.png" resizeMode="contain" className={`landing-image-small`} alt="logo" />
								<h1 style={{ fontSize:48,padding:20, textAlign:'left'}}>Maya Saringan</h1>
							</div>
							<p style={{display:"flex", flexDirection: "row",justifyContent:"flex-start",alignItems:'center',fontSize:15, padding:5, borderColor:'grey', borderStyle:'dashed', borderWidth:0, borderTopWidth:1}}>
							
							<img src="/youi-logo.png" className="company-logo" alt="logo" />
								Software Developer 
							</p>
							<div className="row-flex " style={{width:"100%", justifyContent:'space-between'}}>
							<Link  to="about"smooth={true} duration= {500}><div  className="button" >About me</div></Link>
								<div className="row-flex super-center" style={{flexWrap:'wrap'}}>
									<IconContainer icon={faLinkedinIn} link="https://www.linkedin.com/in/msaringan/"/>
									<IconContainer icon={faGithub} link="https://github.com/MayaSaringan" />
									<IconContainer icon={faEnvelope} link="mailto:contact@mayasaringan.me"/>
								</div>
							</div>
							
							
						</div>
							
					</div>)
			
		}else{
			return (<div style={{zIndex:2,}} className="landing-description">
						<img src="/me.png" resizeMode="contain" className="landing-image" alt="logo" />
						<div className="landing-description-text">
							<h1 style={{alignSelf:"flex-start", fontSize:48}}>Maya Saringan</h1>
						
							<p style={{display:"flex", flexDirection: "row",justifyContent:"flex-start",alignItems:'center',fontSize:15, padding:5, borderColor:'grey', borderStyle:'dashed', borderWidth:0, borderTopWidth:1}}>
								<img src="/youi-logo.png" className="company-logo" alt="logo" />
								Software Developer 
							</p>
							<div className="row-flex " style={{width:"100%", justifyContent:'space-between'}}>
							<Link  to="about"smooth={true} duration= {500}><div  className="button" >About me</div></Link>
								<div className="row-flex super-center">
									<IconContainer icon={faLinkedinIn} link="https://www.linkedin.com/in/msaringan/"/>
									<IconContainer icon={faGithub} link="https://github.com/MayaSaringan" />
									<IconContainer icon={faEnvelope} link="mailto:contact@mayasaringan.me"/>
								</div>
							</div>
							
							
						</div>
							
					</div>)
			
		}
	}
	render = () =>{
		
		return(
			<header className="App-header" id="home">
				
					{this.renderDesc()}
					
				</header>
		);
	}
	
}
class About extends Component{
	constructor(props){
		super(props)
	}
	render = () =>{
		return(
			<div className="section about " id="about">
				
				<div className="container">
					<div className="row">
						<div className="col" style={{minWidth:400, padding:20}}>
							<img src="/kidme.jpeg"  style={{width:"100%", maxWidth:450}} />
						</div>
						<div className="col about-description" >
							<h2>About</h2>
							<p>
							Software Developer at You.i TV! Graduated from Carleton University with a Bachelors in Computer Science. In my free time, you'll usually find me playing games, or watching Netflix.
							</p>
							<a target="_blank" href="https://mayasaringan.me/resume/resume.pdf"><div  className="button" >Resume</div></a>

						</div>
					</div>
					
				</div>	
			</div>
			
		)
	}
}
class ProjectTile extends Component{
 constructor(props){ super(props)}
 render = () =>{
	 return (
		<a href={this.props.link}><img src={this.props.src} className="project-tile" /></a>
	 )
 }
}
class Projects extends Component{
	constructor(props){
		super(props)
	}
	render = () =>{
		return(
			<div className="section projects" id="projects">
				
				<div className="projects-container justify-content-center" >
					<h2>PROJECTS</h2>
					<div className="project-tiles">
						<ProjectTile  src="/browserbuddies.png" link={"https://devpost.com/software/browser-buddies"}/>
						<ProjectTile  src="/batterymanager.png"/>
						<ProjectTile  src="/passwordgenerator.png"  />
						
					</div>
					
				</div>	
			</div>
		
		)
	}
}
class Footer extends Component{
	constructor(props){
		super(props)
	}
	render = () =>{
		return(
			<div className=" footer" id="footer">
				
				<div className="row-flex super-center">
					<IconContainer icon={faLinkedinIn} link="https://www.linkedin.com/in/msaringan/"/>
					<IconContainer icon={faGithub} link="https://github.com/MayaSaringan" />
					<IconContainer icon={faEnvelope} link="mailto:contact@mayasaringan.me"/>
				</div>
			</div>
		
		)
	}
}
class App extends Component{
	constructor(){
		super()
		this.state={
			mobile:false,
			topOffset:0
		}

		if (typeof window !== "undefined") {
			window.onscroll = () => this.setState({topOffset:window.pageYOffset})
			this.updateWindowDimensions();
		}
	}

	componentDidMount = () => {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount = () =>  {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () =>  {
		if (window.innerWidth<900 && !this.state.mobile) this.setState({mobile:true})
		else if ( window.innerWidth>=900  &&this.state.mobile) this.setState({mobile:false})
	}

	
	  
	render = () =>{	
		return (
			<div className="App">
				<Particles className="particles" height="100vh" width="100%" params={{...particlesConfig.default}} />
				<MyNavbar/>
				<div style={{position:'absolute',top:0, width:'100%', zIndex:10}}>
					<Landing mobile={this.state.mobile}/>
					<About/>
					<Projects/>
					<Footer/>
				</div>
			</div>
		  );
	}
  
}

export default App;
