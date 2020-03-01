
import React, {Component} from 'react';
import './styles/Landing.css';
import './styles/App.css';
import { Link, animateScroll as scroll } from "react-scroll";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import IconContainer from './IconContainer.js'

export default class Landing extends Component{
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