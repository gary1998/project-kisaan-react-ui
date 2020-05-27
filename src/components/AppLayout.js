import React from 'react';
import {
  Link,
  HashRouter
} from "react-router-dom";
import { connect } from 'react-redux';
import { logoutUser, setBusy, loginUser } from '../Actions';
import Forum20 from '@carbon/icons-react/lib/forum/20';
import Home20 from '@carbon/icons-react/lib/home/20';
import Dashboard20 from "@carbon/icons-react/lib/dashboard/20";
import Data_220 from "@carbon/icons-react/lib/data--2/20";
import Help20 from "@carbon/icons-react/lib/help/20";
import User20 from "@carbon/icons-react/lib/user/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import Settings20 from "@carbon/icons-react/lib/settings/20";
import {
  Header,
  HeaderMenuButton,  
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  SideNavLink,
  Content,
  SideNavProps
} from "carbon-components-react/lib/components/UIShell";
import { Modal, TextInput } from 'carbon-components-react';
 
class AppLayout extends React.Component {

  state = {
    sideNav: false,
    profileModalShow: false,
    loginModalShow: false,
    email: "",
    password: ""
  }

  _handleLogout = async() => {
    this.setState({profileModalShow: false});
    await this.props.logout();
  }
  _handleLoginSubmit = async() => {
    this.setState({loginModalShow: false});
    await this.props.login(this.state.email, this.state.password);
  }
  _handleEmailChange = (evt) => {
      this.setState({email: evt.target.value});
  }
  _handlePasswordChange = (evt) => {
      this.setState({password: evt.target.value});
  }

  render(){
    return(
      <div className="container" >
        <HashRouter>
          <Header aria-label="IBM Platform Name">
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={() => this.setState({sideNav: !this.state.sideNav})}
              isActive={this.state.sideNav}
            />
              <HeaderName href="#home" prefix="">
                Project Kisaan
              </HeaderName>
            <HeaderGlobalBar>
              {
                <>
                  <HeaderGlobalAction onClick={() => { this.props.user?this.setState({profileModalShow: true}): this.setState({loginModalShow: true}) }} aria-label="User">
                    <User20 />
                  </HeaderGlobalAction>
                  {this.props.user?
                  <Modal 
                    open={this.state.profileModalShow}
                    primaryButtonText="Close"
                    secondaryButtonText="Logout"
                    onRequestClose={() => this.setState({profileModalShow: false})}
                    onRequestSubmit={() => this.setState({profileModalShow: false})}
                    onSecondarySubmit={this._handleLogout}
                  >
                    <div style={{textAlign: 'center'}}>
                      <img alt="avatar" src={this.props.user.photo} style={{width: '80px', height: '80px'}}></img>
                    </div>
                    <TextInput
                      id="user-name"
                      disabled={true}
                      labelText="Your Name:"
                      light={false}
                      value={this.props.user.name}
                      type="text"
                    />
                    <br/>
                    <TextInput
                      id="user-email"
                      disabled={true}
                      labelText="Your Email:"
                      light={false}
                      value={this.props.user.email}
                      type="text"
                    />
                  </Modal>:<></>}
                  <Modal 
                      open={this.state.loginModalShow}
                      primaryButtonText="Login"
                      secondaryButtonText="Close"
                      onRequestClose={() => this.setState({loginModalShow: false})}
                      onRequestSubmit={this._handleLoginSubmit}
                      onSecondarySubmit={() => this.setState({loginModalShow: false})}
                      disabled={true}
                  >
                      <TextInput
                          id="email-input"
                          disabled={false}
                          labelText="Your Email:"
                          light={false}
                          placeholder="mark@gmail.com"
                          value={this.state.email}
                          type="text"
                          onChange={this._handleEmailChange}
                      />
                      <br/>
                      <TextInput
                          id="password-input"
                          disabled={false}
                          labelText="Your Email:"
                          light={false}
                          placeholder="**********"
                          value={this.state.password}
                          type="password"
                          onChange={this._handlePasswordChange}
                      />
                  </Modal>
                </>
              }
              <Link to="/notifications">
                <HeaderGlobalAction aria-label="Global Notifications">
                  <Notification20 />
                </HeaderGlobalAction>
              </Link>
              <Link to="/settings">
                <HeaderGlobalAction aria-label="App Settings">
                  <Settings20 />
                </HeaderGlobalAction>
              </Link>
            </HeaderGlobalBar>
            <SideNav {...SideNavProps} aria-label="Side navigation" isRail={true} defaultExpanded={false} expanded={this.state.sideNav}>
              <SideNavItems>
                  <Link to="/home">
                    <SideNavLink renderIcon={Home20}>
                      Home
                    </SideNavLink>
                  </Link>
                  {
                    this.props.user?
                    <>
                      <SideNavLink href="#chat" renderIcon={Forum20}>
                        Chat
                      </SideNavLink>
                      <SideNavLink href="#configure" renderIcon={Data_220}>
                        Configure
                      </SideNavLink>
                      <SideNavLink href="#dashboard" renderIcon={Dashboard20}>
                        Dashboard
                      </SideNavLink>
                    </>:
                    <></>
                  }
                  <SideNavLink href="#faq" renderIcon={Help20}>
                    Assistance/FAQs
                  </SideNavLink>
              </SideNavItems>
            </SideNav>
          </Header>
        </HashRouter>
        <Content>
          {this.props.children}
        </Content>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    busy: state.busy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      logout: async() => {
          dispatch(await setBusy());
          dispatch(await logoutUser());
      },
      login: async(email, password) => {
        dispatch(await setBusy());
        dispatch(await loginUser(email, password));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
