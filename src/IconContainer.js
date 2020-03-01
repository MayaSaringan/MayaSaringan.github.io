
import React, {Component} from 'react';
import './styles/App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default class IconContainer extends Component{
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