import React from 'react';
import {
  Link,
  HashRouter
} from "react-router-dom";

export default class AppBar extends React.Component {
  render(){
    return(
      <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed pure-menu-scrollable">
            <a className="pure-menu-heading" href="#"><img alt="Logo" src="img/logo-16.png"/>&nbsp;<strong>Project Kisaan</strong> - Team EDGE</a>
            <ul className="pure-menu-list">
              <HashRouter>
                <li className="pure-menu-item pure-menu-selected"><Link to="/" className="pure-menu-link">Home</Link></li>
                {this.props.store.user?<><li className="pure-menu-item"><Link to="/dashboard" className="pure-menu-link">Dashboard</Link></li><li className="pure-menu-item"><Link to="/chat" className="pure-menu-link">Chat</Link></li></>:""}
                <li className="pure-menu-item"><Link to="/faq" className="pure-menu-link">Assistance/FAQs</Link></li>
              </HashRouter>
            </ul>
        </div>
      </div>
    )
  }
}
