import React from 'react';
import store from '../Store';
import { loginUser } from '../Actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Splash extends React.Component {
    state = {
        email: "",
        password: "",
        busy: false,
    }
    componentWillReceiveProps(){
        this.setState({busy: false, email: "", password: ""});
    }
    _handleLoginSubmit = async(evt) => {
        evt.preventDefault();
        this.setState({busy: true});
        store.dispatch(await loginUser(this.state.email, this.state.password));
    }
    _handleEmailChange = (evt) => {
        this.setState({email: evt.target.value});
    }
    _handlePasswordChange = (evt) => {
        this.setState({password: evt.target.value});
    }
    render(){
        return(
            <>
                <div className="splash-container">
                    <div className="splash">
                        <h1 className="splash-head"><img alt="Splash" src="img/logo-128.png"/></h1>
                        <p className="splash-subhead">
                            Project Kisaan - As the name suggests, it's all about Kissan.
                        </p>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="content">
                        <h2 className="content-head is-center">Features</h2>
                        <div className="pure-g">
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-cogs"></i>
                                    IoT Based
                                </h3>
                                <p>
                                    AgriBot is a IoT based robot which keeps an eye over your fields and crops and keeps you updated.
                                </p>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-users"></i>
                                    User Friendly
                                </h3>
                                <p>(
                                    The AgriBot and Project Kisaan web application requires almost negligible input which makes it very user friendly.
                                </p>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-eye"></i>
                                    Crop Saviour
                                </h3>
                                <p>
                                    AgriBot comes with a rotatable high-res camera which enables it to detect insects and diseases very accurately.
                                </p>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-info"></i>
                                    Lifetime Assistance
                                </h3>
                                <p>
                                    Project Kisaan team would be very happy to help you anytime anywhere until it's alive.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h2 className="content-head is-center">Login to continue...</h2>
                        <div className="pure-g">
                            <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                                <form className="pure-form pure-form-stacked" onSubmit={this._handleLoginSubmit}>
                                    <fieldset>
                                        <label htmlFor="email">Your Email</label>
                                        <input id="email" type="email" value={this.state.email} onChange={this._handleEmailChange} placeholder="mark@example.com" required/>
                                        <label htmlFor="password">Your Password</label>
                                        <input id="password" type="password" value={this.state.password} onChange={this._handlePasswordChange} placeholder="*****" required/>
                                        <button type="submit" className="pure-button">
                                            {this.state.busy?<i className="fa fa-spin fa-spinner" aria-hidden="true"></i>:""}
                                            {this.state.busy?" Wait":"Login"}
                                        </button>
                                    </fieldset>
                                    <p>Trouble logging in? <Link to="/recovery">Help</Link></p>
                                </form>
                            </div>
                            <div className="l-box-lrg pure-u-1 pure-u-md-3-5">
                                <h4>Contact Us</h4>
                                <p>
                                    Our team is there to help you 24x7. You can clear your questions or doubts in our <a href="#">Assistance/FAQs</a> section.
                                    More more information, you can mail us at <a href="mailto:help.projectkisaan@mail.com">help.projectkisaan@mail.com</a>.
                                </p>
                                <h4>Interested in AgriBot?</h4>
                                <p>
                                    You can express your interest for purchasing AgriBot by writing to us at <a href="mailto:purchase.projectkisaan@mail.com">purchase.projectkisaan@mail.com</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer l-box is-center">
                        {!this.props.user?<>You're not logged in.</>:<>Welcome {this.props.user.name} ({this.props.user.email}). Click here to <a href="#">logout</a></>}
                    </div>
                </div>
            </>
        )   
    }
}

function mapStateToProps(state){
    return {
      user: state.user
    }
  }
  
  export default connect(mapStateToProps)(Splash);