import React from 'react';

export default class Splash extends React.Component {
    render(){
        return(
            <>
                <div className="splash-container">
                    <div className="splash">
                        <h1 className="splash-head"><img alt="Splash" src="./splash.png" height="120" width="120"/></h1>
                        <p className="splash-subhead">
                            Project Kisaan - As the name suggests, it's all about Kissan.
                        </p>
                        <p>
                            <a href="http://purecss.io" className="pure-button pure-button-primary">Get Started</a>
                        </p>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="content">
                        <h2 className="content-head is-center">App Features</h2>
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
                                <p>
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
                                <form className="pure-form pure-form-stacked">
                                    <fieldset>
                                        <label htmlFor="email">Your Email</label>
                                        <input id="email" type="email" placeholder="mark@example.com" required/>
                                        <label htmlFor="password">Your Password</label>
                                        <input id="password" type="password" placeholder="*****" required/>
                                        <button type="submit" className="pure-button">Login</button>
                                    </fieldset>
                                    <p>Trouble logging in? <a href="#">Help</a></p>
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
                        You're not logged in.
                    </div>
                </div>
            </>
        )   
    }
}