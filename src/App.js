import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceDetect from './components/FaceDetect/FaceDetect.js'
import Rank from './components/Rank/Rank'
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai'
import axios from 'axios'
const particlesOptions = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};
const app = new Clarifai.App({apiKey: '283d55b4e41b4a85accac4fbe342ce38'});

class App extends React.Component {
    state = {
        input: '',
        imageUrl: '',
        box: {},
        isSignedin: false,
        route: 'signin',
        userName:'',
        id:'',
        entries:null
    }
    setUserName = (name,entries)=>{
        this.setState({userName:name})
        this.setState({entries:entries})
    }
    onInputChange = (e) => {
        this.setState({input: e.target.value})
    }
    setUpBoundingBox = (data) => {
        let boundingBox = data.outputs[0].data.regions[0].region_info.bounding_box
        const image = document.querySelector('#imgface')
        const height = Number(image.height)
        const width = Number(image.width)
        return {
            bottom: height - (boundingBox.bottom_row * height),
            left: boundingBox.left_col * width,
            right: width - (boundingBox.right_col * width),
            top: boundingBox.top_row * height
        }
    }
    setImageCoor = (box) => {
        this.setState({box})

    }
    onButtonSubmit = () => {
        
        this.setState({imageUrl: this.state.input})
        axios.post('http://localhost:3000/imageurl',{
            input:this.state.input
        })  
            .then(response => {

                this.setImageCoor(this.setUpBoundingBox(response.data))
                axios.put('http://localhost:3000/image',{
                name:this.state.userName
                 })
                 .then(response =>{
                    
                     this.setState({entries:response.data})
                 })
            })
    }
    onRouteChange = (route) =>{
      if (route === 'home'){
        this.setState({isSignedin:true})
      }
      else if (route === 'signout'){
        this.setState({isSignedin:false})
        this.setState({imageUrl:''})
      }
      this.setState({route:route})
    }
    render() {
        return (
            <div className="App">
                <Particles className="particles" params={particlesOptions}/>
                <Navigation onRouteChange={this.onRouteChange} isSignedin = {this.state.isSignedin}/> {this.state.route === 'home'
                    ? <div><Logo/>
                            <Rank  userName={this.state.userName} id={this.state.id} entries={this.state.entries}/>
                            <ImageLinkForm
                                
                                onInputChange={this.onInputChange}
                                onButtonSubmit={this.onButtonSubmit}/>
                            <FaceDetect imageUrl={this.state.imageUrl} box={this.state.box}/></div>
        : (this.state.route === 'signin' ?<Signin onRouteChange={this.onRouteChange} setUserName={this.setUserName}/> : <Register  onRouteChange={this.onRouteChange}/>)}

            </div>
        )

    }
}

export default App;
