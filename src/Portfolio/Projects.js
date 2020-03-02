
import React, {Component} from 'react';
import './styles/Projects.css';
import '../App.css';

import ProjectTile from './ProjectTile.js'
export default class Projects extends Component{
	constructor(props){
		super(props)
	}
	render = () =>{
		return(
			<div className="section projects " id="projects">
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