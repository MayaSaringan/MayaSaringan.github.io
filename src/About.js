
import React, {Component} from 'react';
import './styles/About.css';
import './styles/App.css';
export default class About extends Component{
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