import {Component} from 'react';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            signedInEmail: '',
            signedInPassword: '',
            error: ''

        }
    }
    onEmailChange = (event) => {
        this.setState({signedInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signedInPassword: event.target.value});
    }

    onSubmitSignIn = () => {
        fetch('https://face-map-api.onrender.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signedInEmail,
                password: this.state.signedInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id) { // does the user exits?
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
            else {
                // Set the error message in the state
                this.setState({ error: 'Invalid email or password' });
              }
        }).catch((error) => {
            // Handle network errors or other unexpected issues
            console.error('Error:', error);
          });
        
    }

    render() {
        const {onRouteChange} = this.props;
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
                    </div>
                    </fieldset>
                    {this.state.error && (
                        <p className="f6 red">{this.state.error}</p>
                        )}

                    <div className="">
                    <input onClick = {this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center" type="submit" value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick={() => onRouteChange('Register')} className="f6 link dim black db pointer">Register</p>
                  
                    </div>
                </div>
            </main>
            </article>
        )
        
    }


} 

export default SignIn;