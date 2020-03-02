import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Portfolio/MyNavbar.js'
import Landing from './Portfolio/Landing.js'
import About from './Portfolio/About.js'
import Projects from './Portfolio/Projects.js'
import Work from './Portfolio/Work.js'
import Footer from './Portfolio/Footer.js'
import Particles from 'react-particles-js';
import * as particlesConfig from './particlesjs-config.json'
import "typeface-poppins";
export default class Blogs extends Component{
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
				<h2>WIP</h2>
			</div>
		  );
	}
  
}


