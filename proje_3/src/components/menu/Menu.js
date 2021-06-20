import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import MenuButton from './MenuButton';

export default class Menu extends React.Component {

    changeHash = path => {
        window.location.hash = path || "";
    }

    render(props) {
        const menuData = [] = this.props.menuData
        return (
            <div className="Menu">
                {
                    menuData.map(item => (
                        <MenuButton buttonData = {item} onClick={this.changeHash} />
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
  