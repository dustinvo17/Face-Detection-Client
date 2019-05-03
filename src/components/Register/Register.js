import React from 'react'
import axios from 'axios'
class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    onRegisterFormSubmit = (e) => {
        e.preventDefault()
         axios
            .post('http://localhost:3000/register', {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
            .then((response)=> {
                    console.log(response)
                    this.props.onRouteChange('signin')
         
            })
            .catch((error) =>{
                console.log(error);
            });

    }
    onEmailChange(email) {
        this.setState({email})
    }
    onNameChange(name) {
        this.setState({name})
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
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6">Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    autoComplete="new-password"
                                    onChange
                                    ={(e) => this.onNameChange(e.target.value)}/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6">Email</label>
                                <input
                                    onChange
                                    ={(e) => this.onEmailChange(e.target.value)}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="new-password"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange
                                    ={(e) => this.onPassWordChange(e.target.value)}/>
                            </div>

                        </fieldset>
                        <div className="">
                            <input
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Register"
                                onClick={(e) => this.onRegisterFormSubmit(e)}/>
                        </div>

                    </form>
                </main>
            </article>

        )
    }

}
export default Register