import React from 'react';
import {
  Link,
  HashRouter
} from "react-router-dom";
import { connect } from 'react-redux';
import { logoutUser, setBusy } from '../Actions';
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
  Content
} from "carbon-components-react/lib/components/UIShell";
import { Modal, TextInput, Loading } from 'carbon-components-react';
 
class AppLayout extends React.Component {

  state = {
    sideNav: false,
    profileModalShow: false
  }

  _handleLogout = async() => {
    await this.props.logout();
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
                this.props.user?
                <>
                  <HeaderGlobalAction onClick={() => this.setState({profileModalShow: true})} aria-label="User">
                    <User20 />
                  </HeaderGlobalAction>
                  <Modal 
                    open={this.state.profileModalShow}
                    primaryButtonText="Close"
                    secondaryButtonText="Logout"
                    onRequestClose={() => this.setState({profileModalShow: false})}
                    onRequestSubmit={() => this.setState({profileModalShow: false})}
                    onSecondarySubmit={this._handleLogout}
                  >
                    {
                      this.props.busy?
                      <Loading active={this.props.busy} />:
                      <>
                        <div style={{textAlign: 'center'}}>
                          <img alt="avatar" src={this.props.user.photo} style={{width: '80px', height: '80px'}}></img>
                        </div>
                        <TextInput
                          id="name"
                          disabled={true}
                          labelText="Your Name:"
                          light={false}
                          value={this.props.user.name}
                          type="text"
                        />
                        <br/>
                        <TextInput
                          id="email"
                          disabled={true}
                          labelText="Your Email:"
                          light={false}
                          value={this.props.user.email}
                          type="text"
                        />
                      </>
                    }
                  </Modal>
                </>:
                <></>
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
            <SideNav aria-label="Side navigation" isRail={true} defaultExpanded={false} expanded={this.state.sideNav}>
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
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
