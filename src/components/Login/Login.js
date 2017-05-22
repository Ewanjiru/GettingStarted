import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  responseGoogle(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({ accessToken: id_token });
    //anything else you want to do(save to localStorage)... 
  }

  render() {
    return (
      <div className="googleLogin">
        <GoogleLogin socialId="868328857754-msrf0blht1sr8nrsorh2da2b1aiv7umq.apps.googleusercontent.com"
          class="google-login"
          scope="profile"
          responseHandler={this.responseGoogle}
          buttonText="Login With Google" />
      </div>
    );
  }

}
