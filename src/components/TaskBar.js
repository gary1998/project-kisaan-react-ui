import React from 'react';

export default class AppBar extends React.Component {
  render(){
    return(
      <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed pure-menu-scrollable">
            <a className="pure-menu-heading" href="#"><img alt="Logo" src="img/logo-16.png"/>&nbsp;<strong>Project Kisaan</strong> - Team EDGE</a>
            <ul className="pure-menu-list">
                <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li>
                {this.props.user?<><li className="pure-menu-item"><a href="#" className="pure-menu-link">Dashboard</a></li><li className="pure-menu-item"><a href="#" className="pure-menu-link">Chat</a></li></>:""}
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Assistance/FAQs</a></li>
            </ul>
        </div>
      </div>
    )
  }
}
