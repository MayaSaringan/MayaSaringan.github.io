
import React, {Component} from 'react';
import './styles/App.css';

export default class Page extends Component{
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
        }
}
