
import React, {Component} from 'react';
import './styles/Footer.css';
import './styles/App.css';
import IconContainer from './IconContainer.js'

import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
export default class Footer extends Component{
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