import React from 'react';
import { loginUser, setBusy } from '../Actions';
import { connect } from 'react-redux';
import {
    Button, Modal, TextInput, Loading
} from 'carbon-components-react';
import { Login20 } from '@carbon/icons-react';
class Splash extends React.Component {
    state = {
        email: "",
        password: "",
        loginModalShow: false
    }
    _handleLoginSubmit = async() => {
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
            <div style={{textAlign: 'center'}}>
                <div>
                    <img alt="splash" src="https://image.winudf.com/v2/image/Y29tLmphaWtpc2Fhbl9pY29uXzE1MDk0NjYxNTVfMDUy/icon.png?w=170&fakeurl=1"></img>
                </div>
                <br/>
                <p>
                    The project focuses on building a centralized automatic device which will be a great asset for farmers to make them able to produce as much as they can. It can be done by giving them accurate figures and ideas about what, how, when and where to grow.
                </p>
                <br/>
                {
                    !this.props.user?
                    <>
                        <div>
                            <Button renderIcon={Login20} onClick={() => this.setState({loginModalShow: true})}>Get Started</Button>
                        </div>
                        <br/>
                        <div className="bx--form__helper-text" style={{maxWidth: '100%'}}>
                            You need to sign in with the credentials provided to you with AgriBot purchase.
                        </div>
                        <Modal 
                            open={this.state.loginModalShow}
                            primaryButtonText="Login"
                            secondaryButtonText="Close"
                            onRequestClose={() => this.setState({loginModalShow: false})}
                            onRequestSubmit={this._handleLoginSubmit}
                            onSecondarySubmit={() => this.setState({loginModalShow: false})}
                            disabled={true}
                        >
                            {this.props.busy?<Loading active={this.props.busy} />:<></>}
                            <TextInput
                                id="email"
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
                                id="password"
                                disabled={false}
                                labelText="Your Email:"
                                light={false}
                                placeholder="**********"
                                value={this.state.password}
                                type="password"
                                onChange={this._handlePasswordChange}
                            />
                        </Modal>
                    </>:
                    <>
                        <div>
                            <Button href="#faq">More Information</Button>
                        </div>
                        <br/>
                        <div className="bx--form__helper-text" style={{maxWidth: '100%'}}>
                            You're already signed in.
                        </div>
                    </>
                }
            </div>
        )   
    }
}

function mapStateToProps(state){
    return {
      busy: state.busy,
      user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: async(email, password) => {
            dispatch(await setBusy());
            dispatch(await loginUser(email, password));
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Splash);