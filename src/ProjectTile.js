import React, {Component} from 'react';
import './styles/ProjectTile.css'
export default class ProjectTile extends Component{
constructor(props){ super(props)}
render = () =>{
    return (
        <a href={this.props.link}><img src={this.props.src} className="project-tile" /></a>
    )
}
}