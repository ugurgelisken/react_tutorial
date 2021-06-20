import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import MenuButton from './MenuButton';
import logo from "./../../logo.svg";

export default class Menu extends React.Component {

    changeHash = path => {
        window.location.hash = path || "";
    }

    componentWillMount(){
        console.log("Menu render edilecek")
    }

    componentDidMount(){
        console.log("Menu render edildi")
    }
    
    render(props) {
        const menuData = [] = this.props.menuData
        return (
            <div className="Menu">
                <img className="logo" src={logo} alt="React logo" />
                {
                    menuData.map(item => (
                        <MenuButton key={item.path} buttonData = {item} onClick={this.changeHash} />
                    ))
                }
            </div>
        )
    }
}

Menu.defaultProps = {
    menuData : [
        {
            "buttonName": "Button 1",
            "path": "#1"
          },
          {
            "buttonName": "Button 2",
            "path": "#2"
          }
    ]
}
  
Menu.propTypes = {
    menuData: PropTypes.array
}
  