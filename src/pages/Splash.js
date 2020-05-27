import React from 'react';
import {
    Button
} from 'carbon-components-react';
import { Information20 } from '@carbon/icons-react';
class Splash extends React.Component {
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
                        <div className="bx--form__helper-text" style={{maxWidth: '100%'}}>
                            You need to sign in with the credentials provided to you with AgriBot purchase.
                        </div>
                    </>:
                    <>
                        <div>
                            <Button href="#faq" renderIcon={Information20}>More Information</Button>
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

export default Splash;
