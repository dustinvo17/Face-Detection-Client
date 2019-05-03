import React from 'react'
import axios from 'axios'
class Signin extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    onSignInFormSubmit = e => {
        e.preventDefault()
        axios
            .post('http://localhost:3000/signin', {
            email: this.state.email,
            password: this.state.password
        }) 
            .then(response => {
               
                this.props.setUserName(response.data.name,response.data.entries)
                this
                    .props
                    .onRouteChange('home')
            })
            .catch((error) => {
                console.log(error);
            });
    }
    onEmailChange(email) {
        this.setState({email})
    }
    onPassWordChange(password) {
        this.setState({password})
    }
    render() {
        return (
            <article
                className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="false"
                                    onChange
                                    ={(e) => this.onEmailChange(e.target.value)}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="off"
                                    onChange
                                    ={(e) => this.onPassWordChange(e.target.value)}/>
                            </div>

                        </fieldset>
                        <div className="">
                            <input
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Sign in"
                                onClick=
                                {(e) => this.onSignInFormSubmit(e)}/>
                        </div>
                        <div className="lh-copy mt3">
                            <a className="f6 link dim black db" style={{cursor:'pointer'}} onClick= {() => () => this.props.onRouteChange('register')}>Register</a>

                        </div>
                    </form>
                </main>
            </article>

        )
    }

}
export default Signin